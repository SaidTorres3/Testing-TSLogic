const { apply } = require("logic")
// apply(['$', 'y', 'c'], { a: [1, 2, 3], x: 'Hello world!', y: { c: 9, l: null } });

const TheObject = {
    key: 'xp',
    'xp': {
        c: 94,
        a: [4, 2, 6, 1, 6788],
        // b: 0.00000000000000000000001
        b: 67
    }
}

console.log(apply(['$method', ['$', 'key'], 'padStart', 10, '.'], TheObject))
