import React from 'react';


const Header = (props) => {
    return (
        <div style={{ position: "fixed", top: "0", width: "100%", zIndex: "1", background: "linear-gradient(to left, rgba(7, 27, 82, 1) 0%, rgba(0, 128, 128, 1) 100%)", borderBottom: "3px solid black" }}>
            {props.children}
        </div>
    );
}

export default Header;
