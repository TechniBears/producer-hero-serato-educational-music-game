import "./styles.css";

const PAD_LABELS = [
  "Kick",
  "Snare",
  "Hat",
  "Clap",
  "Bass",
  "Chord",
  "Lead",
  "Chop",
  "Filter",
  "Crush",
  "Reverse",
  "Echo",
  "Intro",
  "Drums",
  "Drop",
  "Break",
];

const PAD_COLORS = [
  "#ff3f2f",
  "#ffb42f",
  "#e9ef5a",
  "#ff6f9e",
  "#29d17f",
  "#25b8a6",
  "#5bd0ff",
  "#5c86ff",
  "#c470ff",
  "#ff65cc",
  "#ff8750",
  "#a5f45d",
  "#ff3f2f",
  "#ffb42f",
  "#29d17f",
  "#5bd0ff",
];

const CM_DRUMS = "/samples/crates/ccmixter-cm-drum-kit/Sample Drum Kit";
const PD_VOL_1 = "/samples/crates/ccmixter-public-domain-vol-1";

const CRATES = [
  {
    id: "slab-starter",
    name: "SLAB Starter Crate",
    shortName: "Starter",
    vibe: "drum one-shots + quick color",
    credit: "CM Music Drum Kit Samples + Liquid_Tribal Public Domain Sound Library, CC0.",
    pads: [
      { label: "Kick", role: "floor", sample: `${CM_DRUMS}/Kick.wav`, gain: 0.98, layer: "kick" },
      { label: "Snare", role: "answer", sample: `${CM_DRUMS}/Sample 1.wav`, gain: 0.68, layer: "snare" },
      { label: "Hat", role: "time", sample: `${CM_DRUMS}/Closed Hat.wav`, gain: 0.55 },
      { label: "Clap", role: "snap", sample: `${CM_DRUMS}/Sample 2.wav`, gain: 0.62, layer: "clap" },
      {
        label: "Bass",
        role: "root",
        sample: `${PD_VOL_1}/andrewwainwright_-_Techno_Trance_and_other_loops_130-140bpm - bass synth shot.wav`,
        gain: 0.55,
        maxDuration: 0.62,
        layer: "bass",
      },
      {
        label: "Chord",
        role: "mood",
        sample: `${PD_VOL_1}/lunasspecto_-_Chord_Organ_Minors - organ shot.wav`,
        gain: 0.46,
        maxDuration: 0.72,
      },
      {
        label: "Lead",
        role: "spark",
        sample: `${PD_VOL_1}/MalreDeszik_-_New-Zen - synth shot.wav`,
        gain: 0.48,
        maxDuration: 0.62,
      },
      {
        label: "Chop",
        role: "cut",
        sample: `${PD_VOL_1}/TybeDour_-_TybeDour_SongMoon_0063 - weird synth shot2.wav`,
        gain: 0.5,
        maxDuration: 0.54,
      },
      {
        label: "Filter",
        role: "sweep",
        sample: `${PD_VOL_1}/shimoda_-_Vertigo - weird pad.wav`,
        gain: 0.42,
        maxDuration: 0.82,
        layer: "fx",
      },
      {
        label: "Crush",
        role: "damage",
        sample: `${PD_VOL_1}/Marsel_Minga_-_synth_bass_66bpm - tech stab.wav`,
        gain: 0.48,
        maxDuration: 0.58,
        layer: "fx",
      },
      {
        label: "Reverse",
        role: "lift",
        sample: `${CM_DRUMS}/Crash Cymbal.wav`,
        gain: 0.36,
        maxDuration: 0.74,
        reverse: true,
        layer: "fx",
      },
      {
        label: "Echo",
        role: "throw",
        sample: `${CM_DRUMS}/Ride Cymbal.wav`,
        gain: 0.32,
        maxDuration: 0.7,
        layer: "fx",
      },
      {
        label: "Intro",
        role: "scene",
        sample: `${PD_VOL_1}/andrewwainwright_-_Bubble_Of_Happiness_1 - drumloop 140.wav`,
        gain: 0.44,
        maxDuration: 1.4,
      },
      {
        label: "Drums",
        role: "scene",
        sample: `${PD_VOL_1}/Hugh_Jass_-_Hard_Breakbeat - drumloop 140.wav`,
        gain: 0.44,
        maxDuration: 1.4,
      },
      {
        label: "Drop",
        role: "scene",
        sample: `${PD_VOL_1}/VOID_-_VOID - bassline 140.wav`,
        gain: 0.48,
        maxDuration: 1.4,
        layer: "drop",
      },
      {
        label: "Break",
        role: "scene",
        sample: `${PD_VOL_1}/stellarartwars_-_Yamaha_DJX_preset_drums - drumloop5 - 140.wav`,
        gain: 0.43,
        maxDuration: 1.4,
      },
    ],
  },
  {
    id: "public-domain-140",
    name: "Public Domain 140",
    shortName: "Loop Lab",
    vibe: "basslines, loops, and weirder shots",
    credit: "Liquid_Tribal Public Domain Sound Library, CC0.",
    pads: [
      { label: "Kick", role: "floor", sample: `${CM_DRUMS}/Kick.wav`, gain: 0.9, layer: "kick" },
      { label: "Snare", role: "answer", sample: `${CM_DRUMS}/Sample 1.wav`, gain: 0.62, layer: "snare" },
      { label: "Hat", role: "time", sample: `${CM_DRUMS}/Mid Hat.wav`, gain: 0.42, maxDuration: 0.34 },
      { label: "Clap", role: "snap", sample: `${CM_DRUMS}/Open Hat 1.wav`, gain: 0.36, maxDuration: 0.34 },
      {
        label: "Sub",
        role: "root",
        sample: `${PD_VOL_1}/VOID_-_VOID - bassline 140.wav`,
        gain: 0.48,
        maxDuration: 1.0,
        layer: "bass",
      },
      {
        label: "Funk",
        role: "bounce",
        sample: `${PD_VOL_1}/MrDumBass_-_Funk_Bass - bassline 140.wav`,
        gain: 0.5,
        maxDuration: 1.0,
      },
      {
        label: "Choir",
        role: "lift",
        sample: `${PD_VOL_1}/stellarartwars_-_Rhythms_For_Robots_5 - synthchoir shot.wav`,
        gain: 0.46,
        maxDuration: 0.9,
      },
      {
        label: "Organ",
        role: "stab",
        sample: `${PD_VOL_1}/Nurykabe_-_260809_organ_01 - funky bass organ loop 140.wav`,
        gain: 0.42,
        maxDuration: 0.92,
      },
      {
        label: "Filter",
        role: "sweep",
        sample: `${PD_VOL_1}/MalreDeszik_-_New-Zen - bandpad shot.wav`,
        gain: 0.44,
        maxDuration: 0.8,
        layer: "fx",
      },
      {
        label: "Crush",
        role: "damage",
        sample: `${PD_VOL_1}/Marsel_Minga_-_dm_battle_beat01_98bmp - techbass synth shot.wav`,
        gain: 0.44,
        maxDuration: 0.62,
        layer: "fx",
      },
      {
        label: "Reverse",
        role: "lift",
        sample: `${PD_VOL_1}/TybeDour_-_TybeDour_SongMoon_0063 - weird synth shot.wav`,
        gain: 0.4,
        maxDuration: 0.82,
        reverse: true,
        layer: "fx",
      },
      {
        label: "Echo",
        role: "throw",
        sample: `${PD_VOL_1}/SollyBear_-_space_madness - bass madness.wav`,
        gain: 0.38,
        maxDuration: 0.8,
        layer: "fx",
      },
      {
        label: "Intro",
        role: "scene",
        sample: `${PD_VOL_1}/jaspertine_-_Song_Title_Indicates_Meaning - drumloop 140.wav`,
        gain: 0.42,
        maxDuration: 1.4,
      },
      {
        label: "Drums",
        role: "scene",
        sample: `${PD_VOL_1}/stellarartwars_-_Yamaha_DJX_preset_drums - drumloop1 - 140.wav`,
        gain: 0.42,
        maxDuration: 1.4,
      },
      {
        label: "Drop",
        role: "scene",
        sample: `${PD_VOL_1}/spinmeister_-_Techno_Twang_4 - bassline 140.wav`,
        gain: 0.46,
        maxDuration: 1.4,
        layer: "drop",
      },
      {
        label: "Break",
        role: "scene",
        sample: `${PD_VOL_1}/duckett_-_Trawnic_Loop - drumloop 140 sour.wav`,
        gain: 0.42,
        maxDuration: 1.4,
      },
    ],
  },
];

