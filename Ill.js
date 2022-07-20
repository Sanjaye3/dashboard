import React from "react";
import "C:\\Users\\SanjayeJ\\Desktop\\dashboard\\my-app\\src\\Components\\Ill.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Ill(){
return(

    <div className="qwe">
        <Card className="illus">
      <Card.Header style={{ color: 'blue' }}>Illustrations</Card.Header>
      <Card.Body>
      <Card.Img src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg" alt="Card image" />
       
        <Card.Text style={{ color: 'grey' }}>
        Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!
        </Card.Text>
        <Card.Link href="#">Browse Illustrations on unDraw →</Card.Link>
        
      </Card.Body>
    </Card>


    <Card className="Dev">
      <Card.Header style={{ color: 'blue' }}>Development Approach</Card.Header>
      <Card.Body>
       
       
        <Card.Text style={{ color: 'grey' }}>
        SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.
        </Card.Text>


        <Card.Text style={{ color: 'grey' }}>
        Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.
        </Card.Text>
        
      </Card.Body>
    </Card>





    </div>
)
}















export default Ill;