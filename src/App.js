import  {useState} from "react"
import './App.css';
import {ChromePicker} from "react-color"
function App() {
  const[color,setColor] = useState("#fff")
  const[show,setShow] = useState(false)
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>
        {show ? "Close color picker" : "Pick a color"}
      </button>
      {show && (
        <ChromePicker
          color={color}
          onChange={(updatedColor) => setColor(updatedColor.hex)}
        />
      )}
      <h2>You picked {color}</h2>
    </div>
  );
}

export default App;
