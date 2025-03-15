let counter = 0 

function clickCookie() {
  counter++;
  document.getElementById('conta').textContent = 'Counter: ' + counter;
 
}
function checkVariable() {
  if (counter === 5) {
      let image = document.getElementById('myImage');
      image.style.display = 'block';

      setTimeout(() => {
          image.style.display = 'none';
      }, 5000); // 5 секунд
  }
}



