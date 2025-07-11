const videos = [
  // 2021
  { file: "21.12_Sw_Mokolaj.mp4", title: "List od Św. Mikołaja | grudzień 2021 |" },
  // 2022

  // 2023

  // 2024

  // 2025

  //{ file: "25.02_Alicante.mp4", title: "Alicante | 2-5 lutego 2025 |" },
  // { file: "25.06_Malta.mp4", title: "Malta | 20-25 czerwca 2025 |" },
  { file: "25.07_Budapeszt.mp4", title: "Budapeszt | 1-5 lipca 2025 |" },
];

function App() {
  const videosByYear = {};
  videos.forEach(video => {
    const year = `20${video.file.slice(0, 2)}`;
    if (!videosByYear[year]) {
      videosByYear[year] = [];
    }
    videosByYear[year].push(video);
  });

  const years = Object.keys(videosByYear).sort((a, b) => b.localeCompare(a));

  return (
    <div className="container">
      {years.map(year => (
        <div key={year}>
          <h2 className="year-heading mt-4">{year}</h2>
          <div className="row g-3">
            {videosByYear[year].map(video => {
              const base = video.file.replace('.mp4', '');
              const thumb = `${base}_img.jpg`;
              return (
                <div className="col-6 col-lg-3" key={video.file}>
                  <a
                    href={`player.html?video=${encodeURIComponent(video.file)}`}
                    className="thumb card bg-dark text-white text-decoration-none"
                  >
                    <img src={thumb} className="card-img-top" alt="miniatura" />
                    <div className="card-body p-2">
                      <p className="card-text mb-0">{video.title}</p>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
