import axios from "axios";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react"
import { Button, Divider, Header } from "semantic-ui-react";

export default function Admin(){

    const router = useRouter();
    const [isLogin, setIsLogin] = useState(false);
    const [id, setId] = useState("");

    function checkLogin(){
        axios.get('/api/isLogin').then(res => {
            if(res.status === 200 && res.data.name){
                //로그인.
                setId(res.data.name);
                setIsLogin(true);
            }
            else{
                // 로그인 아님. 로그인 페이지로 보내줌
                router.push("/login");
            }
        })
    }

    function logout(){
        
        axios.post("/api/logout",{params:{
            id : id,
        }}).then(res =>
            {
                if(res.status === 200){
                    router.push("/");
                }
            } 
        )
    }


    useEffect(()=>{
        checkLogin();
    },[])

    
    return(
        <div>
            <Header as = "h3" style = { {paddingTop : 40}} > Admin </Header>
            <Divider />
            
            {isLogin &&  
                <div style={{paddingTop : 5, paddingBottom : 20}}>
                    <Button onClick={logout}> Logout </Button>
                </div>}
        </div>
        
        
    )
}