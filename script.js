let correctAnswer = "Test"

document.querySelector(".guess").addEventListener("click", randomSelector)
let scoreObj = document.querySelector(".score");
let score = 0
scoreObj.textContent = score;

let highScoreObj = document.querySelector(".highScore");
let highScore = 0
highScoreObj.textContent = highScore;

newImg()

function gameTime(){
    alert("GAMER TIME")
    document.querySelector(".body").style.display = "block";
    document.querySelector(".header").style.display = "none";
}

function guess(){
    if(document.querySelector(".guessing").value == correctAnswer){
        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector(".guess").removeEventListener("click", randomSelector)
        for (let i = 1; i <= 64; i++){
            let TileClass = ".tile" + String(i)
            let Tile = document.querySelector(TileClass)
            Tile.style.background = "none";
            document.querySelector(".newImg").style.display = "block"
            document.querySelector(".guess").style.display = "none"
        }
    }

}
function newImg(){
    document.querySelector(".guessing").value = ""
    document.querySelector("body").style.backgroundColor = "white";

    for (let i = 1; i <= 64; i++){
        let TileClass = ".tile" + String(i)
        let Tile = document.querySelector(TileClass)
        Tile.style.background = "grey";}
        document.querySelector(".newImg").style.display = "none"
        document.querySelector(".guess").style.display = "block"

    if(score > highScore){
        highScore = score
        highScoreObj.textContent = score;
    }

    score = 65
    scoreObj.textContent = score;
    let x = parseInt(Math.random() * (9 - 1) + 1)

    switch(x) {
        case 1:
            document.querySelector(".picture").style.backgroundImage = "url('walter-white-walter-crying.gif')";
            correctAnswer = "Walter White"
            break;
        case 2:
            document.querySelector(".picture").style.backgroundImage = "url('barack-obama-12782369-1-402.jpg')";
            correctAnswer = "Barack Obama"
            break;
        case 3:
            document.querySelector(".picture").style.backgroundImage = "url('401a577ead6776c2101d0f78acd90681.gif')";
            correctAnswer = "Morbius"
            break;
        case 3:
            document.querySelector(".picture").style.backgroundImage = "url('rock-one-eyebrow-raised-rock-staring.gif')";
            correctAnswer = "Dwayne Johnson"
            break;
        case 4:
            document.querySelector(".picture").style.backgroundImage = "url('saul-goodman-better-call-saul.gif')";
            correctAnswer = "Saul Goodman"
            break;
        case 5:
            document.querySelector(".picture").style.backgroundImage = "url('BCS_S4_Gustavo_Fring.webp')";
            correctAnswer = "Gustavo Fring"
            break;
        case 6:
            document.querySelector(".picture").style.backgroundImage = "url('AmusingCloseAlpineroadguidetigerbeetle-size_restricted.gif')";
            correctAnswer = "Goro Majima"
            break;
        case 7:
            document.querySelector(".picture").style.backgroundImage = "url('kirby-dies.gif')";
            correctAnswer = "Kirby"
            break;
        case 8:
            document.querySelector(".picture").style.backgroundImage = "url('dawson-crying-animated.gif')";
            correctAnswer = "Dawson Creek"
            break;
        case 9:
            document.querySelector(".picture").style.backgroundImage = "url('dance-moves.gif')";
            correctAnswer = "Dr Heinz Doofenshmirtz"
            break;    
        default:
        // code block
        }
    document.querySelector(".guess").addEventListener("click", randomSelector)
    randomSelector()
}
function randomSelector(){
    let x = parseInt(Math.random() * (65 - 1) + 1)
    let randTileClass = ".tile" + String(x)
    let randTile = document.querySelector(randTileClass)
    if (randTile.style.background === "none"){
        randomSelector()
    }else{
    randTile.style.background = "none";
    score = score - 1;
    scoreObj.textContent = score;
    if (score == 1){
        get_goonched()
    }
    }
    
}

function get_goonched(){
    alert(`You Stupid Idiot the answer was ${correctAnswer} THE WHOLE TIME`)
    let humanName = prompt("Please enter your name");
    if (humanName != null){
        for (let i = 0;i < 999; i++){
            alert(
            `lmao ${humanName} get goonched`
    
            );
        }
    }
}