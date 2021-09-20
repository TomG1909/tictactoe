let fields = [];
let gameOver = false;
let currentShape = 'cross';

function fillShape(id) {
    if (!fields[id] && !gameOver) {
        fields[id] = currentShape;
        if (currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player-1').classList.remove('inactive');
            document.getElementById('player-2').classList.add('inactive');
        } else {
            currentShape = 'cross';
            document.getElementById('player-2').classList.remove('inactive');
            document.getElementById('player-1').classList.add('inactive');
        }
        console.log(fields);
        draw();
        checkForWin();
    }
}

function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {

            document.getElementById('circle_' + i).classList.remove('d-none');
        }

    }

    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'cross') {

            document.getElementById('cross_' + i).classList.remove('d-none');
        }

    }

}


function checkForWin() {
    let winner;

    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];

        document.getElementById('line-1').style.transform = 'scaleX(1.2)';
    }

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];

        document.getElementById('line-2').style.transform = 'scaleX(1.2)';
    }

    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];

        document.getElementById('line-3').style.transform = 'scaleX(1.2)';
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];

        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1.2)';
    }

    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];

        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1.2)';
    }



    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];

        document.getElementById('line-6').style.transform = 'rotate(90deg) scaleX(1.0)';
    }


    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];

        document.getElementById('line-7').style.transform = 'rotate(45deg) scaleX(1.0)'
    }

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];

        document.getElementById('line-8').style.transform = 'rotate(-45deg) scaleX(1.0)'
    }
    if (winner) {
        console.log('Gewonnen!!', winner);
        gameOver = true;
    }

}