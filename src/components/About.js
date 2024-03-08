import React,{useState} from "react";

export default function About(props){
// const [myStyle,setmyStyle]=useState({
//     backgroundColor:'black',
//     color:'white'
// })


let myStyle={
  color:props.mode==='dark'?'white':'black',
  backgroundColor:props.mode==='dark'?'#1e3d5d':'white',
  border:'1px solid',
  borderColor:props.mode==='dark'?'white':'black'
}


   return(
    
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample" >
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"  style={myStyle}>
        <strong>Welcome to textManipulator!</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
      <div className="accordion-body"  style={myStyle}>
       
        <p> 

         <strong>textManipulator</strong> is your go-to destination for effortless text transformation. Developed by Dishita Gangwar, this versatile tool simplifies the process of converting text between various formats, including upper case, lower case, reverse, and more.

        At textManipulator, we understand the importance of clear and consistent communication. Whether you're a writer polishing your prose, a student formatting citations, or a professional preparing documents, our platform offers the tools you need to achieve precision and efficiency.  </p>
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
      <strong>Why Choose textManipulator?</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={myStyle}>
       <p>
        <li> <strong>Ease of Use:</strong> Our intuitive interface makes text conversion as easy as typing. Simply input your text, select your desired format, and let textManipulator do the rest.</li>
        <li><strong>Versatility:</strong> With options to convert text to upper case, lower case, reverse, and more, textManipulator adapts to suit your specific needs.</li>
         <li><strong>Speed:</strong> Say goodbye to manual formatting and hello to instant transformations. textManipulator allows you to convert text quickly and accurately, saving you time and effort.</li>
         <li><strong>Browser Compatible:</strong> Our application is browser compatible which makes it work in any browser without any issue.</li>
         </p>
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
       <strong>Connect With Us:</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={myStyle} >
       <p>We value your feedback! Whether you have suggestions for improvement or simply want to share your experience, we'd love to hear from you.</p>
       <p> Connect with us on <a href="https://www.linkedin.com/in/dishita-gangwar-060178229/">Linkedin</a> or reach out via email at <a href="mailto:dishitagangwar1506@gmail.com">dishitagangwar1506@gmail.com</a></p>

           <p> <i>Thank you for choosing textManipulator. Let's transform text with ease and precision together!</i></p>
      </div>
    </div>
  </div>
</div> 
   

   
    </div>
    
   )
}