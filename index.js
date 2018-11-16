function shout(string){
  return string.toUpperCase()
}

shout('hello')

whisper = (string) => {
  return string.toLowerCase()
}

whisper('HELLO WORLD')

logShout = (string) => {
  let uppercase = string.toUpperCase();
  console.log(uppercase)
}

logShout('Am I yelling')
