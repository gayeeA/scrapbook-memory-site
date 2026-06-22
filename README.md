
# Our Infinite Memories 💖 
### Scrapbook Memory Site

A static, single-page interactive scrapbook website built with **HTML + CSS + vanilla JavaScript**.  
It presents a sequence of “spreads” (double pages) with navigation, playful animations, and mini interactions (modal, pixel gift, crossword, and an iPod playlist).


## ✨ Features

### 1) Flip through scrapbook spreads
- Use the **Prev** and **Next** buttons to switch between scrapbook spreads.
- The header shows the current spread page range via `#page-counter`.

### 2) Clickable book cover
- The initial **book cover** (`#bookCover`) listens for a click.
- On click it unwraps the ribbon, then fades out/hides to reveal the scrapbook.

### 3) Surprise modal + confetti
- An overlay modal (`#surpriseModal`) opens when interactive elements are clicked:
  - “Open Secret Letter” sticky note
  - “Pixel Gift” gift box
- The modal uses JavaScript to trigger a **confetti** effect.

### 4) iPod playlist (local MP3 playback)
- The “iPod” UI and playlist list are linked to local audio files in `/mp3`.
- Click a track in the playlist to:
  - update the iPod screen (track name + album art)
  - start playback
- Controls:
  - Center button toggles **Play/Pause**
  - Right/Left wheel text goes **Next/Previous**
  - Volume slider controls audio volume
- Audio automatically advances when the track ends.

### 5) Crossword / puzzle interaction
- Clicking crossword cells (`.cw-cell`) toggles a selected state.

## 📁 Project Structure

Here is the exact layout of the assets inside this repository:

```text
scrapbook-memory-site/
│
├── index.html                  # Main blueprint containing the scrapbook structure
├── style.css                   # Custom stylesheets handling fonts, themes, and layouts
├── script.js                   # Handles media interactions and tracklist management
│
├── mp3/                        # Embedded audio soundtrack files
│   ├── Danger_Pilla.mp3
│   ├── Gaaju_Bomma.mp3
│   ├── Mellaga_Mellaga.mp3
│   ├── oh-pilla.mp3
│   └── Padigaapulo.mp3
│
├── pictures/                   # Core visual assets
│   ├── coverpage/              # Main landing/chapter designs (e.g., DearKavya, hiNanna)
│   └── moodboard/              # Aesthetic elements (Gorintaku, bangles, local delicacies)
│
└── stickers/                   # Graphic overlays used for the handcrafted look
    ├── bookcover/              # Birthday ribbons, letter papers, and wax seals
    └── [root stickers]         # Functional embellishments (hearts, cameras, text badges)

```


## 🛠 Tech Stack

<img src="https://img.shields.io/badge/HTML-black?style=for-the-badge&logo=HTML5&logoColor=E34F26"/>
<img src="https://img.shields.io/badge/JAVASCRIPT-black?style=for-the-badge&logo=JavaScript&logoColor=F7DF1E"/>
<img src="https://img.shields.io/badge/CSS3-black?style=for-the-badge&logo=CSS3&logoColor=1572B6"/>



## 🚀 Getting Started

### Prerequisites

* No prerequisites just download the Liveserver Extensions in VScode.
* To run the HTML CODE.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gayeeA/scrapbook-memory-site.git

```


2. Navigate to the project directory:
```bash
   cd scrapbook-memory-site

```

##  Notes
- Audio playback relies on the MP3 files in `mp3/`.
- The visuals rely heavily on images in `pictures/` and `stickers/`.
- This is designed for a desktop-style view, though there is a responsive breakpoint in CSS.


## 🎨 Design Philosophy

This project focuses on a  minimalist-Pinterest aesthetic to provide an immersive experience for viewing personal memories.

## 🤝 Contributing

Contributions, suggestions, and feedback are always welcome! Feel free to open an issue or submit a pull request.

## 📄 License

This project is open-source.
