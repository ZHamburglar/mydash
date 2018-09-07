import React, { Component } from 'react';

import './MultiSelectDropdown.css';


var idInc = 0

var keyHandlers = {
	38: 'handleUpKey',
	40: 'handleDownKey',
	32: 'handleSpaceKey',
	13: 'handleEnterKey',
	27: 'handleEscKey',
	74: 'handleDownKey',
	75: 'handleUpKey'
}


function interceptEvent(event) {
	if (event) {
		event.preventDefault();
		event.stopPropagation();
	}
}

export default class MultiSelectDropDown extends Component {
	static defaultProps = {
	    closeText: 'Close',
	    clearText: 'Remove selection'
    }
    
    state = {
            id: 'react-select-box-' + (++idInc),
			open: false,
			focusedIndex: -1,
			pendingValue: []
    }
      
    // STILL IN PROGRESS
    toggleOpenClose(event) {
        interceptEvent(event)
        // console.log('this is the new state', this.state)
        // this.setState({open: !this.state.open});
        
		// if(this.state.open) {
		// 	return this.setState({open: false})
        // }
        
		// this.handleOpen()
	}

    isMultiple() {
		return String(this.props.multiple) === 'true'
	}
    
    isSelected(value) {
		if (this.isMultiple()) {
			return this.value().indexOf(value) !== -1
		}
		return this.value() === value
    }
    
	options() {
		var options = []
		React.Children.forEach(this.props.children, option => {
			options.push({
				value: option.props.value,
				label: option.props.children
			})
		})
		return options
	}

	label() {
		this.options()
		var selected = this.options()
			.filter(option => this.isSelected(option.value))
			.map(option => option.label)
		return selected.length > 0 ? selected.join(', ') : this.props.label
    }

    clickingOption= false

    blurTimeout= null

    handleFocus() {
		clearTimeout(this.blurTimeout)
	}

    handleBlur() {
		clearTimeout(this.blurTimeout)
		this.blurTimeout = setTimeout(this.handleClose, 0)
    }

    //THIS IS THE ONE THAT NEEDS TO BE FIXED NEXT

    // handleChange(val, cb) {
	// 	return event => {
	// 		this.clickingOption = false
	// 		interceptEvent(event)
	// 		if (this.isMultiple()) {
	// 			var selected = []
	// 			if (val != null) {
	// 				selected = this.value().slice(0)
	// 				var index = selected.indexOf(val)
	// 				if (index !== -1) {
	// 					selected.splice(index, 1)
	// 				} else {
	// 					selected.push(val)
	// 				}
	// 			}
	// 			this.updatePendingValue(selected, cb) || this.props.onChange(selected)
	// 		} else {
	// 			this.updatePendingValue(val, cb) || this.props.onChange(val)
	// 			this.handleClose()
	// 			this.refs.button.getDOMNode().focus()
	// 		}
	// 	};
	// }
    
    handleClose(event) {
		interceptEvent(event)
		if(!this.clickingOption) {
			this.setState({open: false, focusedIndex: -1})
		}
		if (this.changeOnClose()) {
			this.props.onChange(this.state.pendingValue)
		}
    }

    handleMouseDown() {
		this.clickingOption = true
	}

    renderCloseButton() {
		if (this.isMultiple() && this.props.closeText) {
            return (         
                <button
                    onClick={this.handleClose}
                    className='react-select-box-close'
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                >
                    {this.props.closeText}
                </button>
            )
		}
	}
    
    renderOptionMenu() {
		let className = 'react-select-box-options'
		if (!this.state.open) {
			className += ' react-select-box-hidden'
        }
        return (
        <div
            className ='react-select-box-options'
            // className
            ref='menu'
            aria-hidden= "true"
            tabIndex="0"
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
        >
            <div className= 'react-select-box-off-screen'>
            {this.options().map(this.renderOption)}
            </div>
            {this.renderCloseButton()}
        </div>
        )
    }
    
    renderOption(option, i) {
		var className = 'react-select-box-option'
		if (i === this.state.focusedIndex) {
			className += ' react-select-box-option-focused'
		}
		if (this.isSelected(option.value)) {
			className += ' react-select-box-option-selected'
        }
        return (
            <a
                onClick={this.handleChange(option.value)}
                onMouseDown={this.handMouseDown}
                href="#"
                // id= {this.state.id} + '-' + i
                // className
                className = 'react-select-box-option'
                tabIndex="-1"
                key= {option.value}
                onBlur={this.handleBlur}
                onFocus={this.handleFocus}
            >
                {option.label}
            </a>
        )
		// return a(
		// 	{
		// 		id: this.state.id + '-' + i,
		// 		href: '#',
		// 		onClick: this.handleChange(option.value),
		// 		onMouseDown: this.handleMouseDown,
		// 		className,
		// 		tabIndex: -1,
		// 		key: option.value,
		// 		onBlur: this.handleBlur,
		// 		onFocus: this.handleFocus
		// 	},
		// 	option.label
		// );
	}

	render() {
		// let className = 'react-select-box-container'
		// if (this.props.className) {
		//   className += ' ' + this.props.className
		// }
		// if (this.isMultiple()) {
		//   className += ' react-select-box-multi'
		// }
		// if (!this.hasValue()) {
		//   className += ' react-select-box-empty'
		// }

		return (
			<div>
				<div 
				>
					<button
						ref='button'
                        className="react-select-box"
                        onClick={this.toggleOpenClose}
						aria-hidden= "true"
						tabIndex="0"
					>
						<div className="react-select-box-label">
							{this.label()}
						</div>
					</button>
                    {this.renderOptionMenu()}


				</div>
			</div>
		)
	}
}

{/* <div>
    <div 
                    onKeyDown= {this.handleKeyDown}
                    className= className
                >
                    <button
                        id={this.state.id}
                        // There is a new way of doing refs: https://www.leighhalliday.com/using-refs-in-react
                        ref='button'
                        className="react-select-box"
                        onClick={this.toggleOpenClose}
                        onBlur={this.handleBlur}
                        aria-hidden= "true"
                        tabIndex="0"


                    >
                        <div className="react-select-box-label">
                            {this.label()}
                        </div>
                    </button>
                    {this.renderOptionMenu()}
                    {this.renderClearButton()}
                    {this.renderNativeSelect()}
                </div>
            </div> */}


// There is a new way of doing refs: https://www.leighhalliday.com/using-refs-in-react
// https://github.com/instructure-react/react-select-box/blob/master/lib/select-box.js
// https://github.com/instructure-react/react-select-box/blob/master/example/example.js
// http://instructure-react.github.io/react-select-box/