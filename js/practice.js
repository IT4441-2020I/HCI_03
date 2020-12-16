'use strict';

document.addEventListener('keydown', (event) => {
  const keyNameOrigin = event.key.toLowerCase();
  const keyboardOriginEvent = document.getElementById(keyNameOrigin);
  if (keyNameOrigin && mapKeyboard[keyNameOrigin]) {
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