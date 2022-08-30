import React from 'react';
import Form from 'react-bootstrap/Form';
import './CheckBox.css';

function CheckBox() {
    return (
        <>
            <Form>
                <Form.Check
                    className="checkBox"
                    type="checkbox"
                    id="custom-switch"
                    label="Check this switch"
                />
            </Form>
        </>
    );
}

export default CheckBox;
