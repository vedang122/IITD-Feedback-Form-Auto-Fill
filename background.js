chrome.browserAction.onClicked.addListener(function (tab) {
  //When user clicks the icon 
  chrome.tabs.executeScript(
	tab.id,
	{
	  file: "script.js",
	},
	function () {
	  // will be called after completion
	  console.log("Form filled .. ");
	});
  
  });