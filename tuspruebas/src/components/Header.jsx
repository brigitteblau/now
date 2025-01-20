import React, { useState } from 'react';
import "../css/layout/header.css";
const Header = () => {
    return (
        <div className="header">
            <img src="/logo.png" alt="logo a++"/>
            <h1 className="titulo">TUS PRUEBAS</h1>
            
            <div className="header-icons">
                <div className="heart-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.624 4.42399C3.965 5.18199 2.75 6.98599 2.75 9.13699C2.75 11.334 3.65 13.028 4.938 14.48C6.001 15.676 7.287 16.668 8.541 17.634C8.83967 17.864 9.13467 18.0933 9.426 18.322C9.952 18.737 10.421 19.1 10.874 19.365C11.327 19.63 11.69 19.75 12 19.75C12.31 19.75 12.674 19.63 13.126 19.365C13.579 19.1 14.048 18.737 14.574 18.322C14.8653 18.0927 15.1603 17.8637 15.459 17.635C16.713 16.667 17.999 15.676 19.062 14.48C20.351 13.028 21.25 11.334 21.25 9.13699C21.25 6.98699 20.035 5.18199 18.376 4.42399C16.764 3.68699 14.598 3.88199 12.54 6.02099C12.47 6.09358 12.3862 6.15132 12.2934 6.19075C12.2006 6.23019 12.1008 6.25051 12 6.25051C11.8992 6.25051 11.7994 6.23019 11.7066 6.19075C11.6138 6.15132 11.53 6.09358 11.46 6.02099C9.402 3.88199 7.236 3.68699 5.624 4.42399ZM12 4.45999C9.688 2.38999 7.099 2.09999 5 3.05899C2.786 4.07399 1.25 6.42599 1.25 9.13799C1.25 11.803 2.36 13.837 3.817 15.477C4.983 16.79 6.41 17.889 7.671 18.859C7.95767 19.079 8.233 19.293 8.497 19.501C9.01 19.905 9.56 20.335 10.117 20.661C10.674 20.987 11.31 21.251 12 21.251C12.69 21.251 13.326 20.986 13.883 20.661C14.441 20.335 14.99 19.905 15.503 19.501C15.767 19.293 16.0423 19.079 16.329 18.859C17.589 17.889 19.017 16.789 20.183 15.477C21.64 13.837 22.75 11.803 22.75 9.13799C22.75 6.42599 21.215 4.07399 19 3.06099C16.901 2.10099 14.312 2.39099 12 4.45999Z" fill="#F24822"/>
</svg>

                </div>
            </div>
        </div>
    );
};

export default Header;
