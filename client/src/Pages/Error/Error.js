import React, { Component } from 'react';
import error from '../../Assets/Images/error-image.png';
import './Error.scss'

export class Error extends Component {
    render() {
        return (
            <div>
                <img className="errorImage" src={error} alt="error" />
            </div>
        )
    }
}

export default Error;
