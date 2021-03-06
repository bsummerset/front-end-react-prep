// const { mapFinderOptions } = require("sequelize/types/lib/utils");

// console.log('hello there lovely people');

// function processResponse(response) {
//     return response.json();
// }

/* 
How do you get an "as-you-type" feature in your front-end app?
example: as you type a username into a signup form, it tells you if that username is taken
1. addEventListener
2. fetch()
3. render
*/

async function main() {
    const button = document.querySelector('#new-joke');
    button.addEventListener('click', async (event) => {
        event. preventDefault();
        const joke = await getJoke();
        renderJoke(joke);
    });
}
main();



async function getJoke() {
// Show the joke on the page:
// 1. make the Request using fetch()
    const jokePromise = fetch('https://icanhazdadjoke.com/', {
        headers: {
            Accept: 'application/json'
        }
    });

    const response = await jokePromise;
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
// console.log(jokeData);
// console.log(jokeData.joke);
// 3. render it to the page
    return jokeData.joke;
    }

async function renderJoke(joke) {
    // async because we will await getJoke
    // const joke = await getJoke();

    // create the DOM element
    const p = document.createElement('p');
    // put the joke text into it
    p.textContent = joke;
    // attach it to an existing DOM element
    document.querySelector('root').appendChild(p);
}