const TRAVEL_MS = 1900;
const HIT_WINDOW_MS = 230;

const ROUNDS = [
  {
    title: "Find The One",
    mode: "One pad",
    bpm: 88,
    active: [0],
    coach: "The kick is the floor. Hit it when the cue drops into Pad 1.",
    serato: "Serato Studio handoff: start a Drum Deck with one kick and make the room nod.",
    chart: [
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [5, 0],
      [6, 0],
      [7, 0],
      [8, 0],
    ],
  },
  {
    title: "Call And Answer",
    mode: "Kick + snare",
    bpm: 92,
    active: [0, 1],
    coach: "Pad 1 calls. Pad 2 answers. That is the start of bounce.",
    serato: "Serato Studio handoff: place kick and snare in Step Sequencer before adding anything else.",
    chart: [
      [1, 0],
      [2, 1],
      [3, 0],
      [4, 1],
      [5, 0],
      [6, 1],
      [7, 0],
      [8, 1],
    ],
  },
  {
    title: "Make The Pocket",
    mode: "Four drum pads",
    bpm: 96,
    active: [0, 1, 2, 3],
    coach: "Hats stitch time together. Clap adds attitude. Do not rush the pocket.",
    serato: "Serato Studio handoff: use 4 drum pads before you touch melody.",
    chart: [
      [1, 0],
      [1.5, 2],
      [2, 1],
      [2.5, 2],
      [3, 0],
      [3.5, 3],
      [4, 1],
      [4.5, 2],
      [5, 0],
      [5.5, 2],
      [6, 1],
      [6.5, 2],
      [7, 0],
      [7.5, 3],
      [8, 1],
      [8.5, 2],
    ],
  },
  {
    title: "Add Sauce",
    mode: "Bass + chops",
    bpm: 90,
    active: [0, 1, 4, 5, 6, 7],
    coach: "Now add color. Bass grounds it, chops answer it.",
    serato: "Serato Studio handoff: use Piano Mode for bass, Trigger Mode for chops.",
    chart: [
      [1, 0],
      [1.5, 4],
      [2, 1],
      [2.5, 5],
      [3, 0],
      [3.5, 6],
      [4, 1],
      [4.5, 7],
      [5, 0],
      [5.5, 6],
      [6, 1],
      [6.5, 5],
      [7, 0],
      [7.5, 4],
      [8, 1],
      [8.5, 7],
    ],
  },
  {
    title: "Sick Breakdown",
    mode: "FX motion",
    bpm: 98,
    active: [0, 1, 8, 9, 10, 11],
    coach: "Hold the groove, then damage it tastefully. FX is drama, not clutter.",
    serato: "Serato Studio handoff: use FX and stems to remove energy before the drop.",
    chart: [
      [1, 0],
      [2, 1],
      [3, 0],
      [4, 8],
      [4.5, 9],
      [5, 0],
      [6, 1],
      [7, 10],
      [7.5, 11],
      [8, 0],
      [8.5, 1],
    ],
  },
  {
    title: "Full Surface",
    mode: "Producer run",
    bpm: 104,
    active: Array.from({ length: 16 }, (_, index) => index),
    coach: "All sixteen are live. Drums, color, FX, scenes. Ride it once.",
    serato: "Serato Studio handoff: recreate this as Scenes: Intro, Drums, Drop, Break.",
    chart: [
      [1, 12],
      [1.5, 0],
      [2, 2],
      [2.5, 1],
      [3, 4],
      [3.5, 5],
      [4, 13],
      [4.5, 6],
      [5, 7],
      [5.5, 8],
      [6, 9],
      [6.5, 10],
      [7, 11],
      [7.5, 14],
      [8, 0],
      [8.5, 1],
      [9, 15],
    ],
  },
];

