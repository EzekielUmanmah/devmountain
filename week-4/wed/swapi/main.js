const btn = document.querySelector('button');
const residents = document.getElementById('residents');

const container = document.getElementById('residents');

btn.addEventListener('click', () => {
  axios
    .get('https://swapi.dev/api/planets/2/')
    .then((data) => {
      const residents = data.data.residents;

      residents.map((residentURL) => {
        axios
          .get(residentURL)
          .then((res) => {
            const name = document.createElement('h2');
            name.textContent = res.data.name;
            container.appendChild(name);
          })
          .catch((err) => console.log(err));
      });
    })
    .catch((err) => console.log(err));
});
