// const { mapFinderOptions } = require("sequelize/types/lib/utils");

// console.log('hello there lovely people');

// function processResponse(response) {
//     return response.json();
// }

async function main() {
// Show the joke on the page:
// 1. make the Request using fetch()
fetch('https://icanhazdadjoke.com/', {
    headers: {
        Accept: 'application/json'
    }
});
// .then(response =>  {
//     console.log(response);
//     const pendingData = response.json();

//     console.log(pendingData);
//     return pendingData; //returns to the next .then()
//  })  // convert to JSON
// .then(finishedData => {
//     console.log(finishedData);
//     return finishedData.joke;
// })
// .then(theJoke => {
//     console.log(theJoke);
// })
// .catch(err => console.log(err))
// 2. grab the .joke
const jokeData = await response.json();
console.log(jokeData);
console.log(jokeData.joke);
// 3. render it to the page
}
main();