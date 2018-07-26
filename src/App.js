import React,{Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
//import {robots} from './robots';
import './App.css'
import Scroll from './Scroll'

class App extends Component {
	constructor(){
		super()
		this.state = {
			robots: [] ,
	        searchfield: ''
		}
	}

componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users}));
}	

onSearchChange = (event) =>{
	//console.log(event.target.value);
	this.setState({searchfield:event.target.value })
	
	}
	//console.log(filteredRobots);


	render(){
		const filteredRobots = this.state.robots.filter(robot => {
		return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	})
		//returns robots that includes string
		if(this.state.robots.length === 0){
			return <h1>LOADING</h1>
		}else{
			return(
		    <div className='tc'>
		       <h1 className ='f1' >RoboFriends</h1> 
		       <SearchBox searchChange={this.onSearchChange}/>
			   <Scroll>
			   		<CardList robots = {filteredRobots}/>
				</Scroll>
			</div>   
	  
	  		);
	 	}
    }
}

export default App;