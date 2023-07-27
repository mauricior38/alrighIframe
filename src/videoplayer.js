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
       controls: true,
       preload: "auto",
       autoplay: true,
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

    // Nuevo plugin options
	
    const nuevoOptions = {
       logo: "//url-to-logo-image.png",
       logourl: "//url-to go on logo-click.com",
    }

    // Initialize Nuevo plugin
	
    // this.player.nuevo( nuevoOptions );
	
    // Define Google Ima Ads Tag

    // this.player.ima({adTagUrl: "https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/single_preroll_skippable&sz=640x480&ciu_szs=300x250%2C728x90&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator="});

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