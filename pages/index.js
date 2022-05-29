import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Seo from '../Components/Seo';

export default function Home({ results }) {

  const router = useRouter();
  const onClick = (id, title) => {
    // 영화의 id를 받아 navigate
    router.push(`/movies/${title}/${id}`);

      /* 
      push의 1번째 인자 : 이동 시, 보낸 query 내용이 뒤에 다 붙어서 URL에 표시됨
       - 클릭 시 이동할 url
       - 같이 보낼 데이터들
      
      push의 2번째 인자
       - url을 마스킹하여, 1번째 인자의 url에 보였던 내용을 보이지 않게하고, 여기들어간 문자열만을 url에 보이게함
      */
  }
  return (
    <div className='container'>
      <Seo title="HOME" />

      {results?.map((movie) => (
        <div className="movie" key={movie.id} onClick = {() => onClick(movie.id, movie.original_title)}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            <Link href={`/movies/${movie.original_title}/${movie.id}`} >
              <a> {movie.original_title} </a>
            </Link>
          </h4>
        </div>
      ))}


      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 25px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie{
          cursor:pointer;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

export async function getServerSideProps() {
  // getServerSideProps는 서버쪽에서만 돌아가는 함수임. 여기 apikey쓰면 client에 안보임 
  const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();

  // object 하나를 리턴함. 무조건
  // 그 오브젝트는 props라 불리는 key를 가짐
  // 이 props 안에 우리의 results가 들어감
  return {
    props: {
      results
    }
  }
}