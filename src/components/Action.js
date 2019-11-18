import React, { Component } from 'react';


export default class Action extends React.Component {
    render() {
        return (
            <div>
                <button
                    className="big-button"
                    disabled={!this.props.hasOption}
                    onClick={this.props.handlePick}>What should I do
                </button>
            </div>
        )
    }
}