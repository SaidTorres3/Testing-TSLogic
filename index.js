const { apply } = require("logic")
// apply(['$', 'y', 'c'], { a: [1, 2, 3], x: 'Hello world!', y: { c: 9, l: null } });

const TheObject = {
    key: 'xp',
    'xp': {
        a: [4,2,6,1,6788, {"testing": 9}],
        b: 0.00000000000000000000001,
        c: 94,
        array: [4,2,6,1,6788],
        txt: "Le Peper",
        boolean: true,
        f: 94
    }
}

console.log(apply(["$===", ["$", "xp", "f"], 94, ["$", "xp", "c"]], TheObject))