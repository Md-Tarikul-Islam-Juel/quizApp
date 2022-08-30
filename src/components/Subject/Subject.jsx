import React from 'react';
import Card from 'react-bootstrap/Card';
import './Subject.css';

function Subject(props) {
    const { noq, title, image } = props;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img className="card-img-div" variant="top" src={image} />
            <Card.Body>
                <Card.Text>{title}</Card.Text>
                <Card.Text>
                    <div className="d-flex justify-content-between">
                        <span>{noq} Questions</span>
                        <span>Total points: {noq * 5}</span>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Subject;
