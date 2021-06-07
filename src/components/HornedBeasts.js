import React from 'react';

import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';



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

    render(){
        return(
            // <div className='horndiv'>
            //     <h2 className='horn'>{this.props.title}</h2>
            //     <img className='img' className='horn' src={this.props.imgurl} alt="Horned-Beast Photo" />
            //     <p className='horn'>{this.props.desc} </p>
            // </div>
            <div className='horndiv'>
            <Card style={{ width: '18rem' }}>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Img src={this.props.imgurl} alt="Horned-Beast Photo" onClick={this.favorites} />
              <Card.Body>
              <Card.Text>
              <p>Number of Horns: {this.props.horns} </p>
              <p> {this.state.numberOfVotes} ❤️ Favorited</p>
              <p>{this.props.desc}</p>
              <p>Keyword: {this.props.keyword}</p>
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
            </div>
            
        )
    }
}

export default HornedBeasts;