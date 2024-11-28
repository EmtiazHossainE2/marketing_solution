/*

Steps to Create Client User Agent
Open GTM and Add a New Variable

Variable Type: Custom JavaScript
Variable Name: Custom JS - Client User Agent
Script for the Variable Paste the following code into the variable's editor:

*/

function() {
    var browserName = {{dlv Browser Name}} || '';
    var browserVersion = {{dlv Browser Version}} || '';
    return browserName + '/' + browserVersion;
}
