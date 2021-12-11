export function stream(ctx, ctx2) {
  let preferredCameraDeviceId = "";
  const optionsList = document.getElementById("selectCamera");
  preferredCameraDeviceId = optionsList.options[optionsList.selectedIndex].value;

  console.log("Preferred camera device: " + preferredCameraDeviceId);

  const constraints = {
    audio: false,
    video: {
      deviceId: preferredCameraDeviceId,
      width: { min: 800, ideal: 1120, max: 1120 },
      height: { min: 450, ideal: 630, max: 630 },
    },
  };

  navigator.mediaDevices
    .getUserMedia(constraints)
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