const state = {
  audio: null,
  master: null,
  filter: null,
  delay: null,
  delaySend: null,
  compressor: null,
  roundIndex: 0,
  notes: [],
  running: false,
  roundStart: 0,
  roundEnd: 0,
  heat: 35,
  score: 0,
  combo: 0,
  bestCombo: 0,
  badge: "PRESS START",
  subBadge: "Use SLAB, mouse, or number keys.",
  lastPad: null,
  lastHitQuality: "",
  midiStatus: "Looking for SLAB",
  midiDetail: "Local MIDI bridge starts with npm run dev.",
  midiMap: new Map(),
  ws: null,
  animation: null,
  roundCompleted: false,
  activeCrateId: "slab-starter",
  sampleBuffers: new Map(),
  sampleLoadPromise: null,
  crateStatus: "Tap Start to load the crate.",
};

const app = document.querySelector("#app");

app.innerHTML = `
  <main class="game-shell">
    <section class="producer-hero" aria-label="Producer Hero">
      <header class="hud">
        <div class="brand-lockup">
          <span class="brand-mark">SLAB</span>
          <div>
            <strong>Producer Hero</strong>
            <small>Serato Studio warm-up</small>
          </div>
        </div>

        <button id="connectButton" class="device-pill" type="button">
          <span class="status-dot"></span>
          <span id="midiStatus">Looking for SLAB</span>
        </button>
      </header>

      <section class="scoreboard" aria-label="Score">
        <div>
          <span>Heat</span>
          <div class="heat-shell"><div id="heatFill" class="heat-fill"></div></div>
        </div>
        <div>
          <span>Combo</span>
          <strong id="comboText">0x</strong>
        </div>
        <div>
          <span>Score</span>
          <strong id="scoreText">000000</strong>
        </div>
      </section>

      <section class="stage">
        <aside class="round-card">
          <span id="roundMeta">Round 1 / 6 · One pad</span>
          <h1 id="roundTitle">Find The One</h1>
          <p id="coachText">The kick is the floor. Hit it when the cue drops into Pad 1.</p>
          <div class="crate-panel" aria-label="Sound crate">
            <div class="crate-head">
              <span>Crate</span>
              <strong id="crateName">SLAB Starter Crate</strong>
            </div>
            <div id="crateButtons" class="crate-buttons"></div>
            <small id="crateStatus">Tap Start to load the crate.</small>
          </div>
          <div class="slab-note">
            <strong>SLAB path</strong>
            <span>Rounds 1-3: sixteen pads. Later: knob clicks, mode shifts, FX rides, and Serato handoff.</span>
          </div>
          <div id="momentBadge" class="moment-badge">
            <strong>PRESS START</strong>
            <span>Use SLAB, mouse, or number keys.</span>
          </div>
        </aside>

        <section class="controller-arena" aria-label="Sixteen pad stage">
          <div id="cueField" class="cue-field" aria-hidden="true"></div>
          <div class="drop-line"></div>
          <div id="padGrid" class="pad-grid"></div>
        </section>
      </section>

      <footer class="controls">
        <button id="startButton" class="primary-action" type="button">Start round</button>
        <button id="replayButton" class="quiet-action" type="button">Replay</button>
        <button id="prevButton" class="quiet-action" type="button">Back</button>
        <button id="nextButton" class="quiet-action" type="button">Next</button>
        <p id="seratoText">Serato Studio handoff: start a Drum Deck with one kick and make the room nod.</p>
      </footer>
    </section>
  </main>
`;

