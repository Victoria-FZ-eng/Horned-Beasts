import React from 'react';

import HornedBeasts from './HornedBeasts';
import cards from './data.json';
import { CardGroup } from 'react-bootstrap';

 
//  let renderCards= cards.map((item)=>{
//                 <HornedBeasts title={cards.title} imgurl={cards.image_url} desc={cards.description}/>
                    
//             });

class Main extends React.Component{
    render(){
        return(
           <div >
             <CardGroup>
             
             {
               cards.map((cards)=>{
               return <HornedBeasts  title={cards.title} imgurl={cards.image_url} desc={cards.description} horns={cards.horns} keyword={cards.keyword}/>
                    
            })
             }</CardGroup>
           </div> 

        );
    };
}

export default Main;