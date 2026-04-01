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
    title: "Bornday-6 October 2024",
    text: "Welcome to the world, little one! Your very first day was wrapped in love, wonder, and the sweetest kind of magic. From the moment you arrived, you filled hearts with joy and brought a light so pure and beautiful into our lives. Tiny hands, soft breaths, and a presence so precious — you are already so deeply loved. This is just the beginning of a journey filled with laughter, discovery, and countless cherished moments. May your days be bright, your dreams be big, and your life be surrounded by warmth and happiness. The world is so much better with you in it. 💛.",
    images: [
      { src: "images/bornday2.webp", caption: "First picture" },
      { src: "images/bornday1.webp", caption: "Cozy cuddle time" },
      { src: "images/bornday3.webp", caption: "Tummy time giggles" },
      { src: "images/bornday7.webp", caption: "Tiny toes" },
      { src: "images/bornday5.webp", caption: "Sleeping peacefully" },
      { src: "images/bornday6.webp", caption: "Cozy cuddle time" },
      { src: "images/bornday4.webp", caption: "Tummy time giggles" },
      { src: "images/bornday8.webp", caption: "Tiny toes" }
    ]
  },
  {
    title: "First Month-October 2024💙",
    text: "One month with our precious little boy, and our hearts are already so full. In just a few short weeks, you’ve brought endless love, gentle moments, and a kind of happiness we never knew was possible. From your tiny fingers wrapped around ours to your peaceful sleeps and soft little sounds, every moment with you is a treasure. You may be small, but the joy you bring is bigger than anything in this world. This first month has been a beautiful beginning — a time of learning, bonding, and falling more in love with you every single day. We can’t wait to watch you grow, discover, and fill our lives with even more magic. You are deeply loved, little one, today and always. 💛",
    images: [
      
      { src: "images/oct2.webp", caption: "Cozy cuddle time" },
      { src: "images/oct3.webp", caption: "Tummy time giggles" },
      { src: "images/oct4.webp", caption: "Sleeping peacefully" },
      { src: "images/oct5.webp", caption: "Cozy cuddle time" },
      { src: "images/oct6.webp", caption: "Tummy time giggles" },
      { src: "images/oct7.webp", caption: "Sleeping peacefully" },
      { src: "images/oct1.webp", caption: "Sleeping peacefully" }
    ]
  },
  {
    title: "November 2024💙",
    text: "Exploring new sounds and discovering the joy of your own little voice. Each day brings new smiles, brighter expressions, and the sweetest giggles that fill our hearts with happiness. Your laughter is becoming our favorite melody, and your curious spirit is already shining through. Watching you grow, learn, and react to the world around you is such a beautiful journey. Every day with you is a gift, full of love, wonder, and endless smiles. 💛",
    images: [
      { src: "images/nov2.webp", caption: "First bath" },
      { src: "images/nov3.webp", caption: "Happy moments" },
      { src: "images/nov4.webp", caption: "Smile time" },
      { src: "images/nov5.webp", caption: "Playing with toys" },
      { src: "images/nov6.webp", caption: "First bath" },
      { src: "images/nov7.webp", caption: "Happy moments" },
      { src: "images/nov8.webp", caption: "Smile time" },
      { src: "images/nov9.webp", caption: "Playing with toys" },
      { src: "images/nov10.webp", caption: "Smile time" },
      { src: "images/nov1.webp", caption: "Playing with toys" }
    ]
  },
  {
    title: "December 2024💙",
    text: "A month full of warmth, cuddles, and growing curiosity. Your little personality is shining brighter every day, and your smiles are becoming even more magical. From watching the world with wide, wonder-filled eyes to sharing the sweetest giggles, you’re filling every moment with joy. This month has been all about love, comfort, and the beautiful bond we share growing stronger each day. You are our little sunshine, making even the simplest days feel so special. 💛",
    images: [
      { src: "images/dec1.webp", caption: "Playing with toys" },
      { src: "images/dec2.webp", caption: "First bath" },
      { src: "images/dec3.webp", caption: "Happy moments" },
      { src: "images/dec4.webp", caption: "Smile time" },
      { src: "images/dec5.webp", caption: "Playing with toys" },
      { src: "images/dec6.webp", caption: "First bath" },
      { src: "images/dec7.webp", caption: "Happy moments" },
      { src: "images/dec8.webp", caption: "Smile time" },
      { src: "images/dec9.webp", caption: "Playing with toys" },
      { src: "images/dec10.webp", caption: "First bath" },
      { src: "images/dec11.webp", caption: "Happy moments" },
      { src: "images/dec12.webp", caption: "Smile time" }
      
    ]
  },
  
  {
    title: "January 2025",
    text: "Counting down the days until the next milestone.",
    images: [
      { src: "images/jan1.webp", caption: "Playing with toys" },
      { src: "images/jan2.webp", caption: "First bath" },
      { src: "images/jan3.webp", caption: "Happy moments" },
      { src: "images/jan4.webp", caption: "Smile time" },
      { src: "images/jan6.webp", caption: "First bath" },
      { src: "images/jan7.webp", caption: "Smile time" }
    ]
  },
{
    title: "February 2025",
    text: "Counting down the days until the next milestone.",
    images: [
      { src: "images/feb1.webp", caption: "Playing with toys" },
      { src: "images/feb2.webp", caption: "First bath" },
      { src: "images/feb3.webp", caption: "Happy moments" },
      { src: "images/feb4.webp", caption: "Smile time" },
      { src: "images/feb10.webp", caption: "Playing with toys" },
      { src: "images/feb11.webp", caption: "Smile time" }
    ]
  },
  {
    title: "March 2025",
    text: "Counting down the days until the next milestone.",
    images: [
      { src: "images/mar1.webp", caption: "Playing with toys" },
      { src: "images/mar2.webp", caption: "First bath" },
      { src: "images/mar3.webp", caption: "Happy moments" },
      { src: "images/mar4.webp", caption: "Smile time" },
      { src: "images/mar10.webp", caption: "Smile time" }
    ]
  },
{
    title: "April 2025",
    text: "Counting down the days until the next milestone.",
    images: [
      { src: "images/apr1.webp", caption: "Playing with toys" },
      { src: "images/apr2.webp", caption: "First bath" },
      { src: "images/apr3.webp", caption: "Happy moments" },
      { src: "images/apr4.webp", caption: "Smile time" }
    ]
  },
{
    title: "May 2025",
    text: "Counting down the days until the next milestone.",
    images: [
      { src: "images/shoot(1).webp", caption: "Playing with toys" },
      { src: "images/shoot(2).webp", caption: "Playing with toys" },
      { src: "images/shoot(3).webp", caption: "Playing with toys" },
      { src: "images/shoot(4).webp", caption: "Playing with toys" },
      { src: "images/shoot(5).webp", caption: "Playing with toys" },
      { src: "images/shoot(6).webp", caption: "Playing with toys" },
      { src: "images/shoot(7).webp", caption: "Playing with toys" },
      { src: "images/shoot(8).webp", caption: "Playing with toys" },
      { src: "images/may1.webp", caption: "Playing with toys" },
      { src: "images/may10.webp", caption: "First bath" },
      { src: "images/may11.webp", caption: "Happy moments" }
      
    ]
  },
  {
    title: "June 2025",
    text: "Counting down the days until the next milestone.",
    images: [
      { src: "images/jun1.webp", caption: "Playing with toys" },
      { src: "images/jun2.webp", caption: "First bath" },
      { src: "images/jun3.webp", caption: "Happy moments" },
      { src: "images/jun4.webp", caption: "Smile time" }
    ]
  },
  {
    title: "July 2025",
    text: "Counting down the days until the next milestone.",
    images: [
      { src: "images/jul1.webp", caption: "Playing with toys" },
      { src: "images/jul4.webp", caption: "First bath" },
      { src: "images/jul5.webp", caption: "Happy moments" },
      { src: "images/jul6.webp", caption: "Smile time" },
      { src: "images/jul8.webp", caption: "Smile time" },
      { src: "images/jul9.webp", caption: "Smile time" }
    ]
  },
  {
    title: "August 2025",
    text: "Counting down the days until the next milestone.",
    images: [
      { src: "images/aug1.webp", caption: "Playing with toys" },
      { src: "images/aug2.webp", caption: "First bath" },
      { src: "images/aug3.webp", caption: "Happy moments" },
      { src: "images/aug4.webp", caption: "Smile time" },
      { src: "images/aug5.webp", caption: "Smile time" },
      { src: "images/aug6.webp", caption: "Smile time" },
      { src: "images/aug7.webp", caption: "Smile time" },
      { src: "images/aug8.webp", caption: "Smile time" },
      { src: "images/aug9.webp", caption: "Smile time" }
    ]
  },
  {
    title: "September 2025",
    text: "Counting down the days until the next milestone.",
    images: [
      { src: "images/sep1.webp", caption: "Playing with toys" },
      { src: "images/sep3.webp", caption: "First bath" },
      { src: "images/sep5.webp", caption: "Happy moments" },
      { src: "images/sep4.webp", caption: "Smile time" },
      { src: "images/sep7.webp", caption: "Smile time" },
      { src: "images/sep6.webp", caption: "Smile time" }
    ]
  },
  {
    title: "October 2025",
    text: "Counting down the days until the next milestone.",
    images: [
      { src: "images/oct1.webp", caption: "Playing with toys" },
      { src: "images/oct2.webp", caption: "First bath" },
      { src: "images/oct3.webp", caption: "Happy moments" },
      { src: "images/oct4.webp", caption: "Smile time" },
      { src: "images/oct5.webp", caption: "Smile time" },
      { src: "images/oct7.webp", caption: "Smile time" },
      { src: "images/oct11.webp", caption: "Smile time" },
      { src: "images/oct12.webp", caption: "Smile time" }

    ]
  },
  {
    title: "1st Birthday 🎉",
    text: "Happy 1st Birthday, little boy! One whole year of love, laughter, and unforgettable moments since you came into our lives. From your very first smile to your tiny steps and curious eyes, every day with you has been a beautiful adventure. You’ve grown so much in just one year, filling every moment with joy and every heart with endless love. Your giggles are the sweetest sound, and your bright spirit lights up every room. As you turn one today, may your life be filled with strength, happiness, and endless wonder. This is just the beginning of your amazing journey, and we can’t wait to watch you grow into the incredible boy you are meant to be. You are loved more than words can ever express. Happy Birthday, little prince! 💙🎂",
    images: [
      { src: "images/nawa1.webp", caption: "Playing with toys" },
      { src: "images/nawa2.webp", caption: "First bath" },
      { src: "images/nawa3.webp", caption: "Happy moments" },
      { src: "images/nawa4.webp", caption: "Playing with toys" },
      { src: "images/nawa5.webp", caption: "First bath" },
      { src: "images/nawa6.webp", caption: "Happy moments" },
      { src: "images/nawa7.webp", caption: "Smile time" }
    ]
  },
  {
  title: "First Year Videos-Part 1 🎥",
  text: "A collection of our favorite videos from your first year, capturing the most precious moments and milestones. From your first laugh to your first steps, these videos are a treasure trove of memories that we will cherish forever. Each video tells a story of love, growth, and the incredible journey we’ve shared together. Watching you discover the world around you, express joy, and interact with loved ones has been the greatest gift. These videos are a testament to the beautiful bond we have and the countless moments of happiness you’ve brought into our lives. We can’t wait to create even more memories with you in the years to come! 💛🎥",
  videos: [
    { src: "videos/vid1.mp4", caption: "First porridge" },
    { src: "videos/vid2.mp4", caption: "First bath" },
    { src: "videos/vid3.mp4", caption: "Sleepy time" },
    { src: "videos/vid4.mp4", caption: "First porridge" },
    { src: "videos/vid5.mp4", caption: "First bath" },
    { src: "videos/vid7.mp4", caption: "Sleepy time" },
    { src: "videos/vid7.mp4", caption: "Play time" },
    { src: "videos/vid8.mp4", caption: "Play time" }
  ]
},
{
  title: "First Year Videos-Part 2 🎥",
  text: "A collection of our favorite videos from your first year, capturing the most precious moments and milestones. From your first laugh to your first steps, these videos are a treasure trove of memories that we will cherish forever. Each video tells a story of love, growth, and the incredible journey we’ve shared together. Watching you discover the world around you, express joy, and interact with loved ones has been the greatest gift. These videos are a testament to the beautiful bond we have and the countless moments of happiness you’ve brought into our lives. We can’t wait to create even more memories with you in the years to come! 💛🎥",
  videos: [
    { src: "videos/vid9.mp4", caption: "First porridge" },
    { src: "videos/vid10.mp4", caption: "First bath" },
    { src: "videos/vid11.mp4", caption: "Sleepy time" },
    { src: "videos/vid12.mp4", caption: "First porridge" },
    { src: "videos/vid14.mp4", caption: "Sleepy time" },
    { src: "videos/vid15.mp4", caption: "Play time" },
    { src: "videos/vid13.mp4", caption: "First bath" }
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

    // Determine whether to render images or videos
if (page.images) {
  page.images.forEach(item => {
    const polaroid = document.createElement("div");
    polaroid.className = "polaroid";

    polaroid.innerHTML = `
      <img src="${item.src}" alt="${item.caption}">
      <div class="caption">${item.caption}</div>
    `;

    right.appendChild(polaroid);
  });
}

if (page.videos) {
  page.videos.forEach(item => {
    const polaroid = document.createElement("div");
    polaroid.className = "polaroid";

    polaroid.innerHTML = `
      <video controls width="100%" style="border-radius:5px;">
        <source src="${item.src}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="caption">${item.caption}</div>
    `;

    right.appendChild(polaroid);
  });
}

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