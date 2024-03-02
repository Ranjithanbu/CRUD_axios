import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/Home.jsx'
import Product from './component/Product.jsx'
import Nav from './component/Nav.jsx'
import Edit from './component/Edit.jsx'
import Create from './component/Create.jsx'
const App = () => {
  const [id, setId] = useState(0)
  return (
    <div>
{/* routing component and passing needed data to other components */}
      <BrowserRouter>

        <div> <Nav /></div>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/Product' element={<Product setId={setId} />} />
          <Route path='/edit' element={<Edit id={id} />} />
          <Route path='/create' element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;