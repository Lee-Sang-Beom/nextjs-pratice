import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home( {posts} ) {
  console.log(posts);
  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <ul>
      {posts.map(post => (
        <li style={{listStyle : "outside"}}>{post.title}</li>
      ))}
      </ul>

      
    </div>
  )
}


export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=10');
  const posts = await res.json();
  
  return {
    props : {
      posts
    }
  }
}

/* 서버사이드 렌더링 : 이 페이지에 들어올때마다 서버에 요청해 데이터를 받아옴
 서버에서 만든 HTML을 그때그떄 보여주는 방식이다. */