const refs = {
  connectButton: document.querySelector("#connectButton"),
  statusDot: document.querySelector(".status-dot"),
  midiStatus: document.querySelector("#midiStatus"),
  heatFill: document.querySelector("#heatFill"),
  comboText: document.querySelector("#comboText"),
  scoreText: document.querySelector("#scoreText"),
  roundMeta: document.querySelector("#roundMeta"),
  roundTitle: document.querySelector("#roundTitle"),
  coachText: document.querySelector("#coachText"),
  crateName: document.querySelector("#crateName"),
  crateButtons: document.querySelector("#crateButtons"),
  crateStatus: document.querySelector("#crateStatus"),
  momentBadge: document.querySelector("#momentBadge"),
  cueField: document.querySelector("#cueField"),
  padGrid: document.querySelector("#padGrid"),
  startButton: document.querySelector("#startButton"),
  replayButton: document.querySelector("#replayButton"),
  prevButton: document.querySelector("#prevButton"),
  nextButton: document.querySelector("#nextButton"),
  seratoText: document.querySelector("#seratoText"),
};

function currentRound() {
  return ROUNDS[state.roundIndex];
}

function currentCrate() {
  return CRATES.find((crate) => crate.id === state.activeCrateId) || CRATES[0];
}

function ensureAudio() {
  if (state.audio) return;

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  state.audio = new AudioContext();

  state.filter = state.audio.createBiquadFilter();
  state.filter.type = "lowpass";
  state.filter.frequency.value = 11000;
  state.filter.Q.value = 0.7;

  state.delay = state.audio.createDelay(0.6);
  state.delay.delayTime.value = 0.17;
  state.delaySend = state.audio.createGain();
  state.delaySend.gain.value = 0.12;

  const feedback = state.audio.createGain();
  feedback.gain.value = 0.22;
  state.delay.connect(feedback);
  feedback.connect(state.delay);

  state.compressor = state.audio.createDynamicsCompressor();
  state.compressor.threshold.value = -20;
  state.compressor.knee.value = 16;
  state.compressor.ratio.value = 4;
  state.compressor.attack.value = 0.004;
  state.compressor.release.value = 0.18;

  state.master = state.audio.createGain();
  state.master.gain.value = 0.84;

  state.filter.connect(state.compressor);
  state.filter.connect(state.delaySend);
  state.delaySend.connect(state.delay);
  state.delay.connect(state.compressor);
  state.compressor.connect(state.master);
  state.master.connect(state.audio.destination);
}

async function wakeAudio() {
  ensureAudio();
  if (state.audio.state === "suspended") await state.audio.resume();
}

async function loadCurrentCrate() {
  ensureAudio();
  const crate = currentCrate();
  const samplePaths = [...new Set(crate.pads.map((pad) => pad.sample).filter(Boolean))];
  const missingPaths = samplePaths.filter((path) => !state.sampleBuffers.has(path));

  if (!missingPaths.length) {
    const nextStatus = `${crate.shortName} loaded. ${crate.vibe}.`;
    if (state.crateStatus !== nextStatus) {
      state.crateStatus = nextStatus;
      renderStatic();
    }
    return;
  }

  const promiseKey = `${crate.id}:${missingPaths.length}`;
  if (state.sampleLoadPromise?.key === promiseKey) return state.sampleLoadPromise.promise;

  state.crateStatus = `Loading ${crate.shortName}...`;
  renderStatic();

  const promise = Promise.all(
    missingPaths.map(async (path) => {
      const response = await fetch(encodeURI(path));
      if (!response.ok) throw new Error(`Missing sample: ${path}`);
      const buffer = await response.arrayBuffer();
      const decoded = await state.audio.decodeAudioData(buffer);
      state.sampleBuffers.set(path, decoded);
    }),
  )
    .then(() => {
      state.crateStatus = `${crate.shortName} loaded. ${crate.vibe}.`;
      renderStatic();
    })
    .catch((error) => {
      state.crateStatus = "Crate load failed. Synth backup is live.";
      state.midiDetail = error.message;
      renderStatic();
    })
    .finally(() => {
      if (state.sampleLoadPromise?.key === promiseKey) state.sampleLoadPromise = null;
    });

  state.sampleLoadPromise = { key: promiseKey, promise };
  return promise;
}

function playTone({ type = "sine", frequency, endFrequency, duration = 0.16, gain = 0.2, delay = 0 }) {
  ensureAudio();
  const now = state.audio.currentTime + delay;
  const osc = state.audio.createOscillator();
  const amp = state.audio.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(frequency, now);
  if (endFrequency) osc.frequency.exponentialRampToValueAtTime(Math.max(24, endFrequency), now + duration);
  amp.gain.setValueAtTime(Math.max(0.0001, gain), now);
  amp.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  osc.connect(amp);
  amp.connect(state.filter);
  osc.start(now);
  osc.stop(now + duration + 0.04);
}

