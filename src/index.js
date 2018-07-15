import _ from'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


//create a new component. This component should produce some HTML. 
//Always make one component per file. const app is funtional compoenet used
//mostly to parse out jsx 
//parent component will be responsible for fetching the data. 

const API_KEY = 'AIzaSyDUCq3l8PIvtK7gWdlLUhmVoshI0nt5Wdg';


//testing the api, need to pass an object
// YTSearch({key: API_KEY, term: "sean paul"}, function (data) {
// 	console.log(data);
// });

// const app converted from fundtional component to keep track of state

class App extends Component{
	constructor(props){
		super(props);
		//multiple intializer to the state
		this.state = {videos: [],
			selectedVideo: null
		};
		this.videoSearch('dj khaled');
	}

	videoSearch(term){
		YTSearch({key: API_KEY, term:term}, (videos) => {
		// this.setState({videos:dataorange});// in es6 if key and value same, you write the condense the code further.
		this.setState({
			videos: videos,
			selectedVideo: videos[0]
			});
		})
	}
			// <SearchBar onSearchTermChange={term =>this.videoSearch(term)}/>
	render(){
		const videoSearch=_.debounce((term) => {this.videoSearch(term) }, 300)
		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch}/>
				<VideoDetail video= {this.state.selectedVideo}/>
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos}/>
			</div>
		);
	};
};


			// functional component
			// const App = ()=>{
			// 	return (
			// 		<div>
			// 			<SearchBar />
			// 		</div>
			// 	);
			// }
//take this component generated HTML and put on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));



