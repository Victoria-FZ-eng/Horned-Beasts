import React from 'react';


class HornedBeasts extends React.Component{
    render(){
        return(
            <div className='horndiv'>
                <h2 className='horn'>{this.props.title}</h2>
                <img className='img'  src={this.props.imgurl} alt="Horned-Beast Photo" />
                <p className='horn'>{this.props.desc} </p>
            </div>
        )
    }
}

export default HornedBeasts;