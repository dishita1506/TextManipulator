//State --> kisi bhi component ki state batata hai
//       1. isko hum useState ki help s use karte hai
//       2. const[text,setText]= useState("This is default text")   --> text ek variable hai jisme kuch text hai and hum jab bhi uss text ko update karenge vo updateText function ki help s hoga
//       3. setText("NewText")
//       3. text="newText"  -->not allowed in react
//       4. useState hamesha function k andar he hoga

//import { useState } from "react";
import React ,{useState}  from "react";



export default function Form(props){
   
   //UPPERCASE

    const changeUpperCase=()=>{
    //   console.log("UpperCase was clicked...")
      let newText=text.toUpperCase();
      settext(newText);
      props.showAlert("Text has been converted to UpperCase","success")
    }
    

    //LOWERCASE
    const changeLowerCase=()=>{
        let newText=text.toLowerCase();
        settext(newText);
        props.showAlert("Text has been converted to LowerCase","success")
    }



    //CLEAR
    const clearText=()=>{
        let newText='';
        settext(newText);
        props.showAlert("Text has been Cleared","success")
    }
    



    //REVERSE
    const reverseText=()=>{
        let newText='';
        let words=text.split(' ');
        for(let i=words.length-1;i>=0;i--){
            newText=newText+words[i]+" ";
        }
        settext(newText);
        props.showAlert("Text has been Reversed","success")
    }
     

    
    //REMOVE EXTRA SPACES
  const removeExtraSpace=()=>{
    let newText=text.split(/[ ]+/);
    settext(newText.join(" "));
    props.showAlert("Extra spaces has been Removed","success")
  }


  //COPY
   const copyText=()=>{
    //var text=document.getElementById("mytext")
    //text.select();
    navigator.clipboard.writeText(text);
    props.showAlert("Text has been Copied","success")
   }

    const handleOnChange=(event)=>{
    // console.log("onchanged was clicked....")
    settext(event.target.value);
    
    }

    const  [text, settext] = useState("")
    return(
    <div  style={{color:props.mode==='dark'?'white':'black'}}>  
        <div className="my-3 container"  >
         <h3 className="mb-4">{props.heading} </h3> 
         {/* onChange event listen krna must hai tabhi hum textArea mai {text} k sath apna text bhi daal paayenge */}
         <textarea   className="form-control" id="mytext" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#10223d':'white' , color:props.mode==='dark'?'white':'black'}}></textarea>
         <button  disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={changeUpperCase}>Convert To UpperCase</button>
         <button disabled={text.length===0} className="btn btn-primary my-3 mx-3 " onClick={changeLowerCase}>Convert To LowerCase</button>
         <button disabled={text.length===0} className="btn btn-primary my-3 mx-3 " onClick={clearText}>Clear Text</button>
         <button disabled={text.length===0}  className="btn btn-primary my-3 mx-3 " onClick={reverseText}>Reverse Text</button>
         <button disabled={text.length===0} className="btn btn-primary my-3 mx-3 " onClick={removeExtraSpace}>Remove Extra Spaces</button>
         <button disabled={text.length===0} className="btn btn-primary my-3 mx-3 " onClick={copyText}>Copy Text</button>
        
    </div>
      
      <div className="container my-3">
        <h3>Text Information</h3>
        {/* /\s+/  --> regular expression for white space 1 and more then 1 including nextline */}
        <p>Number of Words : {text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length}</p>
        <p>Number of Characters : {text.length}</p>
        <p>Time to read Text : {0.008*text.split(" ").filter((ele)=>{return ele.length!==0}).length} minutes</p>
        <h5>Preview</h5>
        <p className="fs-6 fw-light">{text.length>0?text:'Nothing to preview.'}</p>
      </div>

        </div>

    )
}