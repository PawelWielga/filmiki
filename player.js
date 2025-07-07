const urlParams = new URLSearchParams(window.location.search);
const videoFile = urlParams.get('video');
if (videoFile) {
  document.getElementById('player').src = videoFile;
} else {
  document.body.innerHTML = '<p style="color:white;">Nie znaleziono pliku wideo.</p>';
}
