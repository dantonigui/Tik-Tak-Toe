document.addEventListener('DOMContentLoaded', ()=>{
    let squares = document.querySelectorAll(".square")

    squares.forEach((square)=>{
        square.addEventListener( 'click', handleClick);
    })
})





function handleClick(event) {

    let square = event.target;
    let position = square.id

    if (handleMove(position)){

        setTimeout(()=>{
            alert("O Jogo Acabou - O Vencedor foi o Jogador " + playerTime)
        }, 10)

    };
    updateSquares();
}


function updateSquares(){
    let squares = document.querySelectorAll(".square")

    squares.forEach((square)=>{
        let position = square.id
        let symbol = board[position]

        if (symbol != ''){
            square.innerHTML = `<div class=${symbol}></div>`
        }

    })
}