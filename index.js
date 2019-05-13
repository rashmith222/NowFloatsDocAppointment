var bookAppref = document.getElementsByClassName('bookApp');
  bookAppref.onClick = function() {
    if (!bookAppref.classList.contains('focus') && bookAppref.classList.contains('beforeClick')) {
      bookAppref.classList.remove('beforeClick');
      bookAppref.classList.add('focus');
    }
    else {
      bookAppref.classList.remove('focus');
      bookAppref.classList.add('beforeClick');
    }
  }
  $(document).ready(function(){
    document.querySelectorAll('.morning-slots .btn').forEach(element => {
      if (element.textContent !== " - ") {
        element.onmouseover = function() {
          $('.morningIconBtn').css("background-color", "#5CABBE");
        }
        element.onmouseleave = function() {
          $('.morningIconBtn').css("background-color", "white");
        }
      }
    });
    document.querySelectorAll('.evening-slots .btn').forEach(element => {
      if (element.textContent !== " - ") {
        element.onmouseover = function() {
          $('.eveningIconBtn').css("background-color", "#5CABBE");
        }
        element.onmouseleave = function() {
          $('.eveningIconBtn').css("background-color", "white");
        }
      }
    });
    document.querySelectorAll('.night-slots .btn').forEach(element => {
      if (element.textContent !== " - ") {
        element.onmouseover = function() {
          $('.nightIconBtn').css("background-color", "#5CABBE");
        }
        element.onmouseleave = function() {
          $('.nightIconBtn').css("background-color", "white");
        }
      }
    });
    const domain = 'my.api.mockaroo.com';
    const headers = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "*"};
    fetch(`https://my.api.mockaroo.com/paragraphs.json?key=3cc72800`, {headers})
      .then(response => response.json())
      .then(json => {        
        $('.clinicdesc p')[0].innerHTML += json.paragraph + "..." + '<a style="color: blue; font-weight: bold;"> SEE MORE</a>';        
      });
  });