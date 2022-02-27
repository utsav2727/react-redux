import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions';

function App() {
  const mystate = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className='container'>
        <h1>Increase and Decrease Number</h1>
        <h3>Using React Redux</h3>
      </div>
      <div className='mybuttons'>
        <a onClick={() => dispatch(incNumber(5))}><button>+</button></a>
        <h2>{mystate}</h2>
        <a onClick={() => dispatch(decNumber())}><button>-</button></a>
      </div>
    </div>
  );
}

export default App;
