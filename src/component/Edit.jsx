import '../App.css'

import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Edit = ({ id }) => {

    const [data, setData] = useState(id)

    //navigate for navigation purpose

    const navigate = useNavigate()

    // useState for managing the edited data 

    const [editData, setEditData] = useState({
        name: '',
        price: '',
        description: '',
        id: ''


    })

    //useEffect for fetch the data  before Rendering  = >for edit purpose

    useEffect((id) => {
        console.log(id)
        fetchData(id)
    }, [])
    const fetchData = async (id) => {

        await axios.get(`https://65d605fef6967ba8e3bd4b63.mockapi.io/api/products/${data}`)
            .then(res => setEditData(res.data))
            .catch(err => { alert(err) })

    }

    //updating edited data to inside the useState

    const handleChange = (e) => {
        const { name, value } = e.target
        setEditData((preData) => ({
            ...preData, [name]: value
        }))
    }
    // updating edited data using axios put call
    const handleSubmit = async (e) => {
        e.preventDefault()

        await axios.put(`https://65d605fef6967ba8e3bd4b63.mockapi.io/api/products/${data}`, editData)

        navigate('/Product')
    }


    return (
        <div id="editpage" >

            <form onSubmit={handleSubmit}>
                <h3 className="edithead " >Edit  page</h3>

                <label className="p-2 mt-4 fw-bold float-end ">Product Id : <input className="bg-transparent rounded" type="text" name="id" value={editData.id} onChange={handleChange} /></label> <br />

                <label className="p-2 mt-3 fw-bold float-end">Product Name : <input className="bg-transparent rounded " type="text" name="name" value={editData.name} onChange={handleChange} /></label> <br />

                <label className="p-2 mt-3 fw-bold float-end">Product Price : <input className="bg-transparent rounded" type="text" name="price" value={editData.price} onChange={handleChange} /></label> <br />

                <label className="p-2 mt-3 fw-bold float-end">Description : <input className="bg-transparent rounded" type="text" name="description" value={editData.description} onChange={handleChange} /></label><br />

                <button className="button1" type="submit">Update</button>

            </form>


        </div>
    );
};

export default Edit;