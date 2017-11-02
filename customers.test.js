const { customers, deg2rad, isWithinDistance, readFileContent } = require('./customers')

test("customers() output", () => {
    let output = "";
    storeLog = input => (output += input);
    console["log"] = jest.fn(storeLog);
    customers()
    expect(output).toBe(
        "4: Ian Kehoe" +
        "5: Nora Dempsey" +
        "6: Theresa Enright" +
        "8: Eoin Ahearn" +
        "11: Richard Finnegan" +
        "12: Christina McArdle" +
        "13: Olive Ahearn" +
        "15: Michael Ahearn" +
        "17: Patricia Cahill" +
        "23: Eoin Gallagher" +
        "24: Rose Enright" +
        "26: Stephen McArdle" +
        "29: Oliver Ahearn" +
        "30: Nick Enright" +
        "31: Alan Behan" +
        "39: Lisa Ahearn"
    );
});

test('deg2rad 0 to 0', () => {
    expect(deg2rad(0)).toEqual(0);
})
test('deg2rad 90 to 1.5707963267948966', () => {
    expect(deg2rad(90)).toEqual(1.5707963267948966);
})
test('deg2rad -90 to -1.5707963267948966', () => {
    expect(deg2rad(-90)).toEqual(-1.5707963267948966);
})
test('deg2rad 360 to 6.283185307179586', () => {
    expect(deg2rad(360)).toEqual(6.283185307179586);
})

test('isWithinDistance (Mother Hospital 5km from Intercom) to true', () => {
    expect(isWithinDistance(53.339428, -6.257664, 53.3496175, -6.2811111, 5)).toEqual(true);
})
test('isWithinDistance (NewStore 100km from Intercom) to false', () => {
    expect(isWithinDistance(53.339428, -6.257664, 52.5207321, 13.3797115, 100)).toEqual(false);
})

test('readFileContent ./customers.json to file content', () => {
    expect(readFileContent('./customers.test.json')).toEqual(
        '{"latitude\": \"52.986375\", \"user_id\": 12, \"name\": \"Christina McArdle\", \"longitude\": \"-6.043701\"}'
        + "\n" +
        '{"latitude\": \"51.92893\", \"user_id\": 1, \"name\": \"Alice Cahill\", \"longitude\": \"-10.27699\"}'
    );
})
test('readFileContent ./404.json to empty string', () => {
    expect(readFileContent('./404.json')).toBeUndefined;
})
