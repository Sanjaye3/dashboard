import React from "react";
import "C:\\Users\\SanjayeJ\\Desktop\\dashboard\\my-app\\src\\Components\\ColorCard.css";

import Card from 'react-bootstrap/Card';

function ColorCard() {
  return (
    <div className="sample">
      {[
        'Primary',
        'Secondary',
        'Success',
        'Danger',
        'Warning',
        'Info',
        'Light',
        'Dark',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          
        //   color={white}
          
          style={{ width: '13rem' }}
           
        >
           
          <Card.Body>
            <Card.Title>{variant}   </Card.Title>
            <Card.Text>
              
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}



export default ColorCard;