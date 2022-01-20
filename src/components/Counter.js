const Counter = function(props) {

  const increment = function() {
    props.increment();
  };
  const decrement = function() {
    props.decrement();
  };
  const clear = function() {
    props.clear();
  };

  return (
    <div className="counter">
      <span>{props.count}</span>
      <button onClick={decrement}>-</button>
      <button onClick={clear}>0</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
