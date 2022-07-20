import "C:\\Users\\SanjayeJ\\Desktop\\dashboard\\my-app\\src\\Components\\Cards.css";
import React from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards() {
  return (
    <div>
        <div className="carrd">
    <Card border="danger" style={{ width: '14rem' }}>
     
      <Card.Body>
        <Card.Title className="stye" style={{ color: "blue" }}>EARNINGS (MONTHLY)</Card.Title>
        <Card.Text>
       <b>$40,000</b> 
        </Card.Text>
        {/* <FontAwesomeIcon icon="fa-solid fa-calendar" /> */}
         
      </Card.Body>
    </Card>



<Card style={{ width: '14rem' }}>
       
      <Card.Body>
        <Card.Title style={{ color: "green" } }>EARNINGS(ANNUAL)</Card.Title>
        <Card.Text>
       <b>$215,000</b> 
          
        </Card.Text>
         
      </Card.Body>
    </Card>



    <Card style={{ width: '14rem' }}>
       
      <Card.Body >
        <Card.Title style={{ color: "aqua" } } > TASKS</Card.Title>
        <Card.Text>
       <b>50%</b> 
          
        </Card.Text>
         
      </Card.Body>
    </Card>




    <Card style={{ width: '14rem' }}>
       
      <Card.Body>
        <Card.Title style={{ color: "yellow" } }> PENDING REQUESTS</Card.Title>
        <Card.Text>
        <b>18</b>
          
        </Card.Text>
         
      </Card.Body>
    </Card>

    </div>
 
    </div>
    
  );
}

 









export default Cards;