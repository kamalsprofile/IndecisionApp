import React from 'react';
export default class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            err: undefined
        }
    }
    handleAddOption(e) {

        e.preventDefault();

        const textValue = e.target.elements.option.value.trim();
        const err = this.props.handleAddOption(textValue);
        this.setState(function () {
            return {
                err
            }
        })
        e.target.elements.option.value = ''
    }
    render() {
        return (
            <div>
                {this.state.err && <p className="err-message"> {this.state.err} </p>}
                <form className='form' onSubmit={this.handleAddOption}>
                    <input className='form-input' name='option' />
                    <button className="button form-item">Add Option</button>
                </form>
            </div>

        )
    }
}