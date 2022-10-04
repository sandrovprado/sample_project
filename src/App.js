import logo from './logo.svg';
import './App.css';

import {About,Navbar,Skills} from './container'; //from index.js

function App() {
  return (
    <>
      <p>hello!</p>
      <h1>This is a new feature</h1>
      <h2>This is another feature</h2>
      <h3>3rd feature has been added</h3>
      <h2>This is from the new-features branch</h2>
      <Navbar />
      <About />
      <Skills />

    </>
  );
}

export default App;
