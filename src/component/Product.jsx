
import React,{useEffect,useState} from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const Product = ({setId}) => {
    const [delData,setDelData]=useState([])
    const navigate=useNavigate()
    const [products,setProducts]=useState([])
useEffect(()=>{
    fetchData()
},[delData])

const fetchData=async()=>{

await axios.get('https://65d605fef6967ba8e3bd4b63.mockapi.io/api/products')
.then(res=>setProducts(res.data))
.catch(err=>console.log(err))
} 

const handleEdit=(id)=>{
 setId(id)
 navigate('/edit')
   }
const handleDel=async(id)=>{

await axios.delete(`https://65d605fef6967ba8e3bd4b63.mockapi.io/api/products/${id}`)
.then(res=>setDelData(res.data))
}

const handleCreate=()=>{

    navigate('/create')
}
      return (
        <div>
            <table className="table table table-success table-hover table-striped">
  <thead>
    <tr className="text-center">
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Description</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
{products.map((item,index)=>{
return(


 <tr key={index}>
      <th scope="row">{item.id}</th>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.description}</td>
      <td><button className="bg-primary border border-none rounded" onClick={()=>{handleEdit(item.id)}} >Edit</button></td>
      <td><button className="bg-danger border border-none rounded" onClick={()=>{handleDel(item.id)}}>Delete</button></td>
</tr>


)})}

   
    
  </tbody>
</table>
<button className="button2" onClick={handleCreate}>Create</button>
        </div>
    );

};

export default Product;