function shout(string){
  return string.toUpperCase()
}

shout('hello')

whisper = (string) => {
  return string.toLowerCase()
}

whisper('HELLO WORLD')

logShout = (string, log) => {
  log = () => {
    console.log(string).toUpperCase()
  }
}

logShout('Am I yelling')
