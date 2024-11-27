
// hash email 

function() {
    var dlv_value = {{dlv WpForm Email}} || '';  // dlv WpForm Email => will replace
    var hasher = {{Custom JS - SHA256 Hasher}};
    return hasher(dlv_value.trim().toLowerCase());
}

// Repeat this for all required fields (First Name, Last Name, Phone, City, Country, Post).