// Inconsistency


console.log(navigator)

// check user network

console.log(navigator.connection.effectiveType);

console.log(navigator.userAgent);

navigator.geolocation.getCurrentPosition(function(data) {
    console.log(data)
});