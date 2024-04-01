import './App.css';
import './myCss.css'


function App() {
  let name = "Damian";
  let box = name
  return (
    <div className="fondo">
      <h1>React Course</h1>
      {name}
      <input value ={box}/>
    </div>
  );
}

export default App;
