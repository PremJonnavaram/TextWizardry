import React, { useState } from 'react';

export default function Textform(props) {
    const handleOnChange = (event) => {
        const userInput = event.target.value;
        setText(userInput);  // Update the text as the user types
        setOriginalText(userInput);  // Store the original text with spaces
    };

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    };

    const clearText = () => {
        setText("");
        setOriginalText("");
        props.showAlert("Text Cleared!", "success");
    };

    // Copy to Clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(text).then(() => {
            props.showAlert("Text copied", "success");
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            props.showAlert("Text cannot be copied", "danger");
        });
    };

    // Remove Extra Spaces
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/).join(" ");
        setText(newText);
        props.showAlert("Extra spaces removed", "success");
    };

    // Listen Now
    const handleSpeak = () => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            speechSynthesis.speak(utterance);
        }
        props.showAlert("Dictating text...", "success");
    };

    // Stop Listen
    const handleStopSpeak = () => {
        if ('speechSynthesis' in window) {
            speechSynthesis.cancel();
            props.showAlert("Dictating text stopped...", "danger");
        }
    };

    // State variables
    const [text, setText] = useState("");  // Transformed text
    const [originalText, setOriginalText] = useState("");  // Original text with spaces

    const wordCount = text.split(/\s+/).filter((element) => element.length !== 0).length;

    return (
        <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <div className="container">
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea 
                        style={{ backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} 
                        className="form-control" 
                        value={text} 
                        onChange={handleOnChange} 
                        id="myBox" 
                        rows="8">
                    </textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={copyToClipboard}>Copy to Clipboard</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
                <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleSpeak}>Listen Now</button>
                <button disabled={text.length === 0} className="btn btn-danger mx-1 my-1" onClick={handleStopSpeak}>Stop Listen</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{wordCount} words and {text.length} characters</p>
                <p>{0.008 * wordCount} Minutes read</p>
                <h2>Original Text</h2>
                <pre>{originalText.length === 0 ? "Nothing to preview!!" : originalText}</pre> {/* Display original text with spaces */}
                <h2>Transformed Text Preview</h2>
                <pre>{text.length === 0 ? "Nothing to preview!!" : text}</pre> {/* Display transformed text */}
            </div>
        </div>
    );
}
