import axios, { Axios } from 'axios'
import Head from 'next/head';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Header, Loader } from 'semantic-ui-react';
import Item from "../../src/component/Item";

const Post = ({item}) => {


  return (
    <>
      {item && (<>
        <Head>
          <title>{item.name}</title>
          <meta name = "description" content = {item.description}></meta>
        </Head>
        <Item item = {item}/>
      </>)}
    </>
  )
}

export default Post;

export async function getServerSideProps(context) { // getServerSideProps로 서버에서 데이터를 가져온다
  // context에는 여러 정보를 가짐 (파람스, 요청, 쿼리 등)
  const id = context.params.id; // id는 /view/ [] >> [여기 숫자] 번호이다.
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data; // 받아온 응답값은 아래의

  return {
    props: {
      item:data // item에 넣어줌. 즉, 이 [id].js의 const Post에 item의 props를 가짐.
    }
  } // 즉, 서버에서 받아온 데이터를 item에 집어넣고, props에는 얻어온 data를 item이라는곳에 넣는데, 이걸 여기 Post 컴포넌트가 실행될때 item props로 받을수있음 
}