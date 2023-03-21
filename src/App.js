import './App.css';
import React,{useState} from 'react';

function App() {
  const[results,setResults]=useState([]);

  React.useEffect(()=>{
    fetch("http://localhost:3001/categories")
    .then(response=>response.json())
    .then(data=>{console.log(data);
      setResults(data);})
  },[])

  return (
    <>
    <header>Mini Store</header>

    <section>
    <nav>
      {results.map(d => (
        <div key={d.id}>{d.title}</div>
      ))}
    </nav>
    <article>main area</article>
    </section>
    <footer>footer</footer>
    </>
  );
}

export default App;
