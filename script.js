// 1a
let warmHugs = "Hi, I'm Olaf and I like warm hugs."
// 1b
console.log(warmHugs.toUpperCase())
// 1c
warmHugs = warmHugs.replace("like" , "love")
// console.log(warmHugs)
// 2a
var beenImpaled = "Oh, look at that. I've been impaled."
// 2b
console.log(beenImpaled.slice(18,36))
// 3a
var dotDotDot = "..."
// 3b
var skullBones = `I don't have a skull${dotDotDot}or bones.`
console.log(skullBones)
// 4
console.log(Math.PI)
// 5
var randomNumber = Math.random()
randomNumber *= 3
randomNumber = Math.ceil(randomNumber)
console.log(randomNumber)

// bonus

var letItGo = "Let It Go! "
console.log(letItGo.toUpperCase().repeat(2))
// 7a
let reindeers = "Reindeers are better than people."
// 7b
reindeers = reindeers.replace(/ /g,"_")
console.log(reindeers)
// 8
console.log(Math.sqrt(2))
// 9
var newRandomNumber = Math.floor(Math.random() * (23 - 7 +1 ) + 7)
console.log(newRandomNumber)