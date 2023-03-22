import './App.css';
import Category from './components/category';
import { getCategories,getProducts } from './fetcher';
import React,{useState} from 'react';

function App() {
  const[categories,setCategories]=useState({errormessage:'',data:[]});
  const[products,setProducts]=useState({errormessage:'',data:[]});

  React.useEffect(()=>{
    const fetchData=async()=>{
    const responseObject=await getCategories();
    setCategories(responseObject);}
    fetchData();
  },[])

  const handleCategoryClick=id=>{
    const fetchData=async()=>{
    const responseObject=await getProducts(id);
      setProducts(responseObject);}
      fetchData();
    }

  const renderCategories=()=>{
    return categories.data.map(c=>
      <Category key={c.id} id={c.id} title={c.title} onCategoryClick={()=>handleCategoryClick(c.id)}/>);
  }

  const renderProducts=()=>{
    return products.data.map(
      p=><div>{p.title}</div>
    )
  }
  return (
    <>
    <header>Mini Store</header>

    <section>
    <nav>
      {categories.errormessage && <div>Error:{categories.errormessage}</div>}
      {categories.data && renderCategories()}
    </nav>
    <article><h1>Products</h1>
      {products.errormessage && <div>Error:{products.errormessage}</div>}
      {products && renderProducts()}
    </article>
    </section>
    <footer>footer</footer>
    </>
  );
}

export default App;
