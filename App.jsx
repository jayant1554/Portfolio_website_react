import React from 'react';
import Header from './Header.jsx'; // Adjust the path accordingly
import About from './About.jsx'; // Adjust the path accordingly
import Interests from './Intrests.jsx'; // Adjust the path accordingly
import Projects from './Projects.jsx'; // Adjust the path accordingly
import Contact from './Contact.jsx'; // Adjust the path accordingly
import './index.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Interests />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
