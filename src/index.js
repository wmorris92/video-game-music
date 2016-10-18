const context = new AudioContext();

function createNode(frequency) {
  var node = context.createOscillator();
  node.type = 'square';
  node.frequency.value = frequency;
  node.connect(context.destination);
  return node;
}

//White Keys
var e4Node = createNode(329.628);
var f4Node = createNode(349.228);
var g4Node = createNode(391.995);
var a4Node = createNode(440.000);
var b4Node = createNode(493.883);
var c5Node = createNode(523.251);
var d5Node = createNode(587.330);
var e5Node = createNode(659.255);
var f5Node = createNode(698.456);
var g5Node = createNode(783.991);
var a5Node = createNode(880.000);
var b5Node = createNode(987.767);

//Black Keys
var e4FlatNode = createNode(311.127);
var g4FlatNode = createNode(369.994);
var a4FlatNode = createNode(415.305);
var b4FlatNode = createNode(466.164);
var d5FlatNode = createNode(554.365);
var e5FlatNode = createNode(622.254);
var g5FlatNode = createNode(739.989);
var a5FlatNode = createNode(830.609);
var b5FlatNode = createNode(932.328);

function startPlaying(node) {
  node.start();
}

function stopPlaying(node) {
  node.stop();
}

window.addEventListener('keydown', function(e) {
  switch (e.keyCode) {
    //White keys
    case 65:
      startPlaying(e4Node);
      break;
    case 83:
      startPlaying(f4Node);
      break;
    case 68:
      startPlaying(g4Node);
      break;
    case 70:
      startPlaying(a4Node);
      break;
    case 71:
      startPlaying(b4Node);
      break;
    case 72:
      startPlaying(c5Node);
      break;
    case 74:
      startPlaying(d5Node);
      break;
    case 75:
      startPlaying(e5Node);
      break;
    case 76:
      startPlaying(f5Node);
      break;
    case 186:
      startPlaying(g5Node);
      break;
    case 222:
      startPlaying(a5Node);
      break;
    case 220:
      startPlaying(b5Node);
      break;
    //Black keys
    case 81:
      startPlaying(e4FlatNode);
      break;
    case 69:
      startPlaying(g4FlatNode);
      break;
    case 82:
      startPlaying(a4FlatNode);
      break;
    case 84:
      startPlaying(b4FlatNode);
      break;
    case 85:
      startPlaying(d5FlatNode);
      break;
    case 73:
      startPlaying(e5FlatNode);
      break;
    case 80:
      startPlaying(g5FlatNode);
      break;
    case 219:
      startPlaying(a5FlatNode);
      break;
    case 221:
      startPlaying(b5FlatNode);
      break;
  }
}, false);

window.addEventListener('keyup', function(e) {
  //White keys
  switch (e.keyCode) {
    case 65:
      stopPlaying(e4Node);
      e4Node = createNode(329.628);
      break;
    case 83:
      stopPlaying(f4Node);
      f4Node = createNode(349.228);
      break;
    case 68:
      stopPlaying(g4Node);
      g4Node = createNode(391.995);
      break;
    case 70:
      stopPlaying(a4Node);
      a4Node = createNode(440.000);
      break;
    case 71:
      stopPlaying(b4Node);
      b4Node = createNode(493.883);
      break;
    case 72:
      stopPlaying(c5Node);
      c5Node = createNode(523.251);
      break;
    case 74:
      stopPlaying(d5Node);
      d5Node = createNode(587.330);
      break;
    case 75:
      stopPlaying(e5Node);
      e5Node = createNode(659.255);
      break;
    case 76:
      stopPlaying(f5Node);
      f5Node = createNode(698.456);
      break;
    case 186:
      stopPlaying(g5Node);
      g5Node = createNode(783.991);
      break;
    case 222:
      stopPlaying(a5Node);
      a5Node = createNode(880.000);
      break;
    case 220:
      stopPlaying(b5Node);
      b5Node = createNode(987.767);
      break;
    //Black keys
    case 81:
      stopPlaying(e4FlatNode);
      e4FlatNode = createNode(311.127);
      break;
    case 69:
      stopPlaying(g4FlatNode);
      g4FlatNode = createNode(369.994);
      break;
    case 82:
      stopPlaying(a4FlatNode);
      a4FlatNode = createNode(415.305);
      break;
    case 84:
      stopPlaying(b4FlatNode);
      b4FlatNode = createNode(466.164);
      break;
    case 85:
      stopPlaying(d5FlatNode);
      d5FlatNode = createNode(554.365);
      break;
    case 73:
      stopPlaying(e5FlatNode);
      e5FlatNode = createNode(622.254);
      break;
    case 80:
      stopPlaying(g5FlatNode);
      g5FlatNode = createNode(739.989);
      break;
    case 219:
      stopPlaying(a5FlatNode);
      a5FlatNode = createNode(830.609);
      break;
    case 221:
      stopPlaying(b5FlatNode);
      b5FlatNode = createNode(932.328);
      break;
  }
}, false);
