import React from 'react';


import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main'
import SelectedBeast from './components/SelectedBeast';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      name:'Beast Name',
      img : 'URL',
      love : 0,
      description : 'Describing',
      horn: 0,
      show: false,
    }

    this.selectedCard = this.selectedCard.bind(this);
    
  }
  


  selectedCard=()=>{
    if (this.state.show = true){
      return <SelectedBeast name={this.state.name} img={this.state.img} love={this.state.love} description={this.state.description} horn={this.state.horn} />
    }
    else {
      return null;
    }
  }
   

  render(){
    return(
      <div className='rendering'>

        <Header />
        <Main />
        
        <Footer />

      </div>
      
      
    )
  }
}

export default App;