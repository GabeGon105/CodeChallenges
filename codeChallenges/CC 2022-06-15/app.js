// Complete the function/method so that it returns the url with anything after the anchor (#) removed.


// Parameter:

// Return:

// Examples:
removeUrlAnchor("www.codewars.com#about") // "www.codewars.com"
removeUrlAnchor("www.codewars.com?page=1") // "www.codewars.com?page=1"
removeUrlAnchor("www.codewars.com#kata") // "www.codewars.com"



function removeUrlAnchor(url){
    //split the url into a string from # and assign to finalURL
    let finalURL = url.split('#');

    //return the first value in finalURL
    return finalURL[0];
}