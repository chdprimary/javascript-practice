// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

// 1.
const whereAmI = function (lat, lon) {
  // 2.
  fetch(`https://geocode.xyz/${lat},${lon}?geoit=json`)
    .then(res => {
      // 5.
      if (!res.ok) throw new Error(`${res.status}`);
      return res.json();
    })
    .then(data => {
      // 3.
      const { city, country } = data;
      // console.log(`You are in ${city}, ${country}`);

      // Part 2
      // 6.
      fetch(`https://restcountries.com/v2/name/${country}`)
        .then(res => {
          if (!res.ok) throw new Error(`${res.status}`);
          return res.json();
        })
        .then(data => {
          const obj = data.at(-1);
          renderCountry(obj);
        });
    })
    // 4.
    .catch(err => console.error(`Try again. Fetch failed. ${err}`));
};

// 7.
const renderCountry = function (obj) {
  const container = document.querySelector('.countries');
  const submitButton = document.querySelector('.btn-country');
  const html = `
    <article class="country">
        <img class="country__img" src="${obj.flag}" />
        <div class="country__data">
        <h3 class="country__name">${obj.name}</h3>
        <h4 class="country__region">${obj.region}</h4>
        <p class="country__row"><span>👫</span>${Math.round(obj.population / 1_000_000)} million people</p>
        <p class="country__row"><span>🗣️</span>${obj.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${obj.currencies[0].name}</p>
        </div>
    </article>
    `;
  container.insertAdjacentHTML('beforeend', html);
  container.style.opacity = '1.0';
  submitButton.style.visibility = 'hidden';
};

const submitButton = document.querySelector('.btn-country');
submitButton.addEventListener('click', () => {
  const coords = [
    ['52.508', '13.381'],
    ['19.037', '72.873'],
    ['-33.933', '18.474'],
  ];
  coords.forEach(([lat, lon]) => whereAmI(lat, lon));
});
