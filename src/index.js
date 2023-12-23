import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

//Pages
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import LatestNews from "./pages/Latest-news";
import Layout from "./pages/Layout"; 
import NotFound from "./pages/Not-found";// shares common content on all pages such as nav menu

const classNameFunc = ({ isActive }) => (isActive ? "active_link" : "");

//Routing the different pages
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}/> 
      <Route index element={<Home /> } />
      <Route path="blog" element={<Blog />}/>
      <Route path="contact" element={<Contact />}/>
      <Route path="gallery" element={<Gallery />}/>
      <Route path="latest-news" element={<LatestNews />}/>
      <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);