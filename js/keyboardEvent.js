'use strict';
const mapKeyboard = {
  "q": "s1",
  "w": "k1",
  "e": "r",
  "r": "n1",
  "t": "h1",
  "u": "*",
  "i": "w",
  "o": "j1",
  "p": "n2",
  "[": "t1",
  "a": "t2",
  "s": "p",
  "d": "h2",
  "f": 'n3',
  "g": "s2",
  "j": "i",
  "k": "y",
  "l": "j2",
  ";": "g",
  "'": "k2",
  "c": "u",
  "v": "o",
  "n": "e",
  "m": "a",
}

const backGroundColorAfterClick = "#ffe682";
const color = "#1f1f1f";
document.addEventListener('keydown', (event) => {
  const keyNameOrigin = event.key.toLowerCase();
  const keyboardOriginEvent = document.getElementById(keyNameOrigin);
  if (keyNameOrigin && mapKeyboard[keyNameOrigin]) {
    const textAreaOutput = document.getElementById("output");
    const textAreaVerticalsNotes = document.getElementById("verticals_notes");
    textAreaOutput.value += keyNameOrigin;
    textAreaVerticalsNotes.value += /\d/.test(mapKeyboard[keyNameOrigin]) ? mapKeyboard[keyNameOrigin].replace(/[0-9]/g, '') : mapKeyboard[keyNameOrigin];
    const keyNameMirror = mapKeyboard[keyNameOrigin] + "-tk";
    // do not alert when only Control key is pressed.
    const keyboardMirrorEvent = document.getElementById(keyNameMirror);
    keyboardOriginEvent.style.backgroundColor = backGroundColorAfterClick;
    keyboardOriginEvent.style.color = color;
    keyboardOriginEvent.classList.add("transform-active");
    keyboardOriginEvent.style.backgroundColor = backGroundColorAfterClick;
    keyboardMirrorEvent.style.backgroundColor = backGroundColorAfterClick;
    keyboardMirrorEvent.style.color = color;
    // keyboardMirrorEvent.classList.add("transform-active");
  } else if (keyNameOrigin) {
    keyboardOriginEvent.style.color = color;
    keyboardOriginEvent.classList.add("transform-active");
    keyboardOriginEvent.style.backgroundColor = backGroundColorAfterClick;
  }
}, false);

document.addEventListener('keyup', (event) => {
  const keyNameOrigin = event.key.toLowerCase();
  const keyboardOriginEvent = document.getElementById(keyNameOrigin);
  if (keyNameOrigin && mapKeyboard[keyNameOrigin]) {
    const keyNameMirror = mapKeyboard[keyNameOrigin] + "-tk";
    // do not alert when only Control key is pressed.
    const keyboardMirrorEvent = document.getElementById(keyNameMirror);
    keyboardOriginEvent.style.backgroundColor = "";
    keyboardOriginEvent.style.color = "";
    keyboardOriginEvent.classList.remove("transform-active");
    keyboardOriginEvent.style.backgroundColor = "";
    keyboardMirrorEvent.style.backgroundColor = "";
    keyboardMirrorEvent.style.color = "";
    // keyboardMirrorEvent.classList.remove("transform-active");
  } else if (keyNameOrigin && keyboardOriginEvent) {
    keyboardOriginEvent.style.backgroundColor = "";
    keyboardOriginEvent.style.color = "";
    keyboardOriginEvent.classList.remove("transform-active");
  }
}, false);