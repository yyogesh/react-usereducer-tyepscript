import './App.css';
import CounterOne from './components/CounterOne';
import Counter from './components/CounterState';
import LoadingComponent from './components/Loading';

function App() {
  return (
    <div className="App">
      <CounterOne />
      <hr />
      <LoadingComponent />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
