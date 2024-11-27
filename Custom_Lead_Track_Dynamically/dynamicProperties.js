/* 
In my case my
Referrer URL: 
https://service.technixy.com/apartments-contact/?awesome-apartment 
https://service.technixy.com/apartments-contact/?modern-apartment ....... 

current page url : https://service.technixy.com/apartments-contact/thank-you
*/

function() {
    var url = window.location.href;
    var referrer = document.referrer;

    // Check if both the thank-you page and referrer are present
    if (url.includes("/thank-you") && referrer.includes("/apartments-contact/")) {
        // Extract the apartment name from the referrer
        var apartmentName = referrer.split("?")[1];
        
        // Replace hyphens with underscores to format correctly
        apartmentName = apartmentName.replace(/-/g, "_");

        // Create and return the event name
        return "lead_" + apartmentName;
    }

    // Return null if conditions are not met
    return null;
}
