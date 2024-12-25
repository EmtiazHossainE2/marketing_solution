// function() {
//     const hasher = {{Custom JS - SHA256 Hasher}};
//     const dlv_value = {{dlv WpForm Email}};
//     return hasher ? hasher(dlv_value) : '';
// }

// // function() {
// //     var dlv_value = {{dlv WpForm Email}} || '';
// //     var hasher = {{Custom JS - SHA256 Hasher}};
// //     return hasher(dlv_value.trim().toLowerCase());
// // }

// const ecommerce = {
//   items: [
//     {
//       id: "1",
//       name: "Shirt",
//       price: 29,
//     },
//     {
//       id: "1",
//       name: "Pant",
//       price: 19,
//     },
//   ],
// };

// console.log(ecommerce.items[0] + "");  // kono ek karone string asteche like this , ei jonne [object Object]

(function () {
  var hasClickedChat = false;
  window.addEventListener("message", function (event) {
    if (!hasClickedChat && event.origin.includes("facebook")) {
      if (event.data.includes("chatState")) {
        hasClickedChat = true;
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({ event: "click_fb_chat" });
      }
    }
  });
})();


(function () {
  var hasChatOpened = false;
    var chatButton = document.querySelector("#startChat");
    if (chatButton) {
        chatButton.addEventListener('click', function () {
            if (!hasChatOpened) {
                hasChatOpened = false; 
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    event: 'click_fb_chat',
                    chatStatus: 'opened' 
                });
            }
        });
    } else {
        console.warn("error");
    }
})();

(function () {
  var hasClickedChat = false;
  window.addEventListener("message", function (event) {
    if (!hasClickedChat && event.origin.includes("facebook")) {
      if (event.data.includes("chatState")) {
        hasClickedChat = true;
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({ event: "click_fb_chat" });
      }
    }
  });
})();





