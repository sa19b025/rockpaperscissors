export async function predict(img) {
  // const URL = "https://teachablemachine.withgoogle.com/models/CoWEt_sY5/";
  // Link zum Freigeben Version 2: https://teachablemachine.withgoogle.com/models/SIbkI-Nno/
  //const URL = "https://teachablemachine.withgoogle.com/models/SIbkI-Nno/";
  const URL = "./models/SIbkI-Nno/";

  let model;
  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json";

  model = await tmImage.load(modelURL, metadataURL);

  // predict can take in an image, video or canvas html element
  const prediction = await model.predict(img);

  console.log(prediction);

  const predictionList = document.getElementById("predictionList");
  let maxPercentage = 0;
  let maxPredictionVal = "";

  for (var i = 0; i < 3; i++) {
    const predictionPercentage = prediction[i].probability;
    if (maxPercentage < predictionPercentage) {
      maxPercentage = predictionPercentage;
      maxPredictionVal = prediction[i].className;
    }
    const predictionClassName = prediction[i].className;
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(
        predictionClassName +
          ": " +
          Math.round(predictionPercentage * 10000) / 100 +
          "%"
      )
    );
    predictionList.appendChild(li);
  }
  return maxPredictionVal;
}
