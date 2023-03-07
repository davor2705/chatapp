import Messages from "./Messages";
import logo from './logo.svg';
import './App.css';

state = {
  messages: [
    {
      text: "This is a test message!",
      member: {
        color: "blue",
        username: "bluemoon"
      }
    }
  ],
  member: {
    username: randomName(),
    color: randomColor()
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

render() ;{
  return (
    <div className="App">
      <Messages
        messages={this.state.messages}
        currentMember={this.state.member}
      />
    </div>
  );
}

export default App;
