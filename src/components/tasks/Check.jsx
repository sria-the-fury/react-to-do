import React from 'react';

const Check = ({ checked, onClick }) => {
    return (
        checked ?
            <span className="material-icons text-warning" style={{cursor: "pointer"}} onClick={onClick}>check_circle</span>
            :  <span className="material-icons text-light" style={{cursor: "pointer"}} onClick={onClick}>check_circle</span>
    );

}

export default Check;