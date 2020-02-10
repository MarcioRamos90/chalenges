const isLucky = require('./isLucky')

test('isLucky =>', () => {
    expect(isLucky('1230')).toBe(true)
    expect(isLucky('999999')).toBe(true)
    expect(isLucky('261534')).toBe(false)
    
})