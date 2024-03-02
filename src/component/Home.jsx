import React, { useEffect, useState } from 'react';
import axios from 'axios'
import '../App.css'
const Home = () => {

    // useState for managing products    

    const [products, setProducts] = useState([])

    //useEffect for fetch the data before Rendering 

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {

        await axios.get('https://65d605fef6967ba8e3bd4b63.mockapi.io/api/products')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div>

            {/* displaying fetched data in home component           */}

            <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
                {products.map((item, index) => {
                    return (

                        <div key={index}>

                            <div className="col">
                                <div class="card ">
                                    <img src={item.image} class="card-img-top img-thumbnail" alt="..." />
                                    <div className="card-body">
                                        <h5 id="name" className="card-title text-center shadow1">{item.name}</h5>
                                        <h5 id="price" className="card-title text-center shadow1 ">₹ {item.price}</h5>
                                        <p id="description" className="card-text pacifico-regular shadow1 ">{item.description}</p>
                                    </div>
                                </div>
                            </div>

                        </div>



                    )



                })}


            </div>


            <footer className="footer  bg-secondary w-100 ">

                <p>copyright@XYZ shop</p>
            </footer>
        </div>


    );
};

export default Home;