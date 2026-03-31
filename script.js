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
      { src: "images/bornday1.jpg", caption: "Sleeping peacefully" },
      { src: "images/bornday2.jpg", caption: "Cozy cuddle time" },
      { src: "images/bornday3.jpg", caption: "Tummy time giggles" },
      { src: "images/bornday4.jpg", caption: "Tiny toes" },
      { src: "images/bornday5.jpg", caption: "Sleeping peacefully" },
      { src: "images/bornday6.jpg", caption: "Cozy cuddle time" },
      { src: "images/bornday7.jpg", caption: "Tummy time giggles" },
      { src: "images/bornday8.jpg", caption: "Tiny toes" }
    ]
  },
  {
    title: "First Month-October 2024💙",
    text: "One month with our precious little boy, and our hearts are already so full. In just a few short weeks, you’ve brought endless love, gentle moments, and a kind of happiness we never knew was possible. From your tiny fingers wrapped around ours to your peaceful sleeps and soft little sounds, every moment with you is a treasure. You may be small, but the joy you bring is bigger than anything in this world. This first month has been a beautiful beginning — a time of learning, bonding, and falling more in love with you every single day. We can’t wait to watch you grow, discover, and fill our lives with even more magic. You are deeply loved, little one, today and always. 💛",
    images: [
      
      { src: "images/oct2.jpg", caption: "Cozy cuddle time" },
      { src: "images/oct3.jpg", caption: "Tummy time giggles" },
      { src: "images/oct4.jpg", caption: "Sleeping peacefully" },
      { src: "images/oct5.jpg", caption: "Cozy cuddle time" },
      { src: "images/oct6.jpg", caption: "Tummy time giggles" },
      { src: "images/oct7.jpg", caption: "Sleeping peacefully" },
      { src: "images/oct1.jpg", caption: "Sleeping peacefully" }
    ]
  },
  {
    title: "November 2024💙",
    text: "Exploring new sounds and discovering the joy of your own little voice. Each day brings new smiles, brighter expressions, and the sweetest giggles that fill our hearts with happiness. Your laughter is becoming our favorite melody, and your curious spirit is already shining through. Watching you grow, learn, and react to the world around you is such a beautiful journey. Every day with you is a gift, full of love, wonder, and endless smiles. 💛",
    images: [
      { src: "images/nov2.jpg", caption: "First bath" },
      { src: "images/nov3.jpg", caption: "Happy moments" },
      { src: "images/nov4.jpg", caption: "Smile time" },
      { src: "images/nov5.jpg", caption: "Playing with toys" },
      { src: "images/nov6.jpg", caption: "First bath" },
      { src: "images/nov7.jpg", caption: "Happy moments" },
      { src: "images/nov8.jpg", caption: "Smile time" },
      { src: "images/nov9.jpg", caption: "Playing with toys" },
      { src: "images/nov10.jpg", caption: "Smile time" },
      { src: "images/nov1.jpg", caption: "Playing with toys" }
    ]
  },
  {
    title: "December 2024💙",
    text: "A month full of warmth, cuddles, and growing curiosity. Your little personality is shining brighter every day, and your smiles are becoming even more magical. From watching the world with wide, wonder-filled eyes to sharing the sweetest giggles, you’re filling every moment with joy. This month has been all about love, comfort, and the beautiful bond we share growing stronger each day. You are our little sunshine, making even the simplest days feel so special. 💛",
    images: [
      { src: "images/dec1.jpg", caption: "Playing with toys" },
      { src: "images/dec2.jpg", caption: "First bath" },
      { src: "images/dec3.jpg", caption: "Happy moments" },
      { src: "images/dec4.jpg", caption: "Smile time" },
      { src: "images/dec5.jpg", caption: "Playing with toys" },
      { src: "images/dec6.jpg", caption: "First bath" },
      { src: "images/dec7.jpg", caption: "Happy moments" },
      { src: "images/dec8.jpg", caption: "Smile time" },
      { src: "images/dec9.jpg", caption: "Playing with toys" },
      { src: "images/dec10.jpg", caption: "First bath" },
      { src: "images/dec11.jpg", caption: "Happy moments" },
      { src: "images/dec12.jpg", caption: "Smile time" }
      
    ]
  },
  
  {
    title: "January 2025",
    text: "Counting down the days until the next milestone.",
    images: [
      { src: "images/jan1.jpg", caption: "Playing with toys" },
      { src: "images/jan2.jpg", caption: "First bath" },
      { src: "images/jan3.jpg", caption: "Happy moments" },
      { src: "images/jan4.jpg", caption: "Smile time" },
      { src: "images/jan6.jpg", caption: "First bath" },
      { src: "images/jan7.jpg", caption: "Smile time" }
    ]
  },
{
    title: "February 2025",
    text: "Counting down the days until the next milestone.",
    images: [
      { src: "images/feb1.jpg", caption: "Playing with toys" },
      { src: "images/feb2.jpg", caption: "First bath" },
      { src: "images/feb3.jpg", caption: "Happy moments" },
      { src: "images/feb4.jpg", caption: "Smile time" },
      { src: "images/feb10.jpg", caption: "Playing with toys" },
      { src: "images/feb11.jpg", caption: "Smile time" }
    ]
  },
  {
    title: "March 2025",
    text: "Counting down the days until the next milestone.",
    images: [
      { src: "images/mar1.jpg", caption: "Playing with toys" },
      { src: "images/mar2.jpg", caption: "First bath" },
      { src: "images/mar3.jpg", caption: "Happy moments" },
      { src: "images/mar4.jpg", caption: "Smile time" },
      { src: "images/mar10.jpg", caption: "Smile time" }
    ]
  },
{
    title: "April 2025",
    text: "Counting down the days until the next milestone.",
    images: [
      { src: "images/apr1.jpg", caption: "Playing with toys" },
      { src: "images/apr2.jpg", caption: "First bath" },
      { src: "images/apr3.jpg", caption: "Happy moments" },
      { src: "images/apr4.jpg", caption: "Smile time" }
    ]
  },
{
    title: "May 2025",
    text: "Counting down the days until the next milestone.",
    images: [
      { src: "images/may1.jpg", caption: "Playing with toys" },
      { src: "images/may10.jpg", caption: "First bath" },
      { src: "images/may11.jpg", caption: "Happy moments" },
      { src: "images/may4.jpg", caption: "Smile time" }
    ]
  },
  {
    title: "June 2025",
    text: "Counting down the days until the next milestone.",
    images: [
      { src: "images/jun1.jpg", caption: "Playing with toys" },
      { src: "images/jun2.jpg", caption: "First bath" },
      { src: "images/jun3.jpg", caption: "Happy moments" },
      { src: "images/jun4.jpg", caption: "Smile time" }
    ]
  },
  {
    title: "July 2025",
    text: "Counting down the days until the next milestone.",
    images: [
      { src: "images/jul1.jpg", caption: "Playing with toys" },
      { src: "images/jul4.jpg", caption: "First bath" },
      { src: "images/jul5.jpg", caption: "Happy moments" },
      { src: "images/jul6.jpg", caption: "Smile time" },
      { src: "images/jul8.jpg", caption: "Smile time" },
      { src: "images/jul9.jpg", caption: "Smile time" }
    ]
  },
  {
    title: "August 2025",
    text: "Counting down the days until the next milestone.",
    images: [
      { src: "images/aug1.jpg", caption: "Playing with toys" },
      { src: "images/aug2.jpg", caption: "First bath" },
      { src: "images/aug3.jpg", caption: "Happy moments" },
      { src: "images/aug4.jpg", caption: "Smile time" },
      { src: "images/aug5.jpg", caption: "Smile time" },
      { src: "images/aug6.jpg", caption: "Smile time" },
      { src: "images/aug7.jpg", caption: "Smile time" },
      { src: "images/aug8.jpg", caption: "Smile time" },
      { src: "images/aug9.jpg", caption: "Smile time" }
    ]
  },
  {
    title: "September 2025",
    text: "Counting down the days until the next milestone.",
    images: [
      { src: "images/sep1.jpg", caption: "Playing with toys" },
      { src: "images/sep3.jpg", caption: "First bath" },
      { src: "images/sep5.jpg", caption: "Happy moments" },
      { src: "images/sep4.jpg", caption: "Smile time" },
      { src: "images/sep7.jpg", caption: "Smile time" },
      { src: "images/sep6.jpg", caption: "Smile time" }
    ]
  },
  {
    title: "October 2025",
    text: "Counting down the days until the next milestone.",
    images: [
      { src: "images/oct1.jpg", caption: "Playing with toys" },
      { src: "images/oct2.jpg", caption: "First bath" },
      { src: "images/oct3.jpg", caption: "Happy moments" },
      { src: "images/oct4.jpg", caption: "Smile time" },
      { src: "images/oct5.jpg", caption: "Smile time" },
      { src: "images/oct7.jpg", caption: "Smile time" },
      { src: "images/oct11.jpg", caption: "Smile time" },
      { src: "images/oct12.jpg", caption: "Smile time" }

    ]
  },
  {
    title: "1st Birthday 🎉",
    text: "Happy 1st Birthday, little boy! One whole year of love, laughter, and unforgettable moments since you came into our lives. From your very first smile to your tiny steps and curious eyes, every day with you has been a beautiful adventure. You’ve grown so much in just one year, filling every moment with joy and every heart with endless love. Your giggles are the sweetest sound, and your bright spirit lights up every room. As you turn one today, may your life be filled with strength, happiness, and endless wonder. This is just the beginning of your amazing journey, and we can’t wait to watch you grow into the incredible boy you are meant to be. You are loved more than words can ever express. Happy Birthday, little prince! 💙🎂",
    images: [
      { src: "images/nawa1.jpg", caption: "Playing with toys" },
      { src: "images/nawa2.jpg", caption: "First bath" },
      { src: "images/nawa3.jpg", caption: "Happy moments" },
      { src: "images/nawa4.jpg", caption: "Playing with toys" },
      { src: "images/nawa5.jpg", caption: "First bath" },
      { src: "images/nawa6.jpg", caption: "Happy moments" },
      { src: "images/nawa7.jpg", caption: "Smile time" }
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