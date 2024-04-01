import './App.css';
import './myCss.css';
import image1 from './images/capriaty.jpg';
import image2 from './images/marcocarola.jpg';
import image3 from './images/jamie.jpg';



function App() {

  return (
    <div className="container">
      <div className="box">
        <img src={image1} alt="" />
      </div>

      <div className="box">
        <img src={image2} alt="" />
      </div>

      <div className="box">
        <img src={image3} alt="" />
      </div>

    </div>
  );
}

export default App;
