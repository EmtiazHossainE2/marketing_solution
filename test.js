function() {
    const hasher = {{Custom JS - SHA256 Hasher}}; 
    const dlv_value = {{dlv WpForm Email}}; 
    return hasher ? hasher(dlv_value) : '';
}

function() {
    var dlv_value = {{dlv WpForm Email}} || '';
    var hasher = {{Custom JS - SHA256 Hasher}};
    return hasher(dlv_value.trim().toLowerCase());
}
