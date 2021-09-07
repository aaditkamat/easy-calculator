function calculate(first, second, operation) {
    if (operation === '+') {
        return first + second;
    }
    else if (operation === '-') {
        return first - second;
    }
    else if (operation === '/') {
        return first / second;
    }
    else if (operation === 'x') {
        return first * second;
    }
    else if (operation === '^') {
        return first ^ second;
    }
    else {
        return first % second;
    }
}

function onclick() {
    console.log('Button clicked');
    const first = parseInt(document.getElementById('first').value);
    const second = parseInt(document.getElementById('second').value);
    const selectedIndex = document.getElementById('operations').selectedIndex;
    const children = document.getElementById('operations').children;
    const selectedElement = children[selectedIndex];
    const operation = selectedElement.value;
    const result = calculate(first, second, operation);
    document.getElementById('result').value = result;
}

window.onload = function() {
    console.log('Document loaded');
    const button = document.querySelector('button');
    button.onclick = onclick;
}