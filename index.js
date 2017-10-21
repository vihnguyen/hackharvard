const whatDog = require('what-dog');

whatDog('http://imgur.com/B7a15F5.jpg')
    .then(doggyData => {
        console.log(doggyData);
    })