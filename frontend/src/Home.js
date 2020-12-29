import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default class Home extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '10rem' }}>
                    <Card.Img variant="top" src="https://assets.gqindia.com/photos/5f5f470e5abcb4976c9f7576/master/pass/A%20still%20from%20Peaky%20Blinders.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                         </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

            </div>
        )
    }
}
