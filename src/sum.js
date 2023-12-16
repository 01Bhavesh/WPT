export default function Sum({nums})
{
    let add = 0;
    for(let i = 0 ; i<nums.length ; i++)
    {
        add = nums[i]+add
    }

    return(
        <p>total = {add}</p>
    )
}