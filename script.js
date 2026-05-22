document.addEventListener("DOMContentLoaded", () => {

  /* ==========================================================================
     1. PAGE NAVIGATION ENGINE
     ========================================================================== */
  const spreads = document.querySelectorAll(".scrapbook-spread");
  const prevBtn = document.getElementById("prevPageBtn");
  const nextBtn = document.getElementById("nextPageBtn");
  const pageCounter = document.getElementById("page-counter");

  let currentSpreadIndex = 0;

  function renderActiveSpread() {
    spreads.forEach((spread, index) => {
      spread.classList.toggle("active", index === currentSpreadIndex);
    });

    const left = currentSpreadIndex * 2 + 1;
    const right = currentSpreadIndex * 2 + 2;
    pageCounter.textContent = `${left}-${right}`;

    prevBtn.style.opacity = currentSpreadIndex === 0 ? "0.3" : "1";
    nextBtn.style.opacity = currentSpreadIndex === spreads.length - 1 ? "0.3" : "1";
  }

  function flipAnimation() {
    const active = spreads[currentSpreadIndex];
    active.style.opacity = "0.5";
    setTimeout(() => (active.style.opacity = "1"), 120);
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (currentSpreadIndex < spreads.length - 1) {
        currentSpreadIndex++;
        renderActiveSpread();
        flipAnimation();
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentSpreadIndex > 0) {
        currentSpreadIndex--;
        renderActiveSpread();
        flipAnimation();
      }
    });
  }

  /* ==========================================================================
     2. MODAL SYSTEM
     ========================================================================== */
  const modal = document.getElementById("surpriseModal");
  const closeBtn = document.getElementById("closeModalBtn");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");

  function openModal(title, text) {
    if (!modal) return;
    modalTitle.textContent = title;
    modalBody.textContent = text;
    modal.classList.add("active");
    createConfetti();
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  }

  const note = document.getElementById("interactiveNote");
  if (note) {
    note.addEventListener("click", () => {
      openModal(
        "To The Absolute Cutie Pie 🥧",
        "Every page in this scrapbook is made just to celebrate you 💖"
      );
    });
  }

  const gift = document.getElementById("pixelGift");
  if (gift) {
    gift.addEventListener("click", (e) => {
      e.target.textContent = "💍";
      setTimeout(() => {
        openModal(
          "A Pixel Gift ✨",
          "Unlimited hugs, coffee dates & love forever 💕"
        );
      }, 400);
    });
  }

  /* ==========================================================================
   3. IPOD + PLAYLIST SYNC SYSTEM (FIXED)
   ========================================================================== */

const tracks = [
  {
    name: "Oh Pilla 💖",
    img: "./pictures/coverpage/pilla.png",
    audio: "./mp3/oh-pilla.mp3"
  },
  {
    name: "Mellaga Mellaga 💕",
    img: "./pictures/coverpage/chilasow.png",
    audio: "./mp3/Mellaga_Mellaga.mp3"
  },
  {
    name: "Danger Pilla 🌹",
    img: "./pictures/coverpage/dangerpilla.png",
    audio: "./mp3/Danger_Pilla.mp3"
  },
  {
    name: "Padigaapulo 💫",
    img: "./pictures/coverpage/DearKavya.png",
    audio: "./mp3/Padigaapulo.mp3"
  },
  {
    name: "Gaaju Bomma 🌸",
    img: "./pictures/coverpage/hiNanna.png",
    audio: "./mp3/Gaaju_Bomba.mp3"
  }
];

/* 🎵 AUDIO ENGINE */
const audio = new Audio();
audio.volume = 0.5;

let currentTrack = 0;
let isPlaying = false;

/* 🎯 ELEMENTS */
const display = document.getElementById("ipodTrackName");
const albumArt = document.getElementById("albumArt");
const items = document.querySelectorAll(".track-item");
const playBtn = document.getElementById("ipodPlayBtn");

const nextBtnWheel = document.querySelector(".wheel-text.right");
const prevBtnWheel = document.querySelector(".wheel-text.left");

const volumeSlider = document.getElementById("volumeSlider");

