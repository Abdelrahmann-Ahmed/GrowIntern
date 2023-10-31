let screen = document.querySelector('input')


function display(x) {
    screen.value +=x
    return x
}

function clearScreen() {
    screen.value = ''
}

function solution() {
    screen.value = eval(screen.value)
}

function del() {
    screen.value = screen.value.slice(0, -1);
}



