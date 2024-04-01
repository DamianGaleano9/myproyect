import './App.css';
import './myCss.css';
import image0 from './images/capriaty.jpg';
import image1 from './images/marcocarola.jpg';
import image2 from './images/jamie.jpg';
import image3 from './images/damian.jpg';




function App() {
  let name = ["Joseph Capriaty", "Marco Carola", "Jamie Jones", "Damian Nueve"];
  return (
    <div className="container">
      <div className="box">
        <img src={image0} alt="" className="img" />
        <div className="name">{name[0]}</div>
      </div>

      <div className="box">
        <img src={image1} alt="" className="img" />
        <div className="name">{name[1]}</div>

      </div>

      <div className="box">
        <img src={image2} alt="" className="img" />
        <div className="name">{name[2]}</div>

      </div>

      <div className="box">
        <img src={image3} alt="" className="img" />
        <div className="name">{name[3]}</div>

      </div>

    </div>
  );
}

export default App;
