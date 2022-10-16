// Connect HTML to JS
var locationPineapple = Math.floor(Math.random()*10)
var locationQuickSand = Math.floor(Math.random()*10)
if(locationPineapple === locationQuickSand){
  locationPineapple = Math.floor(Math.random()*10)
}



// function a
//  takes an id of an apple on the HTML page from an onclick
// and changes the HTML element that the ID represents to an emoji

const pineappleFinder = (location) => {
  if(location === locationQuickSand){
    document.getElementById(location).innerHTML = "☠️"
     document.getElementById("outcome").innerHTML = "☠️ You Lose"
     document.getElementById("gameboard").innerHTML = ""
  } else if(location === locationPineapple){
    document.getElementById(location).innerHTML = "🍍"
     document.getElementById("outcome").innerHTML = "🍍 You Win!"
     document.getElementById("gameboard").innerHTML = ""
  } else if (locationPineapple !== location && locationQuickSand !== location) {
    document.getElementById(location).innerHTML = "😀"
  }
}
