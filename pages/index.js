import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home( {posts} ) {

  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <ul>
      {posts.map(post => (
        <li style={{listStyle : "outside"}} key = {post.id}>{post.title}</li>
      ))}
      </ul>

      
    </div>
  )
}


export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=10');
    const posts = await res.json();
    
    return {
      props : {
        posts
      },

      revalidate : 20
      /* revalidate : 빌드 시, 정적으로 html파일을 생성하므로,
         만약 서버에서 값이 바뀌어도 정적으로 생성된 html만을 사용하므로, 바뀐 내용을 getStaticProps는 반영하지 못한다.
         
         이걸 20으로 주면, 첫 접속 후, 20초 후에는 새로이 데이터를 받아 파일을 새로이 생성할 수 있도록 하는 옵션
      */
    }
  }

// export async function getServerSideProps() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=10');
//   const posts = await res.json();
  
//   return {
//     props : {
//       posts
//     }
//   }
// }

/* 서버사이드 렌더링 : 이 페이지에 들어올때마다 서버에 요청해 데이터를 받아옴
 서버에서 만든 HTML을 그때그떄 보여주는 방식이다. */