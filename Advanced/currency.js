{/* <script>
  (function () {
    // Helper function to find `ecommerce` object in dataLayer
    function getEcommerceData() {
      for (var i = 0; i < window.dataLayer.length; i++) {
        if (window.dataLayer[i].ecommerce) {
          return window.dataLayer[i].ecommerce;
        }
      }
      return {};
    }

    // Polling logic to wait for dataLayer
    var waitForEcommerceData = function (callback, timeout) {
      timeout = timeout || 5000; // Default timeout is 5 seconds
      var interval = 100; // Check every 100ms
      var elapsed = 0;

      var checkDataLayer = function () {
        var ecommerce = getEcommerceData();
        if (ecommerce.currency && ecommerce.value) {
          callback(null, ecommerce);
        } else if (elapsed >= timeout) {
          callback("Timed out waiting for dataLayer to populate.");
        } else {
          elapsed += interval;
          setTimeout(checkDataLayer, interval);
        }
      };

      checkDataLayer();
    };

    // AJAX function to fetch conversion rates
    var fetchConversionRates = function (callback) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json");
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            callback(null, response);
          } else {
            callback("Failed to fetch conversion rates.");
          }
        }
      };
      xhr.send();
    };
    console.log(fetchConversionRates , 'fetchConversionRates')

    // Main logic
    waitForEcommerceData(function (err, ecommerce) {
      if (err) {
        console.error(err);
        return;
      }

      fetchConversionRates(function (err, rates) {
        if (err) {
          console.error(err);
          return;
        }

        var currency = ecommerce.currency.toLowerCase();
        var value = ecommerce.value;
        var rate = rates[currency];

        if (rate) {
          var convertedValue = (value / rate).toFixed(2);

          // Push updated ecommerce data to dataLayer
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            ecommerce: {
              currency: "EUR",
              value: parseFloat(convertedValue),
            }
          });

          console.log("Conversion successful:", { currency: "EUR", value: convertedValue });
        } else {
          console.error("Conversion rate not found for currency:", currency);
        }
      });
    });
  })();
</script> */}

<script>
  (
  function() {
  // Get the ecommerce data from the dataLayer
  var ecommerce = window.dataLayer || [];
  var originalCurrency = ecommerce.currency || 'EUR'; 
  var originalValue = ecommerce.value || 0;

  console.log(ecommerce , 'ecommerce')
  console.log(window.dataLayer , 'window.dataLayer')
  console.log(originalValue , 'originalValue' , originalCurrency)

  // Prepare the result object with default values
  var result = {
    ecommerce: {
      currency: 'EUR',
      value: originalValue
    }
  };

  // API URL for Exchange Rate (convert from EUR to the original currency)
  var apiUrl = 'https://api.exchangerate-api.com/v4/latest/EUR';

  // Make an asynchronous API request to get the conversion rate
  var xhr = new XMLHttpRequest();
  xhr.open("GET", apiUrl, true); // Asynchronous call
  xhr.onload = function() {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      
      // Check if the currency is found in the API response
      // if (response.rates[originalCurrency]) {
      //   var conversionRate = response.rates[originalCurrency];
      //   var convertedValue = originalValue / conversionRate;
        
      //   // Update the result object with the converted value
      //   result.ecommerce.value = convertedValue.toFixed(2); // Limiting to 2 decimal places
      // }
      
      // Push the updated data to the dataLayer
      window.dataLayer.push(result);
    }
  };
  xhr.send();
}



())
</script>

