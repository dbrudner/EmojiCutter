import React from 'react';
import packageJson from '../../package.json';


const Footer = () => {
    return (
        <div>
            <h3>Made by Dima Mukhin 
                <a href='https://github.com/DimaMukhin' rel="noopener noreferrer" target='_blank'>GitHub</a> | 
                <a href='https://linkedin.com/in/dima-mukhin' rel="noopener noreferrer" target='_blank'>LinkedIn</a></h3>
            <p>Alpha {packageJson.version}</p>
        </div>
    );
};

export default Footer;