import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeadInfo from "../component/HeadInfo";
import styles from "../styles/photos.module.css";

export default function photos ( {photos} ) {
    return (
        <div>
            <HeadInfo title="My Photos"/>
            <h1>My photos</h1>
            <ul className={styles.photos}>
                {photos.map(photo=>(
                    <li key = {photo.id}>
                        <Link href = {`/photos/${photo.id}`}>
                            <a>
                                <Image
                                src={photo.thumbnailUrl}
                                width={100}
                                height={100}/>

                                <span> {photo.title} </span>
                            </a>

                        </Link>
                        
                    </li>
                    
                ))}

                
            </ul>
        </div>
    )

}


export const getStaticProps = async() =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_end=10")
    const photos = await res.json();

    return {
        props : {
            photos
        }
    }
}