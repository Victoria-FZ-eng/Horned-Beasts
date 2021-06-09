import React from 'react';


import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main'
import SelectedBeast from './components/SelectedBeast';
import cards from './components/data.json';
import { CardGroup } from 'react-bootstrap';



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
  }
  
  popUp =() =>{
    this.setState({
      show : true,
    })
  }

  close = () =>{
    this.setState({
      show : false,


      
      name:'Beast Name',
      img : 'URL',
      love : 0,
      description : 'Describing',
      horn: 0,
    })
  }


  

  render(){
    return(
      <div className='rendering'>

        <Header />
        <CardGroup>
        { 
        cards.map((cards)=>{
          return (
            <Main pop={this.popUp} title={cards.title} image={cards.image_url} desc={cards.description} horns={cards.horns} keyword={cards.keyword}/>
          )
        })}
        </CardGroup>
        
        <SelectedBeast name={this.state.name} img={this.state.img} love={this.state.love} description={this.state.description} horn={this.state.horn}  show={this.state.show} close={this.close} />
    
        <Footer />

      </div>
      
      
    )
  }
}

export default App;