/* 🔄 MASTER UPDATE FUNCTION */
function updateTrack(index, autoPlay = true) {
  currentTrack = index;

  // Update UI
  if (display) display.textContent = tracks[index].name;
  if (albumArt) albumArt.src = tracks[index].img;

  items.forEach((el, i) => {
    el.classList.toggle("playing", i === index);
  });

  // Update Audio
  audio.src = tracks[index].audio;

  if (autoPlay) {
    audio.play();
    isPlaying = true;
    if (playBtn) playBtn.style.background = "#22c55e";
  }
}

/* 🎵 CLICK PLAYLIST → SYNC EVERYTHING */
items.forEach((item) => {
  item.addEventListener("click", () => {
    const index = parseInt(item.getAttribute("data-track"));
    updateTrack(index, true);
  });
});

/* ▶️ CENTER BUTTON → PLAY / PAUSE */
if (playBtn) {
  playBtn.addEventListener("click", () => {
    if (isPlaying) {
      audio.pause();
      playBtn.style.background = "";
    } else {
      audio.play();
      playBtn.style.background = "#22c55e";
    }
    isPlaying = !isPlaying;
  });
}

/* ⏭️ NEXT BUTTON */
if (nextBtnWheel) {
  nextBtnWheel.addEventListener("click", () => {
    let next = (currentTrack + 1) % tracks.length;
    updateTrack(next, true);
  });
}

/* ⏮️ PREVIOUS BUTTON */
if (prevBtnWheel) {
  prevBtnWheel.addEventListener("click", () => {
    let prev = (currentTrack - 1 + tracks.length) % tracks.length;
    updateTrack(prev, true);
  });
}

/* 🔊 VOLUME CONTROL */
if (volumeSlider) {
  volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
  });
}

const visualTracks = document.querySelectorAll(".track-row");

visualTracks.forEach((row) => {
  row.addEventListener("click", () => {
    const index = parseInt(row.getAttribute("data-track"));
    updateTrack(index, true);
  });
});

/* 🔁 AUTO NEXT WHEN SONG ENDS */
audio.addEventListener("ended", () => {
  let next = (currentTrack + 1) % tracks.length;
  updateTrack(next, true);
});

/* 🚀 INIT */
updateTrack(0, false);
  /* ==========================================================================
     4. MAP (SAFE OPTIONAL)
     ========================================================================== */
  const mapPins = document.querySelectorAll(".map-pin");
  const itinerary = document.getElementById("itinerary-target");

  const destinations = {
    Paris: "🥐 Paris: cafés + Eiffel Tower + polaroids",
    Tokyo: "🌸 Tokyo: cherry blossoms + ramen + Harajuku",
    "New York": "🍎 NYC: Central Park + skyline + nights"
  };

  if (mapPins.length && itinerary) {
    mapPins.forEach((pin) => {
      pin.addEventListener("click", () => {
        const city = pin.getAttribute("data-city");
        itinerary.textContent = destinations[city] || "";
      });
    });
  }

  /* ==========================================================================
     5. PUZZLE INTERACTION
     ========================================================================== */
  const cells = document.querySelectorAll(".cw-cell");
  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      cell.classList.toggle("selected-word");
    });
  });

  /* ==========================================================================
     6. CONFETTI (OPTIMIZED)
     ========================================================================== */
  function createConfetti() {
    const colors = ['#fecdd3', '#bbf7d0', '#bfdbfe', '#fef08a'];

    for (let i = 0; i < 25; i++) {
      const p = document.createElement("div");

      p.style.position = "fixed";
      p.style.width = "8px";
      p.style.height = "8px";
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.left = "50%";
      p.style.top = "50%";
      p.style.borderRadius = "50%";
      p.style.zIndex = "600";

      document.body.appendChild(p);

      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * 150 + 50;

      const x = Math.cos(angle) * dist;
      const y = Math.sin(angle) * dist;

      const anim = p.animate(
        [
          { transform: "translate(0,0)", opacity: 1 },
          { transform: `translate(${x}px, ${y}px)`, opacity: 0 }
        ],
        { duration: 700, easing: "ease-out" }
      );

      anim.onfinish = () => p.remove();
    }
  }
  

  /* ==========================================================================
     INIT
     ========================================================================== */
  renderActiveSpread();
});