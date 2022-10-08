import React from 'react';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  return (
    <div>
      <Nav />
      <main className="text-3xl text-gray-400 font-bold">
        <About />
      </main>

    </div>
  );
}

export default App;
