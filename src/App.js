import './App.css';
import Category from './components/category';
import React,{useState} from 'react';

function App() {
  const[categories,setCategories]=useState([]);
  const[products,setProducts]=useState([]);

  React.useEffect(()=>{
    fetch("http://localhost:3001/categories")
    .then(response=>response.json())
    .then(data=>{console.log(data);
      setCategories(data);})
  },[])

  const handleCategoryClick=id=>{
    fetch("http://localhost:3001/products?catID="+id)
    .then(response=>response.json())
    .then(data=>{console.log(data);
      setProducts(data);})
  }

  const renderCategories=()=>{
    return categories.map(c=>
      <Category key={c.id} id={c.id} title={c.title} onCategoryClick={()=>handleCategoryClick(c.id)}/>);
  }

  const renserProducts=()=>{
    return products.map(
      p=><div>{p.title}</div>
    )
  }
  return (
    <>
    <header>Mini Store</header>

    <section>
    <nav>
      {categories && renderCategories()}
    </nav>
    <article><h1>Products</h1>
      {products && renserProducts()}
    </article>
    </section>
    <footer>footer</footer>
    </>
  );
}

export default App;
