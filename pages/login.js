import axios from "axios";
import { Router, useRouter } from "next/router";
import { useState } from "react";
import { Button, Form } from "semantic-ui-react";

export default function Login(){

    const router = useRouter();

    const [id,setId] = useState("");
    const [pw,setPw] = useState("");

    function login(){
        //axios의 post 함수로, post를 날림. api/login으로 날림

        console.log(id, pw);
        axios.post('/api/login',{params:{
            id : id,
            pw : pw,
        }}).then(res => {
            if(res.status === 200){
                // 로그인 성공
                router.push("/admin");
            }
        })
    }


    
    return(
        <div style={{padding : "50px 300px", textAlign : "center"}}>
            <Form>
                <Form.Field>
                    <input value={id} id="id" placeholder="ID" onChange={(e)=>setId(e.target.value)}></input>
                </Form.Field>
                <Form.Field>
                    <input value={pw} id="pw" type = "password" placeholder="PW" onChange={(e)=>setPw(e.target.value)}></input>
                </Form.Field>
                <Button color="blue" onClick = {login}>Login</Button>
            </Form>
        </div>
    )
}