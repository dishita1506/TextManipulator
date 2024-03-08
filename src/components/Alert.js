import React from "react";
export default function Alert(props) {
  const capitalize = (word) => {
    console.log(word);
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }


  {/* props.alert && ----> if(props.alert!=null) */}
  return (
   <div style={{height:'50px'}}>

    {/* kuch bhi javascript m linkhne k liye curly braces lagate hai  */}
    
    {
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" >
          <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
        </div>
        }
        </div>
    )
  
}
