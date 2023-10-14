
import './App.css';
import Counter from './Components/Counter';
import HomePage from './Components/HomePage';
import { Route,Routes } from 'react-router-dom';
import Todo from './Components/Todo';
import Register from './Components/Register';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/todo' element={<Todo/>}/>
      </Routes>
    </div>
  );
}

export default App;
