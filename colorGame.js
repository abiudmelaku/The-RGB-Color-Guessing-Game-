var SQR = document.querySelectorAll(".square");
var numSquares = 6;
var colors = colorArray(numSquares)
var colorDisplay = document.getElementById("colorDisplay");
var colorPicked = randomizeColor()
var span = document.getElementById("span")
var h1 = document.querySelector("h1");
colorDisplay.textContent = colorPicked;
var resetButton = document.querySelector("button")
//var easyBtn = document.querySelector("#easyBtn")
//var hardBtn = document.querySelector("#hardBtn")
var levelButtons = document.querySelectorAll(".levelButtons");
console.log(levelButtons)
for(var i = 0 ; i < levelButtons.length ; i++){
    levelButtons[i].addEventListener("click" , function(){
        levelButtons[0].classList.remove("selected");
        levelButtons[1].classList.remove("selected");
//        console.log(this.textContent)
        this.classList.add("selected")
        if(this.textContent === "Easy"){
        numSquares = 3
        reset()
        
    }else{
        numSquares = 6
        reset()
        
    }
    }
                                    )
}
    
function reset(){
    
    colors = colorArray(numSquares)
    colorPicked = randomizeColor()
    colorDisplay.textContent = colorPicked;
    for(var i = 0 ; i < SQR.length ; i++){
            if(colors[i]){
                SQR[i].style.display = "block"
                SQR[i].style.background = colors[i]
                
            }else{
                SQR[i].style.display = "none"
            }
        }
    h1.style.background = "steelblue"
    span.textContent = ""
    
}
//easyBtn.addEventListener("click" , function(){
//    this.classList.add("selected");
//    hardBtn.classList.remove("selected")
//    //squares to be 3
//    //colors to generate only 3 
//    numSquares = 3;
//    
//    colors = colorArray(numSquares)
//    colorPicked = randomizeColor()
//    colorDisplay.textContent = colorPicked;
//    for(var i = 0 ; i< SQR.length;i++){
//        if(colors[i]){
//            SQR[i].style.background = colors[i]
//        }else{
//            SQR[i].style.display = "none"
//        }
//    }
//     span.textContent = ""
//   
//    
//});
//hardBtn.addEventListener("click" , function(){
//    easyBtn.classList.remove("selected")
//    this.classList.add("selected")
//    numSquares = 6
//    colors = colorArray(numSquares)
//    colorPicked = randomizeColor()
//    colorDisplay.textContent = colorPicked;
//    for (var i = 0 ; i<SQR.length ; i++){
//        SQR[i].style.display = "block"
//        SQR[i].style.background = colors[i]
//    }
//    span.textContent = ""
//    
//    
//    
//})
resetButton.addEventListener("click" , function(){
    reset()
    this.textContent = "New Colors"
    
    
    //reset all the 6 colors to random
    
//     colors = colorArray(numSquares)
//     colorPicked = randomizeColor()
//    
//    colorDisplay.textContent = colorPicked;
//    for(var i = 0 ; i < SQR.length ; i++){
//
//        SQR[i].style.background = colors[i]
//
//        }
//    this.textContent = "New Colors"
//    
//    h1.style.background = "#232323"
//    span.textContent = ""

});
    
    
    
    

for(var i = 0 ; i < SQR.length;i++){
    
    
    SQR[i].style.background = colors[i];
    
    SQR[i].addEventListener("click" , function(){
        
        var clickedColor = this.style.background ;
        console.log(clickedColor , colorPicked)
       
        if(clickedColor === colorPicked ){
//            sameColors(clickedColor)
//            changeColors(clickedColor)
            
            sameColor(clickedColor)
            span.textContent = "CORRECT"
            resetButton.textContent = "PLAYAGAIN?"
            
            
            
            
        }else{
            this.style.background = "#232323"
            span.textContent = "wrong!!!"
            
        }})}
function sameColor(color){
    
    for(var i = 0; i < SQR.length; i++){
        SQR[i].style.background = color
        }
    h1.style.background = color
    }                      
function randomizeColor(){
    random = Math.floor(Math.random() * colors.length )
    return colors[random]
}

function randomizeColors(){
    r = Math.floor(Math.random() * 256)
    g = Math.floor(Math.random() * 256)
    b = Math.floor(Math.random() * 256)
    RGB = "rgb(" + r + ", " + g +", " + b +")"
    return RGB
}
function colorArray(num){
    arr = []
    for(var i = 0; i< num ; i++){
        arr.push(randomizeColors())
    }
    return arr
}
