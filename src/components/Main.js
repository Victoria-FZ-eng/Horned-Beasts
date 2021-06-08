import React from 'react';

import HornedBeasts from './HornedBeasts';
import cards from './data.json';
import { CardGroup } from 'react-bootstrap';

 

class Main extends React.Component{

    handleClicking(){
      this.props.show=true;
    }

    render(){
        return(
           <div >
             <CardGroup>
             
             {
               cards.map((cards)=>{
               return <HornedBeasts  title={cards.title} imgurl={cards.image_url} desc={cards.description} horns={cards.horns} keyword={cards.keyword} event={this.handleClicking}/>
                    
            })
             }</CardGroup>
           </div> 

        );
    };
}

export default Main;