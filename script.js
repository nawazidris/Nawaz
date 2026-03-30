// -------------------- PASSWORD CHECK --------------------
function checkPassword() {
  const pass = document.getElementById("password").value.trim();
  if (pass === "1234") {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    loadAlbum();
  } else {
    document.getElementById("error").innerText = "Incorrect password!";
  }
}

// -------------------- ALBUM DATA --------------------
const albumPages = [
  { type: "cover", title: "Nawaz Idris Khan", subtitle: "Your First Year", image: "images/1.jpg" },
  {
    title: "First Month-October 2024",
    text: "At one month old, Ryland was a tiny bundle of wonder...",
    images: [
      { src: "images/13.jpg", caption: "Sleeping peacefully" },
      { src: "images/3.jpg", caption: "Cozy cuddle time" },
      { src: "images/15.mp4", caption: "Tummy time giggles", type: "video" }, // video example
      { src: "images/4.jpg", caption: "Tiny toes" }
    ]
  },
  {
    title: "November 2024",
    text: "Exploring new sounds and smiles. Giggles every day.",
    images: [
      { src: "images/5.jpg", caption: "Playing with toys" },
      { src: "images/6.jpg", caption: "First bath" },
      { src: "images/7.jpg", caption: "Happy moments" },
      { src: "images/13.jpg", caption: "Smile time" }
    ]
  },
  {
    title: "December 2024",
    text: "Counting down the days until the next milestone.",
    images: [
      { src: "images/5.jpg", caption: "Playing with toys" },
      { src: "images/6.jpg", caption: "First bath" },
      { src: "images/7.jpg", caption: "Happy moments" },
      { src: "images/13.jpg", caption: "Smile time" }
    ]
  },
  
  {
    title: "January 2025",
    text: "Counting down the days until the next milestone.",
    images: [
      { src: "images/5.jpg", caption: "Playing with toys" },
      { src: "images/6.jpg", caption: "First bath" },
      { src: "images/7.jpg", caption: "Happy moments" },
      { src: "images/13.jpg", caption: "Smile time" }
    ]
  },
{
    title: "February 2025",
    text: "Counting down the days until the next milestone.",
    images: [
      { src: "images/5.jpg", caption: "Playing with toys" },
      { src: "images/6.jpg", caption: "First bath" },
      { src: "images/7.jpg", caption: "Happy moments" },
      { src: "images/13.jpg", caption: "Smile time" }
    ]
  },
  {
    title: "March 2025",
    text: "Counting down the days until the next milestone.",
    images: [
      { src: "images/5.jpg", caption: "Playing with toys" },
      { src: "images/6.jpg", caption: "First bath" },
      { src: "images/7.jpg", caption: "Happy moments" },
      { src: "images/13.jpg", caption: "Smile time" }
    ]
  },
{
    title: "April 2025",
    text: "Counting down the days until the next milestone.",
    images: [
      { src: "images/5.jpg", caption: "Playing with toys" },
      { src: "images/6.jpg", caption: "First bath" },
      { src: "images/7.jpg", caption: "Happy moments" },
      { src: "images/13.jpg", caption: "Smile time" }
    ]
  },
{
    title: "May 2025",
    text: "Counting down the days until the next milestone.",
    images: [
      { src: "images/5.jpg", caption: "Playing with toys" },
      { src: "images/6.jpg", caption: "First bath" },
      { src: "images/7.jpg", caption: "Happy moments" },
      { src: "images/13.jpg", caption: "Smile time" }
    ]
  },
  {
    title: "June 2025",
    text: "Counting down the days until the next milestone.",
    images: [
      { src: "images/5.jpg", caption: "Playing with toys" },
      { src: "images/6.jpg", caption: "First bath" },
      { src: "images/7.jpg", caption: "Happy moments" },
      { src: "images/13.jpg", caption: "Smile time" }
    ]
  }
  // ... other months
];

// -------------------- GLOBAL STATE --------------------
let currentPage = 0;

// -------------------- LOAD ALBUM --------------------
function loadAlbum() {
  const select = document.getElementById("monthSelect");
  albumPages.forEach((page, i) => {
    const option = document.createElement("option");
    option.value = i;
    option.text = page.type === "cover" ? "Cover" : page.title;
    select.appendChild(option);
  });
  renderPage();
}

// -------------------- RENDER PAGE --------------------
function renderPage() {
  const container = document.getElementById("album-page");
  container.innerHTML = "";

  const page = albumPages[currentPage];

  if (page.type === "cover") {
    // --------- COVER PAGE ---------
    const div = document.createElement("div");
    div.className = "page cover";

    let polaroid1 = page.images && page.images[0] ? page.images[0].src : page.image;
    let polaroid2 = page.images && page.images[1] ? page.images[1].src : page.image;

    div.innerHTML = `
      <h1>${page.title}</h1>
      <div class="ribbon">${page.subtitle}</div>
      <div class="polaroid-layer">
        <img src="${page.image}" alt="${page.title}" class="main-cover">
        <img src="${polaroid1}" class="polaroid-back polaroid1">
        <img src="${polaroid2}" class="polaroid-back polaroid2">
      </div>
    `;

    container.appendChild(div);

    // Sparkles
    for (let i = 0; i < 20; i++) {
      const sparkle = document.createElement('span');
      sparkle.className = 'sparkle';
      sparkle.style.top = Math.random() * 100 + '%';
      sparkle.style.left = Math.random() * 100 + '%';
      sparkle.style.animationDelay = Math.random() * 2 + 's';
      div.appendChild(sparkle);
    }

    // Empty right page
    const right = document.createElement("div");
    right.className = "page";
    container.appendChild(right);

  } else {
    // --------- TEXT + IMAGES/VIDEOS ---------
    const left = document.createElement("div");
    left.className = "page text-page";
    left.innerHTML = `<h2>${page.title}</h2><p>${page.text}</p>`;
    container.appendChild(left);

    const right = document.createElement("div");
    right.className = "page image-page";

    page.images.forEach(item => {
      const polaroid = document.createElement("div");
      polaroid.className = "polaroid";

      if (item.type === "video") {
        polaroid.innerHTML = `
          <video controls width="100%" style="border-radius:5px;">
            <source src="${item.src}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <div class="caption">${item.caption}</div>
        `;
      } else {
        polaroid.innerHTML = `
          <img src="${item.src}" alt="${item.caption}">
          <div class="caption">${item.caption}</div>
        `;
      }

      right.appendChild(polaroid);
    });

    container.appendChild(right);
  }

  document.getElementById("monthSelect").value = currentPage;
}

// -------------------- NAVIGATION --------------------
function nextPage() {
  if (currentPage < albumPages.length - 1) {
    currentPage++;
    renderPage();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    renderPage();
  }
}

function goToPage(index) {
  currentPage = parseInt(index);
  renderPage();
}