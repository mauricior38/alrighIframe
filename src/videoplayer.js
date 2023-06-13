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
       poster: "https://w0.peakpx.com/wallpaper/387/706/HD-wallpaper-bgmi-thumbnail-ideas-in-2022-computer-gaming-room-thumbnail-design-for-mobile.jpg",
       sources: [{
        src: "https://vod.alright.com.br:443/LiveApp/streams/750459046800055853340794.m3u8", type: "application/x-mpegURL"
       }]
    };

    // initialize Video.js
	
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

    this.player.ima({adTagUrl: "http://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=xml_vmap1&unviewed_position_start=1&cust_params=sample_ar%3Dpremidpostpod%26deployment%3Dgmf-js&cmsid=496&vid=short_onecue&correlator="});

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