document.addEventListener('DOMContentLoaded', function() {

	var checkPageButton = document.getElementById('checkPage');
	//On clicking the button -
	
	checkPageButton.addEventListener('click', function() {
	
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "http://localhost/", true);  //Mention your database query file here
		xhr.onreadystatechange = function() {
	
			if (xhr.readyState == 4) {
				varxhrjson = JSON.parse(xhr.responseText);
				/* Replace the below mentioned field id's with that of your form */
				chrome.tabs.executeScript(null,{code:"document.getElementById('ap_customer_name').value = '"+varxhrjson['cname']+"'"});
				chrome.tabs.executeScript(null,{code:"document.getElementById('ap_email').value = '"+varxhrjson['cmail']+"'"});
				chrome.tabs.executeScript(null,{code:"document.getElementById('ap_password').value = '"+varxhrjson['cpassword']+"'"});
				chrome.tabs.executeScript(null,{code:"document.getElementById('ap_password_check').value = '"+varxhrjson['cpassword']+"'"});
		}
	}
	xhr.send();
});
});






/* document.addEventListener('DOMContentLoaded', function() {
	var checkPageButton = document.getElementById('checkPage');
	//On clicking the button -
	checkPageButton.addEventListener('click', function() {
		//using url of curent tab
	  chrome.tabs.getSelected(null, function(tab) {
		d = document;
  
		var f = d.createElement('form');
		f.action = 'http://gtmetrix.com/analyze.html?bm';
		f.method = 'post';
		var i = d.createElement('input');
		i.type = 'hidden';
		i.name = 'url';
		i.value = tab.url;
		f.appendChild(i);
		d.body.appendChild(f);
		f.submit();
	  });
	}, false);
  }, false);
*/