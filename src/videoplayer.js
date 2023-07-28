import React, { Component } from "react";
import "./videojs/skins/treso/videojs.css";
import "./videojs/skins/treso/ima.css";
import videojs from "video.js";
import "./videojs-contrib-ads";
import "./videojs/components/ima.js";
import "./videojs/components/nuevo.js";

export default class VideoJs extends Component {

  componentDidMount() {

    // video properties

    const videoJsOptions = {
       controls: false,
       preload: "auto",
       autoplay: true,
       loop: true,
       muted: true,
       sources: [{
        src: "https://vod.alright.com.br:5443/LiveApp/streams/363816522126514901430226_360p.m3u", type: "application/x-mpegURL"
       }]
    };


	
    this.player = videojs(
       this.videoNode,
       videoJsOptions,
       function onPlayerReady() {
           console.log("Player ready.");
       }
    );

}

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    return (
        <div data-vjs-player>
            <video ref={(node) => (this.videoNode = node)} className="video-js vjs-fluid" />
        </div>
   );
  }
}