// using this mode : https://react-bootstrap.github.io/components/modal/ .

import React from 'react';


import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Cards from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.scss';

class SelectedBeast extends React.Component{
   

    render(){
        return(
            
            <Modal.Dialog >
            <Modal.Header >
              <Modal.Title> {this.props.name} </Modal.Title>
            </Modal.Header>
          
            <Modal.Body>
              <img src={this.props.img} alt="Image of the Beast" />
              <p>{this.props.love}❤️</p>
              <p>How many horns? {this.props.horn}</p>
              <p>{this.props.description} </p>
              
            </Modal.Body>
          
            <Modal.Footer>
              {/* <Button variant="primary">OK</Button> */}
              <Button variant="secondary" onClick={(this.props.unselectedCard)}>Close</Button>
            </Modal.Footer>
          </Modal.Dialog>
           
        )
    }
}

export default SelectedBeast;