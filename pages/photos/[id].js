import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";


export default function index({ photo }) {
    // const router = useRouter();
    const { title, url } = photo;

    return (
        <div>
            <h2>{title}</h2>
            <Image
                src={url}
                width={500}
                height={500}/>

            <Link href = "/photos"> Go Back  </Link>
        </div>
    )
}

// 두 번 아래의 staticpath가 props로 context라는 걸 전송시켜 줌. 
// 이걸 받아서 res에 동적으로 id들의 데이터를 받아와 res를 만들고, 
// 이걸 return 하여 위 index함수가 props를 받음

export const getStaticProps = async(context) =>{
    const {id} = context.params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
    const photo = await res.json();

    return {
        props : {
            photo
        }
    }
}

export async function getStaticPaths(){

    const res = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_end=10')
    const photos = await res.json();
    const ids = photos.map(photo => photo.id);
    const paths = ids.map(id => {
        return {
            params : {id : id.toString()}
        }
    })
    
    return {
        paths,
        fallback: false,
    }
}