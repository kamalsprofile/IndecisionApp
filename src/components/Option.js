import React from 'react';

export default (props) => {

    return (
        <div className="widget-option">
            <li>{props.option}</li>
            <button
                className="button button--link"
                onClick={(e) => { props.handleDeleteOption(props.option) }}
            >
                Delete
            </button>
        </div>
    )
}