const { Builder, Capabilities } = require('selenium-webdriver');

require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

const { addMovie, verifyMovie } = require('../functions/addMovies');

beforeEach(async () => {
  await driver.get(
    'http://127.0.0.1:5500/week-6/tues/automation-demo/movie-list/index.html'
  );
});

afterAll(async () => {
  await driver.quit();
});

describe('movie-list tests', () => {
  test('addMovie() adds a movie', async () => {
    await addMovie(driver, 'Encanto');

    // prevent any actions for 5 seconds
    await driver.sleep(5000);
  });

  test('verifyMovie() ensures movie title renders', async () => {
    await verifyMovie(driver, 'Encanto');
  });
});
