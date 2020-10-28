const { apply } = require("logic")

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

// Sección - Operador Obtener ($)

test('Acceder a una propiedad de un objeto.', () => {
    expect(apply(['$', 'xp', 'c'], TheObject)).toBe(94) //Acceder al valor de una propiedad de un objeto
    expect(apply(['$', 'xp', 'b'], TheObject)).toBe(0.00000000000000000000001) //Acceder al valor de una propiedad de un objeto
    expect(apply(['$', ['$', 'key'], 'b'], TheObject)).toBe(0.00000000000000000000001) //Acceder al valor de una propiedad de un objeto
})

test('Acceder a un indice de un array.', () => {
    expect(apply(['$', 'xp', 'a', '4'], TheObject )).toBe(6788) //Acceder a un indice de un array
    expect(apply(['$', 'xp', 'a', '5'], TheObject )).toEqual({ testing: 9 }) // Acceder a un objeto en un indice  de un array
})

// Fin de la sección - Operador Obtener ($)

test('Operador mayor que.', () => {
    expect(apply(['$>', 2, 9], TheObject )).toBe(false) //Acceder a un indice de un array
    expect(apply(['$>', 12, 9], TheObject )).toBe(true) //Acceder a un indice de un array
    expect(apply(['$>', ['$', 'xp', 'c'], 9], TheObject )).toBe(true) //Acceder a un indice de un array
})

test('Operador mayor e igual que.', () => {
    expect(apply(["$>=", 9, 9])).toBe(true)
    expect(apply(["$>=", 9, 5])).toBe(true)
    expect(apply(["$>=", 5, 10])).toBe(false)
    expect(apply(["$>=", ['$', 'xp', 'b'], ['$', 'xp', 'c']], TheObject)).toBe(false)
    expect(apply(["$>=", ['$', 'xp', 'c'], ['$', 'xp', 'b']], TheObject)).toBe(true)
})

test('Operador menor que.', () => {
    expect(apply(['$>', 2, 9], TheObject )).toBe(false) //Acceder a un indice de un array
    expect(apply(['$>', 12, 9], TheObject )).toBe(true) //Acceder a un indice de un array
    expect(apply(['$>', ['$', 'xp', 'c'], 9], TheObject )).toBe(true) //Acceder a un indice de un array
})
    
test('Operador menor e igual que.', () => {
    expect(apply(["$<=", 9, 9])).toBe(true)
    expect(apply(["$<=", 9, 5])).toBe(false)
    expect(apply(["$<=", 5, 10])).toBe(true)
    expect(apply(["$<=", ['$', 'xp', 'b'], ['$', 'xp', 'c']], TheObject)).toBe(true)
    expect(apply(["$<=", ['$', 'xp', 'c'], ['$', 'xp', 'b']], TheObject)).toBe(false)
})

test('Operador equivalencia.', () => {
    expect(apply(["$==", 10, 10])).toBe(true)
    expect(apply(["$==", 9, 10])).toBe(false)
    expect(apply(["$==", 20.577, 10])).toBe(false)
    expect(apply(["$==", "8", "8"])).toBe(true)
    expect(apply(["$==", "8", "7"])).toBe(false)
    expect(apply(["$==", "Pepito", "Camotes"])).toBe(false)
    expect(apply(["$==", "El pepe", "El pepe"])).toBe(true)
    expect(apply(["$==", 1, "1"])).toBe(true)
    expect(apply(["$==", ["$", "xp", "f"], 94], TheObject)).toBe(true)
    expect(apply(["$==", ["$", "xp", "f"], 94.5], TheObject)).toBe(false)
    expect(apply(["$==", ["$", "xp", "f"], ["$", "xp", "c"]], TheObject)).toBe(true)
})

test('Operador de negación de equivalencia.', () => {
    expect(apply(["$!=", 10, 10])).toBe(false)
    expect(apply(["$!=", 11, 12])).toBe(true)
    expect(apply(["$!=", -10, 10])).toBe(true)
    expect(apply(["$!=", "Hola", 10])).toBe(true)
    expect(apply(["$!=", "El pepe", "El pepe"])).toBe(false)
    expect(apply(["$!=", "Pepito", "Camotes"])).toBe(true)
    expect(apply(["$!=", ["$", "xp", "f"], 94], TheObject)).toBe(false)
    expect(apply(["$!=", ["$", "xp", "f"], 94.5], TheObject)).toBe(true)
    expect(apply(["$!=", ["$", "xp", "f"], ["$", "xp", "c"]], TheObject)).toBe(false)
})

test('Operador equivalencia estricta.', () => {
    expect(apply(["$===", 10, 10])).toBe(true)
    expect(apply(["$===", "10", 10])).toBe(false)
    expect(apply(["$===", 10.00001, 10])).toBe(false)
    expect(apply(["$===", (5, 7, 5), (5, 7, 5)])).toBe(true)
    expect(apply(["$===", ["$", "xp", "f"], 94], TheObject)).toBe(true)
    expect(apply(["$===", ["$", "xp", "f"], 94.5], TheObject)).toBe(false)
    expect(apply(["$===", ["$", "xp", "f"], ["$", "xp", "c"]], TheObject)).toBe(true)
    
})

test('Operador de negación de equivalecia estricta.', () => {
    expect(apply(["$!==", 10, 10])).toBe(false)
    expect(apply(["$!==", "10", 10])).toBe(true)
    expect(apply(["$!==", 10.00001, 10])).toBe(true)
    expect(apply(["$!==", (5, 7, 5), (5, 7, 5)])).toBe(false)
    expect(apply(["$!==", ["$", "xp", "f"], 94], TheObject)).toBe(false)
    expect(apply(["$!==", ["$", "xp", "f"], 94.5], TheObject)).toBe(true)
    expect(apply(["$!==", ["$", "xp", "f"], ["$", "xp", "c"]], TheObject)).toBe(false)
})

test('Operador de negación.', () => {
    expect(apply(["$!", true])).toBe(false)
    expect(apply(["$!", ""])).toBe(true)
    expect(apply(["$!", ["$", "xp", "boolean"]], TheObject)).toBe(false)
})

test('Operador de negación de negación.', () => {
    expect(apply(["$!!", true])).toBe(true)
    expect(apply(["$!!", ""])).toBe(false)
    expect(apply(["$!!", ["$", "xp", "boolean"]], TheObject)).toBe(true)
})

test('Operador and.', () => {
    expect(apply(["$&&", 3, 5])).toBe(5)
    expect(apply(["$&&", 3, 5])).toBe(5)
    expect(apply(["$&&", 1, "", 4, 7, false, 7, 10])).toEqual("")
})

test('Operador or.', () => {
    expect(apply(["$||", 5 ,true, 7, "", 10, false])).toBe(5)
    expect(apply(["$||", false, "", "", false, ""])).toEqual("")
})

test('Mapeo de arrays.', () => {
    expect(apply(["$map", [1,2,3], ["$*", ["$$"], ["$$"]] ])).toEqual([1, 4, 9])
    expect(apply(["$map", ["$", "xp", "array"], ["$*", ["$$"], ["$$"]]], TheObject)).toEqual([ 16, 4, 36, 1, 46076944 ])
})

test('Aplicador de métodos.', () => {
    expect(apply(['$method', ['$', 'key'], 'padStart', 10, '.'], TheObject)).toEqual("........xp")
})