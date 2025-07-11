function Player() {
  const urlParams = new URLSearchParams(window.location.search);
  const videoFile = urlParams.get('video');

  if (!videoFile) {
    return <p style={{ color: 'white' }}>Nie znaleziono pliku wideo.</p>;
  }

  return (
    <div className="container text-center">
      <video controls autoPlay className="video-player" src={videoFile}>
        Przeglądarka nie obsługuje wideo.
      </video>
    </div>
  );
}

ReactDOM.render(<Player />, document.getElementById('root'));
