import React from 'react';
import Option from './Option';

export default (props) => {

    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your oprtions</h3>
                <button
                    className="button button--link"
                    onClick={props.handleRemoveAll}>
                    Remove All
            </button>
            </div>
            <div className="widget-options">
                {props.hasOption ?
                    <ol className="widget-options-list">
                        {props.options.map(function myFunction(option) {
                            return (<Option {...props}
                                key={option} option={option}>{option}</Option>)
                        })}
                    </ol> :
                    <div className="widget-pTag">
                        <p  >Please add option to get started</p>
                    </div>
                }
            </div>


        </div>
    )
}