import { useState } from "react";
import "./App.css";

function App() {
  const [width, setWidth] = useState("300px");

  const handleMouseOver = () => {
    setWidth("400px");
  };
  const handleMouseLeave = () => {
    setWidth("300px");
  };

  const handleDoubleClick = () => {
    alert("Double clicked");
  };

  const handleSingleClick = () => {
    console.log("button is clicked");
  };

  return (
    <>
      <div className="image">
        <img
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          width={width}
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          alt="photographer"
        />
      </div>
      <input onFocus={() => console.log("form is focussed")}
              onBlur={()=>console.log("form is not focussed")}
              onCut={()=> alert("Something is cut")}
              onCopy = {()=> alert("Something is copied")}
              onPaste = {()=> alert("Something is pasted")}
             type="text"
              />
      <button
        onDoubleClick={handleDoubleClick}
        onClick={handleSingleClick}
        className="button"
      >
        Submit
      </button>
    </>
  );
}

export default App;
