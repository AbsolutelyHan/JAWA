let s = '';
for (let i = 1; i <= 5; i++) {
    for (let j = 5; j > i; j--) {
        s += ' ';
    }
    for (let k = 1; k <= (i * 2) - 1; k++) {
        s += '*';
    }
    s += '\n';
}
for (let i = 4; i >= 1; i--) {
    for (let j = 5; j > i; j--) {
        s += ' ';
    }
    for (let k = 1; k <= (i * 2) - 1; k++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);