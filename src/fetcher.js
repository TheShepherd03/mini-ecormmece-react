const BASE_URL ="http://localhost:3001/";
const fetcher= async(url)=>{
    let responseObject={errormessage:'',data:[]};
    try{
    const response=await fetch(BASE_URL+url);
    const responseData=await response.json();
    responseObject.errormessage='';
    responseObject.data=responseData;
    }
    catch(err){
        responseObject.errormessage=err.message;
    }
    return responseObject;
};

export const getCategories=()=>{
    return fetcher('categories');
}
export const getProducts=(id)=>{
    return fetcher('products?catID='+id);
}