const video = document.getElementById("video");
const ended = document.getElementById("ended");

video.addEventListener("ended", () => {
  video.hidden = true;
  ended.hidden = false;
});
