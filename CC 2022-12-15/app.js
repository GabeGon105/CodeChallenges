// We need to write some code to return the original price of a product, the return type must be of type decimal and the number must be rounded to two decimal places.

// We will be given the sale price (discounted price), and the sale percentage, our job is to figure out the original price.



// Parameters: two integers representing the discounted price and the sale percentage, always positive numbers

// Return: a decimal value representing the orignal price before the discount rounded to 2 decimal spaces

// Examples:
discoverOriginalPrice(75,25) // 100
discoverOriginalPrice(25,75) // 100
discoverOriginalPrice(75.75,25) // 101



const discoverOriginalPrice = ( salePrice, salePercent ) => {
    // divide the salePrice by 100 - salePercent divided by 100
    const price = salePrice / ( ( 100 - salePercent ) / 100 );

    // multiply price by 100, round to the nearest whole number, divide by 100, then return
    return Math.round( price * 100 ) / 100;
}