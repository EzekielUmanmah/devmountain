const { By } = require('selenium-webdriver');

const addMovie = async (driver, movie) => {
  // select input element and enter movie name
  await driver
    .findElement(By.xpath('//input[@placeholder="Add Movie"]'))
    .sendKeys(movie);

  // select button and click it
  await driver.findElement(By.xpath('//button[text()="Add"]')).click();

  // movie title is rendered inside an <li> => actually rendered in <span> => possible to directly select span?
  const findMovie = await driver.findElement(By.xpath('//li'));

  const displayed = findMovie.isDisplayed();

  expect(displayed).toBeTruthy();
};

const verifyMovie = async (driver, movie) => {
  await driver
    .findElement(By.xpath('//input[@placeholder="Add Movie"]'))
    .sendKeys(movie);

  await driver.findElement(By.xpath('//button[text()="Add"]')).click();

  const movieText = await driver.findElement(By.xpath('//li/span')).getText();

  expect(movieText).toBe(movie);
};

module.exports = {
  addMovie,
  verifyMovie,
};
