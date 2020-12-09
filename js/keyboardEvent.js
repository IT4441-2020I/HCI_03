'use strict';

document.addEventListener('keydown', (event) => {
  
  const keyName = event.key.toLowerCase();
  console.log("keyName: ", keyName);
  if (keyName) {
    // do not alert when only Control key is pressed.
    const keyboardEvent = document.getElementById(keyName);
    keyboardEvent.style.backgroundColor = "red";
    // console.log("keyboardEvent: ", );
    // if (keyboardEvent) {
    //   keyboardEvent.style.backgroundColor('red')
    // }
    // return;
  }

  // if (event.ctrlKey) {
  //   // Even though event.key is not 'Control' (e.g., 'a' is pressed),wdq
  //   // event.ctrlKey may be true if Ctrl key is pressed at the same time.
  //   // alert(`Combination of ctrlKey + ${keyName}`);
  // } else {
  //   // alert(`Key pressed ${keyName}`);
  // }
}, true);