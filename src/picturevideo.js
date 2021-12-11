export function picturevideo(ctx, ctx2, video, canvas, canvas2){
  ctx.drawImage(video, 0, 49, 224, 126);
  ctx2.drawImage(video, 0, 0);
  console.log("canvas drawn");
  
  let img = document.getElementById("photo");
  let img2 = document.getElementById("photo2");
  let data = canvas.toDataURL("image/png");
  img.setAttribute("src", data);
  let data2 = canvas2.toDataURL("image/png");
  img2.setAttribute("src", data2);
  img = document.getElementById("photo");

  console.log(img);
  console.log(img2);
  return img;
}

  