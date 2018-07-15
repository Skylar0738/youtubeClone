import React from 'react';

const VideoListItem =({video, onVSelect}) =>{
	// const video = props.video; const video = props.onVSelect same above {video} in argument
	//console.log(video);
	const imageUrl = video.snippet.thumbnails.default.url;

	return(
		<li onClick={() =>onVSelect(video)} className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl}/>
				</div>
				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>	
			</div>
		</li>



		);
};

export default VideoListItem