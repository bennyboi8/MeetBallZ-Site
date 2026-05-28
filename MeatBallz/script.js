const video = document.getElementById("aboutVideo");

let hasPlayed = false;

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if(entry.isIntersecting && !hasPlayed){

      hasPlayed = true;

      setTimeout(() => {
        video.play();
      }, 500);

    }

  });

},{
  threshold:0.5
});

observer.observe(video);

/* Pause on last frame */

video.addEventListener("ended", () => {
  video.pause();
});

/* Replay on click */

video.addEventListener("click", () => {
  video.currentTime = 0;
  video.play();
});