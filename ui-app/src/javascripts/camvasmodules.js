// # Example call for the demo at http//cbrandolino.github.com/camvas

// If the browser does not support any URL, getUserMedia or
// In this example call, we will directly draw the webcam stream on a canvas.
import {camvas} from './camvas.js'


export function StartStreaming(ctx) {
  //var ctx = document.getElementsByTagName('canvas')[0].getContext('2d')
  var draw = function(video, dt) {
    ctx.drawImage(video, 0, 0)
  }
  var myCamvas = new camvas(ctx, draw)
}
