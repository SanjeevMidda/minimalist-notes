import './index.css';
import lines from "./images/lines.svg";

function App() {
  return (
    <div className="App">

      <div className="container">
        <div className="leftPanel">
          <h4>DOCKET</h4>

          <button>
            <img src={lines} alt="" />
          </button>
        </div>
        <div className="mainPanel">
          <input type="text" placeholder='Search'/>
          <h1>NOTES</h1>
        </div>
      </div>
      
    </div>
  );
}

export default App;
