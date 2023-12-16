export function Object(probs)
{
    let {name , skill , age} = probs.obj
    // let name = probs.name        }
    // let skill = probs.skill      } NOT APPLICABLE , ITS BASE ON HOW YOU PASS DATA 
    // let age = probs.age          }
    let styleobj = {border : "3px groove blue" , width : "400px" , backgroundColor : "yellow"}

    return(
        <div style = {styleobj}>
        <p>Name : {name}</p>
        <p>Skill : {skill}</p>
        <p>Age : {age}</p>
     </div>
        
    )
}