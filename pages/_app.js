import '../styles/globals.css'
import "semantic-ui-css/semantic.min.css"
import Footer from "../src/component/Footer"
import Top from "../src/component/Top"

function MyApp({ Component, pageProps }) {
  return (
  <div style={{width:1000, margin:'auto'}}>
    <Top/>
    <Component {...pageProps} />
    <Footer />
  </div>) 
}

export default MyApp

/*
1. 레이아웃을 만들기 위해서는, 이 _app.js를 이용한다.
2. 페이지 전환시 레이아웃 유지할수있음.
3. 컴포넌트DidCatch를 이용해 커스텀 에러 핸들링 가능
4. 추가 데이터를 페이지로 주입시키는 것이 가능
5. 글로벌 CSS를 여기 선언
*/

// PROPS로 넘어온 Component는 현재 페이지 의미.Component