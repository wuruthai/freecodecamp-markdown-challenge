import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			value: this.defaultValue(),
			mark: ""
		};
		this.handleChange = this
			.handleChange
			.bind( this );
	}
	defaultValue() {
		return "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Onur Irken](https://www.freecodecamp.org/wuruthai)*\n      ";
	}
	createMarkup( value ) {

		return { __html: marked( value ) };
	}
	handleChange( event ) {
		event.preventDefault();
		this.setState( { value: event.target.value } );
		console.log( event.target.value );
	}

	render() {
		return ( <div className="container">
			<div className="row">
				<textarea type="text" rows={10} className="col m-2" onChange={this.handleChange} value={this.state.value}/>
			</div>
			<hr/>
			<div className="row markup ">
				<div className="col m-2" dangerouslySetInnerHTML={this.createMarkup( this.state.value )}/>
			</div>
		</div> );
	}
}
export default App;
ReactDOM.render( <App/>, document.getElementById( "root" ) );
