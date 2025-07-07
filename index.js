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
    heading.className = "year-heading";
    gallery.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "grid";
    gallery.appendChild(grid);

    videosByYear[year].forEach(video => {
      const base = video.file.replace(".mp4", "");
      const thumb = `${base}_img.jpg`;

      const a = document.createElement("a");
      a.href = `player.html?video=${encodeURIComponent(video.file)}`;
      a.className = "thumb";

      a.innerHTML = `
        <img src="${thumb}" alt="miniatura">
        <span>${video.title}</span>
      `;

      grid.appendChild(a);
    });
  });
