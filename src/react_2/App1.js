import { useState } from "react";
import Hello from "./hello"
import UserGreet from "./hii_user";
import Months from "./month";
export default function App1()
{
    let [col,setcol] = useState("blue")  
    
        col = "red"
    return(
        <><Hello name = {"bhavesh"} col = {col}></Hello>
        <UserGreet></UserGreet>
        <Months></Months>
        </>
        
    )
}
// export default App1