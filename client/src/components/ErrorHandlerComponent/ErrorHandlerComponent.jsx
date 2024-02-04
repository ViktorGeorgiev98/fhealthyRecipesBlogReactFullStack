import { useState } from 'react';



const ErrorHandlerComponent = (props) => {
    
    return (
        <div className="error-window-pup-up">
            <h3>You have encountered an error...</h3>
            <p>{props.errorMessage}</p>
            <button className="btn-close-error-window" onClick={() => props.setError(false)}>OK</button>
        </div>
    )
}

export default ErrorHandlerComponent;