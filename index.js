function shout(string){
  return string.toUpperCase()
}

shout('hello')

whisper = (string) => {
  return string.toLowerCase()
}

whisper('HELLO WORLD')

logShout = (string) => {
  let uppercase = console.log(string.toUpperCase());
}

logShout('Am I yelling')
