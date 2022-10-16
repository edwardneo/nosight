import { useEffect, useState } from "react";
import Camera from "./camera";

var videoTag;
var videoTrack;

async function getMedia(constraints) {
  try {
    let stream = await navigator.mediaDevices.getUserMedia(constraints);
    /* use the stream */
    streamMedia(stream);
  } catch (err) {
    /* handle the error */
  }
}

async function streamMedia(stream) {
  videoTag = document.getElementById("video-tag");
  videoTrack = stream.getVideoTracks()[0];
  videoTag.srcObject = stream;
}

function takePhoto() {
  var canvas = document.createElement("canvas");
  canvas.width = videoTag.videoWidth;
  canvas.height = videoTag.videoHeight;
  var ctx = canvas.getContext("2d");
  //draw image to canvas. scale to target dimensions
  ctx.drawImage(videoTag, 0, 0, canvas.width, canvas.height);

  //convert to desired file format
  var dataURI = canvas.toDataURL("image/jpeg"); // can also use 'image/png'
  console.log(dataURI);
}

const controlDirection = (event) => {
  let a;
  if (event.nativeEvent.wheelDelta > 0) {
    console.log("scroll up");
    a = 1;
  } else {
    console.log("scroll down");
    a = -1;
  }

  videoTrack.applyConstraints({
    advanced: [{ zoom: videoTrack.getSettings().zoom }]
  });
};

export default function Capture() {
  const [success, setSuccess] = useState("False");

  document.body.classList.add("no-scroll");
  document.body.style.overflow = "hidden";

  useEffect(() => {
    getMedia({
      audio: false,
      video: true
    }).then(() => {
      console.log("Success");
      setSuccess("True");
    });
  });

  return (
    <button onClick={takePhoto} onWheel={controlDirection}>
      <Camera />
    </button>
  );
}