function playNoise({ duration = 0.1, gain = 0.16, highpass = 1200, delay = 0 }) {
  ensureAudio();
  const now = state.audio.currentTime + delay;
  const size = Math.floor(state.audio.sampleRate * duration);
  const buffer = state.audio.createBuffer(1, size, state.audio.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < size; i += 1) data[i] = Math.random() * 2 - 1;

  const source = state.audio.createBufferSource();
  const amp = state.audio.createGain();
  const filter = state.audio.createBiquadFilter();
  filter.type = "highpass";
  filter.frequency.value = highpass;
  amp.gain.setValueAtTime(gain, now);
  amp.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  source.buffer = buffer;
  source.connect(filter);
  filter.connect(amp);
  amp.connect(state.filter);
  source.start(now);
}

function bufferForPad(slot) {
  const buffer = state.sampleBuffers.get(slot.sample);
  if (!buffer || !slot.reverse) return buffer;

  const reverseKey = `${slot.sample}:reverse`;
  if (state.sampleBuffers.has(reverseKey)) return state.sampleBuffers.get(reverseKey);

  const reversed = state.audio.createBuffer(buffer.numberOfChannels, buffer.length, buffer.sampleRate);
  for (let channel = 0; channel < buffer.numberOfChannels; channel += 1) {
    const source = buffer.getChannelData(channel);
    const target = reversed.getChannelData(channel);
    for (let index = 0; index < source.length; index += 1) {
      target[index] = source[source.length - 1 - index];
    }
  }
  state.sampleBuffers.set(reverseKey, reversed);
  return reversed;
}

function playCrateSample(slot, velocityRatio) {
  if (!slot?.sample) return false;
  const buffer = bufferForPad(slot);
  if (!buffer) return false;

  const now = state.audio.currentTime;
  const source = state.audio.createBufferSource();
  const amp = state.audio.createGain();
  const maxDuration = slot.maxDuration ?? buffer.duration;
  const duration = Math.max(0.05, Math.min(buffer.duration, maxDuration));
  const gain = (slot.gain ?? 0.48) * velocityRatio;
  const release = Math.min(0.08, duration * 0.35);

  source.buffer = buffer;
  source.playbackRate.value = slot.rate ?? 1;
  amp.gain.setValueAtTime(0.0001, now);
  amp.gain.linearRampToValueAtTime(gain, now + 0.006);
  amp.gain.setTargetAtTime(0.0001, now + duration - release, release / 2);

  source.connect(amp);
  amp.connect(state.filter);
  source.start(now, slot.offset ?? 0);
  source.stop(now + duration + 0.05);
  return true;
}

function applyPadLayer(pad, layer, velocityRatio) {
  if (layer === "kick") {
    playTone({ frequency: 112, endFrequency: 42, duration: 0.24, gain: 0.3 * velocityRatio });
  } else if (layer === "snare") {
    playNoise({ duration: 0.08, gain: 0.16 * velocityRatio, highpass: 1600 });
  } else if (layer === "clap") {
    playNoise({ duration: 0.028, gain: 0.08 * velocityRatio, highpass: 1900, delay: 0.024 });
  } else if (layer === "bass") {
    const notes = [98, 123.47, 146.83, 196];
    const root = notes[Math.max(0, Math.min(3, pad - 4))];
    playTone({ type: "sine", frequency: root / 2, duration: 0.3, gain: 0.12 * velocityRatio });
  } else if (layer === "drop") {
    playTone({ type: "triangle", frequency: 65.41, duration: 0.48, gain: 0.16 * velocityRatio });
  }

  if (layer === "fx" || (pad >= 8 && pad <= 11)) {
    state.delaySend.gain.setTargetAtTime(0.34, state.audio.currentTime, 0.02);
    state.delaySend.gain.setTargetAtTime(0.12, state.audio.currentTime + 0.26, 0.06);
    state.filter.frequency.setTargetAtTime(pad === 8 ? 1400 : 10500, state.audio.currentTime, 0.02);
    state.filter.frequency.setTargetAtTime(11000, state.audio.currentTime + 0.3, 0.08);
  }
}

function playSyntheticPadSound(pad, velocityRatio) {
  const v = velocityRatio;
  if (pad === 0) {
    playTone({ frequency: 152, endFrequency: 42, duration: 0.3, gain: 0.72 * v });
    playNoise({ duration: 0.018, gain: 0.12 * v, highpass: 4500 });
  } else if (pad === 1) {
    playTone({ type: "triangle", frequency: 190, endFrequency: 112, duration: 0.12, gain: 0.16 * v });
    playNoise({ duration: 0.16, gain: 0.38 * v, highpass: 1300 });
  } else if (pad === 2) {
    playNoise({ duration: 0.045, gain: 0.19 * v, highpass: 6800 });
  } else if (pad === 3) {
    playNoise({ duration: 0.034, gain: 0.16 * v, highpass: 1800 });
    playNoise({ duration: 0.034, gain: 0.12 * v, highpass: 1800, delay: 0.022 });
  } else if (pad >= 4 && pad <= 7) {
    const notes = [98, 123.47, 146.83, 196];
    const root = notes[pad - 4];
    playTone({ type: "sawtooth", frequency: root, duration: 0.25, gain: 0.2 * v });
    playTone({ type: "triangle", frequency: root * 2, duration: 0.22, gain: 0.1 * v });
  } else if (pad >= 8 && pad <= 11) {
    const starts = [520, 260, 720, 180];
    const start = starts[pad - 8];
    state.delaySend.gain.setTargetAtTime(0.34, state.audio.currentTime, 0.02);
    state.delaySend.gain.setTargetAtTime(0.12, state.audio.currentTime + 0.26, 0.06);
    state.filter.frequency.setTargetAtTime(pad === 8 ? 1400 : 10500, state.audio.currentTime, 0.02);
    state.filter.frequency.setTargetAtTime(11000, state.audio.currentTime + 0.3, 0.08);
    playTone({ type: "square", frequency: start, endFrequency: start / 2.5, duration: 0.28, gain: 0.11 * v });
    playNoise({ duration: 0.15, gain: 0.1 * v, highpass: 900 });
  } else {
    const sceneNotes = [261.63, 329.63, 392, 523.25];
    playTone({ type: "triangle", frequency: sceneNotes[pad - 12], duration: 0.34, gain: 0.18 * v });
    playTone({ type: "sine", frequency: sceneNotes[pad - 12] / 2, duration: 0.42, gain: 0.08 * v });
  }
}

