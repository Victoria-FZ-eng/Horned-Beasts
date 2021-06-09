// using this mode : https://react-bootstrap.github.io/components/modal/ .

import React from 'react';


import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Cards from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


class SelectedBeast extends React.Component{


    render(){
        return(

         <>
    
          <Modal show={this.props.show} >
            <Modal.Header >
              <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Card.Img src={this.props.selectedBeast.image_url} alt="Image of the Beast" />
              <p>{this.props.selectedBeast.description} </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.close}>
                Close
              </Button>
              {/* <Button variant="primary" >
                Save Changes
              </Button> */}
            </Modal.Footer>
          </Modal>
          </>
         
           
        )
    }
}

export default SelectedBeast;