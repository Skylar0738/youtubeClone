//videos list doesn't interact with user, so just needs to be class. 
import React from 'react';
import VideoListItem from './video_list_item';

const VideoList =(props) =>{
	const videoItems = props.videos.map((video) =>{
		return <VideoListItem 
		onVSelect={props.onVideoSelect}
		key={video.etag} 
		video={video}/>

	});
	return (
		<ul className="col-md-4 list-group">
		{videoItems}

		</ul>
		);
};

export default VideoList