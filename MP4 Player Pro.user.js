// ==UserScript==
// @name         MP4 Player Pro
// @namespace    https://i-ali.ir/
// @version      1.2.0
// @license      GNU AGPLv3
// @description  A modern media player overlay: drag-and-drop local or web video/audio, 5 switchable themes, resume playback, subtitles, A-B loop, sleep timer and more.
// @author       AliAshori
// @icon         data:image/png;base64,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
// @match        file:///*.mp4
// @match        file:///*.webm
// @match        file:///*.mov
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

(function () {
    'use strict';

    /* ════════════════════════════════════════════════════════════════
       Settings you can safely tweak
       ════════════════════════════════════════════════════════════════ */
    const CONFIG = {
        version: '1.2.0',
        autoAddCurrentFile: true,   // when opened on a file:///...mp4 page, add that file to the playlist and play it
        seekStep: 10,               // seconds for ← / → and double-tap
        idleMs: 2800,               // controls auto-hide delay while playing
        resumeMinDuration: 45,      // only remember positions for media longer than this (seconds)
        maxResumeEntries: 300,
        defaultTheme: 'aurora'
    };

    const VIDEO_EXT = ['mp4', 'm4v', 'webm', 'mkv', 'mov', 'ogv', 'avi', 'mpeg', 'mpg', 'ts', 'dat'];
    const AUDIO_EXT = ['mp3', 'm4a', 'wav', 'flac', 'ogg', 'oga', 'opus', 'aac'];
    const ALL_EXT = VIDEO_EXT.concat(AUDIO_EXT);
    const SUB_EXT = ['srt', 'vtt'];
    const ACCEPT = ALL_EXT.concat(SUB_EXT).map(e => '.' + e).join(',');
    const URL_RE = new RegExp('^https?:\\/\\/.+\\.(' + ALL_EXT.join('|') + ')(?:[?#].*)?$', 'i');
    const SPEEDS = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.5, 3];

    /* ════════════════════════════════════════════════════════════════
       Themes — every colour in the UI comes from these variables
       ════════════════════════════════════════════════════════════════ */
    const THEMES = {
        aurora: {
            name: 'Midnight Aurora',
            vars: {
                '--bg': '#0a0e1f', '--bg-2': '#18214a', '--panel': 'rgba(17,23,50,.66)', '--panel-solid': '#121936',
                '--card': 'rgba(255,255,255,.055)', '--border': 'rgba(160,175,255,.17)', '--text': '#eef1ff', '--muted': '#97a1c9',
                '--accent': '#7c8cff', '--accent-2': '#c77dff', '--accent-ink': '#0a0e1f', '--soft': 'rgba(124,140,255,.16)',
                '--glow': 'rgba(124,140,255,.5)', '--blob1': '#5b6cff', '--blob2': '#b05cff', '--blob3': '#22d3ee', '--blob-o': '.34',
                '--danger': '#ff5d73', '--ok': '#34d399', '--shadow': '0 18px 50px rgba(0,0,0,.4)'
            }
        },
        neon: {
            name: 'Neon Cyber',
            vars: {
                '--bg': '#05060d', '--bg-2': '#0f1330', '--panel': 'rgba(9,11,28,.72)', '--panel-solid': '#0b0d1f',
                '--card': 'rgba(0,255,230,.045)', '--border': 'rgba(0,255,230,.2)', '--text': '#e6fffd', '--muted': '#76aaa8',
                '--accent': '#19f0d5', '--accent-2': '#ff3df2', '--accent-ink': '#031316', '--soft': 'rgba(25,240,213,.13)',
                '--glow': 'rgba(25,240,213,.5)', '--blob1': '#00e5ff', '--blob2': '#ff2bd6', '--blob3': '#6d28d9', '--blob-o': '.3',
                '--danger': '#ff4f7b', '--ok': '#19f0d5', '--shadow': '0 18px 50px rgba(0,0,0,.55)'
            }
        },
        sunset: {
            name: 'Sunset Ember',
            vars: {
                '--bg': '#160a0f', '--bg-2': '#33151d', '--panel': 'rgba(42,18,26,.68)', '--panel-solid': '#2a121a',
                '--card': 'rgba(255,170,130,.06)', '--border': 'rgba(255,160,120,.2)', '--text': '#fff2ec', '--muted': '#c9a094',
                '--accent': '#ff7a59', '--accent-2': '#ffc857', '--accent-ink': '#2a0d06', '--soft': 'rgba(255,122,89,.15)',
                '--glow': 'rgba(255,122,89,.5)', '--blob1': '#ff5e62', '--blob2': '#ff9966', '--blob3': '#f9d423', '--blob-o': '.3',
                '--danger': '#ff4d6d', '--ok': '#9ae66e', '--shadow': '0 18px 50px rgba(0,0,0,.45)'
            }
        },
        forest: {
            name: 'Emerald Forest',
            vars: {
                '--bg': '#06130e', '--bg-2': '#0f2e21', '--panel': 'rgba(10,34,24,.68)', '--panel-solid': '#0b2218',
                '--card': 'rgba(120,255,190,.05)', '--border': 'rgba(120,255,190,.18)', '--text': '#ecfff6', '--muted': '#8dbba5',
                '--accent': '#34d399', '--accent-2': '#a3e635', '--accent-ink': '#03140d', '--soft': 'rgba(52,211,153,.15)',
                '--glow': 'rgba(52,211,153,.5)', '--blob1': '#10b981', '--blob2': '#84cc16', '--blob3': '#06b6d4', '--blob-o': '.3',
                '--danger': '#ff6b6b', '--ok': '#34d399', '--shadow': '0 18px 50px rgba(0,0,0,.45)'
            }
        },
        daylight: {
            name: 'Daylight',
            light: true,
            vars: {
                '--bg': '#eef1f9', '--bg-2': '#ffffff', '--panel': 'rgba(255,255,255,.74)', '--panel-solid': '#ffffff',
                '--card': 'rgba(30,40,100,.05)', '--border': 'rgba(30,40,100,.14)', '--text': '#151a33', '--muted': '#5d668a',
                '--accent': '#4f46e5', '--accent-2': '#0ea5e9', '--accent-ink': '#ffffff', '--soft': 'rgba(79,70,229,.1)',
                '--glow': 'rgba(79,70,229,.34)', '--blob1': '#818cf8', '--blob2': '#38bdf8', '--blob3': '#f0abfc', '--blob-o': '.34',
                '--danger': '#e11d48', '--ok': '#059669', '--shadow': '0 16px 44px rgba(30,40,100,.16)'
            }
        }
    };

    const THEME_CSS = Object.keys(THEMES).map(id => {
        const body = Object.keys(THEMES[id].vars).map(k => k + ':' + THEMES[id].vars[k]).join(';');
        return '.mpp-root[data-theme="' + id + '"],.mpp-launch[data-theme="' + id + '"]{' + body + '}';
    }).join('\n');

    /* ════════════════════════════════════════════════════════════════
       Icons (inline SVG, 24×24 stroke set)
       ════════════════════════════════════════════════════════════════ */
    const ICONS = {
        play: '<polygon points="6 3 20 12 6 21 6 3" fill="currentColor"/>',
        pause: '<rect x="6" y="4" width="4" height="16" rx="1.2" fill="currentColor"/><rect x="14" y="4" width="4" height="16" rx="1.2" fill="currentColor"/>',
        prev: '<polygon points="19 20 9 12 19 4 19 20" fill="currentColor"/><line x1="5" y1="19" x2="5" y2="5"/>',
        next: '<polygon points="5 4 15 12 5 20 5 4" fill="currentColor"/><line x1="19" y1="5" x2="19" y2="19"/>',
        back: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/><text x="12" y="15.6" text-anchor="middle" font-size="7.5" font-weight="800" fill="currentColor" stroke="none">10</text>',
        fwd: '<path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/><text x="12" y="15.6" text-anchor="middle" font-size="7.5" font-weight="800" fill="currentColor" stroke="none">10</text>',
        repeat: '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
        repeat1: '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/><path d="M11 10h1v4"/>',
        shuffle: '<path d="m18 14 4 4-4 4"/><path d="m18 2 4 4-4 4"/><path d="M2 18h1.97a4 4 0 0 0 3.3-1.7l5.45-8.6a4 4 0 0 1 3.3-1.7H22"/><path d="M2 6h1.97a4 4 0 0 1 3.6 2.2"/><path d="M22 18h-6.04a4 4 0 0 1-3.3-1.8l-.36-.45"/>',
        vol2: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>',
        vol1: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>',
        volX: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"/><line x1="22" y1="9" x2="16" y2="15"/><line x1="16" y1="9" x2="22" y2="15"/>',
        maximize: '<path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/>',
        minimize: '<path d="M8 3v3a2 2 0 0 1-2 2H3"/><path d="M21 8h-3a2 2 0 0 1-2-2V3"/><path d="M3 16h3a2 2 0 0 1 2 2v3"/><path d="M16 21v-3a2 2 0 0 1 2-2h3"/>',
        pip: '<rect x="2" y="4" width="20" height="14" rx="2.5"/><rect x="12" y="11" width="8" height="5" rx="1.2" fill="currentColor"/>',
        x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
        plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
        link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
        folderPlus: '<path d="M12 10v6"/><path d="M9 13h6"/><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
        search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
        palette: '<circle cx="13.5" cy="6.5" r="1" fill="currentColor"/><circle cx="17.5" cy="10.5" r="1" fill="currentColor"/><circle cx="8.5" cy="7.5" r="1" fill="currentColor"/><circle cx="6.5" cy="12.5" r="1" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.65-.75 1.65-1.69 0-.44-.18-.84-.44-1.13-.29-.29-.44-.65-.44-1.13a1.64 1.64 0 0 1 1.67-1.67h2c3.05 0 5.55-2.5 5.55-5.55C21.97 6.01 17.46 2 12 2z"/>',
        moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
        gauge: '<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',
        camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
        download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
        upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>',
        trash: '<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
        list: '<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>',
        music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
        film: '<rect x="2" y="2" width="20" height="20" rx="3"/><path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5"/>',
        dice: '<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.2" fill="currentColor"/><circle cx="15.5" cy="8.5" r="1.2" fill="currentColor"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/><circle cx="8.5" cy="15.5" r="1.2" fill="currentColor"/><circle cx="15.5" cy="15.5" r="1.2" fill="currentColor"/>',
        keyboard: '<rect x="2" y="4" width="20" height="16" rx="2.5"/><path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M8 12h.01M12 12h.01M16 12h.01M7 16h10"/>',
        check: '<polyline points="20 6 9 17 4 12"/>',
        ab: '<path d="M3 8h18"/><path d="M3 16h18"/><text x="7" y="14.3" text-anchor="middle" font-size="8" font-weight="800" fill="currentColor" stroke="none">A</text><text x="17" y="14.3" text-anchor="middle" font-size="8" font-weight="800" fill="currentColor" stroke="none">B</text>',
        cc: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M7 11h3M14 11h3M7 15h5M15 15h2"/>',
        sliders: '<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>',
        crop: '<path d="M6 2v14a2 2 0 0 0 2 2h14"/><path d="M18 22V8a2 2 0 0 0-2-2H2"/>',
        info: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
        alert: '<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
        chevDown: '<polyline points="6 9 12 15 18 9"/>',
        sort: '<path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="m21 8-4-4-4 4"/><path d="M17 4v16"/>',
        clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'
    };
    const ic = (n, cls) => '<svg class="mpp-ic' + (cls ? ' ' + cls : '') + '" viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[n] || '') + '</svg>';

    /* ════════════════════════════════════════════════════════════════
       Helpers
       ════════════════════════════════════════════════════════════════ */
    const addStyle = css => {
        if (typeof GM_addStyle === 'function') return GM_addStyle(css);
        const s = document.createElement('style'); s.textContent = css; (document.head || document.documentElement).appendChild(s); return s;
    };
    const store = {
        get(key, def) {
            try { if (typeof GM_getValue === 'function') { const v = GM_getValue('mpp:' + key); return v === undefined ? def : v; } } catch (e) { /* fall through */ }
            try { const v = localStorage.getItem('mpp:' + key); return v === null ? def : JSON.parse(v); } catch (e) { return def; }
        },
        set(key, val) {
            try { if (typeof GM_setValue === 'function') { GM_setValue('mpp:' + key, val); return; } } catch (e) { /* fall through */ }
            try { localStorage.setItem('mpp:' + key, JSON.stringify(val)); } catch (e) { /* ignore */ }
        }
    };
    const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    const clamp = (n, a, b) => Math.min(b, Math.max(a, n));
    const extOf = n => (String(n).split(/[?#]/)[0].split('.').pop() || '').toLowerCase();
    const baseName = n => String(n).replace(/\.[^.]+$/, '').toLowerCase();
    const isMediaName = n => ALL_EXT.indexOf(extOf(n)) !== -1;
    const fmtTime = sec => {
        const s = Math.max(0, Math.floor(sec) || 0);
        const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), r = s % 60;
        return h > 0 ? h + ':' + String(m).padStart(2, '0') + ':' + String(r).padStart(2, '0') : m + ':' + String(r).padStart(2, '0');
    };
    const fmtSize = b => {
        if (!b) return '';
        const u = ['B', 'KB', 'MB', 'GB', 'TB']; let i = 0, n = b;
        while (n >= 1024 && i < u.length - 1) { n /= 1024; i++; }
        return (n >= 100 || i === 0 ? Math.round(n) : n.toFixed(1)) + ' ' + u[i];
    };
    const once = (el, ev, ms, soft) => new Promise((res, rej) => {
        let t;
        const done = () => { clearTimeout(t); el.removeEventListener(ev, ok); el.removeEventListener('error', bad); };
        const ok = () => { done(); res(); };
        const bad = () => { done(); rej(new Error('media error')); };
        el.addEventListener(ev, ok); el.addEventListener('error', bad);
        if (ms) t = setTimeout(() => { done(); soft ? res('timeout') : rej(new Error('timeout')); }, ms);
    });
    const download = (blob, name) => {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob); a.download = name;
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(() => URL.revokeObjectURL(a.href), 4000);
    };
    const srtToVtt = t => {
        t = String(t).replace(/^\uFEFF/, '').replace(/\r+/g, '');
        return /^WEBVTT/.test(t) ? t : 'WEBVTT\n\n' + t.replace(/(\d{2}:\d{2}:\d{2}),(\d{3})/g, '$1.$2');
    };
    // Subtitles are often UTF-8, but Persian/Arabic files are frequently Windows-1256 — try UTF-8 first, then fall back.
    const readTextSmart = async file => {
        const buf = await file.arrayBuffer();
        try { return new TextDecoder('utf-8', { fatal: true }).decode(buf); } catch (e) { /* not utf-8 */ }
        try { return new TextDecoder('windows-1256').decode(buf); } catch (e) { return new TextDecoder().decode(buf); }
    };

    /* ── ID3v2 reader (MP3 cover art, title, artist, album) ── */
    function id3Text(f) {
        const enc = f[0], bytes = f.subarray(1);
        const label = enc === 1 ? 'utf-16' : enc === 2 ? 'utf-16be' : enc === 3 ? 'utf-8' : 'iso-8859-1';
        try { return new TextDecoder(label).decode(bytes).replace(/\0+$/, '').trim(); } catch (e) { return ''; }
    }
    function id3Pic(f, v2) {
        const enc = f[0]; let i = 1, mime = '';
        if (v2) { i = 4; } else { while (i < f.length && f[i] !== 0) { mime += String.fromCharCode(f[i]); i++; } i++; }
        i++; // picture type
        if (enc === 1 || enc === 2) { while (i + 1 < f.length && !(f[i] === 0 && f[i + 1] === 0)) i += 2; i += 2; }
        else { while (i < f.length && f[i] !== 0) i++; i++; }
        const data = f.subarray(i);
        if (data.length < 16) return null;
        const png = data[0] === 0x89 && data[1] === 0x50;
        return URL.createObjectURL(new Blob([data], { type: png ? 'image/png' : 'image/jpeg' }));
    }
    async function readID3(file) {
        const out = { cover: null, title: '', artist: '', album: '' };
        try {
            const head = new Uint8Array(await file.slice(0, 10).arrayBuffer());
            if (head[0] !== 0x49 || head[1] !== 0x44 || head[2] !== 0x33) return out;
            const ver = head[3], flags = head[5];
            const size = ((head[6] & 127) << 21) | ((head[7] & 127) << 14) | ((head[8] & 127) << 7) | (head[9] & 127);
            const d = new Uint8Array(await file.slice(10, 10 + Math.min(size, 16 * 1024 * 1024)).arrayBuffer());
            let o = 0;
            if (flags & 0x40 && ver > 2) {
                o = ver === 4 ? (((d[0] & 127) << 21) | ((d[1] & 127) << 14) | ((d[2] & 127) << 7) | (d[3] & 127))
                    : ((d[0] << 24) | (d[1] << 16) | (d[2] << 8) | d[3]) + 4;
            }
            const hdr = ver === 2 ? 6 : 10, idLen = ver === 2 ? 3 : 4;
            while (o + hdr <= d.length && d[o] !== 0) {
                const id = String.fromCharCode.apply(null, d.subarray(o, o + idLen));
                let fs;
                if (ver === 2) fs = (d[o + 3] << 16) | (d[o + 4] << 8) | d[o + 5];
                else if (ver === 4) fs = ((d[o + 4] & 127) << 21) | ((d[o + 5] & 127) << 14) | ((d[o + 6] & 127) << 7) | (d[o + 7] & 127);
                else fs = (d[o + 4] << 24) | (d[o + 5] << 16) | (d[o + 6] << 8) | d[o + 7];
                if (fs <= 0 || o + hdr + fs > d.length) break;
                const f = d.subarray(o + hdr, o + hdr + fs); o += hdr + fs;
                if (id === 'TIT2' || id === 'TT2') out.title = id3Text(f);
                else if (id === 'TPE1' || id === 'TP1') out.artist = id3Text(f);
                else if (id === 'TALB' || id === 'TAL') out.album = id3Text(f);
                else if ((id === 'APIC' || id === 'PIC') && !out.cover) out.cover = id3Pic(f, ver === 2);
            }
        } catch (e) { /* ignore malformed tags */ }
        return out;
    }

    /* ════════════════════════════════════════════════════════════════
       Styles
       ════════════════════════════════════════════════════════════════ */
    addStyle(THEME_CSS + '\n' + `@keyframes mpp-in{from{opacity:0;transform:scale(1.015)}to{opacity:1;transform:none}}
@keyframes mpp-pop{from{opacity:0;transform:translateY(8px) scale(.96)}to{opacity:1;transform:none}}
@keyframes mpp-d1{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(9vw,7vh) scale(1.18)}}
@keyframes mpp-d2{0%,100%{transform:translate(0,0) scale(1.1)}50%{transform:translate(-8vw,-6vh) scale(.92)}}
@keyframes mpp-d3{0%,100%{transform:translate(0,0)}50%{transform:translate(-6vw,8vh) scale(1.2)}}
@keyframes mpp-spin{to{transform:rotate(360deg)}}
@keyframes mpp-eq{0%,100%{transform:scaleY(.25)}50%{transform:scaleY(1)}}
@keyframes mpp-flash{0%{opacity:.95;transform:translate(-50%,-50%) scale(.6)}100%{opacity:0;transform:translate(-50%,-50%) scale(1.55)}}
@keyframes mpp-rip{0%{opacity:0;transform:scale(.85)}25%{opacity:1}100%{opacity:0;transform:scale(1.08)}}
@keyframes mpp-ring{0%{transform:scale(.96);opacity:.7}100%{transform:scale(1.35,1.7);opacity:0}}
@keyframes mpp-toast{from{opacity:0;transform:translateX(24px) scale(.96)}to{opacity:1;transform:none}}
@keyframes mpp-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}
@keyframes mpp-breathe{0%,100%{transform:scale(1)}50%{transform:scale(1.045)}}
@keyframes mpp-shot{0%{opacity:.85}100%{opacity:0}}

/* ---------- Root & base ---------- */
.mpp-root{position:fixed;inset:0;z-index:2147483000;display:flex;flex-direction:column;color:var(--text);background:var(--bg);font:14px/1.45 "Segoe UI Variable Text","Segoe UI",Inter,system-ui,-apple-system,Roboto,"Helvetica Neue",Arial,sans-serif;overflow:hidden;animation:mpp-in .35s cubic-bezier(.2,.8,.2,1);transition:background .5s,color .4s;-webkit-font-smoothing:antialiased;text-align:left}
.mpp-root[data-mode="light"]{color-scheme:light}
.mpp-root:not([data-mode="light"]){color-scheme:dark}
.mpp-root *,.mpp-root *::before,.mpp-root *::after{box-sizing:border-box}
:where(.mpp-root,.mpp-launch) :is(button,input,textarea){font:inherit;color:inherit;margin:0}
:where(.mpp-root,.mpp-launch) button{border:0;background:none;cursor:pointer;padding:0;text-transform:none;letter-spacing:normal}
.mpp-hidden{display:none!important}
.mpp-root :focus{outline:none}
.mpp-root :focus-visible,.mpp-launch:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
.mpp-ic{width:1.2em;height:1.2em;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex:none;display:block}

/* ---------- Aurora background ---------- */
.mpp-bg{position:absolute;inset:0;overflow:hidden;pointer-events:none;background:radial-gradient(1200px 700px at 8% -10%,var(--bg-2),transparent 60%),var(--bg);transition:background .5s}
.mpp-bg i{position:absolute;width:46vmax;height:46vmax;border-radius:50%;filter:blur(90px);opacity:var(--blob-o);will-change:transform;transition:background .6s}
.mpp-bg i:nth-child(1){background:var(--blob1);top:-18vmax;left:-12vmax;animation:mpp-d1 24s ease-in-out infinite}
.mpp-bg i:nth-child(2){background:var(--blob2);right:-16vmax;top:8vh;animation:mpp-d2 28s ease-in-out infinite}
.mpp-bg i:nth-child(3){background:var(--blob3);bottom:-22vmax;left:28vw;animation:mpp-d3 32s ease-in-out infinite}
.mpp-root.mpp-playing .mpp-bg i{animation-play-state:paused}

/* ---------- Layout ---------- */
.mpp-app{position:relative;display:flex;flex-direction:column;flex:1;min-height:0;gap:12px;padding:12px 14px 14px}
.mpp-header{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:9px 12px 9px 12px;border:1px solid var(--border);border-radius:18px;background:var(--panel);backdrop-filter:blur(18px) saturate(1.4);box-shadow:var(--shadow);flex:none}
.mpp-brand{display:flex;align-items:center;gap:12px;min-width:0}
.mpp-logo{width:40px;height:40px;border-radius:13px;display:grid;place-items:center;background:linear-gradient(135deg,var(--accent),var(--accent-2));color:var(--accent-ink);box-shadow:0 8px 22px var(--glow);flex:none}
.mpp-logo .mpp-ic{width:18px;height:18px}
.mpp-brand-txt{min-width:0}
.mpp-brand-txt b{display:block;font-size:16px;font-weight:750;letter-spacing:.1px;background:linear-gradient(90deg,var(--text) 40%,var(--accent));-webkit-background-clip:text;background-clip:text;color:transparent;white-space:nowrap}
.mpp-brand-txt small{display:block;color:var(--muted);font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.mpp-header-actions{display:flex;align-items:center;gap:8px;flex:none}

.mpp-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;height:38px;padding:0 16px;border-radius:999px;border:1px solid var(--border);background:var(--card);font-weight:650;font-size:13px;white-space:nowrap;transition:transform .18s,box-shadow .2s,background .2s,border-color .2s,color .2s}
.mpp-btn .mpp-ic{width:17px;height:17px}
.mpp-btn:hover{transform:translateY(-1px);border-color:var(--accent);color:var(--accent);box-shadow:0 6px 18px var(--soft)}
.mpp-btn:active{transform:scale(.97)}
.mpp-btn.primary{background:linear-gradient(135deg,var(--accent),var(--accent-2));color:var(--accent-ink);border-color:transparent;box-shadow:0 8px 22px var(--glow)}
.mpp-btn.primary:hover{color:var(--accent-ink);box-shadow:0 10px 28px var(--glow);filter:brightness(1.06)}
.mpp-btn.danger{background:linear-gradient(135deg,var(--danger),#ff9a5c);color:#fff;border-color:transparent}
.mpp-btn.danger:hover{color:#fff}
.mpp-ib{width:38px;height:38px;display:grid;place-items:center;border-radius:12px;border:1px solid transparent;transition:background .18s,color .18s,transform .18s,border-color .18s}
.mpp-ib .mpp-ic{width:19px;height:19px}
.mpp-ib:hover{background:var(--card);border-color:var(--border);color:var(--accent);transform:translateY(-1px)}
.mpp-ib.close:hover{color:var(--danger);border-color:var(--danger)}

/* ---------- Player ---------- */
.mpp-stage{flex:1;min-height:0;display:flex}
.mpp-player{position:relative;flex:1;min-width:0;border-radius:22px;overflow:hidden;background:#000;border:1px solid var(--border);box-shadow:var(--shadow);isolation:isolate;color:#fff;user-select:none;-webkit-user-select:none}
.mpp-video{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;background:#000;outline:none}
.mpp-video::cue{background:rgba(0,0,0,.68);color:#fff;font-size:1.15em;font-family:inherit;line-height:1.5}

.mpp-empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:30px;text-align:center;cursor:pointer;background:radial-gradient(620px 380px at 50% 42%,var(--soft),transparent 70%),#05060c;transition:background .3s}
.mpp-empty:hover{background:radial-gradient(700px 420px at 50% 42%,var(--soft),transparent 72%),#070913}
.mpp-empty-ic{width:98px;height:98px;border-radius:30px;display:grid;place-items:center;background:linear-gradient(135deg,var(--accent),var(--accent-2));color:var(--accent-ink);box-shadow:0 20px 56px var(--glow);animation:mpp-float 4.5s ease-in-out infinite;margin-bottom:10px}
.mpp-empty-ic .mpp-ic{width:44px;height:44px}
.mpp-empty h2{margin:0;font-size:26px;font-weight:760;letter-spacing:-.2px}
.mpp-empty p{margin:0;color:rgba(255,255,255,.62);font-size:14px}
.mpp-fmts{display:flex;flex-wrap:wrap;justify-content:center;gap:6px;max-width:520px;margin-top:12px}
.mpp-fmts span{padding:3px 10px;border-radius:999px;font-size:11.5px;font-weight:650;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);color:rgba(255,255,255,.7)}

.mpp-veil{position:absolute;inset:10px;z-index:50;border-radius:26px;border:2px dashed var(--accent);background:rgba(3,5,12,.66);backdrop-filter:blur(8px);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;font-size:20px;font-weight:700;color:#fff;opacity:0;pointer-events:none;transition:opacity .2s}
.mpp-veil .mpp-ic{width:44px;height:44px;color:var(--accent)}
.mpp-veil.on{opacity:1}

.mpp-top{position:absolute;left:0;right:0;top:0;z-index:5;padding:18px 22px 44px;background:linear-gradient(180deg,rgba(0,0,0,.74),transparent);transition:opacity .35s,transform .35s;pointer-events:none}
.mpp-now-title{display:block;max-width:82%;font-size:18px;font-weight:720;text-shadow:0 2px 12px rgba(0,0,0,.7);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.mpp-now-sub{display:block;font-size:13px;color:rgba(255,255,255,.7);margin-top:2px}
.mpp-chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:9px}
.mpp-chip{padding:3px 10px;border-radius:999px;font-size:11.5px;font-weight:700;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.18);backdrop-filter:blur(6px)}
.mpp-chip.hl{background:linear-gradient(135deg,var(--accent),var(--accent-2));color:var(--accent-ink);border-color:transparent}

.mpp-audio{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:28px;padding:96px 24px 140px;background:#05060c;overflow:hidden}
.mpp-audio::before{content:"";position:absolute;inset:-60px;background:var(--cover,none) center/cover no-repeat;filter:blur(64px) saturate(1.5);opacity:.5;transform:scale(1.2)}
.mpp-art{position:relative;width:min(40vh,330px);aspect-ratio:1;border-radius:30px;overflow:hidden;display:grid;place-items:center;background:linear-gradient(135deg,var(--accent),var(--accent-2));color:var(--accent-ink);box-shadow:0 32px 80px rgba(0,0,0,.6),0 0 70px var(--glow);will-change:transform;transition:transform .09s linear}
.mpp-art img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.mpp-art>.mpp-ic{width:36%;height:36%}
.mpp-viz{position:relative;width:min(80%,760px);height:104px}
.mpp-root.mpp-playing .mpp-art.breathe{animation:mpp-breathe 2.6s ease-in-out infinite}

.mpp-hud{position:absolute;top:92px;left:50%;transform:translate(-50%,-8px) scale(.95);z-index:8;display:flex;align-items:center;gap:10px;padding:10px 20px;border-radius:999px;background:rgba(10,12,24,.8);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.16);font-weight:700;opacity:0;pointer-events:none;transition:opacity .2s,transform .2s}
.mpp-hud.show{opacity:1;transform:translate(-50%,0) scale(1)}
.mpp-hud .mpp-ic{width:19px;height:19px;color:var(--accent)}
.mpp-flash{position:absolute;left:50%;top:50%;z-index:7;width:86px;height:86px;border-radius:50%;display:grid;place-items:center;background:rgba(10,12,24,.58);backdrop-filter:blur(6px);opacity:0;pointer-events:none;transform:translate(-50%,-50%)}
.mpp-flash.go{animation:mpp-flash .55s ease-out}
.mpp-flash .mpp-ic{width:38px;height:38px}
.mpp-rip{position:absolute;top:0;bottom:0;width:34%;z-index:4;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;font-weight:800;opacity:0;pointer-events:none}
.mpp-rip.l{left:0;background:radial-gradient(closest-side at 0 50%,rgba(255,255,255,.26),transparent)}
.mpp-rip.r{right:0;background:radial-gradient(closest-side at 100% 50%,rgba(255,255,255,.26),transparent)}
.mpp-rip.go{animation:mpp-rip .6s ease-out}
.mpp-rip .mpp-ic{width:30px;height:30px}
.mpp-shot{position:absolute;inset:0;z-index:9;background:#fff;opacity:0;pointer-events:none}
.mpp-shot.go{animation:mpp-shot .35s ease-out}
.mpp-spin{position:absolute;left:50%;top:50%;width:56px;height:56px;margin:-28px 0 0 -28px;border-radius:50%;border:4px solid rgba(255,255,255,.18);border-top-color:var(--accent);animation:mpp-spin .8s linear infinite;z-index:7;opacity:0;pointer-events:none;transition:opacity .2s}
.mpp-player.loading .mpp-spin{opacity:1}

/* ---------- Controls ---------- */
.mpp-controls{position:absolute;left:0;right:0;bottom:0;z-index:6;padding:46px 18px 12px;background:linear-gradient(0deg,rgba(0,0,0,.86),rgba(0,0,0,.46) 58%,transparent);transition:opacity .35s,transform .35s}
.mpp-player.idle{cursor:none}
.mpp-player.idle .mpp-controls{opacity:0;transform:translateY(10px);pointer-events:none}
.mpp-player.idle .mpp-top{opacity:0;transform:translateY(-8px)}
.mpp-player.empty .mpp-controls,.mpp-player.empty .mpp-top{display:none}
.mpp-seek{position:relative;height:22px;display:flex;align-items:center;cursor:pointer;touch-action:none}
.mpp-seek-track{position:relative;flex:1;height:5px;border-radius:5px;background:rgba(255,255,255,.22);transition:height .15s}
.mpp-seek:hover .mpp-seek-track,.mpp-seek.drag .mpp-seek-track{height:8px}
.mpp-seek-buf{position:absolute;inset:0 auto 0 0;width:0;border-radius:inherit;background:rgba(255,255,255,.3)}
.mpp-seek-fill{position:absolute;inset:0 auto 0 0;width:0;border-radius:inherit;background:linear-gradient(90deg,var(--accent),var(--accent-2));box-shadow:0 0 16px var(--glow)}
.mpp-seek-knob{position:absolute;top:50%;left:0;width:16px;height:16px;margin:-8px 0 0 -8px;border-radius:50%;background:#fff;box-shadow:0 0 0 5px var(--glow);transform:scale(0);transition:transform .15s}
.mpp-seek:hover .mpp-seek-knob,.mpp-seek.drag .mpp-seek-knob{transform:scale(1)}
.mpp-ab{position:absolute;top:-3px;bottom:-3px;display:none;background:rgba(255,255,255,.34);border-left:2px solid #fff;border-right:2px solid #fff;border-radius:2px}
.mpp-seek-tip{position:absolute;bottom:28px;left:0;transform:translateX(-50%);padding:4px 10px;border-radius:9px;background:rgba(10,12,24,.92);border:1px solid rgba(255,255,255,.16);font-size:12px;font-weight:700;opacity:0;pointer-events:none;transition:opacity .12s;white-space:nowrap}
.mpp-seek:hover .mpp-seek-tip,.mpp-seek.drag .mpp-seek-tip{opacity:1}
.mpp-ctl-row{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:4px}
.mpp-grp{display:flex;align-items:center;gap:2px;min-width:0}
.mpp-ctl{position:relative;min-width:38px;height:38px;display:inline-flex;align-items:center;justify-content:center;gap:6px;border-radius:12px;color:#fff;opacity:.9;transition:background .15s,transform .15s,opacity .15s,color .15s}
.mpp-ctl .mpp-ic{width:20px;height:20px}
.mpp-ctl:hover{background:rgba(255,255,255,.15);opacity:1;transform:translateY(-1px)}
.mpp-ctl:active{transform:scale(.92)}
.mpp-ctl.on{color:var(--accent);opacity:1;background:rgba(255,255,255,.09)}
.mpp-ctl.on::after{content:"";position:absolute;bottom:3px;left:50%;width:4px;height:4px;margin-left:-2px;border-radius:50%;background:var(--accent);box-shadow:0 0 8px var(--accent)}
.mpp-ctl.wide{padding:0 10px}
.mpp-ctl-txt{padding:0 10px;font-weight:800;font-size:13px;min-width:46px}
.mpp-sleep-t{font-size:12px;font-weight:750;font-variant-numeric:tabular-nums}
.mpp-ctl-play{width:50px;height:50px;border-radius:50%;margin:0 6px;background:linear-gradient(135deg,var(--accent),var(--accent-2));color:var(--accent-ink);opacity:1;box-shadow:0 8px 26px var(--glow)}
.mpp-ctl-play:hover{background:linear-gradient(135deg,var(--accent),var(--accent-2));transform:scale(1.08)}
.mpp-ctl-play .mpp-ic{width:23px;height:23px}
.mpp-time{margin-left:10px;font-variant-numeric:tabular-nums;font-size:13px;font-weight:650;color:rgba(255,255,255,.92);white-space:nowrap}
.mpp-time i{opacity:.5;margin:0 5px;font-style:normal}
.mpp-vol{display:flex;align-items:center}
.mpp-vol-range{-webkit-appearance:none;appearance:none;width:0;opacity:0;height:4px;margin:0;border-radius:4px;cursor:pointer;background:linear-gradient(90deg,var(--accent) var(--p,100%),rgba(255,255,255,.25) var(--p,100%));transition:width .25s,opacity .2s,margin .25s}
.mpp-vol:hover .mpp-vol-range,.mpp-vol:focus-within .mpp-vol-range{width:88px;opacity:1;margin:0 10px 0 4px}
.mpp-vol-range::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;border-radius:50%;background:#fff;box-shadow:0 0 0 4px var(--glow)}
.mpp-vol-range::-moz-range-thumb{width:14px;height:14px;border:0;border-radius:50%;background:#fff;box-shadow:0 0 0 4px var(--glow)}
.mpp-player.is-audio .mpp-vonly{display:none}

/* ---------- Playlist dock ---------- */
.mpp-dock{flex:none;height:238px;display:flex;flex-direction:column;border:1px solid var(--border);border-radius:20px;background:var(--panel);backdrop-filter:blur(18px) saturate(1.4);box-shadow:var(--shadow);overflow:hidden;transition:height .4s cubic-bezier(.2,.8,.2,1)}
.mpp-dock.collapsed{height:58px}
.mpp-dock-head{display:flex;align-items:center;gap:10px;padding:10px 14px;flex:none}
.mpp-dock-toggle{width:34px;height:34px;display:grid;place-items:center;border-radius:11px;transition:background .15s,transform .35s}
.mpp-dock-toggle:hover{background:var(--card);color:var(--accent)}
.mpp-dock.collapsed .mpp-dock-toggle .mpp-ic{transform:rotate(180deg)}
.mpp-dock-toggle .mpp-ic{transition:transform .35s}
.mpp-dock-title{display:flex;align-items:center;gap:9px;font-weight:720;white-space:nowrap}
.mpp-dock-title .mpp-ic{color:var(--accent)}
.mpp-count{min-width:26px;padding:1px 9px;border-radius:999px;background:var(--soft);color:var(--accent);font-size:12px;font-weight:750;text-align:center}
.mpp-total{color:var(--muted);font-size:12.5px;font-variant-numeric:tabular-nums}
.mpp-dock-tools{display:flex;align-items:center;gap:8px;margin-left:auto;min-width:0}
.mpp-search{display:flex;align-items:center;gap:8px;height:34px;width:210px;padding:0 12px;border-radius:999px;background:var(--card);border:1px solid var(--border);transition:border-color .2s,box-shadow .2s,width .25s}
.mpp-search .mpp-ic{width:16px;height:16px;color:var(--muted)}
.mpp-search:focus-within{border-color:var(--accent);box-shadow:0 0 0 4px var(--soft);width:280px}
.mpp-search input{flex:1;min-width:0;background:none;border:0;outline:none;font-size:13px}
.mpp-search input::placeholder{color:var(--muted)}
.mpp-tbtn{height:34px;padding:0 13px;border-radius:999px;display:inline-flex;align-items:center;gap:7px;font-size:12.5px;font-weight:650;white-space:nowrap;background:var(--card);border:1px solid var(--border);transition:border-color .2s,color .2s,transform .18s,background .2s}
.mpp-tbtn .mpp-ic{width:15px;height:15px}
.mpp-tbtn:hover{border-color:var(--accent);color:var(--accent);transform:translateY(-1px)}
.mpp-tbtn.warn:hover{border-color:var(--danger);color:var(--danger)}
.mpp-row{flex:1;min-height:0;display:flex;gap:12px;overflow-x:auto;overflow-y:hidden;padding:6px 14px 14px;align-items:stretch;scrollbar-width:thin;scrollbar-color:var(--accent) transparent}
.mpp-card{position:relative;flex:none;width:176px;display:flex;flex-direction:column;gap:8px;padding:6px;border-radius:16px;background:var(--card);border:1px solid var(--border);cursor:pointer;transition:transform .22s cubic-bezier(.2,.8,.2,1),box-shadow .22s,border-color .2s,background .2s}
.mpp-card:hover{transform:translateY(-4px);border-color:var(--accent);box-shadow:0 14px 30px rgba(0,0,0,.32)}
.mpp-card.active{border-color:var(--accent);background:linear-gradient(180deg,var(--soft),var(--card));box-shadow:0 0 0 1px var(--accent),0 10px 34px var(--glow)}
.mpp-card.dragging{opacity:.35}
.mpp-card.over{outline:2px dashed var(--accent-2);outline-offset:2px}
.mpp-thumb{position:relative;height:96px;border-radius:11px;overflow:hidden;background:#000;flex:none}
.mpp-thumb img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .45s}
.mpp-card:hover .mpp-thumb img{transform:scale(1.08)}
.mpp-thumb-ph{width:100%;height:100%;display:grid;place-items:center;background:linear-gradient(135deg,var(--soft),transparent),var(--panel-solid);color:var(--accent)}
.mpp-thumb-ph .mpp-ic{width:34px;height:34px}
.mpp-num{position:absolute;left:6px;top:6px;min-width:22px;height:22px;padding:0 6px;border-radius:8px;display:grid;place-items:center;background:rgba(0,0,0,.62);color:#fff;font-size:11px;font-weight:700;backdrop-filter:blur(4px)}
.mpp-dur{position:absolute;right:6px;bottom:8px;padding:1px 7px;border-radius:6px;background:rgba(0,0,0,.74);color:#fff;font-size:11px;font-weight:700;font-variant-numeric:tabular-nums}
.mpp-dur:empty{display:none}
.mpp-x{position:absolute;right:6px;top:6px;width:24px;height:24px;border-radius:50%;display:grid;place-items:center;background:rgba(0,0,0,.66);color:#fff;opacity:0;transform:scale(.7);transition:opacity .15s,transform .15s,background .15s}
.mpp-x .mpp-ic{width:13px;height:13px}
.mpp-card:hover .mpp-x{opacity:1;transform:scale(1)}
.mpp-x:hover{background:var(--danger)}
.mpp-eq{position:absolute;left:6px;bottom:8px;display:none;align-items:flex-end;gap:2px;height:20px;padding:4px 6px;border-radius:7px;background:rgba(0,0,0,.66)}
.mpp-card.active .mpp-eq{display:flex}
.mpp-eq i{width:3px;height:100%;border-radius:2px;background:var(--accent);transform-origin:bottom;transform:scaleY(.3)}
.mpp-card.playing .mpp-eq i{animation:mpp-eq .9s ease-in-out infinite}
.mpp-eq i:nth-child(2){animation-delay:.2s}
.mpp-eq i:nth-child(3){animation-delay:.45s}
.mpp-watch{position:absolute;left:0;bottom:0;height:3px;background:linear-gradient(90deg,var(--accent),var(--accent-2))}
.mpp-card-info{padding:0 4px 3px;min-width:0}
.mpp-card-name{display:block;font-size:12.5px;font-weight:650;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.mpp-card-info small{display:block;color:var(--muted);font-size:11.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.mpp-add{flex:none;width:150px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;border:2px dashed var(--border);border-radius:16px;color:var(--muted);font-weight:650;font-size:13px;cursor:pointer;transition:border-color .2s,color .2s,background .2s,transform .2s}
.mpp-add .mpp-ic{width:26px;height:26px}
.mpp-add:hover{border-color:var(--accent);color:var(--accent);background:var(--soft);transform:translateY(-3px)}
.mpp-add.wide{width:260px}
.mpp-nomatch{flex:none;align-self:center;padding:0 18px;color:var(--muted)}

/* ---------- Menus, modals, toasts ---------- */
.mpp-menu{position:fixed;z-index:60;min-width:196px;max-width:290px;max-height:72vh;overflow:auto;padding:6px;border-radius:16px;background:var(--panel-solid);border:1px solid var(--border);box-shadow:0 22px 60px rgba(0,0,0,.5);animation:mpp-pop .16s ease-out;color:var(--text)}
.mpp-mi{display:flex;align-items:center;gap:10px;width:100%;padding:9px 11px;border-radius:10px;font-size:13px;font-weight:620;text-align:left;transition:background .12s,color .12s}
.mpp-mi:hover{background:var(--soft)}
.mpp-mi.on{color:var(--accent)}
.mpp-mi.bad{color:var(--danger)}
.mpp-mi .mpp-ic{width:16px;height:16px}
.mpp-mi.on>.mpp-ic:last-child{margin-left:auto}
.mpp-mi small{margin-left:auto;color:var(--muted);font-weight:500;font-size:12px}
.mpp-mi-title{padding:7px 11px 4px;font-size:12px;color:var(--muted);font-weight:650}
.mpp-mi-sep{height:1px;background:var(--border);margin:6px 4px}
.mpp-swatch{width:22px;height:22px;border-radius:50%;flex:none;border:2px solid var(--border)}
.mpp-menu-input{display:flex;gap:6px;padding:6px}
.mpp-menu-input input{flex:1;min-width:0;height:32px;padding:0 10px;border-radius:10px;border:1px solid var(--border);background:var(--card);outline:none}
.mpp-menu-input input:focus{border-color:var(--accent)}
.mpp-menu-input .mpp-btn{height:32px;padding:0 13px}

.mpp-modal{position:absolute;inset:0;z-index:70;display:grid;place-items:center;padding:16px;background:rgba(3,5,12,.62);backdrop-filter:blur(8px);animation:mpp-in .2s}
.mpp-mcard{width:min(580px,94vw);max-height:88vh;overflow:auto;padding:22px;border-radius:22px;background:var(--panel-solid);border:1px solid var(--border);box-shadow:0 30px 90px rgba(0,0,0,.6);animation:mpp-pop .22s ease-out;color:var(--text)}
.mpp-mcard h3{margin:0 0 4px;font-size:18px;font-weight:740;display:flex;align-items:center;gap:10px}
.mpp-mcard h3 .mpp-ic{color:var(--accent);width:22px;height:22px}
.mpp-mdesc{margin:0 0 14px;color:var(--muted)}
.mpp-mcard textarea{width:100%;min-height:136px;resize:vertical;padding:12px;border-radius:14px;border:1px solid var(--border);background:var(--card);outline:none;font-size:13px;direction:ltr}
.mpp-mcard textarea:focus{border-color:var(--accent);box-shadow:0 0 0 4px var(--soft)}
.mpp-modal-act{display:flex;justify-content:flex-end;gap:10px;margin-top:16px}
.mpp-list{margin:0 0 4px;padding:10px 14px;border-radius:12px;background:var(--card);border:1px solid var(--border);max-height:160px;overflow:auto;font-size:12.5px;color:var(--muted);list-style:none}
.mpp-list li{padding:2px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.mpp-keys{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:2px 26px}
.mpp-key{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:7px 0;border-bottom:1px solid var(--border);font-size:13px}
.mpp-key span:last-child{display:flex;gap:4px;flex:none}
.mpp-keyh{grid-column:1/-1;margin-top:10px;font-weight:700;color:var(--accent);font-size:13px}
.mpp-root kbd{padding:2px 8px;border-radius:7px;background:var(--card);border:1px solid var(--border);border-bottom-width:2px;font:700 11.5px ui-monospace,Consolas,monospace;color:var(--text)}

.mpp-toasts{position:absolute;top:88px;right:22px;z-index:80;display:flex;flex-direction:column;gap:8px;align-items:flex-end;pointer-events:none}
.mpp-toast{display:flex;align-items:center;gap:10px;max-width:420px;padding:10px 16px;border-radius:14px;background:var(--panel-solid);border:1px solid var(--border);box-shadow:0 14px 40px rgba(0,0,0,.45);font-weight:620;font-size:13px;color:var(--text);animation:mpp-toast .28s cubic-bezier(.2,.8,.2,1)}
.mpp-toast.out{opacity:0;transform:translateX(24px);transition:opacity .3s,transform .3s}
.mpp-toast .mpp-ic{width:18px;height:18px}
.mpp-toast.success .mpp-ic{color:var(--ok)}
.mpp-toast.error .mpp-ic{color:var(--danger)}
.mpp-toast.info .mpp-ic{color:var(--accent)}
.mpp-toast.error{border-color:var(--danger)}

/* ---------- Fullscreen ---------- */
.mpp-fs .mpp-header,.mpp-fs .mpp-dock{display:none}
.mpp-fs .mpp-app{padding:0;gap:0}
.mpp-fs .mpp-player{border-radius:0;border:0}
.mpp-fs .mpp-toasts,.mpp-fs .mpp-hud{top:22px}

/* ---------- Launcher ---------- */
.mpp-launch{position:fixed;top:22px;right:22px;z-index:2147482999;display:flex;align-items:center;gap:10px;padding:6px 8px 6px 6px;border-radius:999px;background:linear-gradient(135deg,var(--accent),var(--accent-2));color:var(--accent-ink);font:700 14px/1 "Segoe UI Variable Text","Segoe UI",system-ui,sans-serif;cursor:pointer;box-shadow:0 10px 30px var(--glow),inset 0 0 0 1px rgba(255,255,255,.28);transition:transform .2s,box-shadow .2s;animation:mpp-in .5s;user-select:none}
.mpp-launch *{box-sizing:border-box}
.mpp-launch:hover{transform:translateY(-2px) scale(1.03);box-shadow:0 14px 38px var(--glow),inset 0 0 0 1px rgba(255,255,255,.35)}
.mpp-launch-ring{position:absolute;inset:0;border-radius:inherit;border:2px solid var(--accent);animation:mpp-ring 2.4s ease-out infinite;pointer-events:none}
.mpp-launch-ic{width:36px;height:36px;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.26)}
.mpp-launch-ic .mpp-ic{width:18px;height:18px}
.mpp-launch-txt{padding:0 4px 0 2px;white-space:nowrap}
.mpp-launch-x{width:26px;height:26px;border-radius:50%;display:grid;place-items:center;background:rgba(0,0,0,.2);color:inherit;opacity:.75;transition:opacity .2s,background .2s}
.mpp-launch-x .mpp-ic{width:13px;height:13px}
.mpp-launch-x:hover{opacity:1;background:rgba(0,0,0,.36)}

/* ---------- Responsive & motion ---------- */
@media (max-width:1180px){.mpp-tbtn span,.mpp-header .mpp-btn span{display:none}.mpp-header .mpp-btn{padding:0 12px}.mpp-search{width:150px}.mpp-total{display:none}}
@media (max-width:860px){.mpp-hide-sm{display:none!important}.mpp-controls{padding-inline:10px}.mpp-brand-txt small{display:none}.mpp-now-title{font-size:15px}.mpp-time{margin-left:4px}}
@media (max-width:600px){.mpp-vol{display:none}.mpp-brand-txt{display:none}.mpp-dock-title b{display:none}}
@media (prefers-reduced-motion:reduce){.mpp-root *,.mpp-root *::before,.mpp-launch *,.mpp-launch{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}
`);

    /* ════════════════════════════════════════════════════════════════
       Player
       ════════════════════════════════════════════════════════════════ */
    class MP4ViewerPro {
        constructor(opts) {
            opts = opts || {};
            this.onClose = opts.onClose || function () {};
            this.playlist = []; this.index = -1; this.item = null; this.uid = 0;
            this.isPlaying = false; this.filter = '';
            this.history = []; this._pool = [];
            this.ab = { a: null, b: null };
            this.sleep = { mode: null, end: 0, timer: null };
            this._probeQ = []; this._probing = false;
            this._dragSrc = null; this._dragDepth = 0; this._errStreak = 0;
            this._pendingSeek = 0; this._lastBuf = 0; this._lastSave = 0; this._raf = 0;

            const savedTheme = store.get('theme');
            this.themeId = THEMES[savedTheme] ? savedTheme : CONFIG.defaultTheme;
            this.volume = clamp(Number(store.get('volume', 1)), 0, 1);
            this.muted = !!store.get('muted', false);
            this.speed = SPEEDS.indexOf(Number(store.get('speed', 1))) !== -1 ? Number(store.get('speed', 1)) : 1;
            const rep = store.get('repeat', 'all');
            this.repeat = ['off', 'all', 'one'].indexOf(rep) !== -1 ? rep : 'all';
            this.shuffle = !!store.get('shuffle', false);
            const fit = store.get('fit', 'contain');
            this.fit = ['contain', 'cover', 'fill'].indexOf(fit) !== -1 ? fit : 'contain';
            this.dockCollapsed = !!store.get('dock', false);
            this.resume = store.get('resume', {}) || {};

            this._kd = e => this.onKey(e);
            this._fsc = () => this.onFsChange();
            this.build();
            this.bind();
            this.applyTheme(this.themeId, false);
            this.syncControls();
            this.setupMediaSession();
            this.renderPlaylist();
            document.addEventListener('keydown', this._kd, true);
            document.addEventListener('fullscreenchange', this._fsc);
            if (CONFIG.autoAddCurrentFile) this.addCurrentPageMedia();
        }

        /* ─────────── DOM ─────────── */
        build() {
            const root = this.root = document.createElement('div');
            root.className = 'mpp-root';
            const fmts = ALL_EXT.map(e => '<span>' + e.toUpperCase() + '</span>').join('');
            root.innerHTML = `
<div class="mpp-bg"><i></i><i></i><i></i></div>
<div class="mpp-app">
  <header class="mpp-header">
    <div class="mpp-brand">
      <span class="mpp-logo">${ic('play')}</span>
      <div class="mpp-brand-txt"><b>MP4 Player Pro</b><small>Drop videos, music or links anywhere to play</small></div>
    </div>
    <div class="mpp-header-actions">
      <button class="mpp-btn primary" data-act="addFiles" title="Add files (O)">${ic('folderPlus')}<span>Add files</span></button>
      <button class="mpp-btn" data-act="addUrl" title="Add links (U)">${ic('link')}<span>Add links</span></button>
      <button class="mpp-ib" data-act="theme" title="Change theme (T)" aria-label="Change theme">${ic('palette')}</button>
      <button class="mpp-ib" data-act="help" title="Keyboard shortcuts (?)" aria-label="Keyboard shortcuts">${ic('keyboard')}</button>
      <button class="mpp-ib" data-act="fullscreen" data-fs title="Fullscreen (F)" aria-label="Fullscreen">${ic('maximize')}</button>
      <button class="mpp-ib close" data-act="close" title="Close (Esc)" aria-label="Close player">${ic('x')}</button>
    </div>
  </header>

  <main class="mpp-stage">
    <div class="mpp-player empty" tabindex="-1">
      <video class="mpp-video mpp-hidden" playsinline></video>
      <div class="mpp-audio mpp-hidden"><div class="mpp-art breathe"></div><canvas class="mpp-viz"></canvas></div>
      <div class="mpp-empty" data-act="addFiles">
        <div class="mpp-empty-ic">${ic('film')}</div>
        <h2>Drop something to watch</h2>
        <p>Drag files here, or click to browse. You can also drop a subtitle file together with a video.</p>
        <div class="mpp-fmts">${fmts}</div>
      </div>
      <div class="mpp-top"><span class="mpp-now-title"></span><span class="mpp-now-sub"></span><div class="mpp-chips"></div></div>
      <div class="mpp-rip l"></div><div class="mpp-rip r"></div>
      <div class="mpp-hud"></div><div class="mpp-flash"></div><div class="mpp-shot"></div><div class="mpp-spin"></div>
      <div class="mpp-controls">
        <div class="mpp-seek" role="slider" aria-label="Seek" tabindex="-1">
          <div class="mpp-seek-track"><div class="mpp-seek-buf"></div><div class="mpp-seek-fill"></div><div class="mpp-ab"></div><div class="mpp-seek-knob"></div></div>
          <div class="mpp-seek-tip">0:00</div>
        </div>
        <div class="mpp-ctl-row">
          <div class="mpp-grp">
            <button class="mpp-ctl" data-act="prev" title="Previous (P)" aria-label="Previous">${ic('prev')}</button>
            <button class="mpp-ctl mpp-hide-sm" data-act="back" title="Back 10s (J)" aria-label="Back 10 seconds">${ic('back')}</button>
            <button class="mpp-ctl mpp-ctl-play" data-act="play" title="Play / Pause (Space)" aria-label="Play or pause">${ic('play')}</button>
            <button class="mpp-ctl mpp-hide-sm" data-act="fwd" title="Forward 10s (L)" aria-label="Forward 10 seconds">${ic('fwd')}</button>
            <button class="mpp-ctl" data-act="next" title="Next (N)" aria-label="Next">${ic('next')}</button>
            <div class="mpp-vol">
              <button class="mpp-ctl" data-act="mute" title="Mute (M)" aria-label="Mute">${ic('vol2')}</button>
              <input class="mpp-vol-range" type="range" min="0" max="100" step="1" value="100" aria-label="Volume">
            </div>
            <div class="mpp-time"><span class="mpp-t-cur">0:00</span><i>/</i><span class="mpp-t-dur">0:00</span></div>
          </div>
          <div class="mpp-grp">
            <button class="mpp-ctl mpp-hide-sm" data-act="shuffle" title="Shuffle (H)" aria-label="Shuffle">${ic('shuffle')}</button>
            <button class="mpp-ctl mpp-hide-sm" data-act="repeat" title="Repeat (R)" aria-label="Repeat">${ic('repeat')}</button>
            <button class="mpp-ctl mpp-hide-sm" data-act="ab" title="Loop a section A–B (A)" aria-label="Loop a section">${ic('ab')}</button>
            <button class="mpp-ctl mpp-ctl-txt" data-act="speed" title="Playback speed ( [ and ] )" aria-label="Playback speed"><span class="mpp-speed-t">1×</span></button>
            <button class="mpp-ctl mpp-vonly" data-act="cc" title="Subtitles (C)" aria-label="Subtitles">${ic('cc')}</button>
            <button class="mpp-ctl" data-act="sleep" title="Sleep timer" aria-label="Sleep timer">${ic('moon')}<span class="mpp-sleep-t"></span></button>
            <button class="mpp-ctl mpp-vonly mpp-hide-sm" data-act="fit" title="Video fit (V)" aria-label="Video fit">${ic('crop')}</button>
            <button class="mpp-ctl mpp-vonly mpp-hide-sm" data-act="shot" title="Screenshot (S)" aria-label="Take screenshot">${ic('camera')}</button>
            <button class="mpp-ctl mpp-vonly mpp-hide-sm" data-act="pip" title="Picture in picture (I)" aria-label="Picture in picture">${ic('pip')}</button>
            <button class="mpp-ctl" data-act="fullscreen" data-fs title="Fullscreen (F)" aria-label="Fullscreen">${ic('maximize')}</button>
          </div>
        </div>
      </div>
    </div>
  </main>

  <section class="mpp-dock">
    <div class="mpp-dock-head">
      <button class="mpp-dock-toggle" data-act="dock" title="Show or hide playlist (B)" aria-label="Show or hide playlist">${ic('chevDown')}</button>
      <div class="mpp-dock-title">${ic('list')}<b>Playlist</b><span class="mpp-count">0</span><span class="mpp-total"></span></div>
      <div class="mpp-dock-tools">
        <label class="mpp-search">${ic('search')}<input type="search" placeholder="Search playlist  ( / )" aria-label="Search playlist"></label>
        <button class="mpp-tbtn" data-act="sort" title="Sort playlist">${ic('sort')}<span>Sort</span></button>
        <button class="mpp-tbtn" data-act="importList" title="Import a playlist file">${ic('upload')}<span>Import</span></button>
        <button class="mpp-tbtn" data-act="exportList" title="Export playlist">${ic('download')}<span>Export</span></button>
        <button class="mpp-tbtn" data-act="lucky" title="Pick one at random and drop the rest">${ic('dice')}<span>Lucky</span></button>
        <button class="mpp-tbtn warn" data-act="clear" title="Remove everything">${ic('trash')}<span>Clear</span></button>
      </div>
    </div>
    <div class="mpp-row"></div>
  </section>
</div>
<div class="mpp-veil">${ic('upload')}<span>Drop to add to your playlist</span></div>
<div class="mpp-toasts" aria-live="polite"></div>`;
            document.body.appendChild(root);

            const q = s => root.querySelector(s);
            this.player = q('.mpp-player'); this.video = q('.mpp-video');
            this.audioEl = q('.mpp-audio'); this.art = q('.mpp-art'); this.viz = q('.mpp-viz');
            this.emptyEl = q('.mpp-empty');
            this.titleEl = q('.mpp-now-title'); this.subEl = q('.mpp-now-sub'); this.chipsEl = q('.mpp-chips');
            this.hudEl = q('.mpp-hud'); this.flashEl = q('.mpp-flash'); this.shotEl = q('.mpp-shot');
            this.ripL = q('.mpp-rip.l'); this.ripR = q('.mpp-rip.r');
            this.controls = q('.mpp-controls');
            this.seekEl = q('.mpp-seek'); this.seekFill = q('.mpp-seek-fill'); this.seekBuf = q('.mpp-seek-buf');
            this.seekKnob = q('.mpp-seek-knob'); this.seekTip = q('.mpp-seek-tip'); this.abEl = q('.mpp-ab');
            this.curEl = q('.mpp-t-cur'); this.durEl = q('.mpp-t-dur');
            this.volRange = q('.mpp-vol-range');
            this.dock = q('.mpp-dock'); this.row = q('.mpp-row');
            this.countEl = q('.mpp-count'); this.totalEl = q('.mpp-total');
            this.searchEl = q('.mpp-search input');
            this.veil = q('.mpp-veil'); this.toasts = q('.mpp-toasts');
            this.btn = a => root.querySelector('.mpp-ctl[data-act="' + a + '"]');
            this.bindVideo(this.video);
        }

        bindVideo(v) {
            const on = (ev, fn) => v.addEventListener(ev, fn);
            on('play', () => this.setPlaying(!v.paused));
            on('pause', () => { this.setPlaying(!v.paused); this.saveResume(); });
            on('playing', () => { this.setLoading(false); this._errStreak = 0; });
            on('waiting', () => this.setLoading(true));
            on('canplay', () => this.setLoading(false));
            on('loadedmetadata', () => this.onMeta());
            on('durationchange', () => this.updateSeekUI());
            on('timeupdate', () => this.onTime());
            on('seeked', () => this.updateSeekUI());
            on('progress', () => this.updateBuffer());
            on('volumechange', () => this.onVolume());
            on('ratechange', () => this.updateSpeedUI());
            on('ended', () => this.onEnded());
            on('error', () => this.onError());
            on('enterpictureinpicture', () => { const b = this.btn('pip'); if (b) b.classList.add('on'); });
            on('leavepictureinpicture', () => { const b = this.btn('pip'); if (b) b.classList.remove('on'); });
            v.volume = this.volume; v.muted = this.muted;
            v.defaultPlaybackRate = this.speed; v.playbackRate = this.speed;
            v.style.objectFit = this.fit;
        }

        bind() {
            const root = this.root;
            this.actions = {
                addFiles: () => this.openFilePicker(), addMore: () => this.openFilePicker(), addUrl: () => this.openUrlModal(),
                theme: b => this.openThemeMenu(b), help: () => this.openHelp(), fullscreen: () => this.toggleFullscreen(), close: () => this.close(),
                prev: () => this.prev(), next: () => this.next(false), play: () => this.togglePlay(true),
                back: () => this.seekBy(-CONFIG.seekStep, 'l'), fwd: () => this.seekBy(CONFIG.seekStep, 'r'),
                mute: () => this.toggleMute(), shuffle: () => this.toggleShuffle(), repeat: () => this.cycleRepeat(), ab: () => this.cycleAB(),
                speed: b => this.openSpeedMenu(b), cc: b => this.openCaptionMenu(b), sleep: b => this.openSleepMenu(b),
                fit: () => this.cycleFit(), shot: () => this.screenshot(), pip: () => this.togglePip(),
                dock: () => this.toggleDock(), sort: b => this.openSortMenu(b), importList: () => this.importPlaylist(),
                exportList: () => this.exportPlaylist(), lucky: () => this.lucky(), clear: () => this.clearPlaylist()
            };
            root.addEventListener('click', e => {
                const b = e.target.closest('[data-act]');
                if (!b || !root.contains(b)) return;
                const fn = this.actions[b.dataset.act];
                if (fn) { e.stopPropagation(); fn(b, e); }
            });

            // Volume slider
            this.volRange.addEventListener('input', () => this.setVolume(this.volRange.value / 100, false));

            // Playlist: click / remove / reorder (event delegation)
            this.row.addEventListener('click', e => {
                const card = e.target.closest('.mpp-card');
                if (!card) return;
                const i = +card.dataset.i;
                if (e.target.closest('[data-rm]')) this.removeFromPlaylist(i);
                else this.playIndex(i);
            });
            this.row.addEventListener('wheel', e => {
                if (e.deltaY !== 0 && Math.abs(e.deltaY) > Math.abs(e.deltaX)) { e.preventDefault(); this.row.scrollLeft += e.deltaY; }
            }, { passive: false });
            this.row.addEventListener('dragstart', e => {
                const c = e.target.closest && e.target.closest('.mpp-card');
                if (!c) return;
                this._dragSrc = +c.dataset.i;
                e.dataTransfer.effectAllowed = 'move';
                try { e.dataTransfer.setData('text/plain', 'mpp:' + c.dataset.i); } catch (err) { /* ignore */ }
                c.classList.add('dragging');
            });
            this.row.addEventListener('dragover', e => {
                if (this._dragSrc === null) return;
                e.preventDefault(); e.dataTransfer.dropEffect = 'move';
                const c = e.target.closest('.mpp-card');
                this.row.querySelectorAll('.over').forEach(x => { if (x !== c) x.classList.remove('over'); });
                if (c) c.classList.add('over');
            });
            this.row.addEventListener('drop', e => {
                if (this._dragSrc === null) return;
                e.preventDefault(); e.stopPropagation();
                const c = e.target.closest('.mpp-card'), from = this._dragSrc;
                this._dragSrc = null;
                if (c) this.moveItem(from, +c.dataset.i);
            });
            this.row.addEventListener('dragend', () => {
                this._dragSrc = null;
                this.row.querySelectorAll('.dragging,.over').forEach(x => x.classList.remove('dragging', 'over'));
            });

            // Search (debounced)
            this.searchEl.addEventListener('input', () => {
                clearTimeout(this._searchT);
                this._searchT = setTimeout(() => { this.filter = this.searchEl.value.trim(); this.renderPlaylist(); }, 120);
            });

            // Drop files / links anywhere
            const hasExternal = e => {
                if (this._dragSrc !== null || !e.dataTransfer) return false;
                const t = Array.prototype.slice.call(e.dataTransfer.types || []);
                return t.indexOf('Files') !== -1 || t.indexOf('text/uri-list') !== -1;
            };
            root.addEventListener('dragenter', e => { if (!hasExternal(e)) return; e.preventDefault(); this._dragDepth++; this.veil.classList.add('on'); });
            root.addEventListener('dragover', e => { if (!hasExternal(e)) return; e.preventDefault(); e.dataTransfer.dropEffect = 'copy'; });
            root.addEventListener('dragleave', e => { if (!hasExternal(e)) return; this._dragDepth = Math.max(0, this._dragDepth - 1); if (!this._dragDepth) this.veil.classList.remove('on'); });
            root.addEventListener('drop', e => {
                this._dragDepth = 0; this.veil.classList.remove('on');
                if (this._dragSrc !== null || !e.dataTransfer) return;
                e.preventDefault();
                const dt = e.dataTransfer;
                if (dt.files && dt.files.length) { this.addFiles(dt.files); return; }
                const txt = dt.getData('text/uri-list') || dt.getData('text/plain') || '';
                const lines = txt.split(/\r?\n/).map(s => s.trim()).filter(l => l && l[0] !== '#');
                if (lines.length) this.addUrls(lines);
            });

            // Stage gestures: click = play/pause, double-click sides = ±10s, double-click centre = fullscreen, wheel = volume
            this.player.addEventListener('click', e => {
                if (e.target.closest('.mpp-controls,.mpp-empty') || !this.item) return;
                const r = this.player.getBoundingClientRect(), x = (e.clientX - r.left) / r.width;
                if (this._clickT) {
                    clearTimeout(this._clickT); this._clickT = null;
                    if (x < 0.33) this.seekBy(-CONFIG.seekStep, 'l');
                    else if (x > 0.67) this.seekBy(CONFIG.seekStep, 'r');
                    else this.toggleFullscreen();
                    return;
                }
                this._clickT = setTimeout(() => { this._clickT = null; this.togglePlay(true); }, 230);
            });
            this.player.addEventListener('wheel', e => {
                if (!this.item) return;
                e.preventDefault();
                this.setVolume((this.muted ? 0 : this.volume) + (e.deltaY < 0 ? 0.05 : -0.05), true);
            }, { passive: false });

            // Auto-hide controls
            root.addEventListener('pointermove', () => this.pokeUI());
            this.controls.addEventListener('pointerenter', () => { this._overCtl = true; });
            this.controls.addEventListener('pointerleave', () => { this._overCtl = false; this.pokeUI(); });

            this.bindSeek();
        }

        bindSeek() {
            const s = this.seekEl;
            const pct = e => { const r = s.getBoundingClientRect(); return clamp((e.clientX - r.left) / r.width, 0, 1); };
            s.addEventListener('pointerdown', e => {
                if (!this.item) return;
                e.preventDefault();
                try { s.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
                this._scrub = true; s.classList.add('drag');
                this.showTip(pct(e)); this.scrubTo(pct(e));
            });
            s.addEventListener('pointermove', e => { const p = pct(e); this.showTip(p); if (this._scrub) this.scrubTo(p); });
            const end = e => {
                if (!this._scrub) return;
                this._scrub = false; s.classList.remove('drag');
                try { s.releasePointerCapture(e.pointerId); } catch (err) { /* ignore */ }
            };
            s.addEventListener('pointerup', end); s.addEventListener('pointercancel', end);
        }

        /* ─────────── Theme ─────────── */
        applyTheme(id, announce) {
            if (!THEMES[id]) return;
            this.themeId = id;
            this.root.dataset.theme = id;
            this.root.dataset.mode = THEMES[id].light ? 'light' : 'dark';
            const cs = getComputedStyle(this.root);
            this.colors = { a: cs.getPropertyValue('--accent').trim() || '#7c8cff', b: cs.getPropertyValue('--accent-2').trim() || '#c77dff' };
            const l = document.querySelector('.mpp-launch'); if (l) l.dataset.theme = id;
            this.saveSoon();
            if (announce) this.toast('Theme: ' + THEMES[id].name, 'success', 1600);
        }
        cycleTheme() {
            const ids = Object.keys(THEMES);
            this.applyTheme(ids[(ids.indexOf(this.themeId) + 1) % ids.length], true);
        }
        openThemeMenu(btn) {
            this.openMenu(btn, (m, close) => {
                const fill = () => {
                    m.innerHTML = '<div class="mpp-mi-title">Choose a theme</div>';
                    Object.keys(THEMES).forEach(id => {
                        const t = THEMES[id];
                        const b = this.mi(t.name, { on: id === this.themeId, onClick: () => { this.applyTheme(id, false); fill(); } });
                        const sw = document.createElement('span');
                        sw.className = 'mpp-swatch';
                        sw.style.background = 'linear-gradient(135deg,' + t.vars['--accent'] + ',' + t.vars['--accent-2'] + ')';
                        b.insertBefore(sw, b.firstChild);
                        m.appendChild(b);
                    });
                };
                fill();
            }, false);
        }

        /* ─────────── Menus / modals / toasts ─────────── */
        mi(label, o) {
            o = o || {};
            const b = document.createElement('button');
            b.className = 'mpp-mi' + (o.on ? ' on' : '') + (o.bad ? ' bad' : '');
            b.innerHTML = (o.icon ? ic(o.icon) : '') + '<span>' + esc(label) + '</span>' + (o.hint ? '<small>' + esc(o.hint) + '</small>' : '') + (o.on ? ic('check') : '');
            b.addEventListener('click', () => { if (o.onClick) o.onClick(); });
            return b;
        }
        openMenu(anchor, build, above) {
            if (this._menu && this._menu.anchor === anchor) { this.closeMenu(); return; }
            this.closeMenu();
            const m = document.createElement('div');
            m.className = 'mpp-menu';
            this.root.appendChild(m);
            build(m, () => this.closeMenu());
            const r = anchor.getBoundingClientRect(), mw = m.offsetWidth, mh = m.offsetHeight;
            const left = clamp(r.left + r.width / 2 - mw / 2, 8, window.innerWidth - mw - 8);
            let top = above === false ? r.bottom + 10 : r.top - mh - 10;
            if (top < 8) top = r.bottom + 10;
            if (top + mh > window.innerHeight - 8) top = Math.max(8, window.innerHeight - mh - 8);
            m.style.left = left + 'px'; m.style.top = top + 'px';
            this._menu = { el: m, anchor: anchor };
            this._menuOff = e => { if (!m.contains(e.target) && !anchor.contains(e.target)) this.closeMenu(); };
            setTimeout(() => document.addEventListener('pointerdown', this._menuOff, true), 0);
        }
        closeMenu() {
            if (!this._menu) return;
            this._menu.el.remove(); this._menu = null;
            document.removeEventListener('pointerdown', this._menuOff, true);
            this.pokeUI();
        }
        openModal(o) {
            this.closeMenu();
            if (this._modal) this._modal.close();
            const wrap = document.createElement('div');
            wrap.className = 'mpp-modal';
            wrap.innerHTML = '<div class="mpp-mcard" role="dialog" aria-modal="true"><h3>' + (o.icon ? ic(o.icon) : '') + '<span>' + esc(o.title) + '</span></h3>' +
                (o.desc ? '<p class="mpp-mdesc">' + esc(o.desc) + '</p>' : '') + '<div class="mpp-mbody"></div><div class="mpp-modal-act"></div></div>';
            const body = wrap.querySelector('.mpp-mbody'), act = wrap.querySelector('.mpp-modal-act');
            if (typeof o.body === 'string') body.innerHTML = o.body; else if (o.body) body.appendChild(o.body);
            let closed = false;
            const api = {
                el: wrap,
                close: () => {
                    if (closed) return; closed = true; wrap.remove(); this._modal = null;
                    if (o.onClose) o.onClose();
                }
            };
            (o.buttons || []).forEach(bd => {
                const b = document.createElement('button');
                b.className = 'mpp-btn' + (bd.kind ? ' ' + bd.kind : '');
                b.textContent = bd.label;
                b.addEventListener('click', () => bd.onClick ? bd.onClick(api) : api.close());
                act.appendChild(b);
            });
            wrap.addEventListener('pointerdown', e => { if (e.target === wrap) api.close(); });
            this.root.appendChild(wrap);
            this._modal = api;
            const first = wrap.querySelector('textarea,input') || act.lastElementChild;
            if (first) first.focus();
            return api;
        }
        confirmDialog(o) {
            return new Promise(res => {
                let settled = false;
                const fin = v => { if (!settled) { settled = true; res(v); } };
                this.openModal({
                    title: o.title, icon: o.icon || 'alert', desc: o.desc, body: o.body,
                    buttons: [
                        { label: o.cancel || 'Cancel', onClick: m => { fin(false); m.close(); } },
                        { label: o.ok || 'Continue', kind: o.danger ? 'danger' : 'primary', onClick: m => { fin(true); m.close(); } }
                    ],
                    onClose: () => fin(false)
                });
            });
        }
        toast(msg, kind, ms) {
            kind = kind || 'info';
            const el = document.createElement('div');
            el.className = 'mpp-toast ' + kind;
            el.innerHTML = ic(kind === 'error' ? 'alert' : kind === 'success' ? 'check' : 'info') + '<span>' + esc(msg) + '</span>';
            this.toasts.appendChild(el);
            while (this.toasts.children.length > 4) this.toasts.firstChild.remove();
            setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 320); }, ms || 2800);
        }
        hud(icon, text) {
            this.hudEl.innerHTML = ic(icon) + '<span>' + esc(text) + '</span>';
            this.hudEl.classList.add('show');
            clearTimeout(this._hudT);
            this._hudT = setTimeout(() => this.hudEl.classList.remove('show'), 900);
        }
        flash(icon) {
            this.flashEl.innerHTML = ic(icon);
            this.flashEl.classList.remove('go'); void this.flashEl.offsetWidth; this.flashEl.classList.add('go');
        }
        ripple(side, delta) {
            const el = side === 'l' ? this.ripL : this.ripR;
            el.innerHTML = ic(side === 'l' ? 'back' : 'fwd') + '<span>' + Math.abs(delta) + ' s</span>';
            el.classList.remove('go'); void el.offsetWidth; el.classList.add('go');
        }
        openHelp() {
            const rows = [
                ['Playback', null],
                ['Play / pause', ['Space', 'K']], ['Back / forward 10 s', ['←', '→']], ['Back / forward 30 s', ['Shift', '+ ← →']],
                ['Jump to 0–90 %', ['0', '–', '9']], ['Frame step (paused)', [',', '.']], ['Speed down / up', ['[', ']']],
                ['Loop section A–B', ['A']], ['Next / previous', ['N', 'P']],
                ['Sound and picture', null],
                ['Volume', ['↑', '↓']], ['Mute', ['M']], ['Fullscreen', ['F']], ['Picture in picture', ['I']],
                ['Subtitles on / off', ['C']], ['Screenshot', ['S']], ['Video fit', ['V']],
                ['Playlist and app', null],
                ['Shuffle', ['H']], ['Repeat mode', ['R']], ['Search playlist', ['/']], ['Show / hide playlist', ['B']],
                ['Add files / links', ['O', 'U']], ['Change theme', ['T']], ['Close player', ['Esc']]
            ];
            const body = '<div class="mpp-keys">' + rows.map(r => r[1] === null
                ? '<div class="mpp-keyh">' + esc(r[0]) + '</div>'
                : '<div class="mpp-key"><span>' + esc(r[0]) + '</span><span>' + r[1].map(k => '<kbd>' + esc(k) + '</kbd>').join('') + '</span></div>').join('') + '</div>';
            this.openModal({
                title: 'Keyboard shortcuts', icon: 'keyboard',
                desc: 'Double-click the left or right side of the video to skip, the middle for fullscreen. Scroll over the video to change volume.',
                body, buttons: [{ label: 'Got it', kind: 'primary' }]
            });
        }

        /* ─────────── Adding media ─────────── */
        makeItem(base) {
            const it = Object.assign({ id: ++this.uid, name: '', url: '', file: null, isUrl: false, isAudio: false, duration: 0, coverUrl: null, size: 0 }, base);
            it.key = it.isUrl ? it.url : it.name + '|' + it.size;
            return it;
        }
        openFilePicker() {
            const input = document.createElement('input');
            input.type = 'file'; input.multiple = true; input.accept = ACCEPT;
            input.onchange = () => { if (input.files && input.files.length) this.addFiles(input.files); };
            input.click();
        }
        addFiles(fileList) {
            const files = Array.prototype.slice.call(fileList);
            const subs = files.filter(f => SUB_EXT.indexOf(extOf(f.name)) !== -1);
            const media = files.filter(f => isMediaName(f.name) || /^(video|audio)\//.test(f.type));
            if (!media.length && !subs.length) { this.toast('None of those files can be played here', 'error'); return; }
            if (!media.length) {
                if (this.item) { this.item.subFile = subs[0]; this.setSubtitle(subs[0], this.item); }
                else this.toast('Add a video first, then drop the subtitle file', 'info');
                return;
            }
            const added = []; let dup = 0;
            media.forEach(f => {
                if (this.playlist.some(p => p.file && p.file.name === f.name && p.file.size === f.size && p.file.lastModified === f.lastModified)) { dup++; return; }
                const e = extOf(f.name);
                const it = this.makeItem({ name: f.name, file: f, url: URL.createObjectURL(f), size: f.size, isAudio: AUDIO_EXT.indexOf(e) !== -1 || /^audio\//.test(f.type) });
                let sub = subs.find(s => baseName(s.name) === baseName(f.name));
                if (!sub && subs.length === 1 && media.length === 1) sub = subs[0];
                if (sub) it.subFile = sub;
                added.push(it);
            });
            if (!added.length) { this.toast(dup > 1 ? 'Those files are already in the playlist' : 'That file is already in the playlist', 'info'); return; }
            const wasEmpty = this.index === -1;
            this.playlist.push.apply(this.playlist, added);
            this.renderPlaylist();
            added.forEach(it => this.enqueueProbe(it));
            this.toast('Added ' + added.length + (added.length === 1 ? ' file' : ' files') + (dup ? ' (' + dup + ' already there)' : ''), 'success');
            if (wasEmpty) this.playIndex(this.playlist.indexOf(added[0]));
        }
        addUrls(lines) {
            const added = []; let bad = 0, dup = 0;
            lines.forEach(url => {
                if (!URL_RE.test(url)) { bad++; return; }
                if (this.playlist.some(p => p.isUrl && p.url === url)) { dup++; return; }
                let name = url.split(/[?#]/)[0].split('/').pop() || url;
                try { name = decodeURIComponent(name); } catch (e) { /* keep raw */ }
                added.push(this.makeItem({ name, url, isUrl: true, isAudio: AUDIO_EXT.indexOf(extOf(url)) !== -1 }));
            });
            if (!added.length) { this.toast(dup ? 'Those links are already in the playlist' : 'No valid media links found (they must end in a media extension)', 'error'); return; }
            const wasEmpty = this.index === -1;
            this.playlist.push.apply(this.playlist, added);
            this.renderPlaylist();
            this.toast('Added ' + added.length + (added.length === 1 ? ' link' : ' links') + (bad ? ', skipped ' + bad + ' invalid' : ''), bad ? 'info' : 'success');
            if (wasEmpty) this.playIndex(this.playlist.indexOf(added[0]));
        }
        openUrlModal() {
            const ta = document.createElement('textarea');
            ta.placeholder = 'https://example.com/video1.mp4\nhttps://example.com/song.mp3';
            ta.spellcheck = false;
            const submit = m => { const lines = ta.value.split(/\r?\n/).map(l => l.trim()).filter(Boolean); m.close(); if (lines.length) this.addUrls(lines); };
            const m = this.openModal({
                title: 'Add links', icon: 'link', desc: 'Paste one direct link per line. Press Ctrl + Enter to add.',
                body: ta,
                buttons: [{ label: 'Cancel' }, { label: 'Add to playlist', kind: 'primary', onClick: mm => submit(mm) }]
            });
            ta.addEventListener('keydown', e => { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); submit(m); } });
        }
        addCurrentPageMedia() {
            try {
                if (location.protocol !== 'file:' || !isMediaName(location.pathname)) return;
                let name = location.pathname.split('/').pop();
                try { name = decodeURIComponent(name); } catch (e) { /* keep raw */ }
                const it = this.makeItem({ name, url: location.href, isUrl: true, isAudio: AUDIO_EXT.indexOf(extOf(name)) !== -1 });
                this.playlist.push(it);
                this.renderPlaylist();
                this.playIndex(0);
            } catch (e) { /* ignore */ }
        }

        /* ─────────── Background probing: duration, thumbnail, ID3 tags ─────────── */
        enqueueProbe(it) {
            if (it.isUrl || it._probed) return;
            this._probeQ.push(it);
            if (!this._probing) this.runProbe();
        }
        async runProbe() {
            this._probing = true;
            while (this._probeQ.length && this.root.isConnected) {
                const it = this._probeQ.shift();
                if (this.playlist.indexOf(it) === -1) continue;
                try { await this.probeOne(it); } catch (e) { /* unsupported codec etc. */ }
                if (this.playlist.indexOf(it) !== -1) this.patchCard(it);
            }
            this._probing = false;
        }
        async probeOne(it) {
            it._probed = true;
            if (it.isAudio) {
                const tags = await readID3(it.file);
                it.coverUrl = tags.cover; it.title = tags.title; it.artist = tags.artist; it.album = tags.album;
            }
            const v = document.createElement('video');
            v.muted = true; v.preload = 'metadata'; v.src = it.url;
            try {
                await once(v, 'loadedmetadata', 8000);
                if (isFinite(v.duration)) it.duration = v.duration;
                if (!it.isAudio && v.videoWidth) {
                    it.w = v.videoWidth; it.h = v.videoHeight;
                    const t = it.duration > 2 ? Math.min(Math.max(it.duration * 0.1, 1), it.duration - 0.5) : 0;
                    if (t) { v.currentTime = t; await once(v, 'seeked', 2500, true).catch(() => {}); }
                    const scale = Math.min(320 / v.videoWidth, 1);
                    const c = document.createElement('canvas');
                    c.width = Math.round(v.videoWidth * scale); c.height = Math.round(v.videoHeight * scale);
                    c.getContext('2d').drawImage(v, 0, 0, c.width, c.height);
                    const blob = await new Promise(res => c.toBlob(res, 'image/jpeg', 0.8));
                    if (blob) it.coverUrl = URL.createObjectURL(blob);
                }
            } finally {
                v.removeAttribute('src'); v.load();
            }
        }

        /* ─────────── Playlist rendering ─────────── */
        watchedPct(it) {
            const r = this.resume[it.key], d = it.duration || (r && r.d) || 0;
            return r && d ? clamp(r.t / d * 100, 0, 100) : 0;
        }
        cardHTML(it, i) {
            const active = i === this.index;
            const meta = [extOf(it.name).toUpperCase(), it.isUrl ? 'Link' : fmtSize(it.size)].filter(Boolean).join(' · ');
            const thumb = it.coverUrl
                ? '<img src="' + it.coverUrl + '" alt="" draggable="false">'
                : '<div class="mpp-thumb-ph">' + ic(it.isAudio ? 'music' : 'film') + '</div>';
            return '<div class="mpp-card' + (active ? ' active' : '') + (active && this.isPlaying ? ' playing' : '') + '" data-i="' + i + '" data-id="' + it.id + '" draggable="true">' +
                '<div class="mpp-thumb">' + thumb + '<span class="mpp-num">' + (i + 1) + '</span>' +
                '<span class="mpp-dur">' + (it.duration ? fmtTime(it.duration) : '') + '</span>' +
                '<span class="mpp-eq"><i></i><i></i><i></i></span>' +
                '<button class="mpp-x" data-rm title="Remove from playlist" aria-label="Remove ' + esc(it.name) + '">' + ic('x') + '</button>' +
                '<div class="mpp-watch" style="width:' + this.watchedPct(it).toFixed(1) + '%"></div></div>' +
                '<div class="mpp-card-info"><span class="mpp-card-name" title="' + esc(it.name) + '">' + esc(it.title || it.name) + '</span><small>' + esc(it.artist || meta) + '</small></div></div>';
        }
        renderPlaylist(o) {
            const n = this.playlist.length;
            this.countEl.textContent = n;
            this.updateTotal();
            if (!n) {
                this.row.innerHTML = '<div class="mpp-add wide" data-act="addMore">' + ic('plus') + '<span>Add files to start your playlist</span></div>';
                return;
            }
            const term = this.filter.toLowerCase();
            let html = '', shown = 0;
            this.playlist.forEach((it, i) => {
                if (term && (it.name + ' ' + (it.title || '') + ' ' + (it.artist || '')).toLowerCase().indexOf(term) === -1 && i !== this.index) return;
                shown++; html += this.cardHTML(it, i);
            });
            if (term && !shown) html += '<div class="mpp-nomatch">Nothing matches “' + esc(this.filter) + '”</div>';
            html += '<div class="mpp-add" data-act="addMore">' + ic('plus') + '<span>Add more</span></div>';
            const left = this.row.scrollLeft;
            this.row.innerHTML = html;
            this.row.scrollLeft = left;
            if (o && o.scroll) {
                const a = this.row.querySelector('.mpp-card.active');
                if (a && a.scrollIntoView) a.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            }
        }
        patchCard(it) {
            const i = this.playlist.indexOf(it);
            const el = this.row.querySelector('.mpp-card[data-id="' + it.id + '"]');
            if (el && i >= 0) {
                const tmp = document.createElement('div');
                tmp.innerHTML = this.cardHTML(it, i);
                el.replaceWith(tmp.firstElementChild);
            }
            this.updateTotal();
        }
        updateTotal() {
            const total = this.playlist.reduce((s, p) => s + (p.duration || 0), 0);
            this.totalEl.textContent = total ? fmtTime(total) + ' total' : '';
        }
        moveItem(from, to) {
            if (from === to || from < 0 || to < 0 || from >= this.playlist.length || to >= this.playlist.length) return;
            const it = this.playlist.splice(from, 1)[0];
            this.playlist.splice(to, 0, it);
            this.index = this.item ? this.playlist.indexOf(this.item) : -1;
            this.renderPlaylist();
        }
        freeItem(it) {
            if (!it.isUrl && it.url) { try { URL.revokeObjectURL(it.url); } catch (e) { /* ignore */ } }
            if (it.coverUrl) { try { URL.revokeObjectURL(it.coverUrl); } catch (e) { /* ignore */ } }
        }
        removeFromPlaylist(i) {
            const it = this.playlist[i];
            if (!it) return;
            const wasCurrent = it === this.item, wasPlaying = this.isPlaying;
            if (wasCurrent) { this.saveResume(); this.unload(); }
            this.playlist.splice(i, 1);
            this.freeItem(it);
            this.index = this.item ? this.playlist.indexOf(this.item) : -1;
            this.renderPlaylist();
            if (wasCurrent && wasPlaying && this.playlist.length) this.playIndex(Math.min(i, this.playlist.length - 1), { record: false });
        }
        async clearPlaylist() {
            if (!this.playlist.length) return;
            const ok = await this.confirmDialog({ title: 'Clear the playlist?', desc: 'All ' + this.playlist.length + ' items will be removed. Your files on disk are not touched.', ok: 'Clear playlist', danger: true, icon: 'trash' });
            if (!ok) return;
            this.saveResume(); this.unload();
            this.playlist.forEach(it => this.freeItem(it));
            this.playlist = []; this.history = []; this.index = -1;
            this.renderPlaylist();
        }
        async lucky() {
            if (this.playlist.length < 2) { this.toast('Add a few more items first', 'info'); return; }
            const ok = await this.confirmDialog({ title: 'Feeling lucky?', desc: 'This plays one random item and removes all the others from the playlist.', ok: 'Pick one for me', icon: 'dice' });
            if (!ok) return;
            const keep = this.playlist[Math.floor(Math.random() * this.playlist.length)];
            this.playlist.forEach(it => { if (it !== keep) this.freeItem(it); });
            this.playlist = [keep]; this.history = [];
            this.renderPlaylist();
            this.playIndex(0, { record: false });
        }
        openSortMenu(btn) {
            const cmpName = (a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' });
            const opts = [
                ['Name A → Z', 'sort', (a, b) => cmpName(a, b)], ['Name Z → A', 'sort', (a, b) => cmpName(b, a)],
                ['Shortest first', 'clock', (a, b) => (a.duration || 0) - (b.duration || 0)], ['Longest first', 'clock', (a, b) => (b.duration || 0) - (a.duration || 0)],
                ['Reverse order', 'sort', null], ['Shuffle order', 'shuffle', 'rand']
            ];
            this.openMenu(btn, (m, close) => {
                m.innerHTML = '<div class="mpp-mi-title">Sort playlist</div>';
                opts.forEach(o => m.appendChild(this.mi(o[0], {
                    icon: o[1], onClick: () => {
                        if (o[2] === 'rand') { for (let i = this.playlist.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = this.playlist[i]; this.playlist[i] = this.playlist[j]; this.playlist[j] = t; } }
                        else if (o[2] === null) this.playlist.reverse();
                        else this.playlist.sort(o[2]);
                        this.index = this.item ? this.playlist.indexOf(this.item) : -1;
                        this.renderPlaylist({ scroll: true }); close();
                    }
                })));
            }, false);
        }
        exportPlaylist() {
            if (!this.playlist.length) { this.toast('The playlist is empty', 'info'); return; }
            const lines = ['#EXTM3U'];
            this.playlist.forEach(it => { lines.push('#EXTINF:' + Math.round(it.duration || -1) + ',' + it.name); lines.push(it.isUrl ? it.url : it.name); });
            download(new Blob([lines.join('\n') + '\n'], { type: 'text/plain;charset=utf-8' }), 'mp4-player-playlist.m3u8');
            this.toast('Playlist exported', 'success');
        }
        importPlaylist() {
            const input = document.createElement('input');
            input.type = 'file'; input.accept = '.txt,.m3u,.m3u8';
            input.onchange = async () => {
                const f = input.files && input.files[0];
                if (!f) return;
                const lines = (await readTextSmart(f)).split(/\r?\n/).map(l => l.trim().replace(/^"|"$/g, '')).filter(l => l && l[0] !== '#');
                const urls = lines.filter(l => URL_RE.test(l));
                const names = lines.filter(l => !URL_RE.test(l)).map(l => l.split(/[\\/]/).pop()).filter(isMediaName);
                if (!urls.length && !names.length) { this.toast('No playable entries found in that file', 'error'); return; }
                if (urls.length) this.addUrls(urls);
                if (!names.length) return;
                const ul = document.createElement('ul'); ul.className = 'mpp-list';
                names.slice(0, 30).forEach(n => { const li = document.createElement('li'); li.textContent = n; ul.appendChild(li); });
                if (names.length > 30) { const li = document.createElement('li'); li.textContent = '…and ' + (names.length - 30) + ' more'; ul.appendChild(li); }
                const ok = await this.confirmDialog({ title: 'Select the local files', desc: 'Browsers can’t open local paths on their own. Pick these ' + names.length + ' files in the next window and they will be added in this order.', body: ul, ok: 'Choose files', icon: 'folderPlus' });
                if (!ok) return;
                const pick = document.createElement('input');
                pick.type = 'file'; pick.multiple = true; pick.accept = ACCEPT;
                pick.onchange = () => {
                    const chosen = Array.prototype.slice.call(pick.files);
                    const matched = names.map(n => chosen.find(c => c.name.toLowerCase() === n.toLowerCase())).filter(Boolean);
                    if (!matched.length) { this.toast('None of the selected files matched the list', 'error'); return; }
                    if (matched.length < names.length) this.toast((names.length - matched.length) + ' entries had no matching file', 'info');
                    this.addFiles(matched);
                };
                pick.click();
            };
            input.click();
        }

        /* ─────────── Playback ─────────── */
        playIndex(i, o) {
            o = o || {};
            if (i < 0 || i >= this.playlist.length) return;
            this.saveResume();
            const it = this.playlist[i];
            if (o.record !== false && this.item && this.item !== it) {
                this.history.push(this.item.id);
                if (this.history.length > 200) this.history.shift();
            }
            this.item = it; this.index = i;
            if (this.audio && it.isUrl) this.remountVideo();   // remote media must not go through the Web Audio graph (CORS would silence it)
            const v = this.video;
            this.clearSubtitle();
            this.ab = { a: null, b: null }; this.updateAB();
            this._pendingSeek = o.resume === false ? 0 : this.getResume(it);
            v.defaultPlaybackRate = this.speed;
            v.src = it.url;
            v.playbackRate = this.speed;
            v.loop = this.repeat === 'one';
            this.showMedia(it);
            if (it.isAudio && !it.isUrl) this.ensureAudio();
            if (it.subFile) this.setSubtitle(it.subFile, it);
            this.setLoading(true);
            const p = v.play();
            if (p && p.catch) p.catch(err => { if (err && err.name !== 'AbortError') this.setPlaying(false); });
            this.renderPlaylist({ scroll: true });
            this.updateNow(); this.updateChips();
            this.updateMediaSession(it);
        }
        showMedia(it) {
            this.player.classList.remove('empty');
            this.player.classList.toggle('is-audio', !!it.isAudio);
            this.emptyEl.classList.add('mpp-hidden');
            this.video.classList.toggle('mpp-hidden', !!it.isAudio);
            this.audioEl.classList.toggle('mpp-hidden', !it.isAudio);
            if (it.isAudio) {
                this.art.innerHTML = it.coverUrl ? '<img src="' + it.coverUrl + '" alt="">' : ic('music');
                this.audioEl.style.setProperty('--cover', it.coverUrl ? 'url("' + it.coverUrl + '")' : 'none');
                this.art.classList.toggle('breathe', !this.audio);
                this.art.style.transform = '';
                this.viz.style.display = this.audio ? '' : 'none';
            }
        }
        unload() {
            const v = this.video;
            v.pause(); v.removeAttribute('src'); v.load();
            this.clearSubtitle();
            this.item = null; this.index = -1;
            this.player.classList.add('empty'); this.player.classList.remove('loading', 'is-audio');
            this.emptyEl.classList.remove('mpp-hidden');
            this.video.classList.add('mpp-hidden'); this.audioEl.classList.add('mpp-hidden');
            this.setPlaying(false);
            this.ab = { a: null, b: null }; this.updateAB();
            this.seekFill.style.width = '0%'; this.seekKnob.style.left = '0%'; this.seekBuf.style.width = '0%';
            this.curEl.textContent = '0:00'; this.durEl.textContent = '0:00';
            this.updateNow(); this.updateChips();
            if ('mediaSession' in navigator) { try { navigator.mediaSession.metadata = null; } catch (e) { /* ignore */ } }
        }
        setLoading(on) { this.player.classList.toggle('loading', !!on && !!this.item); }
        setPlaying(p) {
            this.isPlaying = p;
            this.root.classList.toggle('mpp-playing', p);
            const b = this.btn('play');
            if (b) { b.innerHTML = ic(p ? 'pause' : 'play'); b.setAttribute('aria-label', p ? 'Pause' : 'Play'); }
            const card = this.row.querySelector('.mpp-card.active');
            if (card) card.classList.toggle('playing', p);
            if (p) { this.startLoop(); if (this.audio && this.audio.ctx.state === 'suspended') this.audio.ctx.resume().catch(() => {}); }
            else this.stopLoop();
            if ('mediaSession' in navigator) { try { navigator.mediaSession.playbackState = p ? 'playing' : 'paused'; } catch (e) { /* ignore */ } }
            this.pokeUI();
        }
        togglePlay(fromUser) {
            if (!this.item) {
                if (this.playlist.length) this.playIndex(Math.max(0, this.index));
                else this.openFilePicker();
                return;
            }
            if (this.video.paused) { this.video.play().catch(() => {}); if (fromUser) this.flash('play'); }
            else { this.video.pause(); if (fromUser) this.flash('pause'); }
        }
        pickShuffle(auto) {
            const ids = {}; this.playlist.forEach(p => { ids[p.id] = true; });
            const cur = this.item ? this.item.id : -1;
            this._pool = this._pool.filter(id => ids[id] && id !== cur);
            if (!this._pool.length) {
                if (auto && this.repeat !== 'all') return -1;
                this._pool = this.playlist.filter(p => p.id !== cur).map(p => p.id);
            }
            const id = this._pool.splice(Math.floor(Math.random() * this._pool.length), 1)[0];
            return this.playlist.findIndex(p => p.id === id);
        }
        next(auto) {
            const n = this.playlist.length;
            if (!n) return;
            let idx;
            if (this.shuffle && n > 1) idx = this.pickShuffle(auto);
            else { idx = this.index + 1; if (idx >= n) idx = (auto && this.repeat !== 'all') ? -1 : 0; }
            if (idx < 0) { this.setPlaying(false); this.toast('Reached the end of the playlist', 'info'); return; }
            this.playIndex(idx);
        }
        prev() {
            const n = this.playlist.length;
            if (!n) return;
            if (this.item && this.video.currentTime > 3) { this.video.currentTime = 0; return; }
            if (this.shuffle && this.history.length) {
                const id = this.history.pop(), idx = this.playlist.findIndex(p => p.id === id);
                if (idx >= 0) { this.playIndex(idx, { record: false }); return; }
            }
            this.playIndex((this.index - 1 + n) % n, { record: false });
        }
        onEnded() {
            this.clearResume(this.item);
            if (this.sleep.mode === 'item') { this.finishSleep(); this.setPlaying(false); return; }
            this.next(true);
        }
        onError() {
            const v = this.video, it = this.item;
            if (!it || !v.getAttribute('src')) return;
            const unsupported = v.error && v.error.code === 4;
            this.setLoading(false);
            this.toast('Can’t play “' + it.name + '”' + (unsupported ? ' — this browser doesn’t support its format or codec.' : '.'), 'error', 4600);
            this._errStreak++;
            if (this.playlist.length > 1 && this._errStreak < this.playlist.length) setTimeout(() => { if (this.item === it) this.next(true); }, 1500);
        }
        onMeta() {
            const v = this.video, it = this.item;
            if (!it) return;
            if (isFinite(v.duration)) it.duration = v.duration;
            if (v.videoWidth) { it.w = v.videoWidth; it.h = v.videoHeight; }
            v.playbackRate = this.speed;
            if (this._pendingSeek && isFinite(v.duration) && this._pendingSeek < v.duration - 8) {
                v.currentTime = this._pendingSeek;
                this.toast('Resumed at ' + fmtTime(this._pendingSeek), 'info', 2200);
            }
            this._pendingSeek = 0;
            this.updateSeekUI(); this.updateChips(); this.patchCard(it); this.updatePosState();
        }
        onTime() {
            if (!this.isPlaying) this.updateSeekUI();
            this.abCheck(); this.updatePosState();
            const now = performance.now();
            if (now - this._lastSave > 5000) { this._lastSave = now; this.saveResume(); }
        }

        /* ─────────── Seeking & UI refresh ─────────── */
        seekBy(d, side) {
            const v = this.video;
            if (!this.item || !isFinite(v.duration)) return;
            v.currentTime = clamp(v.currentTime + d, 0, v.duration);
            this.hud(d > 0 ? 'fwd' : 'back', (d > 0 ? '+' : '−') + Math.abs(d) + ' s');
            if (side) this.ripple(side, d);
            this.updateSeekUI();
        }
        seekToPct(p) { const v = this.video; if (this.item && isFinite(v.duration)) { v.currentTime = clamp(p, 0, 1) * v.duration; this.hud('gauge', Math.round(p * 100) + '%'); } }
        scrubTo(p) {
            const v = this.video, d = v.duration;
            if (!isFinite(d) || !d) return;
            this.setSeekVisual(p); v.currentTime = p * d; this.curEl.textContent = fmtTime(p * d);
        }
        showTip(p) {
            const d = this.video.duration;
            if (!isFinite(d)) return;
            const w = this.seekEl.clientWidth;
            this.seekTip.textContent = fmtTime(p * d);
            this.seekTip.style.left = clamp(p * w, 30, w - 30) + 'px';
        }
        setSeekVisual(p) { this.seekFill.style.width = p * 100 + '%'; this.seekKnob.style.left = p * 100 + '%'; }
        updateSeekUI() {
            const v = this.video, d = v.duration;
            if (!isFinite(d) || !d) { this.curEl.textContent = fmtTime(v.currentTime); return; }
            if (!this._scrub) { this.setSeekVisual(v.currentTime / d); this.curEl.textContent = fmtTime(v.currentTime); }
            this.durEl.textContent = fmtTime(d);
        }
        updateBuffer() {
            const v = this.video, d = v.duration;
            if (!isFinite(d) || !d) return;
            let end = 0;
            for (let i = 0; i < v.buffered.length; i++) {
                if (v.buffered.start(i) <= v.currentTime + 0.5 && v.buffered.end(i) >= end) end = v.buffered.end(i);
            }
            this.seekBuf.style.width = clamp(end / d * 100, 0, 100) + '%';
        }
        loop() {
            this._raf = requestAnimationFrame(() => this.loop());
            this.updateSeekUI(); this.abCheck();
            const now = performance.now();
            if (now - this._lastBuf > 500) { this._lastBuf = now; this.updateBuffer(); }
            if (this.item && this.item.isAudio) this.drawViz();
        }
        startLoop() { if (!this._raf) this.loop(); }
        stopLoop() { if (this._raf) { cancelAnimationFrame(this._raf); this._raf = 0; } }
        pokeUI() {
            this.player.classList.remove('idle');
            clearTimeout(this._idleT);
            if (!this.isPlaying) return;
            this._idleT = setTimeout(() => { if (!this._overCtl && !this._menu && !this._scrub) this.player.classList.add('idle'); }, CONFIG.idleMs);
        }
        updateNow() {
            const it = this.item;
            this.titleEl.textContent = it ? (it.title || it.name) : '';
            this.subEl.textContent = it ? (it.artist || (this.playlist.length > 1 ? 'Item ' + (this.index + 1) + ' of ' + this.playlist.length : '')) : '';
        }
        updateChips() {
            const it = this.item, v = this.video;
            if (!it) { this.chipsEl.innerHTML = ''; return; }
            const c = [];
            if (it.isAudio) c.push(['Audio', true]);
            else if (v.videoWidth) {
                const h = v.videoHeight, q = h >= 2160 ? '4K' : h >= 1440 ? '2K' : h >= 1080 ? 'Full HD' : h >= 720 ? 'HD' : h >= 480 ? 'SD' : '';
                if (q) c.push([q, true]);
                c.push([v.videoWidth + '×' + v.videoHeight]);
            }
            const e = extOf(it.name).toUpperCase(); if (e) c.push([e]);
            if (it.size) c.push([fmtSize(it.size)]);
            this.chipsEl.innerHTML = c.map(x => '<span class="mpp-chip' + (x[1] ? ' hl' : '') + '">' + esc(x[0]) + '</span>').join('');
        }

        /* ─────────── Volume, speed, modes ─────────── */
        setVolume(p, announce) {
            p = clamp(p, 0, 1);
            this.volume = p || this.volume; this.video.volume = p; this.video.muted = p === 0;
            if (announce) this.hud(p === 0 ? 'volX' : p < 0.5 ? 'vol1' : 'vol2', Math.round(p * 100) + '%');
        }
        toggleMute() { this.video.muted = !this.video.muted; this.hud(this.video.muted ? 'volX' : 'vol2', this.video.muted ? 'Muted' : Math.round(this.volume * 100) + '%'); }
        onVolume() {
            if (this._fading) return;
            const v = this.video;
            this.muted = v.muted; if (v.volume > 0) this.volume = v.volume;
            this.updateVolumeUI(); this.saveSoon();
        }
        updateVolumeUI() {
            const shown = this.muted ? 0 : this.volume;
            this.volRange.value = Math.round(shown * 100);
            this.volRange.style.setProperty('--p', Math.round(shown * 100) + '%');
            const b = this.btn('mute');
            if (b) b.innerHTML = ic(shown === 0 ? 'volX' : shown < 0.5 ? 'vol1' : 'vol2');
        }
        setSpeed(s) {
            this.speed = clamp(s, 0.25, 3);
            this.video.defaultPlaybackRate = this.speed; this.video.playbackRate = this.speed;
            this.updateSpeedUI(); this.saveSoon();
            this.hud('gauge', this.speed + '×');
        }
        stepSpeed(dir) {
            const i = SPEEDS.findIndex(s => Math.abs(s - this.speed) < 0.001);
            this.setSpeed(SPEEDS[clamp((i < 0 ? 3 : i) + dir, 0, SPEEDS.length - 1)]);
        }
        updateSpeedUI() { const el = this.root.querySelector('.mpp-speed-t'); if (el) el.textContent = this.video.playbackRate + '×'; }
        cycleRepeat() {
            this.repeat = this.repeat === 'off' ? 'all' : this.repeat === 'all' ? 'one' : 'off';
            this.video.loop = this.repeat === 'one';
            this.syncControls(); this.saveSoon();
            this.hud(this.repeat === 'one' ? 'repeat1' : 'repeat', this.repeat === 'off' ? 'Repeat off' : this.repeat === 'all' ? 'Repeat playlist' : 'Repeat this item');
        }
        toggleShuffle() {
            this.shuffle = !this.shuffle; this._pool = [];
            this.syncControls(); this.saveSoon();
            this.hud('shuffle', this.shuffle ? 'Shuffle on' : 'Shuffle off');
        }
        cycleFit() {
            this.fit = this.fit === 'contain' ? 'cover' : this.fit === 'cover' ? 'fill' : 'contain';
            this.video.style.objectFit = this.fit; this.saveSoon();
            this.hud('crop', this.fit === 'contain' ? 'Fit to window' : this.fit === 'cover' ? 'Fill and crop' : 'Stretch');
        }
        syncControls() {
            const rep = this.btn('repeat'), sh = this.btn('shuffle');
            if (rep) { rep.innerHTML = ic(this.repeat === 'one' ? 'repeat1' : 'repeat'); rep.classList.toggle('on', this.repeat !== 'off'); rep.title = 'Repeat: ' + this.repeat + ' (R)'; }
            if (sh) sh.classList.toggle('on', this.shuffle);
            this.dock.classList.toggle('collapsed', this.dockCollapsed);
            this.updateVolumeUI(); this.updateSpeedUI();
        }
        toggleDock() { this.dockCollapsed = !this.dockCollapsed; this.dock.classList.toggle('collapsed', this.dockCollapsed); this.saveSoon(); }
        openSpeedMenu(btn) {
            this.openMenu(btn, (m, close) => {
                m.innerHTML = '<div class="mpp-mi-title">Playback speed</div>';
                SPEEDS.forEach(s => m.appendChild(this.mi(s === 1 ? 'Normal' : s + '×', { on: Math.abs(this.speed - s) < 0.001, onClick: () => { this.setSpeed(s); close(); } })));
            });
        }

        /* ─────────── A–B loop ─────────── */
        cycleAB() {
            if (!this.item) return;
            const t = this.video.currentTime;
            if (this.ab.a === null) { this.ab.a = t; this.hud('ab', 'Start set at ' + fmtTime(t)); }
            else if (this.ab.b === null) {
                if (t - this.ab.a < 0.5) { this.hud('ab', 'End must be after the start'); return; }
                this.ab.b = t; this.hud('ab', 'Looping ' + fmtTime(this.ab.a) + ' – ' + fmtTime(t));
            } else { this.ab = { a: null, b: null }; this.hud('ab', 'Loop cleared'); }
            this.updateAB();
        }
        abCheck() { if (this.ab.b !== null && this.video.currentTime >= this.ab.b) this.video.currentTime = this.ab.a; }
        updateAB() {
            const d = this.video.duration, a = this.ab.a, b = this.ab.b, btn = this.btn('ab');
            if (btn) btn.classList.toggle('on', a !== null);
            if (a === null || !isFinite(d) || !d) { this.abEl.style.display = 'none'; return; }
            this.abEl.style.display = 'block';
            this.abEl.style.left = a / d * 100 + '%';
            this.abEl.style.width = b === null ? '0%' : (b - a) / d * 100 + '%';
        }

        /* ─────────── Screenshot, PiP, fullscreen ─────────── */
        screenshot() {
            const v = this.video;
            if (!this.item || !v.videoWidth) { this.toast('Nothing to capture yet', 'info'); return; }
            try {
                const c = document.createElement('canvas');
                c.width = v.videoWidth; c.height = v.videoHeight;
                c.getContext('2d').drawImage(v, 0, 0);
                c.toBlob(b => {
                    if (!b) { this.toast('Screenshots are blocked for this video (cross-origin source)', 'error'); return; }
                    download(b, baseName(this.item.name) + '_' + fmtTime(v.currentTime).replace(/:/g, '-') + '.png');
                    this.shotEl.classList.remove('go'); void this.shotEl.offsetWidth; this.shotEl.classList.add('go');
                    this.toast('Screenshot saved', 'success', 1800);
                }, 'image/png');
            } catch (e) { this.toast('Screenshots are blocked for this video (cross-origin source)', 'error'); }
        }
        async togglePip() {
            try {
                if (document.pictureInPictureElement) await document.exitPictureInPicture();
                else if (document.pictureInPictureEnabled && this.item && this.video.videoWidth) await this.video.requestPictureInPicture();
                else this.toast('Picture in picture isn’t available for this item', 'info');
            } catch (e) { this.toast('Couldn’t start picture in picture', 'error'); }
        }
        toggleFullscreen() {
            if (document.fullscreenElement) { document.exitFullscreen(); return; }
            const p = this.root.requestFullscreen && this.root.requestFullscreen();
            if (p && p.catch) p.catch(() => this.toast('The browser blocked fullscreen', 'error'));
        }
        onFsChange() {
            const fs = document.fullscreenElement === this.root;
            this.root.classList.toggle('mpp-fs', fs);
            this.root.querySelectorAll('[data-fs]').forEach(b => { b.innerHTML = ic(fs ? 'minimize' : 'maximize'); });
        }

        /* ─────────── Subtitles ─────────── */
        async setSubtitle(file, forItem) {
            try {
                const text = await readTextSmart(file);
                if (forItem && this.item !== forItem) return;
                this.clearSubtitle();
                const url = URL.createObjectURL(new Blob([srtToVtt(text)], { type: 'text/vtt' }));
                const tr = document.createElement('track');
                tr.kind = 'subtitles'; tr.label = file.name; tr.srclang = 'und'; tr.src = url; tr.default = true;
                this.video.appendChild(tr);
                this._subUrl = url; this._subTrack = tr;
                tr.track.mode = 'showing';
                this.updateCC();
                this.toast('Subtitles loaded: ' + file.name, 'success');
            } catch (e) { this.toast('Couldn’t read that subtitle file', 'error'); }
        }
        clearSubtitle() {
            if (this._subTrack) { this._subTrack.remove(); this._subTrack = null; }
            if (this._subUrl) { URL.revokeObjectURL(this._subUrl); this._subUrl = null; }
            this.updateCC();
        }
        updateCC() {
            const b = this.btn('cc');
            if (b) b.classList.toggle('on', !!(this._subTrack && this._subTrack.track && this._subTrack.track.mode === 'showing'));
        }
        toggleSubtitle() {
            if (!this._subTrack) return this.pickSubtitle();
            const t = this._subTrack.track;
            t.mode = t.mode === 'showing' ? 'hidden' : 'showing';
            this.updateCC(); this.hud('cc', t.mode === 'showing' ? 'Subtitles on' : 'Subtitles off');
        }
        pickSubtitle() {
            if (!this.item) { this.toast('Start a video first', 'info'); return; }
            const input = document.createElement('input');
            input.type = 'file'; input.accept = '.srt,.vtt';
            input.onchange = () => { const f = input.files && input.files[0]; if (f) { this.item.subFile = f; this.setSubtitle(f, this.item); } };
            input.click();
        }
        openCaptionMenu(btn) {
            this.openMenu(btn, (m, close) => {
                m.innerHTML = '<div class="mpp-mi-title">Subtitles</div>';
                m.appendChild(this.mi('Load subtitle file…', { icon: 'upload', hint: '.srt .vtt', onClick: () => { close(); this.pickSubtitle(); } }));
                if (this._subTrack) {
                    const showing = this._subTrack.track.mode === 'showing';
                    m.appendChild(this.mi(showing ? 'Hide subtitles' : 'Show subtitles', { icon: 'cc', onClick: () => { this.toggleSubtitle(); close(); } }));
                    m.appendChild(this.mi('Remove subtitles', { icon: 'trash', bad: true, onClick: () => { if (this.item) this.item.subFile = null; this.clearSubtitle(); close(); } }));
                }
            });
        }

        /* ─────────── Sleep timer ─────────── */
        openSleepMenu(btn) {
            this.openMenu(btn, (m, close) => {
                m.innerHTML = '<div class="mpp-mi-title">Sleep timer</div>';
                [[15, '15 minutes'], [30, '30 minutes'], [45, '45 minutes'], [60, '1 hour'], [90, '1.5 hours'], [120, '2 hours']].forEach(o =>
                    m.appendChild(this.mi(o[1], { icon: 'clock', onClick: () => { this.startSleep(o[0]); close(); } })));
                m.appendChild(this.mi('When this item ends', { icon: 'film', onClick: () => { this.startSleepItem(); close(); } }));
                const row = document.createElement('div');
                row.className = 'mpp-menu-input';
                row.innerHTML = '<input type="number" min="1" max="1440" placeholder="Custom minutes" aria-label="Custom minutes"><button class="mpp-btn primary">Set</button>';
                const inp = row.querySelector('input');
                const go = () => { const n = parseInt(inp.value, 10); if (n > 0) { this.startSleep(Math.min(n, 1440)); close(); } else inp.focus(); };
                row.querySelector('button').addEventListener('click', go);
                inp.addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
                m.appendChild(row);
                if (this.sleep.mode) {
                    m.appendChild(Object.assign(document.createElement('div'), { className: 'mpp-mi-sep' }));
                    m.appendChild(this.mi('Cancel timer', { icon: 'x', bad: true, onClick: () => { this.cancelSleep(false); close(); } }));
                }
            });
        }
        setSleepUI(text) {
            const b = this.btn('sleep');
            b.classList.toggle('on', !!text); b.classList.toggle('wide', !!text);
            b.querySelector('.mpp-sleep-t').textContent = text || '';
        }
        startSleep(min) {
            this.cancelSleep(true);
            this.sleep.mode = 'time'; this.sleep.end = Date.now() + min * 60000;
            this.sleep.timer = setInterval(() => this.sleepTick(), 400);
            this.sleepTick();
            this.toast('Sleep timer set for ' + min + (min === 1 ? ' minute' : ' minutes'), 'success');
        }
        startSleepItem() {
            this.cancelSleep(true);
            this.sleep.mode = 'item'; this.setSleepUI('End');
            this.toast('Playback will stop when this item ends', 'success');
        }
        sleepTick() {
            const left = Math.max(0, this.sleep.end - Date.now());
            this.setSleepUI(fmtTime(left / 1000));
            if (left > 0 && left <= 10000) { this._fading = true; this.video.volume = (this.muted ? 0 : this.volume) * (left / 10000); }   // gentle fade-out
            if (left <= 0) this.finishSleep();
        }
        finishSleep() {
            this.cancelSleep(true);
            try { this.video.pause(); } catch (e) { /* ignore */ }
            this.toast('Sleep timer finished', 'success');
        }
        cancelSleep(silent) {
            const was = this.sleep.mode;
            clearInterval(this.sleep.timer);
            this.sleep = { mode: null, end: 0, timer: null };
            if (this._fading) { this._fading = false; this.video.volume = this.volume; }
            this.setSleepUI('');
            if (!silent && was) this.toast('Sleep timer cancelled', 'info');
        }

        /* ─────────── Audio visualizer (local audio only) ─────────── */
        ensureAudio() {
            if (this.audio) return true;
            try {
                const AC = window.AudioContext || window.webkitAudioContext;
                if (!AC) return false;
                const ctx = new AC(), src = ctx.createMediaElementSource(this.video), an = ctx.createAnalyser();
                an.fftSize = 256; an.smoothingTimeConstant = 0.82;
                src.connect(an); an.connect(ctx.destination);
                this.audio = { ctx: ctx, an: an, data: new Uint8Array(an.frequencyBinCount) };
                return true;
            } catch (e) { this.audio = null; return false; }
        }
        remountVideo() {
            const old = this.video, v = document.createElement('video');
            v.className = old.className; v.playsInline = true;
            old.pause(); old.removeAttribute('src'); old.load();
            old.replaceWith(v);
            this.video = v; this.bindVideo(v);
            if (this.audio) { try { this.audio.ctx.close(); } catch (e) { /* ignore */ } this.audio = null; }
        }
        drawViz() {
            const c = this.viz;
            if (!c || !this.audio) return;
            const W = c.clientWidth, H = c.clientHeight, dpr = window.devicePixelRatio || 1;
            if (!W || !H) return;
            if (c.width !== Math.round(W * dpr) || c.height !== Math.round(H * dpr)) { c.width = Math.round(W * dpr); c.height = Math.round(H * dpr); }
            const g = c.getContext('2d');
            g.setTransform(dpr, 0, 0, dpr, 0, 0); g.clearRect(0, 0, W, H);
            const a = this.audio; a.an.getByteFrequencyData(a.data);
            const bars = 48, gap = 4, bw = (W - gap * (bars - 1)) / bars, half = bars / 2;
            const grad = g.createLinearGradient(0, H, 0, 0);
            grad.addColorStop(0, this.colors.a); grad.addColorStop(1, this.colors.b);
            g.fillStyle = grad;
            for (let i = 0; i < bars; i++) {
                const k = i < half ? half - 1 - i : i - half;            // bass in the middle, treble at the edges
                const val = a.data[Math.floor(k * (a.data.length * 0.7) / half)] / 255;
                const h = Math.max(4, val * H), x = i * (bw + gap);
                g.beginPath();
                if (g.roundRect) g.roundRect(x, H - h, bw, h, bw / 2); else g.rect(x, H - h, bw, h);
                g.fill();
            }
            let bass = 0; for (let i = 0; i < 6; i++) bass += a.data[i];
            this.art.style.transform = 'scale(' + (1 + (bass / 1530) * 0.07).toFixed(3) + ')';
        }

        /* ─────────── Remember where you stopped ─────────── */
        getResume(it) { const r = this.resume[it.key]; return r && r.t > 5 ? r.t : 0; }
        clearResume(it) {
            if (it && this.resume[it.key]) { delete this.resume[it.key]; store.set('resume', this.resume); this.patchCard(it); }
        }
        saveResume() {
            const it = this.item, v = this.video;
            if (!it || !v || !isFinite(v.duration) || v.duration < CONFIG.resumeMinDuration || !v.getAttribute('src')) return;
            const t = v.currentTime;
            delete this.resume[it.key];
            if (t > 5 && t < v.duration - 8) {
                this.resume[it.key] = { t: Math.floor(t), d: Math.floor(v.duration) };
                const keys = Object.keys(this.resume);
                if (keys.length > CONFIG.maxResumeEntries) delete this.resume[keys[0]];
            }
            store.set('resume', this.resume);
        }
        saveSoon() {
            clearTimeout(this._saveT);
            this._saveT = setTimeout(() => {
                store.set('theme', this.themeId); store.set('volume', this.volume); store.set('muted', this.muted);
                store.set('speed', this.speed); store.set('repeat', this.repeat); store.set('shuffle', this.shuffle);
                store.set('fit', this.fit); store.set('dock', this.dockCollapsed);
            }, 400);
        }

        /* ─────────── Media Session (OS media keys / lock screen) ─────────── */
        setupMediaSession() {
            if (!('mediaSession' in navigator)) return;
            const s = navigator.mediaSession;
            const set = (a, fn) => { try { s.setActionHandler(a, fn); } catch (e) { /* unsupported action */ } };
            set('previoustrack', () => this.prev());
            set('nexttrack', () => this.next(false));
            set('play', () => { this.video.play().catch(() => {}); });
            set('pause', () => this.video.pause());
            set('seekbackward', d => { this.video.currentTime = Math.max(0, this.video.currentTime - ((d && d.seekOffset) || 10)); });
            set('seekforward', d => { this.video.currentTime = Math.min(this.video.duration || Infinity, this.video.currentTime + ((d && d.seekOffset) || 10)); });
            set('seekto', d => { if (d && typeof d.seekTime === 'number') this.video.currentTime = d.seekTime; });
            set('stop', () => { this.video.pause(); this.video.currentTime = 0; });
        }
        updateMediaSession(it) {
            if (!('mediaSession' in navigator) || !window.MediaMetadata) return;
            try {
                navigator.mediaSession.metadata = new window.MediaMetadata({
                    title: it.title || it.name, artist: it.artist || (it.isAudio ? 'Audio' : 'Video'), album: it.album || 'MP4 Player Pro',
                    artwork: it.coverUrl ? [{ src: it.coverUrl, sizes: '512x512' }] : []
                });
            } catch (e) { /* ignore */ }
        }
        updatePosState() {
            if (!('mediaSession' in navigator) || typeof navigator.mediaSession.setPositionState !== 'function') return;
            const v = this.video;
            if (!isFinite(v.duration) || !v.duration) return;
            try { navigator.mediaSession.setPositionState({ duration: v.duration, position: clamp(v.currentTime, 0, v.duration), playbackRate: v.playbackRate || 1 }); } catch (e) { /* ignore */ }
        }

        /* ─────────── Keyboard ─────────── */
        onKey(e) {
            if (!this.root.isConnected) return;
            const t = e.target;
            const typing = t && ((/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) && t.type !== 'range') || t.isContentEditable);
            if (e.key === 'Escape') {
                if (this._menu) this.closeMenu();
                else if (this._modal) this._modal.close();
                else if (typing && t.blur) t.blur();
                else if (document.fullscreenElement) return;
                else this.close();
                e.preventDefault(); e.stopPropagation();
                return;
            }
            if (typing || this._modal || e.ctrlKey || e.metaKey || e.altKey) return;
            const k = e.key; let handled = true;
            switch (k) {
                case ' ': case 'k': case 'K': this.togglePlay(true); break;
                case 'ArrowRight': this.seekBy(e.shiftKey ? 30 : CONFIG.seekStep, 'r'); break;
                case 'ArrowLeft': this.seekBy(e.shiftKey ? -30 : -CONFIG.seekStep, 'l'); break;
                case 'l': case 'L': this.seekBy(CONFIG.seekStep, 'r'); break;
                case 'j': case 'J': this.seekBy(-CONFIG.seekStep, 'l'); break;
                case 'ArrowUp': this.setVolume((this.muted ? 0 : this.volume) + 0.05, true); break;
                case 'ArrowDown': this.setVolume((this.muted ? 0 : this.volume) - 0.05, true); break;
                case 'm': case 'M': this.toggleMute(); break;
                case 'f': case 'F': this.toggleFullscreen(); break;
                case 'n': case 'N': this.next(false); break;
                case 'p': case 'P': this.prev(); break;
                case 't': case 'T': this.cycleTheme(); break;
                case 's': case 'S': this.screenshot(); break;
                case 'r': case 'R': this.cycleRepeat(); break;
                case 'h': case 'H': this.toggleShuffle(); break;
                case 'i': case 'I': this.togglePip(); break;
                case 'c': case 'C': this.toggleSubtitle(); break;
                case 'a': case 'A': this.cycleAB(); break;
                case 'v': case 'V': this.cycleFit(); break;
                case 'b': case 'B': this.toggleDock(); break;
                case 'o': case 'O': this.openFilePicker(); break;
                case 'u': case 'U': this.openUrlModal(); break;
                case '[': this.stepSpeed(-1); break;
                case ']': this.stepSpeed(1); break;
                case 'Home': if (this.item) this.video.currentTime = 0; break;
                case 'End': if (this.item && isFinite(this.video.duration)) this.video.currentTime = this.video.duration - 0.2; break;
                case ',': case '.':
                    if (this.item && this.video.paused) this.video.currentTime += (k === '.' ? 1 : -1) / 30;
                    else handled = false;
                    break;
                case '/': this.dock.classList.remove('collapsed'); this.dockCollapsed = false; this.searchEl.focus(); break;
                case '?': this.openHelp(); break;
                default:
                    if (/^[0-9]$/.test(k)) this.seekToPct(+k / 10); else handled = false;
            }
            if (handled) { e.preventDefault(); e.stopPropagation(); }
        }

        /* ─────────── Shutdown ─────────── */
        close(quiet) {
            this.saveResume();
            document.removeEventListener('keydown', this._kd, true);
            document.removeEventListener('fullscreenchange', this._fsc);
            document.removeEventListener('pointerdown', this._menuOff, true);
            this.stopLoop(); this.cancelSleep(true);
            clearTimeout(this._clickT); clearTimeout(this._idleT); clearTimeout(this._saveT); clearTimeout(this._searchT);
            store.set('theme', this.themeId); store.set('volume', this.volume); store.set('muted', this.muted);
            store.set('speed', this.speed); store.set('repeat', this.repeat); store.set('shuffle', this.shuffle);
            store.set('fit', this.fit); store.set('dock', this.dockCollapsed);
            this._probeQ = [];
            try { if (document.pictureInPictureElement === this.video) document.exitPictureInPicture(); } catch (e) { /* ignore */ }
            try { if (document.fullscreenElement === this.root) document.exitFullscreen(); } catch (e) { /* ignore */ }
            if ('mediaSession' in navigator) {
                ['previoustrack', 'nexttrack', 'play', 'pause', 'seekbackward', 'seekforward', 'seekto', 'stop'].forEach(a => { try { navigator.mediaSession.setActionHandler(a, null); } catch (e) { /* ignore */ } });
                try { navigator.mediaSession.metadata = null; } catch (e) { /* ignore */ }
            }
            this.clearSubtitle();
            try { this.video.pause(); this.video.removeAttribute('src'); this.video.load(); } catch (e) { /* ignore */ }
            if (this.audio) { try { this.audio.ctx.close(); } catch (e) { /* ignore */ } this.audio = null; }
            this.playlist.forEach(it => this.freeItem(it));
            this.playlist = [];
            this.root.remove();
            if (!quiet) this.onClose();
        }
    }

    /* ════════════════════════════════════════════════════════════════
       Launcher, shortcuts, bootstrap
       ════════════════════════════════════════════════════════════════ */
    let viewer = null, launcherDismissed = false;

    function stopDefaultPlayback() {
        document.querySelectorAll('video:not(.mpp-video)').forEach(video => {
            try {
                video.pause();
                video.currentTime = 0;
                video.removeAttribute('autoplay');
                const source = video.querySelector('source[type="video/mp4"], source[src*=".mp4"]');
                if (source || (video.src && video.src.indexOf('.mp4') !== -1)) { video.src = ''; video.load(); }
            } catch (e) { /* ignore */ }
        });
    }

    function removeLauncher() { const l = document.querySelector('.mpp-launch'); if (l) l.remove(); }

    function addLauncher() {
        if (launcherDismissed || viewer || document.querySelector('.mpp-launch') || !document.body) return;
        const el = document.createElement('div');
        const saved = store.get('theme');
        el.className = 'mpp-launch';
        el.dataset.theme = THEMES[saved] ? saved : CONFIG.defaultTheme;
        el.setAttribute('role', 'button'); el.tabIndex = 0;
        el.title = 'Open MP4 Player Pro (Ctrl + Shift + M)';
        el.innerHTML = '<span class="mpp-launch-ring"></span><span class="mpp-launch-ic">' + ic('play') + '</span><span class="mpp-launch-txt">MP4 Player Pro</span>' +
            '<button class="mpp-launch-x" title="Hide" aria-label="Hide launcher">' + ic('x') + '</button>';
        el.addEventListener('click', e => {
            if (e.target.closest('.mpp-launch-x')) { launcherDismissed = true; el.remove(); return; }
            openViewer();
        });
        el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openViewer(); } });
        document.body.appendChild(el);
    }

    function openViewer() {
        if (viewer) viewer.close(true);
        stopDefaultPlayback();
        removeLauncher();
        viewer = new MP4ViewerPro({ onClose: () => { viewer = null; addLauncher(); } });
    }
    function closeViewer() { if (viewer) viewer.close(); }

    function init() {
        document.addEventListener('keydown', e => {
            if (e.ctrlKey && e.shiftKey && (e.key === 'M' || e.key === 'm')) { e.preventDefault(); if (!viewer) openViewer(); }
        });
        addLauncher();
        setTimeout(stopDefaultPlayback, 100);
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();

    window.openMP4Viewer = openViewer;
    window.closeMP4Viewer = closeViewer;
})();
