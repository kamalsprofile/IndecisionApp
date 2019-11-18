import React, { Component } from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';


export default class Indecision extends React.Component {
    constructor(props) {
        super(props);
        this.handlePick = this.handlePick.bind(this);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this)
        this.state = {
            options: [],
            selectedOption: undefined
        }
    }

    componentDidMount() {
        const jsonoptions = localStorage.getItem('options');
        const options = JSON.parse(jsonoptions)
        if (options) {
            this.setState(() => {
                return {
                    options
                }
            })
        }

    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const jsonOptions = JSON.stringify(this.state.options);
            localStorage.setItem('options', jsonOptions);
        }


    }

    handlePick() {
        const option = Math.floor(Math.random() * this.state.options.length)
        this.setState(function () { return { selectedOption: this.state.options[option] } });
    }

    handleRemoveAll() {
        this.setState(function () {
            return {
                options: []
            }
        })
    }
    handleCloseModal() {
        this.setState(() => { return { selectedOption: undefined } });
    }
    handleDeleteOption(optionToDelete) {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((item) => {
                    return item != optionToDelete
                })
            }

        })
    }

    handleAddOption(option) {
        if (!option) {
            return 'Please enter a valid option';
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'This option is already exist';
        }
        const options = this.state.options.concat(option);
        this.setState(function () {
            return {
                options
            }
        })
    }
    render() {
        const title = 'Indecision';
        const subTitle = 'Put your life in the hand of your computer.';
        return (
            <div>

                <Header
                    title={title}
                    subTitle={subTitle} />
                <div className="container">
                    <Action hasOption={this.state.options.length > 0} handlePick={this.handlePick} />
                    <div className="widget">
                        <Options handleDeleteOption={this.handleDeleteOption}
                            hasOption={this.state.options.length > 0}
                            handleRemoveAll={this.handleRemoveAll}
                            options={this.state.options} />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>

                </div>

                <OptionModal handleCloseModal={this.handleCloseModal} selectedOption={this.state.selectedOption} />
            </div>

        )
    }
}