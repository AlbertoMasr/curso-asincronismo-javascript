function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();
console.log(g.next().value); // { value: 1 }
console.log(g.next().value); // { value: 2 }
console.log(g.next().value); // { value: 3 }
console.log(g.next().value); // { value: undefined }

function* iterate(array) {
    for(let value of array) {
        yield value;
    }
}

const it = iterate(["Alberto", "Ana", "Omar", "Judith"])
console.log(it.next().value); // Alberto
console.log(it.next().value); // Ana
console.log(it.next().value); // Omar
console.log(it.next().value); // Judith
console.log(it.next().value); // undefined