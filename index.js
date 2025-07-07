const videos = [
  //{ file: "25.02_Alicante.mp4", title: "Alicante | 2-5 lutego 2025 |" },
  // { file: "25.06_Malta.mp4", title: "Malta | 20-25 czerwca 2025 |" },
  { file: "25.07_Budapeszt.mp4", title: "Budapeszt | 1-5 lipca 2025 |" },
];

const gallery = document.getElementById("gallery");

const videosByYear = {};
videos.forEach(video => {
  const yearPrefix = video.file.slice(0, 2);
  const year = `20${yearPrefix}`;
  if (!videosByYear[year]) {
    videosByYear[year] = [];
  }
  videosByYear[year].push(video);
});

Object.keys(videosByYear)
  .sort((a, b) => b.localeCompare(a))
  .forEach(year => {
    const heading = document.createElement("h2");
    heading.textContent = year;
    heading.className = "year-heading mt-4";
    gallery.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "row g-3";
    gallery.appendChild(grid);

    videosByYear[year].forEach(video => {
      const base = video.file.replace(".mp4", "");
      const thumb = `${base}_img.jpg`;

      const col = document.createElement("div");
      col.className = "col-sm-6 col-md-4 col-lg-3";

      const a = document.createElement("a");
      a.href = `player.html?video=${encodeURIComponent(video.file)}`;
      a.className = "thumb card bg-dark text-white text-decoration-none";

      a.innerHTML = `
        <img src="${thumb}" class="card-img-top" alt="miniatura">
        <div class="card-body p-2">
          <p class="card-text mb-0">${video.title}</p>
        </div>
      `;

      col.appendChild(a);
      grid.appendChild(col);
    });
  });
