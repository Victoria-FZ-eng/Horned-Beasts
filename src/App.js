import React from 'react';


import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main'
import SelectedBeast from './components/SelectedBeast';
import cards from './components/data.json';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'





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

    })}

  close = () =>{
    this.setState({
      show : false,

    })}


    
filter=(event)=>{
  event.preventDefault();
  // console.log(event.target.value);
  if (event.target.value === '1'){
    let filteredBeasts= cards.filter(beast => beast.horns === 1);
    // console.log(filteredBeasts);
    this.setState({
      cards: filteredBeasts,
    });
  }
  if (event.target.value === '2'){
    let filteredBeasts= cards.filter(beast => beast.horns === 2);
    // console.log(filteredBeasts);
    this.setState({
      cards: filteredBeasts,
    });
  }
  if (event.target.value === '3'){
    let filteredBeasts= cards.filter(beast => beast.horns === 3);
    // console.log(filteredBeasts);
    this.setState({
      cards: filteredBeasts,
    });
  }
  if (event.target.value === '100'){
    let filteredBeasts= cards.filter(beast => beast.horns === 100);
    // console.log(filteredBeasts);
    this.setState({
      cards: filteredBeasts,
    });
  }
  if (event.target.value === '0'){
    let filteredBeasts = cards;
    // console.log(filteredBeasts)
    this.setState({
      cards: filteredBeasts,
    });
  }
  }
  

    render(){
      return(
        <div className='rendering'>
  
          <Header />
  
          <Form >
                      <Form.Group >
                          <Form.Label>Select the Number Of Horns . . . </Form.Label>
                          <Form.Control as="select" size="lg" onChange={this.filter}>
                             <option value="0">Show All Beasts</option>
                             <option value="1">One Horn ( 1 ) </option>
                             <option value = "2">Two Horns ( 2 ) </option>
                             <option value="3">Three Horns ( 3 ) </option>
                             <option value="100">One-Hundred Horns ( 100 ) </option>
                          </Form.Control>
                      </Form.Group>
  
            </Form>
  
          <Main pop={this.popUp} cards={this.state.cards}/>
          <SelectedBeast selectedBeast={this.state.selectedBeast}  show={this.state.show} close={this.close} />
          <Footer />
  
        </div>
        
        
      )
    }
  
  }


  

  


export default App;