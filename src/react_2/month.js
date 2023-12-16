import { useState } from "react"

export default function Months()
{
    let [month , setmonth] = useState("")

    function handler(event)
    {
        let val = parseInt(event.target.value)
        switch(val)
        {
            case 1: setmonth("january");break;
            case 2: setmonth("febuary");break;
            case 3: setmonth("march");break;
            case 4: setmonth("april");break;
            case 5: setmonth("may");break;
            case 6: setmonth("june");break;
            case 7: setmonth("july");break;
            case 8: setmonth("augest");break;
            case 9: setmonth("septmber");break;
            case 10: setmonth("octber");break;
            case 11: setmonth("noveber");break;
            case 12: setmonth("december");break;
        }

    }

    return(
        <div>
            <select onChange={handler}>
                <option>select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
            </select>
            <p> months is {month}</p>
        </div>

    )
}