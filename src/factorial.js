export function Factorial({num})
{
    let sum = 1
    for(num ; num>0 ; num--)
    {
        sum = num*sum
    }
    return (
        <p>factorial = {sum}</p>
    )
}