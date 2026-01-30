import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactForm from './contactForm'

function App() {
  return (
    <div>

      <header style={{ backgroundColor: "#2c3e50", color: "white", padding: "20px" }}>
       
        <h1>Welocme to our school</h1>
        <p>Green Valley Public School</p>
        <p>Knowledge • Discipline • Success</p>
      </header>

      <nav style={{ backgroundColor: "#34495e", padding: "10px" }}>
        <a href="#" style={{ color: "white", marginRight: "15px" }}>Home</a>
        <a href="#" style={{ color: "white", marginRight: "15px" }}>About</a>
        <a href="#" style={{ color: "white", marginRight: "15px" }}>Admissions</a>
        <a href="#" style={{ color: "white" }}>Contact</a>
      </nav>

      <main style={{ padding: "20px" }}>
        <h2>Welcome to Our School</h2>
        <p>
          Green Valley Public School provides quality education with experienced
          teachers and modern facilities.
        </p>

        <h3>Our Facilities</h3>
        <ul>
          <li>Smart Classrooms</li>
          <li>Computer Lab</li>
          <li>Library</li>
          <li>Sports Ground</li>
        </ul>
      </main>

      <footer style={{ backgroundColor: "#2c3e50", color: "white", padding: "10px" }}>
        <p>© 2026 Green Valley Public School</p>
      </footer>
      <ContactForm /> 
    </div>

    

  );
}

export default App;
