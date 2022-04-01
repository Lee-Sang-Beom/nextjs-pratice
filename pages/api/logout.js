// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// 로그인을 함

export default function Logout(req, res) {
    // 로그아웃 작업
    // 버튼을 누르면 post로 id와 비번이 넘어옴.
    // 이때 req.method를 이용한다. method가 post면 id와 비번이 넘어오니 아래와같음

    if(req.method === 'POST'){
      res.setHeader("Set-Cookie",`a_name=${req.body.params.id};Max-Age=0;HttpOnly,Secure`);
      /*setHeader로 헤더를 만듬
         1. 로그아웃 시, Max-Age를 0으로 바꿔주면 즉시 쿠키가 소멸
      */

      console.log(req.body.params.id);
      res.statusCode=200; 
      res.json( { message:'ok'} );
    }
    
    
    
  }
  