import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
export default function FORM(props) {
  const [text, setText] = useState("");
  const handlestoplistening = () => {
    SpeechRecognition.stopListening();
    setText(transcript);
    resetTranscript();
  };
  function handelOnChange() {
    if (transcript === "")
      setText(document.getElementById("exampleFormControlTextarea1").value);
    else {
      setText(transcript);
      transcript = "";
    }
  }
  function handleUpText() {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted into Uppercase !", "success");
  }
  function handleClText() {
    setText("");
    transcript = "";
    props.showAlert("Text cleared !", "warning");
  }
  function handleLowText() {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted into Lowercase !", "success");
  }
  function handleCopyText() {
    var newText = document.getElementById("exampleFormControlTextarea1");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Text copy !", "success");
  }
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  let { transcript, resetTranscript } = useSpeechRecognition();
  return (
    <>
      <div className="container">
        <h1 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          Enter the text to analyze :{" "}
        </h1>
        <textarea
          className="form-control"
          style={{
            backgroundColor: props.mode === "dark" ? "#13466e" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          onChange={handelOnChange}
          id="exampleFormControlTextarea1"
          rows="10"
          value={text === "" ? transcript : text}
          placeholder="Enter Text here or you can speak by click on speak button"></textarea>
        <br />
        <div class="btn-group" role="group" aria-label="Basic example">
          <button
            disabled={text.length === 0}
            className='class="btn btn-primary mx-2 my-1'
            onClick={handleUpText}>
            Convert into Uppercase
          </button>
          <button
            disabled={text.length === 0}
            className='class="btn btn-primary mx-2 my-1'
            onClick={handleLowText}>
            Convert into Lowercase
          </button>
          <button
            disabled={text.length === 0}
            className='class="btn btn-primary mx-2 my-1'
            onClick={handleClText}>
            Clear Text
          </button>
          <button
            disabled={text.length === 0}
            className='class="btn btn-primary mx-2 my-1'
            onClick={handleCopyText}>
            Copy Text
          </button>
          <button
            className='class="btn btn-primary mx-2 my-1'
            onClick={startListening}>
            Speak
          </button>
          <button
            className='class="btn btn-primary mx-2 my-1'
            onClick={handlestoplistening}>
            Stop
          </button>
        </div>
      </div>
      <div className="container my-3">
        <h1 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          Text Summary
        </h1>
        <p className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          Words :{" "}
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          and Characters : {text.length}
        </p>
        <h2 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          Preview
        </h2>
        <p className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          {text}
        </p>
      </div>
    </>
  );
}
