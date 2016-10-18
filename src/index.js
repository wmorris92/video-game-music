const context = new AudioContext();

function play() {
  console.log('Play sound');

  e5();
  // sleep(4000);
  // e5();
  // sleep(4000);
  // e5();
  // sleep(4000);
  // c5();

}

function e5() {
  const e5Node = context.createOscillator();
  e5Node.type = 'square';
  e5Node.frequency.value = 659.255;
  e5Node.connect(context.destination)
  e5Node.start();
  // e5Node.stop(context.currentTime + 0.2);
}

function c5() {
  const c5Node = context.createOscillator();
  c5Node.type = 'square';
  c5Node.frequency.value = 	523.251;
  c5Node.connect(context.destination)
  c5Node.start();
  c5Node.stop(context.currentTime + 0.2);
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
