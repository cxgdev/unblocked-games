videos 		= {};
vid_id 		= 10000;
lastVideo 	= undefined;

function new_id()
{
	vid_id ++;
	return "v"+vid_id;
}

function video_create()
{
	var video = document.createElement('video');
	var id = new_id();
	video.setAttribute('id',id);
	video.setAttribute('autoplay', "autoplay");
	
	video.style.display = "none";
	video.style.position = "fixed";
	video.style.zIndex = 10000;
	videos[id] = video;
	
	video.addEventListener('ended', video_event, false);
	video.addEventListener('loadeddata', video_event, false);
	video.addEventListener('play', video_event, false);
	video.addEventListener('click', show_armor_games);
	
	lastVideo = video;
	document.body.appendChild(video);
	return id;
}

function show_armor_games() {
	window.open("http://armor.ag/MoreGames","_self")
}

function video_event(e) {
	console.log(e.type);
	switch (e.type) {
		case "loadeddata":
		break;
		
		
		case "ended":
		lastVideo.pause();
		lastVideo.src ="";
		document.body.removeChild(lastVideo);
		break;
	}
	gmCallback.game_callback("video_" + e.type);
}

function video_all()
{
	var a = [];
	for(var id in videos)
	{
		a.push(id);
	}
	return(JSON.stringify(a));
}

function video_destroy(video_id)
{
	if(video_exists(video_id))
	{
		var video = videos[video_id];
		video.parentNode.removeChild(video);
		delete videos[video_id];
	}
}

function video_exists(video_id)
{
	if(document.getElementById(video_id))
	{
		return 1;
	}
	else
	{
		return 0;
	}
}


	// SOURCE

function video_set_source(video_id, source)
{
	if(video_exists(video_id))
	{
		var video = videos[video_id];
		video.src = source;
	}
}

function video_get_source(video_id, source)
{
	if(video_exists(video_id))
	{
		var video = videos[video_id];
		return video.src;
	}
}

function video_can_play(video_id, type)
{
	if(video_exists(video_id))
	{
		var video = videos[video_id];
		var result = video.canPlayType("video/"+type);
		switch(result)
		{
			case "probably":
				return 2;
			break;
			case "maybe":
				return 1;
			break;
			default:
				return 0;
			break;
		}
	}
}


// CONTROL

function video_load(video_id)
{
	if(video_exists(video_id))
	{
		var video = videos[video_id];
		video.load();
	}
}

function video_play(video_id)
{
	if(video_exists(video_id))
	{
		var video = videos[video_id];
		video.play();
	}
}

function video_pause(video_id)
{
	if(video_exists(video_id))
	{
		var video = videos[video_id];
		video.pause();
	}
}

function video_set_playback_rate(video_id, rate)
{
	if(video_exists(video_id))
	{
		var video = videos[video_id];
		if((rate == 1) || (rate == 0.5) || (rate == 2) || (rate == -1) || (rate == -0.5))
		{
			video.playbackRate = rate;
		}
	}
}

function video_get_playback_rate(video_id)
{
	if(video_exists(video_id))
	{
		var video = videos[video_id];
		return video.playbackRate;
	}
}

function video_set_loop(video_id, loop)
{
	if(video_exists(video_id))
	{
		var video = videos[video_id];
		video.loop = loop;
	}
}

function video_get_loop(video_id)
{
	if(video_exists(video_id))
	{
		var video = videos[video_id];
		if(video.loop)
		{
			return 1;
		}
		else
		{
			return 0;
		}
	}
}

function video_get_ended(video_id)
{
	if(video_exists(video_id))
	{
		var video = videos[video_id];
		if(video.ended)
		{
			return 1;
		}
		else
		{
			return 0;
		}
	}
}

function video_controls_visible(video_id)
{
	if(video_exists(video_id))
	{
		var video = videos[video_id];
		if(video.controls)
		{
			return 1;
		}
		else
		{
			return 0;
		}
	}
}

function video_show_controls(video_id)
{
	if(video_exists(video_id))
	{
		var video = videos[video_id];
		video.controls = true;
	}
}

function video_hide_controls(video_id)
{
	if(video_exists(video_id))
	{
		var video = videos[video_id];
		video.controls = false;
	}
}

function video_set_volume(video_id, volume)
{
	if(video_exists(video_id))
	{
		var video = videos[video_id];
		if(volume >= 0 && volume <= 1)
		{
			video.volume = volume;
		}
	}
}

function video_get_volume(video_id)
{
	if(video_exists(video_id))
	{
		var video = videos[video_id];
		return video.volume;
	}
}

function video_get_duration(video_id)
{
	if(video_exists(video_id))
	{
		var video = videos[video_id];
		return video.duration;
	}
}

function video_get_current_time(video_id)
{
	if(video_exists(video_id))
	{
		var video = videos[video_id];
		return video.currentTime;
	}
}

function video_set_current_time(video_id, time)
{
	if(video_exists(video_id))
	{
		var video = videos[video_id];
		video.currentTime = time;
	}
}

function video_get_played(video_id)
{
	if(video_exists(video_id))
	{
		var video = videos[video_id];
		return JSON.stringify(video.played);
	}
}

function video_get_buffered(video_id)
{
	if(video_exists(video_id))
	{
		var video = videos[video_id];
		return JSON.stringify(video.buffered);
	}
}

// STYLING

function video_set_alpha(video_id, alpha)
{
	if(video_exists(video_id))
	{
		var video = videos[video_id];
		if(alpha >= 0 && alpha <= 1)
		{
			video.style.opacity = alpha;
		}
	}
}

function video_set_x(video_id, x)
{
	if(video_exists(video_id))
	{
		var video = videos[video_id];
		video.style.left = x;
	}
}

function video_set_y(video_id, y)
{
	if(video_exists(video_id))
	{
		var video = videos[video_id];
		video.style.top = y;
	}
}

function video_set_height(video_id, height)
{
	if(video_exists(video_id))
	{
		var video = videos[video_id];
		video.style.height = height;
	}
}

function video_set_width(video_id, width)
{
	if(video_exists(video_id))
	{
		var video = videos[video_id];
		video.style.width = width;
	}
}

function video_show(video_id)
{
	if(video_exists(video_id))
	{
		var video = videos[video_id];
		video.style.display = "block";
	}
}	

function video_hide(video_id)
{
	if(video_exists(video_id))
	{
		var video = videos[video_id];
		video.style.display = "none";
	}
}

function video_set_zindex(video_id, zindex)
{
	if(video_exists(video_id))
	{
		var video = videos[video_id];
		video.style.zIndex = zindex;
	}
}

function video_set_position(video_id, position)
{
	if(video_exists(video_id))
	{
		var video = videos[video_id];
		video.style.position = position;
	}
}



