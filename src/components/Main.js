import React from 'react';

import HornedBeasts from './HornedBeasts';
import cards from './data.json';
import { CardGroup } from 'react-bootstrap';

 

class Main extends React.Component{

    render(){
        return(
           <div >
             <CardGroup>
             
             {
               cards.map((cards)=>{
               return <HornedBeasts  title={cards.title} imgurl={cards.image_url} desc={cards.description} horns={cards.horns} keyword={cards.keyword} event={this.props.selectedCard}/>
                    
            })
             }</CardGroup>
           </div> 

        );
    };
}

export default Main;