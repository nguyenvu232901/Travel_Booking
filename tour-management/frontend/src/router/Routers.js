import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from "../pages/Home";
import Tours from "../pages/Tours";
import Login from "../pages/Login";
import Register from "../pages/Register";
import TourDetails from "../pages/TourDetails"
import SearchresultList from "../pages/SearchresultList";
import ThankYou from "../pages/ThankYou";
import About from "../pages/About";
import AccountSettings from "../components/Info-user/AccountSettings";
import RegisteredTours from "../pages/RegisteredTours";

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home'/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/tours' element={<Tours/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/tours/:id' element={<TourDetails/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/thank-you' element={<ThankYou/>} />
            <Route path='/tours/search' element={<SearchresultList/>} />
            <Route path="/account-settings" element={<AccountSettings />} />
            <Route path="/registered-tours" element={<RegisteredTours />} />
            {/* <Route path="/account-settings" element={< />} /> */}


        </Routes>

        
    );
}

export default Routers