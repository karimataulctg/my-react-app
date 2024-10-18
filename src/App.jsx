
import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {

  function handleClick(){
    alert('Hello World!');
  }
  const handleClick2 = () => {
    alert('Hello World from Arrow Function!');
  }
  const handleClick4 = (num) => {
    alert(num + 3);
  }
  return (
    
    <>
    
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
    <button onClick={handleClick}>Click Me</button>
    <button onClick={handleClick2}>Click Me 2</button>
    <button onClick={() => {alert('Third Click')}}>Click Me 3</button>
    <button onClick={() => {handleClick4(5)}}>Click Me 4</button>
      
    </>
  )
}

export default App
