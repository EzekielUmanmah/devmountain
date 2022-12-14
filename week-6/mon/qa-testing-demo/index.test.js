const { formatTitle, shortenBio, convertLength } = require('./public/utils');

let testData = {
  id: 1,
  firstName: 'Patten',
  lastName: 'Goforth',
  bio: 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
  datetime: '2022-03-14 8:00:00',
  title: 'nulla ac',
  length: 65,
  floor: 5,
  roomNumber: 3,
};

test("It's a test!", () => {
  expect(2).toEqual(2);
});

describe('formatTitle tests', () => {
  test('formatTitle should return a string', () => {
    const title = formatTitle(testData.title);
    expect(typeof title).toBe('string');
  });

  test('formatTitle should format title correctly', () => {
    const title = formatTitle(testData.title);
    expect(title).toBe('Nulla Ac');
  });
});

describe('shortenBio test', () => {
  const bio = shortenBio(testData.bio);

  test('shortenBio will return a smaller bio string', () =>
    expect(bio.length).toBeLessThan(testData.bio.length));

  // does not check '...' at end => use regex
  test('shortenBio should append ...', () => expect(bio).toContain('...'));
});

describe('convertLength tests', () => {
  let result = convertLength(testData.length);

  test('convertLength should return an array with two elements', () =>
    expect(result).toHaveLength(2));

  test('convertLength can handle numbers less than 60', () => {
    result = convertLength(50);
    expect(result[0]).toBe(0);
  });
});

test('toBe vs toEqual', () => {
  const x = { n: 4 };
  const y = { n: 4 };

  // toBe expects x to literally BE y;
  // expect(x).toBe(y); // will fail as x is not literally y
  // toEqual expects x to have the same value as y
  expect(x).toEqual(y);
});
