// url에 변수를 넣는방법 : [id].js > 대괄호를 열고 변수 넣어줌.
// nextjs에 이것이 변수를 포함하는 다이나믹 url이라는 걸 알려주는 유일한 방법
// movie/1이든, movie/12321312이든 이것은 movie/[id]에 포함
// f12후, 콘솔에 router 찍어보면 query에 id가있는데, 이 id의 이름이 바로 여기 파일명과 같음

import { useRouter } from "next/router"
import Seo from "../../Components/Seo";

export default function Detail({params}){
    const router = useRouter();
    console.log(router);
    const [title, id] = params || [];
    return (
        <>
            <Seo title = {title}/>
            <h4>{title}</h4>
        </>
    );
}

export function getServerSideProps({params:{params}}){
    return {
        props : {
            params,
        }
    };
}