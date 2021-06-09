import React from 'react';

import HornedBeasts from './HornedBeasts';
import cards from './data.json';


 

class Main extends React.Component{

  
  


    render(){
        return(
           <div >
  
             <HornedBeasts  title={this.props.title} imgurl={this.props.image} desc={this.props.desc} horns={this.props.horns} keyword={this.props.keyword} show={this.props.show} event={this.props.pop}  />
                
           </div> 

        );
    };
}

export default Main;