import { useState } from 'react';

const Home = () => {
    const[name,setName] = useState('John');
    const[count,setCount] = useState(0);
    function increaseCount(){
        setCount(count + 1);
        console.log(count);    }

    const HandleClick =()=>{
        setName('Doe');
        console.log(name);
    }
    return (
      <div className="home">
        <h2>Homepage</h2>

        <button onClick={HandleClick}>Click Me</button>
        <p>The name of the student is {name}</p>
u
        <button onClick={increaseCount}>Click to increase count</button>
        <p>Count is: {count}</p>
      </div>
    );
}
 
export default Home;