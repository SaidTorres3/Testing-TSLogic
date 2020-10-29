const { apply } = require("logic")
// apply(['$', 'y', 'c'], { a: [1, 2, 3], x: 'Hello world!', y: { c: 9, l: null } });

const TheObject = {
    key: 'xp',
    'xp': {
        a: [4,2,6,1,6788, {"testing": 9}],
        b: 0.00000000000000000000001,
        c: 94,
        array: [4,2,6,1,6788],
        matriz: [[4,(1,5,6,9),4],[2,2,2],[1,1,1],[1,2,3],[2,1,[2,6,9,[4.5,9.8,62.4],5]],[3,2,3]],
        txt: "Le Peper",
        boolean: true,
        f: 94
    }
}

// BUG
// console.log(apply(["$-", "3", "5", "2", "5", "17", "9"]))
// console.log(apply(["$-", 3, 5, 2, 5, 17, 9]))