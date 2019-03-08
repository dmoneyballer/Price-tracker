//const dbRoute = ""
const PriceFinder = require('price-finder');
const priceFinder = new PriceFinder();

// Atoms for Peace : Amok  (from Amazon)
let hostname = "https://www.amazon.com/";
let products = {
    "MacBookPro": "Apple-MacBook-Retina-2-3GHz-Quad-Core/dp/B071JNRK1V",
    "MacBook Air": "Apple-MacBook-13-inch-display-dual-core/dp/B07K1WRY8H",
    "2018 Newest Lenovo Business Flagship Laptop PC 15.6": "Lenovo-Anti-Glare-Touchscreen-Quad-Core-Processor/dp/B07CVQX4N9",
    "Razer Blade Stealth, Graphics Model": "Razer-Blade-Stealth-Gaming-Laptop/dp/B07L39PH24"

  }
;
let uri = hostname;
console.log(`price of items will appear in order that they are listed`);
for(var prop in products) {
    if(products.hasOwnProperty(prop))
    uri = uri + products[prop];
    console.log(`the price of a ${prop} on Amazon--`);
    priceFinder.findItemPrice(uri, function(err, price) {
        console.log(`$ ${price}`);
      })
  }
console.log("server making a request");
