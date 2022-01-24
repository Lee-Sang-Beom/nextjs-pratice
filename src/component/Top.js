import {Header} from "semantic-ui-react"
import Gnb from "./Gnb";


export default function Top() {
    return (
    <div>
        <div style={{display : 'flex'}}>
            <div>
                <img src = "/images/Logo.png"
                    alt = "logo" 
                    style={{display:"block", width :200}} 
                />  
            </div>
        </div>
        <Gnb/>
    </div>
    );
}