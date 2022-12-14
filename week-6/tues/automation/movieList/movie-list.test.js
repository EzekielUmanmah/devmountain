const { Builder, Capabilities, By } = require('selenium-webdriver');

require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
  // fetch site before each test
  await driver.get(
    'http://127.0.0.1:5500/week-6/tues/automation/movieList/index.html'
  );

  // add movie before each test
  await driver
    .findElement(By.xpath('//input[@placeholder="Add Movie"]'))
    .sendKeys('Titanic');

  await driver.findElement(By.xpath('//button[text()="Add"]')).click();
});

afterAll(async () => {
  await driver.quit();
});

describe('test movie-list functionality', () => {
  test('clicking on movie title strikesthrough title', async () => {
    // click on the movie title
    await driver.findElement(By.xpath('//li/span')).click();

    const aside = await driver.findElement(By.id('message')).getText();

    expect(aside).toBe('Titanic watched!');
  });

  test('deleting a movie should remove title', async () => {
    // find the rendered movie title
    let title = await driver.findElement(By.xpath('//li/span')).getText();

    // delete the movie
    await driver.findElement(By.xpath('//li/button[text()="x"]')).click();

    // query again for the movie title which should no longer exist
    // prettier-ignore
    title = await driver.findElements(By.xpath('//li/span')).then((found) => !!found.length);
    // The line above uses the findElements method to find elements by a given attribute. As the name of the
    // function suggests, it returns an array of the elements found. If no elements are found, the array
    // will be empty. In other words, its length will be equal to zero. The code above uses the bang
    // operator (!!) to convert the array’s length to boolean.

    expect(title).toBeFalsy();
  });

  test('deleting a movie should render a deleted msg', async () => {
    // delete the movie
    await driver.findElement(By.xpath('//button[text()="x"]')).click();

    // a notification for movie deleted should appear
    const msg = await driver.findElement(By.id('message')).getText();
    expect(msg).toEqual('Titanic deleted!');
  });
});
