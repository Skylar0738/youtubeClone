import React, { Component} from 'react';

// const Component = React.Component; - same as { component in the above statement}


//functional component - always start app with functional comp. then change to class if needed. 
// const SearchBar = () => {
// 	return <input />
// };

//class based component - ability to provide input to other areas of the app
//each class has it's based state object and it state changes then it render itself and any childrens
//state need to be intialized. only class based compnents have state. 


export default class SearchBar extends Component{
	constructor(props) { 
		super(props);
		this.state = { term:''};

	}

	render(){//need to use render to define methods and also needs to return with jsx
		// return <input onChange={this.onInputChange}/>; //onChange refers to the react event property
		return (
		<div className="search-bar">
			<input
			// setting the value become controled component
			value={this.state.term}
		 	// onChange={event => this.setState({ term: event.target.value})}/>
		 	onChange={event => this.onInputChange(event.target.value)} />
	
		</div>

		// Value of the input:{this.state.term} 
		//event handler and pass it to the input to monitor
		// onInputChange(event){
		// 	console.log(event.target.value);
		// }
		
		);
	}

	  onInputChange(term){
	  	this.setState({term});
	  	this.props.onSearchTermChange(term);
	  }
}
