const { useState } = React;

  function App() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
      setCount(count + 1);
    };

    const handleDecrement = () => {
      setCount(count - 1);
    };

    return (
      <div>
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <button className="btn btn-primary" onClick={handleIncrement}>Increment</button>
        <button className="btn btn-danger" onClick={handleDecrement}>Decrement</button>
      </div>
    );
  }

  ReactDOM.render(React.createElement(App), document.getElementById('root'));