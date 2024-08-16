
import "./App.css";
import Counter from "./components/CounterDown/CounterDown";
import Greeting from "./components/Greeting/Greeting";



function App() {
  return (
    <div>
    <Counter initialCount={10} step={2}/>
    <Counter initialCount={5} step={3}/>
    <Greeting name="Euralio"/>
    </div>
  );
}

export default App;
