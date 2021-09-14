let fields = [];

let currentShape = 'cross';

function fillShape(id) {
    fields[id] = currentShape;
    if (currentShape == 'cross') {
        currentShape = 'circle';
    } else {
        currentShape = 'cross';
    }
    console.log(fields);

    draw();
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