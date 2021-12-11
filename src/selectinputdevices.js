export function selectinputdevices() {
  // List cameras and microphones.
  let videoinputDevices = [];
  const selectCameraList = document.getElementById("selectCamera");
  navigator.mediaDevices
    .enumerateDevices()
    .then(function (devices) {
      devices.forEach(function (device) {
        console.log(
          device.kind + ": " + device.label + " id = " + device.deviceId
        );
        if (device.kind === "videoinput") {
          console.log(device.label);
          videoinputDevices.push(device.label + " id = " + device.deviceId);
          let option = document.createElement('option');
          option.value = device.deviceId;
          option.innerHTML = device.label;
          selectCameraList.appendChild(option);
        }
        console.log(videoinputDevices);
      });
    })
    .catch(function (err) {
      console.log(err.name + ": " + err.message);
    });
}
