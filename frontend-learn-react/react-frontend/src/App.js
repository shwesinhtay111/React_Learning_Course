import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HellWorld from './components/HelloWorld';
import Hello from './components/function_component/Hello';
import Post from './components/Post';
import Counter from './components/Counter';
import Greeting from './components/function_component/Greeting';
import ListDemo from './components/ListDemo';
import FormDemo from './components/FormDemo';

function App() {
  let obj = {
    name: "Shwe Sin",
    age: 26,
};
let post ={
  text : "How are you",
  profile : obj,
  
};
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HellWorld obj={obj}/>
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Fighting!
        </a>
        <Hello />
        <Post post={post} />
        <Counter initialVlaue={1}/>
        <Greeting isLoggedIn={false} />
        <ListDemo />
        <FormDemo />
      </header>
      
    </div>
  );
}

export default App;
