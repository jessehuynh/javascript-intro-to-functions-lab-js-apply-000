function shout(string){
  return string.toUpperCase()
}

shout('hello')

function whisper(string) {
  return string.toLowerCase()
}

whisper('HELLO WORLD')

function logShout(string) {
  let uppercase = string.toUpperCase()
  console.log(uppercase)
}

logShout('am i logging a shout')

function logWhisper(string) {
  let lowercase = string.toLowerCase()
  console.log(lowercase)
}

logWhisper('AM I LOGGING A WHISPER')

function sayHiToGrandma(string) {
  if(string == string.toLowerCase) {
    return "I can't hear you!"
  } else {
    "Hi darling!"
  }
}

sayHiToGrandma('can you hear me')
