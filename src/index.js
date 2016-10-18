const context = new AudioContext();

var e5Node = context.createOscillator();
e5Node.type = 'square';
e5Node.frequency.value = 659.255;
e5Node.connect(context.destination)

var c5Node = context.createOscillator();
c5Node.type = 'square';
c5Node.frequency.value = 523.251;
c5Node.connect(context.destination)

function play() {
  console.log('Play sound');

  startPlaying(e5Node);
}

function stop() {
  console.log('Stop sound');

  stopPlaying(e5Node)
  e5Node = context.createOscillator();
  e5Node.type = 'square';
  e5Node.frequency.value = 659.255;
  e5Node.connect(context.destination)
}

function c5() {
  const c5Node = context.createOscillator();
  c5Node.type = 'square';
  c5Node.frequency.value = 	523.251;
  c5Node.connect(context.destination)
  c5Node.start();
  c5Node.stop(context.currentTime + 0.2);
}

function startPlaying(node) {
  node.start();
}

function stopPlaying(node) {
  node.stop();
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

window.addEventListener('keydown', function(e) {
  console.log(e.keyCode);
  if(e.keyCode === 65) {
    console.log('A was pressed!');
    startPlaying(e5Node);
  } else if(e.keyCode === 83) {
    startPlaying(c5Node);
  }
}, false);

window.addEventListener('keyup', function(e) {
  console.log(e.keyCode);
  if(e.keyCode === 65) {
    console.log('A was pressed!');
    stopPlaying(e5Node);
    e5Node = context.createOscillator();
    e5Node.type = 'square';
    e5Node.frequency.value = 659.255;
    e5Node.connect(context.destination)
  } else if(e.keyCode === 83) {
    stopPlaying(c5Node);
    c5Node = context.createOscillator();
    c5Node.type = 'square';
    c5Node.frequency.value = 523.251;
    c5Node.connect(context.destination)
  }
}, false);
