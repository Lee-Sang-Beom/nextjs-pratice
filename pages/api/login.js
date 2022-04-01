// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// 로그인을 함

export default function Login(req, res) {
  // 로그인 작업
  // 버튼을 누르면 post로 id와 비번이 넘어옴.
  // 이때 req.method를 이용한다. method가 post면 id와 비번이 넘어오니 아래와같음
  
  if (req.method === 'POST'){
    // 만약 post면. [login.js에서 post 날려줘야함]

     res.setHeader("Set-Cookie",`a_name=${req.body.params.id};Max-Age=3600;HttpOnly,Secure`);
     /*setHeader로 헤더를 만듬
     1. setCookie를 해줄건데
     2. a_name은 쿠키명, Mike는 값
     3. Max-Age는 약 1시간
     */ 


     console.log(req.body.params.id);
     res.statusCode=200; 
     res.json( { message:'ok'} );
  }

  
}


