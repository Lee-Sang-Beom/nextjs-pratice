// 서버에러 >> 500번 에러일떄 나오는 페이지. >> 아래코드는 nextjs 공식홈페이지에 500page에 있는내용임.
// npm run build & npm run start
import { Icon } from "semantic-ui-react";

function Error({ statusCode }) {
    return (
        <div style={{padding : "200px 0", textAlign : "center", fontSize : "30px"}}>
            <Icon name="warning circle" color="red"/> {statusCode ? `An Error ${statusCode} occurred on Servers` : "An error occurred on Client"}
        </div>
    );
  }
  
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
  };
  
  export default Error;