import React from 'react';
import './Card.css';
import {Button} from 'react-bootstrap';

class Card extends React.Component{
    render(){
        const{title, body, id, deleteItem}= this.props
        return(
            <div className="card">
              <header className="card-header">
                  <h1>{title}</h1>
              </header>
              <section>
                  <p>{body}   </p>
                  <Button variant="primary"> click</Button>
              </section>
              
              <footer>
              <Button onClick={()=> deleteItem(id)} className="btn-danger" > delete</Button> 
              </footer>
            </div>
           
        );
    }
}
export default Card;