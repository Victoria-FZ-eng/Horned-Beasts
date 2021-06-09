import React from 'react';

import HornedBeasts from './HornedBeasts';
import { CardGroup } from 'react-bootstrap';

 

class Main extends React.Component{

  
  


    render(){
        return(
           <div >
             <CardGroup>
             
             {
               this.props.cards.map((cards)=>{
               return(
                 <div >
                   <HornedBeasts  title={cards.title} imgurl={cards.image_url} desc={cards.description} horns={cards.horns} keyword={cards.keyword} show={this.props.show} event={this.props.pop}  />
                   </div>
               ) 
               
                    
            })
             }</CardGroup>
           </div> 

        );
    };
}

export default Main;





