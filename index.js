function shout(quiet) {
  return quiet.toUpperCase();
}

function whisper(loud) {
  return loud.toLowerCase();
}

function logShout(quiet) {
  console.log(shout(quiet));
}

function logWhisper(loud) {
  console.log(whisper(loud));
}