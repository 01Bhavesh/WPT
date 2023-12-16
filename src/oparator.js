export function Oparator(prob)
{
     let num1 = prob.num1
     let num2 = prob.num2 
     let op = prob.op 

      let result 
     switch (op) {
        case "+" :
            result = num1 + num2
            break;
        case "*" :
            result = num1 * num2
        break;
        case "/" :
            result = num1/num2
            break;
        case "-" :
            result = num1-num2
            break;
        default :
            result = NaN
            break;
     }
    return(
        <p>{num1} {op} {num2} = {result}</p>
    )
}