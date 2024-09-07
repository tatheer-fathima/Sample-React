import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText); 
        props.showAlert("Converted to Uppercase", "Success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText); 
        props.showAlert("Converted to Lowercase", "Success");
    }

    const handleClearClick  = () => {
        let newText = ' ';
        setText(newText);
        props.showAlert("Cleared the text", "Success");
    }

    const  handleonChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
  const [text , setText] = useState('');
  return (
    <>
    <div className= "container" style = 
        {{color : props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
       <div class="mb-3">
        <label for="myBox" class = "form-label"></label>
        <textarea className="form-control" id="myBox" rows="8" value = {text} onChange = {handleonChange} style = 
        {{backgroundColor : props.mode === 'dark' ? 'grey' : 'white', color : props.mode === 'dark' ? 'white' : 'black' }}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick = {handleUpClick}>
           Convert to upperCase 
        </button>
        <button className="btn btn-primary mx-2" onClick = {handleLowClick}>
           Convert to lowerCase 
        </button>
        <button className="btn btn-primary mx-2" onClick = {handleClearClick}>
           Clear Text
        </button>
    </div>
    <div className = "container my-2" style = 
        {{color : props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview it here "}</p>

    </div>

    </>
  )
}
