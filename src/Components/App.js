import React from 'react';
import projectData from '../project-data';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Project from './Project';
import Footer from './Footer';
import dataProject from '../project-data';


const date = new Date().getFullYear();

function App() {
  return (
    <div>
   <Header />
   <About />
   <div class="wrapper" id="Projects">
    <div class="container section">
       <div class="details">
          <h2>Projects</h2>
       </div>
    </div>
    <div class="container">
       <div class="grid-3">
       {dataProject.map(data => {
         return <Project
            key={data.key} 
            link={data.imgUrl} 
            image={data.location} 
            details={data.title} />
       })}
       </div>
    </div>
 </div>

   <Contact />
   <Footer year={date} />
   </div>
  );
}

export default App;
