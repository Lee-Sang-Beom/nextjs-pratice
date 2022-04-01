// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// 로그인 여부를 판단함

export default (req, res) => {
  // 로그인을 안한 상태면 이름을 null로 줌. 로그인이 되지않은 상태로 판단
  // 아니라면, 쿠키로 판단.

  
  // login.js에서 a_name은 쿠키명, Mike는 값이었음. 즉, a_name의 값을 가져옴
  res.status(200).json({ name: req.cookies.a_name })
}
