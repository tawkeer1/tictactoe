console.log("tic tac toe game")
let music = new Audio("music.mp3")
let turnsound = new Audio("click.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}
// music.play()
const winlogic = () => {
    let boxtext = document.getElementsByClassName("boxtext")
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            let woncolor = document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won"
            document.querySelector('.info').style.color = "green"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
            gameover.play()
        }
    })
}
//game logic
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn
            turn = changeTurn()
            turnsound.play()
            winlogic()
            if (!isgameover) { document.getElementsByClassName("info")[0].innerText = "Turn for " + turn }
        }
    })
})
let reset =document.querySelector('.reset')
reset.addEventListener('click', ()=> {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    })
    turn = "X";
    isgameover=false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
    document.querySelector('.info').style.color = "black"
})