function playPadSound(pad, velocity = 100) {
  const v = Math.max(0.16, velocity / 127);
  const slot = currentCrate().pads[pad];
  const sampled = playCrateSample(slot, v);

  if (sampled) {
    applyPadLayer(pad, slot.layer, v);
    return;
  }

  playSyntheticPadSound(pad, v);
}

function buildNotes() {
  const round = currentRound();
  const beatMs = 60000 / round.bpm;
  const start = performance.now() + 1200;
  state.roundStart = start;
  state.notes = round.chart.map(([beat, pad], index) => ({
    id: `${state.roundIndex}-${index}-${Date.now()}`,
    beat,
    pad,
    time: start + beat * beatMs,
    hit: false,
    missed: false,
  }));
  state.roundEnd = state.notes.at(-1).time + 1200;
}

async function startRound({ resetHeat = false } = {}) {
  await wakeAudio();
  await loadCurrentCrate();
  buildNotes();
  state.running = true;
  state.roundCompleted = false;
  state.combo = 0;
  state.bestCombo = 0;
  state.badge = "GET READY";
  state.subBadge = "Watch the cue drop into the pad.";
  if (resetHeat) {
    state.heat = 35;
    state.score = 0;
  }
  refs.startButton.textContent = "Restart";
  raf();
  renderStatic();
}

function finishRound() {
  if (state.roundCompleted) return;
  state.roundCompleted = true;
  state.running = false;

  const hitCount = state.notes.filter((note) => note.hit).length;
  const total = state.notes.length;
  const clear = hitCount / total >= 0.7 || state.heat >= 50;
  if (clear && state.roundIndex === ROUNDS.length - 1) {
    setBadge("SERATO READY", "Open Studio. Build Intro, Drums, Drop, Break.");
  } else if (clear) {
    setBadge("ROUND CLEAR", "Next pattern unlocked.");
    window.setTimeout(() => goRound(1, true), 1200);
  } else {
    setBadge("RUN IT BACK", "Keep the beat alive. You are close.");
  }
  renderStatic();
}

function setBadge(title, subtitle = "") {
  state.badge = title;
  state.subBadge = subtitle;
  refs.momentBadge.classList.remove("pop");
  requestAnimationFrame(() => refs.momentBadge.classList.add("pop"));
}

function momentForHit(pad, accuracy) {
  if (pad >= 8 && pad <= 11) return accuracy < 90 ? "SICK BREAKDOWN" : "DIRTY SWITCH";
  if (pad >= 12 && pad <= 15) return pad === 14 ? "DROP HIT" : "CROWD LIFT";
  if (pad >= 4 && pad <= 7) return accuracy < 80 ? "SAUCE" : "CLEAN CHOP";
  if (pad === 2 || pad === 3) return "IN THE POCKET";
  if (pad === 1) return "BOUNCE";
  return accuracy < 70 ? "LOCKED" : "ON BEAT";
}

function hitPad(pad, velocity = 110, source = "screen") {
  wakeAudio()
    .then(loadCurrentCrate)
    .catch((error) => {
      state.crateStatus = "Audio wake failed.";
      state.midiDetail = error.message;
      renderStatic();
    });
  const round = currentRound();
  const now = performance.now();
  const active = round.active.includes(pad);
  state.lastPad = { pad, time: now };
  playPadSound(pad, active ? velocity : 50);

  if (!active) {
    state.combo = 0;
    state.heat = Math.max(0, state.heat - 6);
    setBadge("NOT YET", `Pad ${pad + 1} wakes up later.`);
    renderStatic();
    return;
  }

  const note = state.notes
    .filter((candidate) => !candidate.hit && !candidate.missed && candidate.pad === pad)
    .map((candidate) => ({ candidate, distance: Math.abs(candidate.time - now) }))
    .sort((a, b) => a.distance - b.distance)[0];

  if (!note || note.distance > HIT_WINDOW_MS) {
    state.combo = 0;
    state.heat = Math.max(0, state.heat - 5);
    setBadge("TOO LOOSE", "Wait for the cue to land.");
    renderStatic();
    return;
  }

  note.candidate.hit = true;
  state.combo += 1;
  state.bestCombo = Math.max(state.bestCombo, state.combo);

  const tight = Math.max(0, 1 - note.distance / HIT_WINDOW_MS);
  const scoreAdd = Math.round(120 + tight * 260 + Math.min(state.combo, 16) * 18);
  state.score += scoreAdd;
  state.heat = Math.min(100, state.heat + 5 + tight * 5);

  const title = momentForHit(pad, note.distance);
  const sub = source === "midi" ? "SLAB heard. Keep going." : `${scoreAdd} pts · ${state.combo}x`;
  setBadge(title, sub);
  renderStatic();

  if (state.notes.every((candidate) => candidate.hit || candidate.missed)) {
    window.setTimeout(finishRound, 420);
  }
}

