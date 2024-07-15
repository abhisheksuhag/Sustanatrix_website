import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from './components/ContactPage.jsx';
import Header from './components/Header.jsx';
import CTAsection from "./components/CTAsection.jsx";
import Footer from "./components/Footer.jsx";
import WhatWeDo from './components/whatWeDo.jsx';
import WhoWeAre from './components/whoWeAre.jsx';
import ChatBot from './components/ChatBot.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <ChatBot />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contactPage" element={<ContactPage />} />
        <Route path="/whatWeDo" element={<WhatWeDo />} />
        <Route path="/whoweAre" element={<WhoWeAre />} />

      </Routes>
      <CTAsection />
      <Footer />
    </Router>
  </React.StrictMode>
);
