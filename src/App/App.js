import './App.css';
import natlogo from './natlogo.png'

function App() {
  return (
    <div className="App-body">
      <div className="App-card">
        <div className="App-card-contents">
          <div className="App-card-left">
            <img className="App-card-image" src={natlogo} alt="olivers logo"></img>
          </div>
          <div className="App-card-middle">
            <div className="App-vertical-line"></div>
          </div>
          <div className="App-card-right">
            <div className="App-details-container">
              <div className="App-details-name">
                Oliver Dai
              </div>
              <div className="App-details-item">
                <a className="App-details-link" href="mailto: olliezdai@gmail.com" target="_blank" rel="noreferrer">olliezdai@gmail.com</a>
              </div>
              <div className="App-details-item">
                <a className="App-details-link" href="https://www.linkedin.com/in/olliezdai/" target="_blank" rel="noreferrer">linkedin.com/in/olliezdai/</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
