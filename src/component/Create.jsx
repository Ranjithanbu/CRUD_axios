import '../App.css'

import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = () => {


    const navigate = useNavigate()

    //useState for storing newly created data temporarily

    const [createData, setcreateData] = useState({
        name: '',
        price: '',
        description: '',
        id: ''
    })

    //to handle the onchange event

    const handleChange = (e) => {
        const { name, value } = e.target
        setcreateData((preData) => ({
            ...preData, [name]: value,
        }))
    }

    //creating new data in server using axios post call

    const handleSubmit = async (e) => {
        e.preventDefault()

        await axios.post(`https://65d605fef6967ba8e3bd4b63.mockapi.io/api/products/`, createData)

        navigate('/')
    }

    return (
        <div id="editpage">

            <form onSubmit={handleSubmit}>
                <h3 className="edithead " >Edit  page</h3>

                <label className="p-2 mt-4 fw-bold float-end ">Product Id : <input className="bg-transparent rounded" type="text" name="id" onChange={handleChange} /></label> <br />

                <label className="p-2 mt-4 fw-bold float-end ">Product Name : <input className="bg-transparent rounded" type="text" name="name" onChange={handleChange} /></label> <br />

                <label className="p-2 mt-4 fw-bold float-end ">Product Price : <input className="bg-transparent rounded" type="text" name="price" onChange={handleChange} /></label> <br />

                <label className="p-2 mt-4 fw-bold float-end ">Product Description : <input className="bg-transparent rounded" type="text" name="description" onChange={handleChange} /></label><br />

                <button className="button1" type="submit">Create</button>

            </form>
        </div>
    );
};

export default Create;