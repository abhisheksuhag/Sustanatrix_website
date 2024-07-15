import './App.css';
// import WhatWeDo from './components/whatWeDo';
// import Header from './components/Header';
import Modules from './components/Modules';
import Features from './components/Features';
import DataSecurity from './components/DataSecurity';
import BackgroundVideo from './components/BackgroundVideo';
// import CTAsection from './components/CTAsection';
// import Footer from './components/Footer';
import IconScroller from './components/IconScroller';
// import WhoWeAre from './components/whoWeAre';


function App() {
  return (
    
    <main className='Relative overflow-hidden'>
      {/* <Header /> */}
      <section><BackgroundVideo /></section>
      <section><Modules /></section>
      <section><Features /></section>
      <section><DataSecurity /></section>
      <section><IconScroller /></section>
     
      {/* <section><CTAsection /></section>
      <section><Footer /></section>

      <WhatWeDo /> */}
      {/* <WhoWeAre /> */}
    </main>
    
  );
}

export default App;
