import React from 'react';

import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';





class HornedBeasts extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            numberOfVotes : 0

        }
    }



    favorites = () => {
        this.setState({
            numberOfVotes : this.state.numberOfVotes+1
        })
    }

     update=()=>{

        this.props.event(this.props.title)

     }    

    render(){
        return(
            
            <div className='horndiv'>
            <Card style={{ width: '18rem' }}>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Img src={this.props.imgurl} alt="Horned-Beast Photo" onClick={this.favorites} />
              <Card.Body>
              <Card.Text>
              <p>Number of Horns: {this.props.horns} </p>
              <p> {this.state.numberOfVotes} ❤️ Favorite</p>
              <p>{this.props.desc}</p>
              <p>Keyword: {this.props.keyword}</p>
              </Card.Text>
              <Button onClick={this.update}>Pop</Button>
            
              </Card.Body>
            </Card>
            </div>
            
        )
    }
}

export default HornedBeasts;