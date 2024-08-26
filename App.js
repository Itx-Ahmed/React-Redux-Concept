import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { increase, decrease } from './actions';


function App() {
  const mystate = useSelector((state) => state.inc_dec);
  const dispatch = useDispatch()
  return (
    <div className="App">
       <input type="text"  value={mystate}/>
       <br></br>
       <br></br>
      <button onClick={() => dispatch(increase())} className="btn btn-primary">Add</button>
      <button onClick={() => dispatch(decrease())} className="btn btn-danger">Minus</button>
    </div>
  );
}

export default App;
