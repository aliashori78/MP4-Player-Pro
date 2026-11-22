<div align="center">
  <img src="https://raw.githubusercontent.com/aliashori78/MP4-Player-Pro/refs/heads/main/Assets/MP4%20Player%20Pro.png"
       alt="MP4 Player Pro icon" width="128" height="128"
       style="max-width:100%; height:auto; max-height:128px;">

  # 🎬 MP4 Player Pro
</div>

<div align="center">

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![Version](https://img.shields.io/badge/version-1.2.0-green.svg)](https://github.com/aliashori78/MP4-Player-Pro/releases)
[![Author](https://img.shields.io/badge/author-AliAshori78-orange.svg)](https://github.com/AliAshori78)
[![UserScript](https://img.shields.io/badge/type-UserScript-purple.svg)](https://www.tampermonkey.net/)

</div>

**MP4 Player Pro** is an ultra-fast, lightweight UserScript that turns your browser into a high-definition media powerhouse. Drag and drop local files or web URLs, load subtitles, switch themes live, and pick up exactly where you left off — no external software required.

---

## ✨ What's New in v1.2.0

- 🎨 **Five live themes** — Midnight Aurora, Neon Cyber, Sunset Ember, Emerald Forest, Daylight (light). Switch from the palette button or press `T`; your choice is remembered.
- ▶️ **Resume playback** — the player remembers where you stopped in each file and offers to continue.
- 💬 **Subtitles** — load `.srt` / `.vtt`, or drop one together with its video. UTF-8 with automatic **Windows-1256 fallback** (great for Persian subtitles).
- 🛠️ **Playback tools** — speed 0.25×–3×, A–B section loop, screenshots, Picture-in-Picture, and fit modes.
- 🖱️ **Gestures** — double-click left/right to skip ±10 s, middle for fullscreen, scroll over the video for volume.
- 🎵 **Audio mode** — cover art and tags read from MP3s, with a live audio visualiser for local audio.
- 📋 **Smarter playlist** — true shuffle, three repeat modes, sorting, `.m3u8` import/export, duplicate detection, and drag-and-drop from anywhere.
- 😴 **Sleep timer** — presets, custom time, "when this item ends", and a gentle volume fade before stopping.
- ⌨️ **Shortcuts** — press `?` to see them all.
- ♿ **Accessibility** — keyboard focus rings, reduced-motion support, and toasts/popups instead of `alert()`/`confirm()`.

For the full list, see the [Releases page](https://github.com/aliashori78/MP4-Player-Pro/releases).

---

## 🚀 Installation

1. **Install a UserScript manager**
   - [Tampermonkey](https://www.tampermonkey.net/) (recommended)
   - [Violentmonkey](https://violentmonkey.github.io/)
   - [Greasemonkey](https://www.greasespot.net/)

2. **Add the script**
   - Download `MP4 Player Pro.js` from the [latest release](https://github.com/aliashori78/MP4-Player-Pro/releases), **or** copy its contents.
   - Open your UserScript manager → **Create new script** → paste → **Save**.

3. **Enjoy** — refresh any tab and the floating launcher will be ready.

---

## 🛠️ Usage

1. **Launch** — click the floating **🎬 MP4 Player Pro** button on the side of the page.
2. **Add media**
   - Drag a video or audio file from your computer into the player, **or**
   - Paste a web URL to a media file, **or**
   - Open a `file:///…mp4` page directly — the player auto-adds and plays it (disable with `autoAddCurrentFile: false` in the `CONFIG` block).
3. **Control** — use the custom control bar (auto-hides after a few seconds) for play/pause, seek, volume, speed, PiP, and fullscreen.
4. **Subtitles** — drop a `.srt`/`.vtt` file onto the player, or onto the same drop as the video.
5. **Close** — click the close icon on the launcher or inside the player.

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|---|---|
| `Space` | Play / pause |
| `N` / `P` | Next / previous item |
| `←` / `→` | Seek ±5 s |
| `↑` / `↓` | Volume up / down |
| `M` | Mute |
| `F` | Fullscreen |
| `T` | Cycle theme |
| `H` | Toggle shuffle |
| `R` | Cycle repeat mode |
| `?` | Show all shortcuts |

> Shortcuts are disabled while you type in a search box, link input, or any editable field.

---

## 🌐 Compatibility & Notes

- **Formats:** `.mp4` is fully supported. `.webm`, `.mkv`, `.mov`, `.mp3` and others are matched by the script, but **actual playback depends on the browser's built-in decoders** — Chrome, for example, does not natively decode most `.mkv` or `.mov` files. If a format won't play, try a different browser or convert the file.
- **`file://` pages:** the player adds and plays the current file automatically (see `autoAddCurrentFile` in `CONFIG`). Browsers restrict `localStorage`, `fetch()`, and canvas access on `file://`; the player degrades gracefully, but theme/resume persistence may not survive in every browser.
- **Audio visualiser:** works for **local audio only** — remote audio routed through the browser's audio analyser can go silent due to CORS.
- **Fonts:** uses the system font stack, because web fonts can't load reliably on `file://` pages.

---

## 📸 Screenshots

<div align="center">
  <img src="https://raw.githubusercontent.com/aliashori78/MP4-Player-Pro/refs/heads/main/Assets/v1.2.0/Screenshot-1-v1.2.0.jpg"
       alt="MP4 Player Pro — main interface (Midnight Aurora theme)"
       width="100%" style="max-width:900px; height:auto; border-radius:10px;">

  <table>
    <tr>
      <td><img src="https://raw.githubusercontent.com/aliashori78/MP4-Player-Pro/refs/heads/main/Assets/v1.2.0/Screenshot-3-v1.2.0.jpg"
               alt="Neon Cyber theme with custom control bar"
               width="280" style="height:auto; border-radius:8px;"></td>
      <td><img src="https://raw.githubusercontent.com/aliashori78/MP4-Player-Pro/refs/heads/main/Assets/v1.2.0/Screenshot-2-v1.2.0.jpg"
               alt="Daylight theme with subtitles and A–B loop markers"
               width="280" style="height:auto; border-radius:8px;"></td>
      <td><img src="https://raw.githubusercontent.com/aliashori78/MP4-Player-Pro/refs/heads/main/Assets/v1.2.0/Screenshot-4-v1.2.0.jpg"
               alt="Playlist cards with thumbnails and watched-progress strips"
               width="280" style="height:auto; border-radius:8px;"></td>
    </tr>
  </table>
</div>
---

## 📜 License

Licensed under the **GNU AGPLv3** — see the script header for details.

## 👤 Author

**Ali Ashori** — 🌐 [i-ali.ir](https://i-ali.ir/) · 🐙 [@AliAshori78](https://github.com/AliAshori78)  
📧 Suggestions and bug reports are welcome via [Issues](https://github.com/aliashori78/MP4-Player-Pro/issues).
