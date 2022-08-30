import React from 'react';
import coderMan from '../../img/coder-man.webp';
import './Illustration.css';

function Illustration() {
    return (
        <div className="IllustrationImage">
            <img src={coderMan} alt="coderMan" />
        </div>
    );
}

export default Illustration;
