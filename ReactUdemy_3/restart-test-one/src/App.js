import React from  'react'
import Search from './Components/Search';
import Counter from './Components/Counter';
import Blog from './Components/Blog';
import Accordion from './Components/Accordion';
import './App.css';


function App() {

  return (
    <div className="App">
      <Search />
      <Counter />
      <Blog />
      <Accordion />
    </div>
  );
}

export default App;
