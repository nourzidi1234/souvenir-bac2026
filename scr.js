const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("open-envelope");

openBtn.addEventListener("click", () => {
  envelope.classList.add("open");
  openBtn.style.display = "none"; // cacher le bouton après ouverture
});

/* Scroll animation pour photos, vidéos, boutons, anecdotes */
const items = document.querySelectorAll(".card, .videos video, .btn, .story p");
items.forEach((el) => {
  el.style.opacity = 0;
  el.style.transform = "translateY(50px)";
  el.style.transition = "1s";
});

window.addEventListener("scroll", () => {
  items.forEach((el) => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});
const photos = document.querySelectorAll(".mosaic-grid .photo");
const overlay = document.getElementById("photo-overlay");
const overlayImg = document.getElementById("overlay-img");

photos.forEach((photo) => {
  photo.addEventListener("click", () => {
    overlayImg.src = photo.src;
    overlay.classList.add("show");
  });
});

function closePhoto() {
  overlay.classList.remove("show");
  setTimeout(() => (overlayImg.src = ""), 400);
}

// Fermer overlay si clic sur le fond
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closePhoto();
});
const videoThumbs = document.querySelectorAll(".video-thumb");
const videoOverlay = document.getElementById("video-overlay");
const overlayVideo = document.getElementById("overlay-video");

videoThumbs.forEach((video) => {
  video.addEventListener("click", () => {
    overlayVideo.src = video.src;
    videoOverlay.classList.add("show");
    overlayVideo.play();
  });
});

function closeVideo() {
  overlayVideo.pause();
  overlayVideo.currentTime = 0;
  videoOverlay.classList.remove("show");
  setTimeout(() => (overlayVideo.src = ""), 400);
}

// Fermer overlay en cliquant sur le fond
videoOverlay.addEventListener("click", (e) => {
  if (e.target === videoOverlay) closeVideo();
});
