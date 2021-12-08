export function stream (constraints, ctx, ctx2){
  navigator.mediaDevices.getUserMedia(constraints)
  .then((stream) => {
    document.getElementById("video").srcObject = stream;
    console.log("video ready");
  })
  .catch((error) => {
    console.log("Something went wrong! " + error.message);
  });
  
  ctx.fillStyle = "grey";
  ctx.fillRect(0, 0, 224, 224);
  ctx2.fillStyle = "grey";
  ctx2.fillRect(0, 0, 848, 477);
}
export function stopvideo(e) {
  var stream = video.srcObject;
  var tracks = stream.getTracks();

  for (var i = 0; i < tracks.length; i++) {
    var track = tracks[i];
    track.stop();
  }

  video.srcObject = null;
}