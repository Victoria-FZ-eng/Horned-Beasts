import React from 'react';


import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main'
import SelectedBeast from './components/SelectedBeast';
import cards from './components/data.json';




class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      
      show: false,
      cards : cards,
      selectedBeast : {},

    }
  }
  
  popUp =(title) =>{
    let selectedBeast = cards.find((beast)=>{
      if (beast.title === title){
        return beast;
      }
    })
    
    this.setState({
      show : true,
      selectedBeast : selectedBeast,

    })
  }

  close = () =>{
    this.setState({
      show : false,

    })
  }


  

  render(){
    return(
      <div className='rendering'>

        <Header />
        
        <Main pop={this.popUp} cards={this.state.cards}/>
        
        <SelectedBeast selectedBeast={this.state.selectedBeast}  show={this.state.show} close={this.close} />
    
        <Footer />

      </div>
      
      
    )
  }
}

export default App;