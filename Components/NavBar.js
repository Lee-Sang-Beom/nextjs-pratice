import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar(){

    const router = useRouter(); // 내가 현재 어느페이지에 있는지 알고싶을 때 사용
    return (
        <nav>
            <img src = "/vercel.svg"/>
            <div>     
                <Link href = "/">
                    <a className={router.pathname === "/"? "active" : ""}>
                        HOME
                    </a>
                </Link>

                <Link href = "/about">
                    <a className={router.pathname === "/about"? "active" : ""}> 
                        ABOUT
                    </a>
                </Link>
            </div>
            <style jsx>{`
                    nav{
                        display : flex;
                        flex-direction : column;
                        align-items : center;
                        padding-top : 20px;
                        padding-bottom : 10px;
                        box-shadow : 0px 40px 70px 10px rgba(50,50,93,0.25);
                        gap : 20px;
                    }

                    img {
                        max-width : 100px;
                        margin-bottom : 5px;
                    }

                    nav a{
                        font-size : 18px;
                        font-weight : 600;
                    }
                    
                    .active{
                        color : tomato;
                    }

                    nav div {
                        display :flex;
                        gap : 10px;
                    }
                `}</style>
        </nav>
    )
    
}