function missLateNotes(now) {
  let changed = false;
  for (const note of state.notes) {
    if (!note.hit && !note.missed && now > note.time + HIT_WINDOW_MS) {
      note.missed = true;
      state.combo = 0;
      state.heat = Math.max(0, state.heat - 4);
      changed = true;
    }
  }
  if (changed) {
    setBadge("RECOVERY", "Misses happen. Catch the next cue.");
    renderStatic();
  }
}

function raf() {
  cancelAnimationFrame(state.animation);
  const frame = () => {
    const now = performance.now();
    if (state.running) {
      missLateNotes(now);
      renderCues(now);
      if (now > state.roundEnd || state.notes.every((note) => note.hit || note.missed)) finishRound();
      state.animation = requestAnimationFrame(frame);
    } else {
      renderCues(now);
    }
  };
  state.animation = requestAnimationFrame(frame);
}

function padPosition(pad) {
  const col = pad % 4;
  const row = Math.floor(pad / 4);
  return {
    x: (col + 0.5) * 25,
    y: (row + 0.5) * 25,
  };
}

function renderCues(now = performance.now()) {
  const html = [];
  for (const note of state.notes) {
    if (note.hit || note.missed) continue;
    const progress = 1 - (note.time - now) / TRAVEL_MS;
    if (progress < 0 || progress > 1.16) continue;
    const { x, y } = padPosition(note.pad);
    const top = -12 + progress * (y + 12);
    const scale = 0.62 + progress * 0.5;
    const danger = Math.abs(note.time - now) < HIT_WINDOW_MS ? "strike" : "";
    html.push(`
      <div
        class="falling-cue ${danger}"
        style="--cue-color:${PAD_COLORS[note.pad]}; left:${x}%; top:${top}%; transform:translate(-50%, -50%) scale(${scale});"
      >
        <span>${note.pad + 1}</span>
      </div>
    `);
  }
  refs.cueField.innerHTML = html.join("");
}

function renderPads() {
  const active = currentRound().active;
  const crate = currentCrate();
  const now = performance.now();
  refs.padGrid.innerHTML = PAD_LABELS.map((fallbackLabel, index) => {
    const slot = crate.pads[index];
    const label = slot?.label || fallbackLabel;
    const isActive = active.includes(index);
    const recent = state.lastPad?.pad === index && now - state.lastPad.time < 160;
    const incoming = state.notes.some((note) => {
      if (note.pad !== index || note.hit || note.missed) return false;
      const distance = Math.abs(note.time - now);
      return distance < HIT_WINDOW_MS;
    });
    return `
      <button
        class="pad ${isActive ? "awake" : "dim"} ${recent ? "hit" : ""} ${incoming ? "incoming" : ""}"
        style="--pad-color:${PAD_COLORS[index]}"
        data-pad="${index}"
        type="button"
      >
        <span>${index + 1}</span>
        <strong>${label}</strong>
        <em>${slot?.role || "pad"}</em>
      </button>
    `;
  }).join("");

  refs.padGrid.querySelectorAll(".pad").forEach((button) => {
    button.addEventListener("pointerdown", () => {
      hitPad(Number(button.dataset.pad), 112, "screen");
    });
  });
}

function renderCrates() {
  const crate = currentCrate();
  refs.crateName.textContent = crate.name;
  refs.crateStatus.textContent = state.crateStatus || crate.credit;
  refs.crateButtons.innerHTML = CRATES.map(
    (candidate) => `
      <button
        class="crate-button ${candidate.id === crate.id ? "selected" : ""}"
        data-crate="${candidate.id}"
        type="button"
      >
        ${candidate.shortName}
      </button>
    `,
  ).join("");

  refs.crateButtons.querySelectorAll(".crate-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeCrateId = button.dataset.crate;
      state.crateStatus = `Tap Start to load ${currentCrate().shortName}.`;
      renderStatic();
      if (state.audio) loadCurrentCrate();
    });
  });
}

function renderStatic() {
  const round = currentRound();
  refs.midiStatus.textContent = state.midiStatus;
  refs.connectButton.title = state.midiDetail;
  refs.statusDot.classList.toggle("ready", /slab|ready|connected/i.test(`${state.midiStatus} ${state.midiDetail}`));
  refs.heatFill.style.width = `${Math.round(state.heat)}%`;
  refs.comboText.textContent = `${state.combo}x`;
  refs.scoreText.textContent = String(state.score).padStart(6, "0");
  refs.roundMeta.textContent = `Round ${state.roundIndex + 1} / ${ROUNDS.length} · ${round.mode} · ${round.bpm} BPM`;
  refs.roundTitle.textContent = round.title;
  refs.coachText.textContent = round.coach;
  renderCrates();
  refs.momentBadge.innerHTML = `<strong>${state.badge}</strong><span>${state.subBadge}</span>`;
  refs.seratoText.textContent = round.serato;
  refs.prevButton.disabled = state.roundIndex === 0;
  refs.nextButton.disabled = state.roundIndex === ROUNDS.length - 1;
  renderPads();
  renderCues();
}

