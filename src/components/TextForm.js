import React,{useState} from 'react'

export default function TextForm(props) {
   

    const handleUpCase = () =>{
        
        let newText = text.toUpperCase();
        setText(newText);
    } 

    const handlelowCase = () =>{
        
        let newText = text.toLowerCase();
        setText(newText);
    } 

    const handleOnChange = (event)=>{
        console.log("button is trying to change")
        setText(event.target.value)

    }
    const [text,setText] = useState("");
    return(
        <>
        <div className="container my-3">
        <h3 className = "h3">{props.title}</h3>
        <div className="mb-3">
        
        <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="7"></textarea>

        <button className="btn btn-primary my-3 mx-2" onClick={handleUpCase}>Convert to Uppercase</button>

        <button className="btn btn-primary my-3 mx-2" onClick={handlelowCase}>Convert to Lowercase</button>
        </div>
        
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length}</p>

        <h4>Time Take to read</h4>
        <p>{0.08 * text.split(" ").length}</p>

        <h5>Preview</h5>
        <p>{text}</p>
        </div>
       
        
        </>
    )
    
};
