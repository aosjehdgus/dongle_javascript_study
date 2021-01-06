import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';

class Head extends Component{
  render(){
    return(

      <header>
        <h1> WEB </h1>
        World Wide Web!!
      </header>

    );
  }
}

class TOC extends Component{
  render(){
    return(
      <nav>
        <ul>
            <li><a href="1.html">HTML</a></li>
            <li><a href="2.html">CSS</a></li>
            <li><a href="3.html">JavaScript</a></li>

        </ul>
      </nav>
    );

  }
}

class Contents extends Component{
  render(){
    return(
      <article>
      <h2> HTML </h2>

      HTML is HyperText Markup Language.
      </article>
    );
  }
}


class App extends Component{
  render(){
    return (
      <div className="App">
        <Head> </Head>
        <TOC> </TOC>
        <Contents></Contents>
      </div>
    );
  }
}


export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

