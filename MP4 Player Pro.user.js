// ==UserScript==
// @name         MP4 Player Pro
// @namespace    https://i-ali.ir/
// @version      0.1.0
// @license      GNU AGPLv3
// @description  An ultra-fast video script allowing you to drag-and-drop local or web-based video files into your browser for seamless, high-definition viewing.
// @author       AliAshori
// @icon         data:image/png;base64,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
// @match        file:///*.mp4
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Add custom CSS styles
    GM_addStyle(`
        .mp4-viewer-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            z-index: 10000;
            display: flex;
            flex-direction: column;
            font-family: Ink Free, sans-serif;
        }

        /* cover image shown in video container for audio files */
        .mp4-viewer-cover {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            /* keep cover well sized so it doesn't dominate the screen */
            max-width: min(56vw, 900px);
            max-height: min(50vh, 700px);
            width: auto;
            height: auto;
            object-fit: contain;
            border-radius: 12px;
            box-shadow: 0 18px 48px rgba(0,0,0,0.65), 0 6px 16px rgba(0,0,0,0.45);
            transition: transform 220ms cubic-bezier(.2,.9,.2,1), opacity 180ms ease;
            opacity: 0.98;
            z-index: 5;
            cursor: move;
            background: linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.18));
        }
        .mp4-viewer-cover:hover {
            transform: translate(-50%, -50%) rotate(-2deg) scale(0.995);
            filter: drop-shadow(0 26px 60px rgba(0,0,0,0.65));
        }

        @media (max-width: 991px) {
          .mp4-viewer-cover {
            max-width: min(76vw, 900px);
            max-height: min(70vh, 700px);
          }
        }
 
        /* thumbnail image in playlist items */
        .mp4-viewer-playlist-thumb-img {
            width: 100%;
            height: 80px;
            object-fit: cover;
            display: block;
            background: #222;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 0;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            transition: transform 160ms ease, box-shadow 160ms ease;
            box-shadow: inset 0 -10px 24px rgba(0,0,0,0.25);
        }
        .mp4-viewer-playlist-item:hover .mp4-viewer-playlist-thumb-img {
            transform: translateY(-4px) scale(1.02);
            box-shadow: 0 8px 24px rgba(0,0,0,0.45);
        }

        /* new: search input in playlist header */
        .mp4-viewer-search-input {
            margin-right: 4px;
            padding: 6px 8px;
            border-radius: 8px;
            border: 1px solid #4a6278;
            background: #162026;
            color: #ecf0f1;
            font-size: 13px;
            min-width: 100px;
            font-family: Ink Free, sans-serif;
        }

        /* new: active control button style (used for loop toggle) */
        .mp4-viewer-control-btn.active {
            background: #2ecc71;
            color: #06320f;
        }

        .mp4-viewer-container {
            flex: 1;
            display: flex;
            flex-direction: column;
            background: #1a252f;
        }

        .mp4-viewer-header {
            background: #34495e;
            color: white;
            padding: 15px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #4a6278;
        }

        .mp4-viewer-title {
            font-size: 17px;
            font-weight: bold;
        }

        .mp4-viewer-controls {
            display: flex;
            gap: 10px;
        }

        .mp4-viewer-btn {
            background: #344edb;
            border: none;
            color: white;
            padding: 8px 15px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 13px;
            transition: background 0.3s;
            font-family: Ink Free, sans-serif;
        }

        .mp4-viewer-btn:hover {
            background: #2980b9;
        }

        .mp4-viewer-btn-danger {
            background: #a40000;
        }

        .mp4-viewer-btn-danger:hover {
            background: #c0392b;
        }

        .mp4-viewer-btn-success {
            background: #27ae60;
        }

        .mp4-viewer-btn-success:hover {
            background: #219a52;
        }

        .mp4-viewer-main-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }

        .mp4-viewer-video-container {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            background: black;
            position: relative;
        }

        .mp4-viewer-video {
            background: rgba(44, 62, 80, 0.50);
            max-width: 100%;
            max-height: 100%;
            inset: auto 0px;
            min-height: 100%;
        }

        .mp4-viewer-dropzone {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #ecf0f1;
            text-align: center;
            padding: 40px;
            cursor: pointer;
        }

        .mp4-viewer-dropzone-icon {
            font-size: 64px;
            margin-bottom: 20px;
            color: #344edb;
        }

        .mp4-viewer-dropzone.dragover {
            background: rgba(52, 152, 219, 0.1);
            border: 3px dashed #344edb;
        }

        .mp4-viewer-bottom-panel {
            height: 200px;
            background: #2c3e50;
            border-top: 1px solid #4a6278;
            display: flex;
            flex-direction: column;
        }

        .mp4-viewer-playlist-header {
            padding: 12px 20px;
            background: #34495e;
            color: white;
            font-weight: bold;
            border-bottom: 1px solid #4a6278;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .mp4-viewer-playlist-controls {
            display: flex;
            gap: 8px;
        }

        .mp4-viewer-playlist-btn {
            background: #344edb;
            border: none;
            color: white;
            padding: 6px 6px;
            border-radius: 3px;
            cursor: pointer;
            font-size: 12px;
            font-family: Ink Free, sans-serif;
        }

        .mp4-viewer-playlist-items {
            flex: 1;
            display: flex;
            overflow-x: auto;
            padding: 10px;
            gap: 10px;
            align-items: center;
        }

        .mp4-viewer-playlist-item {
            min-width: 120px;
            max-width: 160px;
            height: 120px;
            background: #34495e;
            border-radius: 8px;
            overflow: hidden;
            cursor: pointer;
            transition: all 0.3s;
            border: 2px solid transparent;
            position: relative;
        }

        .mp4-viewer-playlist-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }

        .mp4-viewer-playlist-item.active {
            border-color: #344edb;
            box-shadow: 0 0 15px rgba(52, 152, 219, 0.5);
        }

        .mp4-viewer-playlist-item-thumbnail {
            width: 100%;
            height: 80px;
            background: #2c3e50;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #7f8c8d;
            font-size: 24px;
        }

        .mp4-viewer-playlist-item-info {
            padding: 8px;
            color: white;
            font-size: 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .mp4-viewer-playlist-item-name {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            flex: 1;
        }

        .mp4-viewer-playlist-item-remove {
            background: #a40000;
            border: none;
            color: white;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .mp4-viewer-hidden {
            display: none !important;
        }

        .mp4-viewer-video-controls {
            padding: 12px;
            background: #34495e;
            display: flex;
            gap: 0;
            align-items: center;
        }

        .mp4-viewer-time#currentTime {
          text-align: right;
        }

        .mp4-viewer-time#durationTime {
          text-align: left;
        }

        .mp4-viewer-video-info {
            color: white;
            flex: 1;
            font-size: 14px;
            overflow-y: scroll;
            overflow-x: hidden;
            scrollbar-width: thin;
            line-break: anywhere;
            height: 20px;
        }

        .mp4-viewer-progress-container {
            flex: 2;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .mp4-viewer-progress {
            flex: 1;
            height: 6px;
            background: #7f8c8d;
            border-radius: 3px;
            overflow: hidden;
            cursor: pointer;
        }

        .mp4-viewer-progress-bar {
            height: 100%;
            background: #344edb;
            width: 0%;
            transition: width 0.1s;
        }

        .mp4-viewer-time {
            color: white;
            font-size: 12px;
            min-width: 46px;
        }

        .mp4-viewer-control-buttons {
            display: flex;
            gap: 8px;
        }

        .mp4-viewer-control-btn {
            background: #344edb;
            border: none;
            color: white;
            padding: 6px 12px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 12.5px;
            font-family: Ink Free, sans-serif;
        }

        .mp4-viewer-add-more {
            min-width: 120px;
            height: 120px;
            background: #34495e;
            border: 2px dashed #7f8c8d;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #7f8c8d;
            cursor: pointer;
            transition: all 0.3s;
        }

        .mp4-viewer-add-more:hover {
            border-color: #344edb;
            color: #344edb;
            background: rgba(52, 152, 219, 0.1);
        }

        .mp4-viewer-add-icon {
            font-size: 24px;
            margin-bottom: 8px;
        }

        .mp4-viewer-playlist-dropzone {
            border: 2px dashed #7f8c8d;
            background: rgba(52, 152, 219, 0.05);
        }

        .mp4-viewer-playlist-dropzone.dragover {
            border-color: #344edb;
            background: rgba(52, 152, 219, 0.1);
        }

        .mp4-viewer-empty-playlist {
            min-width: 200px;
            height: 120px;
            background: #34495e;
            border: 2px dashed #7f8c8d;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #7f8c8d;
            cursor: pointer;
            transition: all 0.3s;
        }

        .mp4-viewer-empty-playlist:hover {
            border-color: #344edb;
            color: #344edb;
            background: rgba(52, 152, 219, 0.1);
        }

        .mp4-viewer-empty-icon {
            font-size: 32px;
            margin-bottom: 8px;
        }

        .mp4-viewer-launch-btn {
            position: fixed;
            top: 24px;
            right: 24px;
            z-index: 99999;
            background: #344edb;
            color: #fff;
            border: none;
            border-radius: 50px;
            padding: 12px 22px 12px 18px;
            font-size: 16px;
            font-weight: bold;
            box-shadow: 0 2px 8px rgba(0,0,0,0.18);
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 10px;
            transition: background 0.2s;
        }

        .mp4-viewer-launch-btn:hover {
            background: #2980b9;
        }

        .mp4-viewer-launch-close {
            margin-left: 8px;
            font-size: 18px;
            color: #fff;
            background: transparent;
            border: none;
            cursor: pointer;
            opacity: 0.7;
            transition: opacity 0.2s;
        }

        .mp4-viewer-launch-close:hover {
            opacity: 1;
        }

        .mp4-viewer-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            z-index: 10001;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .mp4-viewer-modal-content {
            background: #2c3e50;
            padding: 20px;
            border-radius: 8px;
            width: 400px;
            max-width: 90%;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }

        .mp4-viewer-modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
        }

        .mp4-viewer-modal-title {
            color: white;
            font-size: 16px;
            font-weight: bold;
        }

        .mp4-viewer-modal-close {
            background: transparent;
            border: none;
            color: white;
            font-size: 18px;
            cursor: pointer;
            opacity: 0.7;
            transition: opacity 0.2s;
        }

        .mp4-viewer-modal-close:hover {
            opacity: 1;
        }

        .mp4-viewer-modal-body {
            margin-bottom: 15px;
        }

        .mp4-viewer-modal-footer {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
        }

        .mp4-viewer-url-input {
            width: 100%;
            padding: 10px;
            border: 1px solid #7f8c8d;
            border-radius: 4px;
            background: #34495e;
            color: white;
            font-size: 14px;
        }

        .mp4-viewer-url-input:focus {
            outline: none;
            border-color: #344edb;
        }

        /* Sleep timer UI */
        .mp4-viewer-timer-input {
            width: 58px;
            padding: 6px 4px;
            border-radius: 6px;
            border: 1px solid #4a6278;
            background: #162026;
            color: #ecf0f1;
            font-size: 13px;
            font-family: Ink Free, sans-serif;
            text-align: center;
        }

        .mp4-viewer-timer-display {
            color: #e1e7ea;
            background: rgba(0,0,0,0.15);
            padding: 6px 8px;
            border-radius: 6px;
            font-size: 13px;
            min-width: 35px;
            text-align: center;
            align-content: center;
        }

        .mp4-viewer-timer-btn {
            background: #f39c12;
            border: none;
            color: #0e0e0e;
            padding: 6px 10px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 12px;
            font-family: Ink Free, sans-serif;
        }

        .mp4-viewer-timer-btn.active {
            background: #e67e22;
            box-shadow: 0 4px 10px rgba(0,0,0,0.25);
        }

        .mp4-viewer-playlist-item.dragover-item { 
            outline: 2px dashed #fff; 
        }
    `);

    class MP4ViewerPro {
        constructor() {
            this.playlist = [];
            this.currentVideoIndex = -1;
            this.isPlaying = false;
            this.loop = false;                  // new: loop state
            this._searchDebounce = null;        // new: debounce handle for search

            // Sleep timer state
            this.sleepTimerId = null;
            this.sleepIntervalId = null;
            this.sleepEndTime = null;

            // Drag state for playlist reordering
            this._dragSrcIndex = null;

            this.init();
        }

        init() {
            this.createViewer();
            this.setupEventListeners();
            this.setupMediaSession(); //Use the Media Session API
            this.showInitialView();
        }

        // Media Session handlers bound to this instance
        setupMediaSession() {
            if (!('mediaSession' in navigator)) return;
            const sess = navigator.mediaSession;
            try {
                sess.setActionHandler('previoustrack',  () => this.playPrevious());
                sess.setActionHandler('nexttrack',      () => this.playNext());
                sess.setActionHandler('play',           () => { if (this.video.paused) this.video.play(); });
                sess.setActionHandler('pause',          () => { if (!this.video.paused) this.video.pause(); });

                // Seeking handlers
                sess.setActionHandler('seekbackward', (details) => {
                    // details.seekOffset may be provided by UI; otherwise default to 10s
                    const offset = (details && details.seekOffset) ? details.seekOffset : 10;
                    try { this.video.currentTime = Math.max(0, this.video.currentTime - offset); } catch(e) {}
                });
                sess.setActionHandler('seekforward', (details) => {
                    const offset = (details && details.seekOffset) ? details.seekOffset : 10;
                    try { this.video.currentTime = Math.min(this.video.duration || Infinity, this.video.currentTime + offset); } catch(e) {}
                });
                sess.setActionHandler('seekto', (details) => {
                    // details.seekTime is the absolute time to seek to
                    if (!details || typeof details.seekTime !== 'number') return;
                    try {
                        // prefer fastSeek if available
                        if (typeof this.video.fastSeek === 'function') {
                            this.video.fastSeek(details.seekTime);
                        } else {
                            this.video.currentTime = details.seekTime;
                        }
                    } catch (e) {
                        try { this.video.currentTime = details.seekTime; } catch (err) {}
                    }
                });

                // optional stop handler
                sess.setActionHandler('stop', () => {
                    try { this.video.pause(); this.video.currentTime = 0; } catch(e) {}
                });
            } catch (err) {
                console.warn('MediaSession setup failed', err);
            }
        }

        // Update media session metadata (title, artwork)
        updateMediaSessionMetadata(item) {
            if (!('mediaSession' in navigator)) return;
            try {
                const title = item && item.name ? item.name : 'MP4 Player Pro';
                const artist = item && item.isAudio ? 'Audio' : 'Video';
                const album = '';
                const artwork = [];
                // Use coverUrl (extracted thumbnail or mp3 cover) when available
                if (item && item.coverUrl) {
                    artwork.push({ src: item.coverUrl, sizes: '300x300', type: 'image/jpeg' });
                }
                // Set MediaMetadata (browser will ignore unsupported fields)
                navigator.mediaSession.metadata = new window.MediaMetadata({
                    title,
                    artist,
                    album,
                    artwork
                });

                // Update position state if supported
                this.updateMediaSessionPositionState();
            } catch (err) {
                console.warn('updateMediaSessionMetadata failed', err);
            }
        }

        createViewer() {
            // Create overlay
            this.overlay = document.createElement('div');
            this.overlay.className = 'mp4-viewer-overlay';
            this.overlay.innerHTML = `
                <div class="mp4-viewer-container">
                    <div class="mp4-viewer-header">
                        <div class="mp4-viewer-title">🎬 MP4 Player Pro - Drag & Drop Any File to Play</div>
                        <div class="mp4-viewer-controls">
                            <button class="mp4-viewer-btn" id="addUrlBtn">🔗 Add URL</button>
                            <button class="mp4-viewer-btn mp4-viewer-btn-success" id="addMoreBtn">📂 Add Files</button>
                            <button class="mp4-viewer-btn" id="fullscreenBtn">🖥️ Fullscreen</button>
                            <button class="mp4-viewer-btn mp4-viewer-btn-danger" id="closeViewerBtn">❌ Close</button>
                        </div>
                    </div>

                    <div class="mp4-viewer-main-content">
                        <div class="mp4-viewer-video-container">
                            <video class="mp4-viewer-video mp4-viewer-hidden" controls></video>
                            <!-- cover image (used for audio .mp3 files) -->
                            <img class="mp4-viewer-cover mp4-viewer-hidden" alt="cover" />
                            <div class="mp4-viewer-dropzone">
                                <div class="mp4-viewer-dropzone-icon">📁</div>
                                <h2>Drag & Drop MP4 Files Here</h2>
                                <p>or click to select files</p>
                                <p><small>You can also drag files directly to the playlist below</small></p>
                            </div>
                        </div>

                        <div class="mp4-viewer-video-controls mp4-viewer-hidden">
                            <div class="mp4-viewer-video-info" id="videoInfo">No file selected</div>
                            <div class="mp4-viewer-progress-container">
                                <span class="mp4-viewer-time" id="currentTime">0:00</span>
                                <div class="mp4-viewer-progress" id="progressContainer">
                                    <div class="mp4-viewer-progress-bar" id="progressBar"></div>
                                </div>
                                <span class="mp4-viewer-time" id="durationTime">0:00</span>
                            </div>
                            <div class="mp4-viewer-control-buttons">
                                <button class="mp4-viewer-control-btn" id="prevBtn" title="Previous">⏮️Prev</button>
                                <button class="mp4-viewer-control-btn" id="playPauseBtn" title="Play/Pause">▶️Play</button>
                                <button class="mp4-viewer-control-btn" id="nextBtn" title="Next">⏭️Next</button>
                                <button class="mp4-viewer-control-btn" id="loopBtn" title="Loop">🔁Loop</button>
                                <button class="mp4-viewer-control-btn" id="randomBtn" title="Random">🔀Random</button>
                                <button class="mp4-viewer-control-btn" id="luckyBtn" title="Lucky" style="padding: 6px 6px;">🍀</button>
                            </div>
                        </div>
                    </div>

                    <div class="mp4-viewer-bottom-panel">
                        <div class="mp4-viewer-playlist-header">
                            <span>🎞️Playlist (<span id="playlistCount">0</span> files)</span>
                            <div class="mp4-viewer-playlist-controls">
                                <input id="playlistSearch" class="mp4-viewer-search-input" placeholder="Search playlist..." />

                                <button class="mp4-viewer-playlist-btn" id="importListBtn">📂Import List</button>
                                <button class="mp4-viewer-playlist-btn" id="clearPlaylistBtn">🧹Clear All</button>

                                <div style="display: flex;align-content: center;align-items: center;pointer-events: none;">|</div>

                                <!-- Sleep timer controls -->
                                <input id="sleepInput" class="mp4-viewer-timer-input" type="number" min="1" placeholder="mins" title="Minutes" />
                                <button id="sleepBtn" class="mp4-viewer-timer-btn" title="Start sleep timer">⏱️ Sleep</button>
                                <button id="cancelSleepBtn" class="mp4-viewer-playlist-btn mp4-viewer-hidden" title="Cancel sleep timer">✖</button>
                                <span id="sleepDisplay" class="mp4-viewer-timer-display mp4-viewer-hidden" aria-live="polite"></span>
                            </div>
                        </div>
                        <div class="mp4-viewer-playlist-items" id="playlistItems">
                            <!-- Playlist items will be added here dynamically -->
                        </div>
                    </div>
                </div>

                <div class="mp4-viewer-hidden" id="urlModal" style="position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:10001;background:rgba(0,0,0,0.7);display:flex;align-items:center;justify-content:center;">
                  <div style="background:#222;padding:24px 32px;border-radius:8px;box-shadow:0 2px 16px #000;color:#fff;display:flex;flex-direction:column;gap:12px;min-width:320px;">
                    <label for="videoUrlInput">Paste video URL:</label>
                    <textarea id="videoUrlInput" rows="6" placeholder="https://example.com/video1.mp4" style="padding:8px;font-size:14px;border-radius:4px;border:1px solid #444;background:#111;color:#fff;resize:vertical;"></textarea>
                    <div style="display:flex;gap:10px;justify-content:flex-end;">
                      <button id="addUrlConfirmBtn" class="mp4-viewer-btn">Add</button>
                      <button id="addUrlCancelBtn" class="mp4-viewer-btn mp4-viewer-btn-danger">Cancel</button>
                    </div>
                  </div>
                </div>
            `;

            document.body.appendChild(this.overlay);

            // Get references to elements
            this.video = this.overlay.querySelector('.mp4-viewer-video');
            this.dropzone = this.overlay.querySelector('.mp4-viewer-dropzone');
            this.playlistItems = this.overlay.querySelector('#playlistItems');
            this.searchInput = this.overlay.querySelector('#playlistSearch'); // new
            this.loopBtn = this.overlay.querySelector('#loopBtn'); // new
            this.coverImg = this.overlay.querySelector('.mp4-viewer-cover'); // new

            // Sleep timer elements
            this.sleepInput = this.overlay.querySelector('#sleepInput');
            this.sleepBtn = this.overlay.querySelector('#sleepBtn');
            this.cancelSleepBtn = this.overlay.querySelector('#cancelSleepBtn');
            this.sleepDisplay = this.overlay.querySelector('#sleepDisplay');

            // Add this for vertical wheel to horizontal scroll
            this.playlistItems.addEventListener('wheel', (e) => {
                if (e.deltaY !== 0) {
                    e.preventDefault();
                    this.playlistItems.scrollLeft += e.deltaY;
                }
            }, { passive: false });

            this.playlistCount = this.overlay.querySelector('#playlistCount');
            this.videoControls = this.overlay.querySelector('.mp4-viewer-video-controls');
            this.videoInfo = this.overlay.querySelector('#videoInfo');
            this.progressBar = this.overlay.querySelector('#progressBar');
            this.progressContainer = this.overlay.querySelector('#progressContainer');
            this.currentTimeEl = this.overlay.querySelector('#currentTime');
            this.durationTimeEl = this.overlay.querySelector('#durationTime');
        }

        showInitialView() {
            this.playlistItems.innerHTML = `
                <div class="mp4-viewer-empty-playlist" id="emptyPlaylistDropzone">
                    <div class="mp4-viewer-empty-icon">📁</div>
                    <div>Drop MP4 Files Here</div>
                    <div style="font-size: 10px; margin-top: 5px;">or click to browse</div>
                </div>
            `;
        }

        setupEventListeners() {
            // Control buttons
            this.overlay.querySelector('#closeViewerBtn').addEventListener('click', () => this.close());
            this.overlay.querySelector('#fullscreenBtn').addEventListener('click', () => this.toggleFullscreen());
            this.overlay.querySelector('#addMoreBtn').addEventListener('click', () => this.openFileBrowser());
            this.overlay.querySelector('#clearPlaylistBtn').addEventListener('click', () => this.clearPlaylist());

            // Video control buttons
            this.overlay.querySelector('#prevBtn').addEventListener('click', () => this.playPrevious());
            this.overlay.querySelector('#playPauseBtn').addEventListener('click', () => this.togglePlayPause());
            this.overlay.querySelector('#nextBtn').addEventListener('click', () => this.playNext());
            this.overlay.querySelector('#randomBtn').addEventListener('click', () => this.playRandom());
            this.overlay.querySelector('#luckyBtn').addEventListener('click', () => this.luckyPick());
            // Play/Pause for audio cover
            this.overlay.querySelector('.mp4-viewer-cover').addEventListener('click', () => this.togglePlayPause());

            // Loop toggle
            if (this.loopBtn) {
                this.loopBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.loop = !this.loop;
                    this.video.loop = this.loop;
                    this.loopBtn.classList.toggle('active', this.loop);
                });
            }

            // Playlist search (debounced for instant feel)
            if (this.searchInput) {
                this.searchInput.addEventListener('input', () => {
                    if (this._searchDebounce) clearTimeout(this._searchDebounce);
                    this._searchDebounce = setTimeout(() => {
                        const term = this.searchInput.value.trim().toLowerCase();
                        this.updatePlaylist(term);
                    }, 120); // small debounce for responsiveness
                });
            }

            // Dropzone events for main area
            this.dropzone.addEventListener('click', () => this.openFileBrowser());
            this.dropzone.addEventListener('dragover', (e) => this.handleDragOver(e));
            this.dropzone.addEventListener('dragleave', (e) => this.handleDragLeave(e));
            this.dropzone.addEventListener('drop', (e) => this.handleDrop(e));

            // Playlist area drag & drop events
            this.playlistItems.addEventListener('dragover', (e) => this.handlePlaylistDragOver(e));
            this.playlistItems.addEventListener('dragleave', (e) => this.handlePlaylistDragLeave(e));
            this.playlistItems.addEventListener('drop', (e) => this.handlePlaylistDrop(e));

            // Click event for empty playlist dropzone
            this.playlistItems.addEventListener('click', (e) => {
                if (e.target.closest('#emptyPlaylistDropzone')) {
                    this.openFileBrowser();
                }
            });

            // Video events
            // timeupdate now also updates media session positionState for seeking UI
            this.video.addEventListener('timeupdate', () => { this.updateProgress(); this.updateMediaSessionPositionState(); });
            this.video.addEventListener('loadedmetadata', () => {
                this.updateVideoInfo();
                // ensure media session position/duration sync on metadata load
                this.updateMediaSessionPositionState();
            });
            this.video.addEventListener('play', () => this.setPlaying(true));
            this.video.addEventListener('pause', () => this.setPlaying(false));

            // Advance to next item when current media ends
            this.video.addEventListener('ended', () => {
                // If the video element is set to loop, the 'ended' event won't fire;
                // when it does fire, advance to the next playlist item.
                if (this.playlist.length === 0) return;
                this.playNext();
            });

            // Progress bar seeking
            this.progressContainer.addEventListener('click', (e) => this.seekVideo(e));

            // Global events
            document.addEventListener('keydown', (e) => this.handleKeyPress(e));

            // URL modal events
            this.overlay.querySelector('#addUrlBtn').addEventListener('click', () => {
                this.overlay.querySelector('#urlModal').classList.remove('mp4-viewer-hidden');
                this.overlay.querySelector('#videoUrlInput').value = '';
                this.overlay.querySelector('#videoUrlInput').focus();
            });
            this.overlay.querySelector('#addUrlCancelBtn').addEventListener('click', () => {
                this.overlay.querySelector('#urlModal').classList.add('mp4-viewer-hidden');
            });
            this.overlay.querySelector('#addUrlConfirmBtn').addEventListener('click', () => {
                const text = this.overlay.querySelector('#videoUrlInput').value || '';
                const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
                if (lines.length === 0) {
                    this.overlay.querySelector('#urlModal').classList.add('mp4-viewer-hidden');
                    return;
                }
                this.addUrlsToPlaylist(lines);
                this.overlay.querySelector('#urlModal').classList.add('mp4-viewer-hidden');
            });

            // Import Playlist events
            this.overlay.querySelector('#importListBtn').addEventListener('click', () => this.importPlaylistFromFile());

            // Sleep timer events
            if (this.sleepBtn) {
                this.sleepBtn.addEventListener('click', () => {
                    const mins = parseInt(this.sleepInput.value, 10);
                    if (isNaN(mins) || mins <= 0) {
                        alert('Enter a valid number of minutes for the sleep timer.');
                        return;
                    }
                    this.startSleepTimer(mins);
                });
            }
            if (this.cancelSleepBtn) {
                this.cancelSleepBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.cancelSleepTimer();
                });
            }
        }

        startSleepTimer(minutes) {
            // clear any existing timer first
            this.cancelSleepTimer();

            const ms = Math.max(1, minutes) * 60 * 1000;
            this.sleepEndTime = Date.now() + ms;

            this.sleepTimerId = setTimeout(() => {
                try { this.video.pause(); } catch(e) {}
                // stop timer UI
                this.cancelSleepTimer();
            }, ms);

            // show cancel button and active state
            if (this.sleepBtn) this.sleepBtn.classList.add('active');
            if (this.cancelSleepBtn) {
                this.cancelSleepBtn.classList.remove('mp4-viewer-hidden');
                this.sleepDisplay.classList.remove('mp4-viewer-hidden');
            }
                

            // update display immediately and every second
            this.updateSleepDisplay();
            this.sleepIntervalId = setInterval(() => this.updateSleepDisplay(), 1000);
        }

        cancelSleepTimer() {
            if (this.sleepTimerId) {
                clearTimeout(this.sleepTimerId);
                this.sleepTimerId = null;
            }
            if (this.sleepIntervalId) {
                clearInterval(this.sleepIntervalId);
                this.sleepIntervalId = null;
            }
            this.sleepEndTime = null;
            if (this.sleepDisplay) this.sleepDisplay.textContent = '';
            if (this.sleepBtn) this.sleepBtn.classList.remove('active');
            if (this.cancelSleepBtn) {
                this.cancelSleepBtn.classList.add('mp4-viewer-hidden');
                this.sleepDisplay.classList.add('mp4-viewer-hidden');
            }
        }

        updateSleepDisplay() {
            if (!this.sleepEndTime || !this.sleepDisplay) return;
            const secondsLeft = Math.max(0, Math.ceil((this.sleepEndTime - Date.now()) / 1000));
            const hrs = Math.floor(secondsLeft / 3600);
            const mins = Math.floor((secondsLeft % 3600) / 60);
            const secs = secondsLeft % 60;

            if (hrs > 0) {
                // show hours when >= 1 hour (H:MM:SS)
                this.sleepDisplay.textContent = `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
            } else {
                // show minutes:seconds when < 1 hour (MM:SS)
                this.sleepDisplay.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
            }

            if (secondsLeft <= 0) {
                this.cancelSleepTimer();
            }
        }

        openFileBrowser() {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.mp4';
            input.multiple = true;
            input.onchange = (e) => this.handleFileSelect(e);
            input.click();
        }

        handleFileSelect(event) {
            const files = Array.from(event.target.files);
            this.addFilesToPlaylist(files);
        }

        handleDragOver(e) {
            e.preventDefault();
            this.dropzone.classList.add('dragover');
        }

        handleDragLeave(e) {
            e.preventDefault();
            this.dropzone.classList.remove('dragover');
        }

        handleDrop(e) {
            e.preventDefault();
            this.dropzone.classList.remove('dragover');

            const files = Array.from(e.dataTransfer.files);
            this.addFilesToPlaylist(files);
        }

        handlePlaylistDragOver(e) {
            e.preventDefault();
            this.playlistItems.classList.add('mp4-viewer-playlist-dropzone', 'dragover');
        }

        handlePlaylistDragLeave(e) {
            e.preventDefault();
            // Only remove classes if we're actually leaving the playlist area
            if (!this.playlistItems.contains(e.relatedTarget)) {
                this.playlistItems.classList.remove('mp4-viewer-playlist-dropzone', 'dragover');
            }
        }

        handlePlaylistDrop(e) {
            e.preventDefault();
            this.playlistItems.classList.remove('mp4-viewer-playlist-dropzone', 'dragover');

            // Only handle actual file drops. Ignore empty drops (internal reorders use text/plain).
            const dt = e.dataTransfer || {};
            const hasFiles = dt.files && dt.files.length > 0;
            if (!hasFiles) return;

            const files = Array.from(dt.files);
            this.addFilesToPlaylist(files);
        }

        // Try to extract cover image from an MP3 file (ID3v2 APIC). Returns blob URL or null.
        async extractMp3Cover(file) {
            try {
                const buffer = await file.arrayBuffer();
                const data = new Uint8Array(buffer);
                // check ID3 header
                if (data[0] !== 0x49 || data[1] !== 0x44 || data[2] !== 0x33) return null;
                // size (syncsafe) at bytes 6-9
                const size = (data[6] & 0x7f) << 21 | (data[7] & 0x7f) << 14 | (data[8] & 0x7f) << 7 | (data[9] & 0x7f);
                let offset = 10;
                while (offset < 10 + size) {
                    // frame header: 4 id, 4 size, 2 flags (ID3v2.3/2.4)
                    const id = String.fromCharCode(...data.slice(offset, offset + 4));
                    const frameSize = (data[offset+4] << 24) | (data[offset+5] << 16) | (data[offset+6] << 8) | data[offset+7];
                    if (frameSize <= 0) break;
                    if (id === 'APIC') {
                        const frameStart = offset + 10;
                        const frame = data.slice(frameStart, frameStart + frameSize);
                        // frame content: text encoding (1), mime (null-terminated), picture type (1), description (null-terminated), binary image data
                        let i = 1; // skip text encoding
                        // read mime
                        let mime = '';
                        while (i < frame.length && frame[i] !== 0) { mime += String.fromCharCode(frame[i]); i++; }
                        i++; // skip null
                        // skip picture type
                        i++;
                        // skip description (terminated by 0)
                        while (i < frame.length && frame[i] !== 0) i++;
                        i++; // skip null
                        // remaining bytes are image data
                        const imgData = frame.slice(i);
                        const blob = new Blob([imgData], { type: mime || 'image/jpeg' });
                        return URL.createObjectURL(blob);
                    }
                    offset += 10 + frameSize;
                }
            } catch (err) {
                console.warn('extractMp3Cover error', err);
            }
            return null;
        }

        // new: extract a thumbnail from a local video File (returns object URL or null)
        async extractVideoThumbnail(file, seekTime = 1) {
            try {
                const vid = document.createElement('video');
                vid.muted = true;
                vid.preload = 'metadata';
                const tempUrl = URL.createObjectURL(file);
                vid.src = tempUrl;

                await new Promise((res, rej) => {
                    const onLoaded = () => {
                        // clamp seek time to duration
                        if (isNaN(vid.duration) || vid.duration === Infinity) {
                            res();
                            return;
                        }
                        if (seekTime > vid.duration) seekTime = Math.max(0, vid.duration / 2);
                        vid.removeEventListener('loadedmetadata', onLoaded);
                        res();
                    };
                    vid.addEventListener('loadedmetadata', onLoaded);
                    vid.addEventListener('error', () => { rej(new Error('video load error')); });
                });

                // Seek to requested time
                await new Promise((res, rej) => {
                    const onSeek = () => { vid.removeEventListener('seeked', onSeek); res(); };
                    vid.addEventListener('seeked', onSeek);
                    // some formats instantly have currentTime, wrap in try
                    try { vid.currentTime = Math.min(seekTime, vid.duration || seekTime); } catch (e) {
                        // if seeking fails, resolve to continue (will capture at current frame)
                        res();
                    }
                    // timeout fallback
                    setTimeout(res, 1500);
                });

                // draw to canvas
                const w = vid.videoWidth || 320;
                const h = vid.videoHeight || Math.round(w * 9 / 16);
                const scale = Math.min(320 / w, 1); // limit width to 320px
                const cw = Math.round(w * scale);
                const ch = Math.round(h * scale);
                const canvas = document.createElement('canvas');
                canvas.width = cw;
                canvas.height = ch;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(vid, 0, 0, cw, ch);

                // convert to blob and create object URL
                const blob = await new Promise((res) => canvas.toBlob(res, 'image/jpeg', 0.8));
                // cleanup temp video url
                try { URL.revokeObjectURL(tempUrl); } catch (e) {}
                if (!blob) return null;
                return URL.createObjectURL(blob);
            } catch (err) {
                console.warn('extractVideoThumbnail error', err);
                return null;
            }
        }

        addFilesToPlaylist(files) {
            //const mp4Files = files.filter(file => file.type === 'video/mp4' || file.name.toLowerCase().endsWith('.mp4'));
            // convert NodeList -> array if needed
            const arr = Array.from(files);
            // filter supported media
            const mp4Files = arr.filter(file => {
            // Check MIME types
            const validMimeTypes = [
                'video/mp4',
                'video/mp2t',
                'video/quicktime',
                'video/x-matroska', // mkv
                'video/webm',
                'video/ogg',
                'video/x-msvideo',  // avi
                'video/mpeg',
                'video/x-dat',
                'audio/mpeg',
                'audio/mp3'
            ];
            if (validMimeTypes.includes(file.type)) {
                return true;
            }

            // Check file extensions as fallback
            const fileName = file.name.toLowerCase();
            return (
                fileName.endsWith('.mp3') ||
                fileName.endsWith('.mp4') ||
                fileName.endsWith('.ts') ||
                fileName.endsWith('.mov') ||
                fileName.endsWith('.mkv') ||
                fileName.endsWith('.webm') ||
                fileName.endsWith('.avi') ||
                fileName.endsWith('.mpeg') ||
                fileName.endsWith('.mpg') ||
                fileName.endsWith('.ogv') ||
                fileName.endsWith('.dat')
                );
            });

            if (mp4Files.length === 0) {
                alert('Please select valid MP4 files.');
                return;
            }

            // process files and extract covers for audio files
            (async () => {
                for (const file of mp4Files) {
                    const isAudio = (file.type && file.type.startsWith('audio')) || file.name.toLowerCase().endsWith('.mp3');
                    let coverUrl = null;
                    if (isAudio) {
                        coverUrl = await this.extractMp3Cover(file);
                    } else {
                        // new: attempt to extract thumbnail from video files
                        coverUrl = await this.extractVideoThumbnail(file, 1);
                    }
                    this.playlist.push({
                        name: file.name,
                        file: file,
                        url: URL.createObjectURL(file),
                        duration: 0,
                        isAudio: isAudio,
                        coverUrl: coverUrl || null
                    });
                }

                this.updatePlaylist();

                // Auto-play first video/audio if none is playing
                if (this.currentVideoIndex === -1 && this.playlist.length > 0) {
                    this.playVideo(0);
                }
            })();
        }

        addUrlToPlaylist(url) {
            // Allow a single URL; accept query/fragment after extension
            const re = /^https?:\/\/.+\.(mp4|webm|ogg|ogv|mkv|mov|avi|mpeg|mpg|mp3)(?:[?#].*)?$/i;
            if (!re.test(url)) {
                alert('Please enter a valid video URL ending with a supported extension.');
                return;
            }
            const rawName = url.split('/').pop() || url;
            const name = rawName.split(/[?#]/)[0];
            const isAudio = /\.mp3(?:[?#].*)?$/i.test(url);
            this.playlist.push({
                name: name,
                file: null,
                url: url,
                duration: 0,
                isUrl: true,
                isAudio: isAudio,
                coverUrl: null // can't extract remote cover here
            });
            this.updatePlaylist();
            if (this.currentVideoIndex === -1 && this.playlist.length > 0) {
                this.playVideo(0);
            }
        }

        // New: add multiple URLs (one per line from textarea)
        addUrlsToPlaylist(urls) {
            if (!Array.isArray(urls) || urls.length === 0) return;
            const re = /^https?:\/\/.+\.(mp4|webm|ogg|ogv|mkv|mov|avi|mpeg|mpg|mp3)(?:[?#].*)?$/i;
            const added = [];
            for (const url of urls) {
                if (!re.test(url)) {
                    // skip invalid URLs but continue processing others
                    console.warn('Skipped invalid URL:', url);
                    continue;
                }
                const rawName = url.split('/').pop() || url;
                const name = rawName.split(/[?#]/)[0];
                const isAudio = /\.mp3(?:[?#].*)?$/i.test(url);
                added.push({
                    name,
                    file: null,
                    url,
                    duration: 0,
                    isUrl: true,
                    isAudio,
                    coverUrl: null
                });
            }
            if (added.length === 0) {
                alert('No valid URLs were provided.');
                return;
            }
            this.playlist.push(...added);
            this.updatePlaylist();
            if (this.currentVideoIndex === -1 && this.playlist.length > 0) {
                this.playVideo(0);
            }
        }

        // move an item in the playlist array and update currentVideoIndex accordingly
        movePlaylistItem(fromIndex, toIndex) {
            if (fromIndex === null || toIndex === null) return;
            if (fromIndex === toIndex) return;
            if (fromIndex < 0 || fromIndex >= this.playlist.length) return;
            if (toIndex < 0) toIndex = 0;
            if (toIndex >= this.playlist.length) toIndex = this.playlist.length - 1;

            const item = this.playlist.splice(fromIndex, 1)[0];
            this.playlist.splice(toIndex, 0, item);

            // adjust currentVideoIndex
            if (this.currentVideoIndex === fromIndex) {
                this.currentVideoIndex = toIndex;
            } else if (fromIndex < this.currentVideoIndex && this.currentVideoIndex <= toIndex) {
                this.currentVideoIndex -= 1;
            } else if (toIndex <= this.currentVideoIndex && this.currentVideoIndex < fromIndex) {
                this.currentVideoIndex += 1;
            }

            // Re-render playlist (preserve active element)
            this.updatePlaylist(this.searchInput ? this.searchInput.value.trim().toLowerCase() : '');
        }

        updatePlaylist(filter = '') {
            this.playlistCount.textContent = this.playlist.length;

            // Clear existing items
            this.playlistItems.innerHTML = '';

            if (this.playlist.length === 0) {
                // Show empty dropzone if no files
                this.showInitialView();
                return;
            }

            const term = (filter || '').toLowerCase();

            // Add playlist items (only items that match the search OR the currently playing item)
            this.playlist.forEach((item, index) => {
                const nameLower = item.name.toLowerCase();
                if (term && nameLower.indexOf(term) === -1 && index !== this.currentVideoIndex) {
                    return; // skip non-matching items unless it's the active one
                }

                const playlistItem = document.createElement('div');
                playlistItem.className = `mp4-viewer-playlist-item ${index === this.currentVideoIndex ? 'active' : ''}`;
                playlistItem.dataset.index = index; // preserve original index
                playlistItem.draggable = true;

                const thumbHtml = item.coverUrl
                    ? `<img class="mp4-viewer-playlist-thumb-img" src="${item.coverUrl}" alt="cover">`
                    : `<div class="mp4-viewer-playlist-item-thumbnail"><span>${item.isAudio ? '🎵' : '🎬'}</span></div>`;

                playlistItem.innerHTML = `
                    ${thumbHtml}
                     <div class="mp4-viewer-playlist-item-info">
                         <span class="mp4-viewer-playlist-item-name" title="${item.name}">${item.name}</span>
                         <button class="mp4-viewer-playlist-item-remove" data-index="${index}">×</button>
                     </div>
                 `;

                // Click to play (unless remove button)
                playlistItem.addEventListener('click', (e) => {
                    if (!e.target.classList.contains('mp4-viewer-playlist-item-remove')) {
                        const idx = parseInt(playlistItem.dataset.index, 10);
                        this.playVideo(idx);
                    }
                });
                
                // Remove button
                const removeBtn = playlistItem.querySelector('.mp4-viewer-playlist-item-remove');
                removeBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const indexToRemove = parseInt(e.target.getAttribute('data-index'), 10);
                    this.removeFromPlaylist(indexToRemove);
                });

                // Drag & drop handlers for reordering
                playlistItem.addEventListener('dragstart', (e) => {
                    e.dataTransfer.effectAllowed = 'move';
                    try { e.dataTransfer.setData('text/plain', index.toString()); } catch (err) {}
                    this._dragSrcIndex = index;
                    playlistItem.classList.add('dragging');
                });

                playlistItem.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    e.dataTransfer.dropEffect = 'move';
                    playlistItem.classList.add('dragover-item');
                });

                playlistItem.addEventListener('dragleave', () => {
                    playlistItem.classList.remove('dragover-item');
                });

                playlistItem.addEventListener('drop', (e) => {
                    e.stopPropagation(); // prevent parent playlist drop handler from running for internal reorders
                    e.preventDefault();
                    const from = this._dragSrcIndex !== null ? this._dragSrcIndex : parseInt(e.dataTransfer.getData('text/plain'), 10);
                    const to = index;
                    // Defensive checks
                    if (isNaN(from) || isNaN(to)) return;
                    this._dragSrcIndex = null;
                    this.movePlaylistItem(from, to);
                });

                playlistItem.addEventListener('dragend', () => {
                    playlistItem.classList.remove('dragging');
                    // clear any leftover hover states
                    this.playlistItems.querySelectorAll('.mp4-viewer-playlist-item').forEach(el => el.classList.remove('dragover-item'));
                });

                this.playlistItems.appendChild(playlistItem);
            });

            // Add "Add More" button at the end
            const addMoreBtn = document.createElement('div');
            addMoreBtn.className = 'mp4-viewer-add-more';
            addMoreBtn.innerHTML = `
                <div class="mp4-viewer-add-icon">+</div>
                <div>Add More</div>
            `;
            addMoreBtn.addEventListener('click', () => this.openFileBrowser());
            this.playlistItems.appendChild(addMoreBtn);

            // Ensure active playing item is visible (scroll into view)
            const activeEl = this.playlistItems.querySelector('.mp4-viewer-playlist-item.active');
            if (activeEl) {
                try {
                    activeEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                } catch (err) {
                    // ignore scroll errors on older browsers
                }
            }
        }

        playVideo(index) {
            if (index < 0 || index >= this.playlist.length) return;

            this.currentVideoIndex = index;
            const videoItem = this.playlist[index];

            // ensure loop flag plugged into player
            this.video.loop = this.loop;

            // update media session metadata for this item
            try { this.updateMediaSessionMetadata(videoItem); } catch(e) {}

            // If it's a URL, just set src directly
            if (videoItem.isUrl) {
                this.video.src = videoItem.url;

                // show cover for audio URLs (if tagged as audio)
                if (videoItem.isAudio) {
                    if (videoItem.coverUrl) {
                        this.coverImg.src = videoItem.coverUrl;
                    } else {
                        this.coverImg.src = ''; // fallback empty -> will be hidden
                    }
                    this.coverImg.classList.remove('mp4-viewer-hidden');
                } else {
                    this.coverImg.classList.add('mp4-viewer-hidden');
                }

                this.video.classList.remove('mp4-viewer-hidden');
                this.dropzone.classList.add('mp4-viewer-hidden');
                this.videoControls.classList.remove('mp4-viewer-hidden');
                this.updatePlaylist(this.searchInput ? this.searchInput.value.trim().toLowerCase() : '');
                this.updateVideoInfo();
                this.video.play().catch(e => {
                    console.log('Autoplay prevented:', e);
                });
                return;
            }

            // Local file logic
            this.video.src = videoItem.url;

            if (videoItem.isAudio) {
                if (videoItem.coverUrl) {
                    this.coverImg.src = videoItem.coverUrl;
                } else {
                    this.coverImg.src = '';
                }
                this.coverImg.classList.remove('mp4-viewer-hidden');
            } else {
                // hide cover if playing video
                this.coverImg.classList.add('mp4-viewer-hidden');
            }

            this.video.classList.remove('mp4-viewer-hidden');
            this.dropzone.classList.add('mp4-viewer-hidden');
            this.videoControls.classList.remove('mp4-viewer-hidden');
            this.updatePlaylist(this.searchInput ? this.searchInput.value.trim().toLowerCase() : '');
            this.updateVideoInfo();
            this.video.play().catch(e => {
                console.log('Autoplay prevented:', e);
            });
        }

        removeFromPlaylist(index) {
            if (this.currentVideoIndex === index) {
                // If removing current video, stop it first
                this.video.pause();
                this.video.src = '';
                this.currentVideoIndex = -1;
                this.video.classList.add('mp4-viewer-hidden');
                this.dropzone.classList.remove('mp4-viewer-hidden');
                this.videoControls.classList.add('mp4-viewer-hidden');
            } else if (this.currentVideoIndex > index) {
                this.currentVideoIndex--;
            }

            // Revoke object URL to free memory
            URL.revokeObjectURL(this.playlist[index].url);
            if (this.playlist[index].coverUrl) {
                URL.revokeObjectURL(this.playlist[index].coverUrl);
            }
            this.playlist.splice(index, 1);
 
            this.updatePlaylist();
        }

        clearPlaylist() {
            if (!confirm('Are you sure you want to clear the entire playlist?')) return;

            // Revoke all object URLs
            this.playlist.forEach(item => {
                URL.revokeObjectURL(item.url);
            });

            // Revoke all object URLs (media + covers)
            this.playlist.forEach(item => {
                if (item.url) try { URL.revokeObjectURL(item.url); } catch(e) {}
                if (item.coverUrl) try { URL.revokeObjectURL(item.coverUrl); } catch(e) {}
            });

            this.playlist = [];
            this.currentVideoIndex = -1;
            this.video.pause();
            this.video.src = '';
            this.video.classList.add('mp4-viewer-hidden');
            this.dropzone.classList.remove('mp4-viewer-hidden');
            this.videoControls.classList.add('mp4-viewer-hidden');

            this.updatePlaylist();
        }

        updateVideoInfo() {
            if (this.currentVideoIndex >= 0) {
                const currentItem = this.playlist[this.currentVideoIndex];
                this.videoInfo.textContent = currentItem.name;

                // store duration when metadata is available
                if (this.video && this.video.duration && isFinite(this.video.duration)) {
                    try { currentItem.duration = this.video.duration; } catch(e) {}
                }

                // update media session position state now that we have duration
                this.updateMediaSessionPositionState();
            }
        }

        // Update the Media Session position state (so external UIs can seek / show progress)
        updateMediaSessionPositionState() {
            if (!('mediaSession' in navigator)) return;
            if (typeof navigator.mediaSession.setPositionState !== 'function') return;

            try {
                const position = (this.video && !isNaN(this.video.currentTime)) ? Math.max(0, this.video.currentTime) : 0;
                // prefer video.duration; fall back to stored playlist duration
                let duration = (this.video && isFinite(this.video.duration)) ? this.video.duration : (this.playlist[this.currentVideoIndex] && this.playlist[this.currentVideoIndex].duration) || 0;
                if (!isFinite(duration)) duration = 0;

                navigator.mediaSession.setPositionState({
                    duration: duration,
                    position: position,
                    playbackRate: (this.video && this.video.playbackRate) ? this.video.playbackRate : 1
                });
            } catch (err) {
                // Some browsers may throw if values invalid — ignore
                // console.debug('setPositionState failed', err);
            }
        }

        updateProgress() {
            if (this.video.duration) {
                const progress = (this.video.currentTime / this.video.duration) * 100;
                this.progressBar.style.width = `${progress}%`;
                this.currentTimeEl.textContent = this.formatTime(this.video.currentTime);
                this.durationTimeEl.textContent = this.formatTime(this.video.duration);
            }
        }

        seekVideo(e) {
            if (!this.video.duration) return;

            const rect = this.progressContainer.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            this.video.currentTime = percent * this.video.duration;
        }

        setPlaying(playing) {
            this.isPlaying = playing;
            const playPauseBtn = this.overlay.querySelector('#playPauseBtn');
            playPauseBtn.textContent = playing ? '⏸️Pause' : '▶️Play';
        }

        togglePlayPause() {
            if (this.video.paused) {
                this.video.play();
            } else {
                this.video.pause();
            }
        }

        playNext() {
            if (this.playlist.length > 0) {
                const nextIndex = (this.currentVideoIndex + 1) % this.playlist.length;
                this.playVideo(nextIndex);
            }
        }

        playPrevious() {
            if (this.playlist.length > 0) {
                const prevIndex = (this.currentVideoIndex - 1 + this.playlist.length) % this.playlist.length;
                this.playVideo(prevIndex);
            }
        }

        playRandom() {
            if (this.playlist.length === 0) return;
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * this.playlist.length);
            } while (this.playlist.length > 1 && randomIndex === this.currentVideoIndex);
            this.playVideo(randomIndex);
        }

        luckyPick() {
            if (this.playlist.length === 0) return;
            const luckyIndex = Math.floor(Math.random() * this.playlist.length);
            const luckyItem = this.playlist[luckyIndex];
            // Revoke all except lucky
            this.playlist.forEach((item, idx) => {
                if (idx !== luckyIndex) URL.revokeObjectURL(item.url);
            });
            this.playlist = [luckyItem];
            this.currentVideoIndex = 0;
            this.updatePlaylist();
            this.playVideo(0);
        }

        importPlaylistFromFile() {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.txt';
            input.onchange = async (e) => {
                const file = e.target.files[0];
                if (!file) return;
                const text = await file.text();
                // Parse lines and extract file names
                const lines = text.split(/\r?\n/).map(line => line.trim().replace(/^"|"$/g, '')).filter(Boolean);
                if (lines.length === 0) {
                    alert('No valid file paths found.');
                    return;
                }
                const fileNames = lines.map(path => path.split(/[\\/]/).pop());
                alert(
                    'Please select the following files in the next dialog:\n\n' +
                    fileNames.join('\n')
                );
                // Now open file picker for user to select files
                const fileInput = document.createElement('input');
                fileInput.type = 'file';
                fileInput.multiple = true;
                fileInput.accept = '.mp4,.mkv,.webm,.avi,.mov,.mpg,.mpeg,.ogv,.ts,.dat,.mp3';
                fileInput.onchange = (ev) => {
                    const selectedFiles = Array.from(ev.target.files);
                    // Match by file name
                    const matchedFiles = fileNames.map(name =>
                        selectedFiles.find(f => f.name === name)
                    ).filter(Boolean);
                    if (matchedFiles.length === 0) {
                        alert('No matching files selected.');
                        return;
                    }
                    this.addFilesToPlaylist(matchedFiles);
                };
                fileInput.click();
            };
            input.click();
        }

        /* ONLY (Min:Sec)(0:00)
        formatTime(seconds) {
            const mins = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${mins}:${secs.toString().padStart(2, '0')}`;
        }
        */

        // (Hour:Min:Sec)(0:00:00)
        formatTime(seconds) {
            const s = Math.max(0, Math.floor(seconds) || 0);
            const hrs = Math.floor(s / 3600);
            const mins = Math.floor((s % 3600) / 60);
            const secs = s % 60;
            if (hrs > 0) {
                return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
            }
            return `${mins}:${secs.toString().padStart(2, '0')}`;
        }

        toggleFullscreen() {
            if (!document.fullscreenElement) {
                this.overlay.requestFullscreen().catch(err => {
                    console.log(`Error attempting to enable fullscreen: ${err.message}`);
                });
            } else {
                document.exitFullscreen();
            }
        }

        handleKeyPress(e) {
            if (!this.overlay.parentNode) return;

            switch(e.key) {
                case 'Escape':
                    this.close();
                    break;
                case ' ':
                    e.preventDefault();
                    this.togglePlayPause();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    this.video.currentTime += 10;
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    this.video.currentTime -= 10;
                    break;
                case 'n':
                case 'N':
                    e.preventDefault();
                    this.playNext();
                    break;
                case 'p':
                case 'P':
                    e.preventDefault();
                    this.playPrevious();
                    break;
            }
        }

        close() {
            // Clean up object URLs
            this.playlist.forEach(item => {
                URL.revokeObjectURL(item.url);
            });

            // Clear Media Session handlers
            if ('mediaSession' in navigator) {
                try {
                    navigator.mediaSession.setActionHandler('previoustrack', null);
                    navigator.mediaSession.setActionHandler('nexttrack', null);
                    navigator.mediaSession.setActionHandler('play', null);
                    navigator.mediaSession.setActionHandler('pause', null);
                    try { navigator.mediaSession.metadata = null; } catch(e) {}
                } catch(e) { /* ignore */ }
            }

            // Stop any timers
            try { this.cancelSleepTimer(); } catch(e) {}

            // Stop the viewer's video
            if (this.video) {
                this.video.pause();
                this.video.src = '';
            }

            this.overlay.remove();
        }
    }

    // Function to open the MP4 Player Pro - now automatically opens
    function openMP4Viewer() {
        // Close existing viewer if any
        const existingViewer = document.querySelector('.mp4-viewer-overlay');
        if (existingViewer) {
            existingViewer.remove();
        }

        // Stop any currently playing MP4 files on the page
        stopDefaultMP4Playback();

        // Create new viewer
        new MP4ViewerPro();
    }

    // Function to stop default MP4 playback on the page
    function stopDefaultMP4Playback() {
        // Find all video elements on the page
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            // Pause the video
            video.pause();

            // Reset current time
            video.currentTime = 0;

            // Remove autoplay attributes to prevent restarting
            video.removeAttribute('autoplay');

            // If it's an MP4 source, also reset the source to stop loading
            const source = video.querySelector('source[type="video/mp4"], source[src*=".mp4"]');
            if (source || video.src.includes('.mp4')) {
                video.src = '';
                video.load();
            }
        });

        // Also stop any object or embed elements that might be playing MP4
        const objects = document.querySelectorAll('object, embed');
        objects.forEach(obj => {
            if (obj.src && obj.src.includes('.mp4')) {
                obj.src = '';
            }
        });
    }

    // Initialize - no visible buttons added to the page
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            addKeyboardShortcut();
            addFloatingLaunchButton();
            // Stop any autoplaying videos when page loads
            //btn.addEventListener('click', function(e) {
            //    if (e.target.classList.contains('mp4-viewer-launch-close')) return;
            //    setTimeout(stopDefaultMP4Playback, 100);
            //});
            setTimeout(stopDefaultMP4Playback, 100);
        });
    } else {
        addKeyboardShortcut();
        addFloatingLaunchButton();
        // Stop any autoplaying videos immediately
        //btn.addEventListener('click', function(e) {
        //    if (e.target.classList.contains('mp4-viewer-launch-close')) return;
        //    setTimeout(stopDefaultMP4Playback, 100);
        //});
        setTimeout(stopDefaultMP4Playback, 100);
    }

    // Auto-open the viewer (remove this line if you don't want it to open automatically)
    //setTimeout(openMP4Viewer, 200);

    // Function to close the MP4 Player Pro
    function closeMP4Viewer() {
        const existingViewer = document.querySelector('.mp4-viewer-overlay');
        if (existingViewer) {
            existingViewer.remove();
        }
    }

    // Add keyboard shortcut to open viewer (Ctrl+Shift+M)
    function addKeyboardShortcut() {
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.shiftKey && e.key === 'M') {
                e.preventDefault();
                openMP4Viewer();
            }
        });
    }

    // Initialize - no visible buttons added to the page
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addKeyboardShortcut);
    } else {
        addKeyboardShortcut();
    }

    // Make functions globally available for manual calling if needed
    window.openMP4Viewer = openMP4Viewer;
    window.closeMP4Viewer = closeMP4Viewer;

    // Auto-open the viewer (remove this line if you don't want it to open automatically)
    //openMP4Viewer();
    document.querySelector('.mp4-viewer-launch-btn').addEventListener('click', function(e) {
        if (e.target.classList.contains('mp4-viewer-launch-close')) return;
        openMP4Viewer();
    });

    // Add floating launch button
    function addFloatingLaunchButton() {
        if (document.querySelector('.mp4-viewer-launch-btn')) return;

        const btn = document.createElement('button');
        btn.className = 'mp4-viewer-launch-btn';
        btn.innerHTML = `<span>🎬 MP4 Player Pro</span>
            <button class="mp4-viewer-launch-close" title="Hide">&times;</button>`;

        // Open viewer on click (ignore close icon)
        btn.addEventListener('click', function(e) {
            if (e.target.classList.contains('mp4-viewer-launch-close')) return;
            openMP4Viewer();
            btn.remove();
        });

        // Hide button on close icon click
        btn.querySelector('.mp4-viewer-launch-close').addEventListener('click', function(e) {
            e.stopPropagation();
            btn.remove();
        });

        document.body.appendChild(btn);
    }

    // Add the floating launch button initially
    addFloatingLaunchButton();
})();