import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <p>&copy; 2024 Nathaniel Gonzales. All rights reserved.</p>
            <ul>
                <li>
                    <a 
                        href="https://github.com/nanotechain" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </li>
                <li>
                    <a 
                        href="mailto:your.micrognathan141@gmail.com"
                    >
                        Email
                    </a>
                </li>
               </ul>
        </footer>
    );
}

export default Footer;
