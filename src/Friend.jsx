export default function Friend({friend}){
    console.log(friend)
 const {name,email}=friend;
//  console.log(name)
    return(
        <div className="box">
            <h3>Name:{name} </h3>
            <h4>Email:{email} </h4>
        </div>
    )
}