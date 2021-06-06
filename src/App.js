import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main'

class App extends React.Component {
  render(){
    return(
      <div>
        <p>lets start</p>
        <Header />
        <Main />
        <Footer />

      </div>
      
      
    )
  }
}

export default App;