import React from 'react';

class HornedBeasts extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.imgurl} alt="Horned-Beast Photo" />
                <p>{this.props.desc} </p>
            </div>
        )
    }
}

export default HornedBeasts;