function goRound(direction, autoStart = false) {
  state.roundIndex = Math.max(0, Math.min(ROUNDS.length - 1, state.roundIndex + direction));
  state.notes = [];
  state.combo = 0;
  state.badge = "NEW ROUND";
  state.subBadge = currentRound().mode;
  state.running = false;
  state.roundCompleted = false;
  if (autoStart) {
    startRound();
  } else {
    renderStatic();
  }
}

function midiKey(status, data1) {
  return `${status & 0xf0}:${status & 0x0f}:${data1}`;
}

function learnPad(status, data1) {
  const key = midiKey(status, data1);
  if (state.midiMap.has(key)) return state.midiMap.get(key);
  if (state.midiMap.size >= 16) return null;
  const pad = state.midiMap.size;
  state.midiMap.set(key, pad);
  state.midiDetail = `Learned physical control as Pad ${pad + 1}`;
  return pad;
}

function midiMessageToPad(message) {
  const [status = 0, data1 = 0, data2 = 0] = message;
  const type = status & 0xf0;
  const channel = (status & 0x0f) + 1;

  if (type === 0x90 && data2 > 0) {
    const key = midiKey(status, data1);
    if (state.midiMap.has(key)) return state.midiMap.get(key);
    if ((channel === 8 || channel === 9) && data1 >= 12 && data1 <= 27) return data1 - 12;
    if (data1 >= 36 && data1 <= 51) return data1 - 36;
    if (data1 >= 0 && data1 <= 15) return data1;
    return learnPad(status, data1);
  }

  if (type === 0xb0 && data2 > 0) {
    const key = midiKey(status, data1);
    if (state.midiMap.has(key)) return state.midiMap.get(key);
    return learnPad(status, data1);
  }

  return null;
}

function handleMidiMessage(message, sourceName = "SLAB") {
  const pad = midiMessageToPad(message);
  if (pad == null) return;
  state.midiStatus = sourceName;
  state.midiDetail = "Connected";
  hitPad(pad, message[2] || 100, "midi");
}

function connectBridge() {
  const protocol = window.location.protocol === "https:" ? "wss" : "ws";
  const ws = new WebSocket(`${protocol}://${window.location.host}/controller-midi`);
  state.ws = ws;

  ws.addEventListener("open", () => {
    state.midiStatus = "Bridge connected";
    state.midiDetail = "Waiting for SLAB MIDI.";
    renderStatic();
  });

  ws.addEventListener("message", (event) => {
    const payload = JSON.parse(event.data);
    if (payload.type === "hello") {
      state.midiStatus = payload.midiPortName || "No MIDI port";
      state.midiDetail = payload.midiPortName ? "Local bridge ready" : "Reconnect SLAB and restart dev server.";
      renderStatic();
    }
    if (payload.type === "midi") handleMidiMessage(payload.message, payload.source || "SLAB");
  });

  ws.addEventListener("close", () => {
    state.midiStatus = "Bridge offline";
    state.midiDetail = "Click to try browser MIDI.";
    renderStatic();
  });

  ws.addEventListener("error", () => {
    state.midiStatus = "Bridge unavailable";
    state.midiDetail = "Click to try browser MIDI.";
    renderStatic();
  });
}

async function connectBrowserMidi() {
  if (!navigator.requestMIDIAccess) {
    state.midiStatus = "Browser MIDI unavailable";
    state.midiDetail = "Use npm run dev for the local bridge.";
    renderStatic();
    return;
  }

  const access = await navigator.requestMIDIAccess();
  const inputs = [...access.inputs.values()];
  const input = inputs.find((candidate) => /slab/i.test(candidate.name)) || inputs[0];
  if (!input) {
    state.midiStatus = "No MIDI input";
    state.midiDetail = "Reconnect SLAB and refresh.";
    renderStatic();
    return;
  }

  input.onmidimessage = (event) => handleMidiMessage([...event.data], input.name);
  state.midiStatus = input.name;
  state.midiDetail = "Browser MIDI ready";
  renderStatic();
}

refs.startButton.addEventListener("click", () => startRound({ resetHeat: state.score === 0 }));
refs.replayButton.addEventListener("click", () => startRound());
refs.prevButton.addEventListener("click", () => goRound(-1));
refs.nextButton.addEventListener("click", () => goRound(1));
refs.connectButton.addEventListener("click", () => {
  connectBrowserMidi().catch((error) => {
    state.midiStatus = "MIDI blocked";
    state.midiDetail = error.message;
    renderStatic();
  });
});

window.addEventListener("keydown", (event) => {
  const keys = "1234567890qwerty";
  const index = keys.indexOf(event.key.toLowerCase());
  if (index >= 0 && index < 16) {
    event.preventDefault();
    hitPad(index, 110, "keyboard");
  }
  if (event.key === " ") {
    event.preventDefault();
    startRound({ resetHeat: state.score === 0 });
  }
  if (event.key === "ArrowRight") goRound(1);
  if (event.key === "ArrowLeft") goRound(-1);
});

renderStatic();
connectBridge();
