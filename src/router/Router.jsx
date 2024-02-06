import React from 'react'
import { BrowserRouter ,Route,Routes } from 'react-router-dom'
import Register from '../pages/register/Register'
const Router = () => {
  return (


    <BrowserRouter>
    
    
    <Routes>


<Route path="/" element={<Register/>}/>
{/* <Route path="/orgLogin" element={<OrgLogin/>}/>
<Route path="/verifyOtp" element={<VerfiyOtp/>}/> */}

    </Routes>
    </BrowserRouter>
  )
}

export default Router
