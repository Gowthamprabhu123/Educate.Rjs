import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"//Routes,One-Route,element={},src same,NavLink-NL
import Home from "./Home";
import Content from "./Content";
import Contact from "./Contact";
import Service from "./Service";
import Policy from "./Policy";
import '../src/App.css'//
import images from '../src/images/front.avif'

const Route1 = () => {

    return (
        <>
            <BrowserRouter>
                <img className="im" src={images} alt="image" />
                <div className="box" >


                    <NavLink style={{ color: "white", margin: "10px", textDecorationLine: "none" }} to="/">Home</NavLink>
                    <NavLink style={{ color: "white", margin: "10px", textDecorationLine: "none" }} to="/content">Content</NavLink>
                    <NavLink style={{ color: "white", margin: "10px", textDecorationLine: "none" }} to="/service">Service</NavLink>
                    <NavLink style={{ color: "white", margin: "10px", textDecorationLine: "none" }} to="/contact">Contact</NavLink>
                    <NavLink style={{ color: "white", margin: "10px", textDecorationLine: "none" }} to="/policy">Policy</NavLink>

                </div>

                <Routes >

                    <Route path="/" element={<Home />} />
                    <Route path="/content" element={<Content />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/policy" element={<Policy />} />

                </Routes>

            </BrowserRouter>

        </>
    )
}
export default Route1