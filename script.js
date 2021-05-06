var btnList = document.querySelectorAll("input[type = 'radio']");
var textList = document.querySelectorAll('textarea');

for (var btn of btnList) {
    var val = parseInt(btn.value);
    if((val%6==0)||(val%3==0&&val>180))
    {
        btn.checked = "true";
    }
  }
for (var text of textList) {
    //console.log(elem); // "test", "passed"
    //console.log(elem.type);
    text.value="-";
    //  document.getElementById(elem.id).nodeValue = "-";
    //console.log(elem);
  }
