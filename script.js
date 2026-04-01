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
  { 
    type: "cover", 
    title: "Nawaz Idris Khan", 
    subtitle: "Your First Year ✨💛", 
    image: "images/bornday1.webp",   // main cover photo
    extras: [
      "images/bornday2.webp",            // floating polaroids
      "images/bornday3.webp"
    ]
  },
  {
    title: "Birthday - 6 October 2024 🎂",
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
      { src: "images/dec22.webp", caption: "With Gogo" },
      { src: "images/dec6.webp", caption: "With Dad" },
      { src: "images/dec23.webp", caption: "Aunty Vee" },
      { src: "images/dec24.webp", caption: "Family" },
      { src: "images/dec3.webp", caption: "Sleep time" },
      { src: "images/dec5.webp", caption: "Playing " },
      { src: "images/dec7.webp", caption: "Happy moments" },
      { src: "images/dec8.webp", caption: "Smile time" },
      { src: "images/dec9.webp", caption: "Playing " },
      { src: "images/dec11.webp", caption: "Happy moments" },
      { src: "images/dec12.webp", caption: "Smile time" },
      { src: "images/dec2.webp", caption: "Playing" }
      
      
    ]
  },
  
  {
    title: "January 2025💙",
    text: "Our dear Nawaz, you’ve just begun your first year, and every single day with you has been a gift beyond words. Your tiny fingers and toes, your soft giggles, and the way you look at the world with curiosity fill our hearts with indescribable joy. January is the start of a new chapter where you are learning, growing, and filling our home with laughter and love. We are amazed by every little milestone, from your first smiles to the gentle coos that brighten our days. Never forget, little one, that you are cherished beyond measure, and we will always be here to guide, hug, and love you endlessly. 💛",
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
    title: "February 2025💙",
    text: " February is here, and with it comes a world of new experiences and discoveries. You are learning to reach, to explore, and to interact with your surroundings in ways that leave us in awe. Every coo, every smile, and every tiny movement is a story of your growth, and we are privileged to be part of it. Spring is blossoming outside, just as your personality and spirit are blossoming in our hearts. We promise to encourage your curiosity, to hold your hand when needed, and to celebrate every little victory along the way. 💛",
    images: [
      { src: "images/feb10.webp", caption: "Playing with toys" },
      { src: "images/feb2.webp", caption: "First bath" },
      { src: "images/feb11.webp", caption: "Happy moments" },
      { src: "images/feb4.webp", caption: "Smile time" },
      { src: "images/feb1.webp", caption: "Playing with toys" },
      { src: "images/feb3.webp", caption: "Smile time" }
    ]
  },
  {
    
  title: "March 2025💙",
  text: `
    <p>
      March is here, and with it comes a world of new experiences and discoveries. 
      You are learning to reach, to explore, and to interact with your surroundings 
      in ways that leave us in awe. Every coo, every smile, and every tiny movement 
      is a story of your growth, and we are privileged to be part of it. Spring is 
      blossoming outside, just as your personality and spirit are blossoming in 
      our hearts. We promise to encourage your curiosity, to hold your hand when 
      needed, and to celebrate every little victory along the way. 💛
    </p>

    <p>
      This month, you experienced your first Ashes Day in the Roman Catholic faith — 
      a beautiful and sacred moment where you were blessed and welcomed deeper into 
      a life of faith, love, and grace. As the gentle ashes were placed upon you, it 
      reminded us of the blessings that surround you and the path of kindness, humility, 
      and love that lies ahead. We are so proud of you, our little one, and we look 
      forward to guiding you through a life filled with faith, hope, and endless love. 💙
    </p>
  `,
  images: [
    { src: "images/mar1.webp", caption: "First Ashes Day ✝️" },
    { src: "images/mar2.webp", caption: "First Ashes Day ✝️" },
    { src: "images/mar3.webp", caption: "First Ashes Day ✝️" },
    { src: "images/mar4.webp", caption: "First Ashes Day ✝️" },
    { src: "images/mar10.webp", caption: "First Ashes Day ✝️" }
  ]
},
{
    title: "April 2025💙",
    text: "April brings a season of new life, flowers blooming, and bright mornings, and your presence makes everything even more magical. Your laughter is the sweetest melody, your expressions the most beautiful art. We watch you with amazement as you discover new sounds, new sensations, and the joy of simple moments. Every hug, every cuddle, and every glance from you is a reminder of the infinite love we have for you. We cannot wait to see what this month brings for you, and we promise to be with you every step of the way, cheering you on, holding you close, and loving you unconditionally. 💛",
    images: [
      { src: "images/apr1.webp", caption: "Playing with toys" },
      { src: "images/apr2.webp", caption: "First bath" },
      { src: "images/apr3.webp", caption: "Happy moments" },
      { src: "images/apr4.webp", caption: "Smile time" }
    ]
  },
{
    title: "May 2025💙",
    text: "May is here, and with it comes longer days filled with warmth, playfulness, and endless wonder. We are so proud of how much you are growing and learning. Your little giggles are contagious, and your curiosity is boundless. From your first attempts to grasp new objects to the way your eyes light up with excitement, every day brings joy and amazement. May this month be filled with love, comfort, and cherished moments that we will hold in our hearts forever. We are so grateful to watch you thrive, our little sunshine, our precious boy. 💛",
    images: [
      { src: "images/may3.webp", caption: "Playing with toys" },
      { src: "images/may4.webp", caption: "Playing with toys" },
      { src: "images/may5.webp", caption: "Playing with toys" },
      { src: "images/may6.webp", caption: "Playing with toys" },
      { src: "images/may7.webp", caption: "Playing with toys" },
      { src: "images/may1.webp", caption: "Playing with toys" },
      { src: "images/may9.webp", caption: "Playing with toys" },
      { src: "images/may8.webp", caption: "Playing with toys" },
      { src: "images/may10.webp", caption: "First bath" },
      { src: "images/may2.webp", caption: "Playing with toys" },
      { src: "images/may11.webp", caption: "Happy moments" }
      
    ]
  },
  {
    title: "June 2025💙",
    text: "June brings the magic of summer and bright sunny days, just like the light you bring into our lives. Your tiny hands are exploring, your eyes are sparkling with curiosity, and every day you are learning more about this big, beautiful world. Watching you grow is an endless joy—your laughter, your first attempts at babbling, the way you reach for everything around you—all of it makes our hearts swell with pride and love. Never forget how deeply you are loved, little one, for you are our greatest blessing and our endless happiness. 💛",
    images: [
      { src: "images/jun1.webp", caption: "Playing with toys" },
      { src: "images/jun2.webp", caption: "First bath" },
      { src: "images/jun3.webp", caption: "Happy moments" },
      { src: "images/jun4.webp", caption: "Smile time" },
      { src: "images/jun10.webp", caption: "Playing with toys" },
      { src: "images/jun5.webp", caption: "First bath" },
      { src: "images/jun11.webp", caption: "Happy moments" },
    ]
  },
  {
    title: "July 2025💙",
    text: "July is here with warm sunshine, playful days, and joyful moments. Each day, you surprise us with your growing personality, your tiny giggles, and your innocent curiosity. We love watching you discover the world—every new sound, touch, and sight is a celebration of your journey. This month, we promise to fill your days with cuddles, laughter, stories, and songs that remind you how deeply you are loved. You are our little miracle, and every moment with you is a treasure we will cherish forever. 💛",
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
    title: "August 2025💙",
    text: "August is a month of gentle summer evenings, playful adventures, and sweet discoveries. You are growing into a bright, curious, and joyful little boy, and every smile you share warms our hearts. Watching you reach for toys, explore new textures, and interact with the world is the most beautiful experience. You are our little miracle, our shining star, and we promise to support, protect, and love you with all our hearts as you continue to grow, learn, and thrive. 💛",
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
    title: "September 2025💙",
    text: "September brings the first hints of autumn, cozy mornings, and the promise of new adventures. We marvel at how much you have grown since your first days, from tiny movements to joyful giggles and curious expressions. Every month, you teach us patience, love, and happiness in the simplest moments. As you continue to explore, learn, and develop your unique personality, we will always be here to guide you, support you, and shower you with endless love. 💛",
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
right.className = "page cover-text";
right.innerHTML = `
  <h2>Welcome to Nawaz Idris Khan Photo Album</h2>
  <p>Nawaz Idris Khan, from the moment you arrived, you’ve filled our hearts 
    with endless joy and love. Every tiny giggle, every little cuddle, and 
    every new discovery has made this year magical. May your days always 
    be bright, your dreams be big, and your life be surrounded by warmth 
    and happiness. 💛✨.</p>
    <p style="margin-top:20px; font-weight:bold;">With love from Mum and Dad ❤️</p>
`;
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