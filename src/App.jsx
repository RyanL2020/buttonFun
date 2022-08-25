import * as React from 'react'
import './App.css'
import Button from './Button'

export default function App() {
 
    const [count, setCount] = React.useState(0);
  const handleClick = () => {
    setCount(count + 1);
  }; 
  return (
  
    <div>
      <button  onClick={handleClick}>
        Click ME !!!!
      </button>
      {count}
    </div>
  );
  
}
