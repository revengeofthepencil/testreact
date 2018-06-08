import countWords from '../countWords'

it('counts the correct number of words', () => {
    expect( countWords('One two three')).toBe(3);
});

it('counts the correct number of words when there is a non-alpa string', () => {
    expect( countWords(';')).toBe(0);
});

it('counts the correct number of words when there is a non-alpa string and an alpha string', () => {
    expect( countWords('; xxx')).toBe(1);
});