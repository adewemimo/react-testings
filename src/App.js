import { useState } from 'react';
import Header from './components/Header';
import Counter from './components/Counter';
import './App.css';
import Footer from 'components/Footer';

const testData = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Kira" },
  { id: 4, name: "Mallory" },
];


function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  const increment = function() {
    setCount(count + 1);
  };
  const decrement = function() {
    setCount(count - 1);
  };
  const clear = function() {
    setCount(0);
  };

  const show = function() {
    setData(testData);
  };
  const hide = function() {
    setData([]);
  };

  const list = data.map(item => {
    return <li key={item.id} data-testid="user">{item.name}</li>;
  });

  return (
    <div className="App">
      <Header text="Hello React" />

      <Counter
        count={count}
        increment={increment}
        decrement={decrement}
        clear={clear} />
        
      <Footer count={count}></Footer>

      <button onClick={show}>Load Users</button>
      <button onClick={hide}>Clear Users</button>

      <ul data-testid="users">
        {list}
      </ul>
    </div>

  );
}

export default App;
