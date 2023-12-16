import { useState } from "react"

export default function UserGreet()
{
    let [msg,setmsg] = useState("hii")

    function handler()
    {
        setmsg("hello")

    }

    return(
        <><input type = "button" value = "click me" onClick={handler} />
        <p>{msg}</p></>
        
    )
}