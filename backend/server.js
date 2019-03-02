//const dbRoute = ""
const PriceFinder = require('price-finder');
const priceFinder = new PriceFinder();

// Atoms for Peace : Amok  (from Amazon)
const uri = 'https://www.amazon.com/Apple-MacBook-Retina-2-3GHz-Quad-Core/dp/B071JNRK1V';
priceFinder.findItemPrice(uri, function(err, price) {
    console.log("the price of a MacBook Pro on Amazon--");
    console.log(price); // 8.91
});
console.log("server making a request");
