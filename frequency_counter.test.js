const sameFrequency = require('./frequency_counter');

test('Testing Same Frequency Function', () => {
    expect(sameFrequency(22, 222)).toBe(false)
    expect(sameFrequency(223, 232)).toBe(true)
    expect(sameFrequency(211, 233)).toBe(false)
    expect(sameFrequency(12345, 54321)).toBe(true)
    }
)