import { useState } from 'react';



const ErrorHandlerComponent = (props) => {
    
    return (
        <div className="error-window-pup-up">
            <div className='error-window'>
                <h3>You have encountered an error...</h3>
                <p>{props.errorMessage}</p>
                <button className="btn-close-error-window" onClick={() => props.setError(false)}>OK</button>
            </div>
        </div>
    )
}

export default ErrorHandlerComponent;