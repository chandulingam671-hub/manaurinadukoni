
Action: file_editor create /app/frontend/src/App.js --file-text "import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Breeds } from './components/Breeds';
import { Hygiene } from './components/Hygiene';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';
import './App.css';

function App() {
  return (
    <div className=\"App\">
      <Header />
      <main>
        <Hero />
        <About />
        <Breeds />
        <Hygiene />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
"
Observation: Overwrite successful: /app/frontend/src/App.js
