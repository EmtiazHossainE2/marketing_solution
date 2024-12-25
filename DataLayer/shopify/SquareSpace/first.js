// Paste the code in below section

// Order Confirmation Page:


let ssRawTransaction;

let transaction_id,
  total_value,
  discount,
  subtotal_value,
  shipping,
  order_currency,
  billingDetails,
  customerEmailAddress,
  order_items = [];
let ssAllLoadedScripts = document.querySelectorAll("script");
for (var ssindex = 0; ssindex < ssAllLoadedScripts.length; ssindex++) {
  let ssCommerceScriptHTML = ssAllLoadedScripts[ssindex].innerHTML.match(
    /checkoutConfirmed\((.+?)\);/
  );
  if (ssCommerceScriptHTML) {
    ssRawTransaction = JSON.parse(ssCommerceScriptHTML[1]);

    transaction_id = ssRawTransaction[0].id;
    total_value = ssRawTransaction[0].grandTotal.decimalValue;
    order_currency = ssRawTransaction[0].grandTotal.currencyCode;
    subtotal_value = ssRawTransaction[0].subtotal.decimalValue;
    shipping = ssRawTransaction[0].shippingTotal.decimalValue;
    discount = parseFloat(subtotal_value) - parseFloat(total_value);
    billingDetails = {
      city: ssRawTransaction[0].billingDetails.customer.address.city,
      region: ssRawTransaction[0].billingDetails.customer.address.region,
      country: ssRawTransaction[0].billingDetails.customer.address.country,
      customerEmailAddress: "{customerEmailAddress}",
    };

    var dataItemArray = ssRawTransaction[0].items;
    dataItemArray.forEach((row, key) => {
      var totalItemValue =
        parseFloat(row.quantity) * parseFloat(row.unitPrice.decimalValue);
      order_items.push({
        item_name: row.productName,
        quantity: row.quantity,
        sku_id: row.sku,
        price: row.unitPrice.decimalValue,
        total_amount: totalItemValue,
      });
    });

    let eventDet = {
      transaction_id: transaction_id,
      currency: order_currency,
      value: total_value,
      subtotal_value: subtotal_value,
      shipping_cost: shipping,
      discount: discount,
      billingDetails: billingDetails,
      items: order_items,
    };
    if (getCookie("orderCompleteId") !== transaction_id) {
      setCookie("orderCompleteId", transaction_id, 30 * 24 * 60 * 60);
      gtmCall("purchase", eventDet);
    }
  }
}

function gtmCall(eventName, eventDet) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ecommerce: eventDet,
  });
}
