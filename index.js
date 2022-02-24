function convertScore() {
  var input = document.getElementById('input1').value;
  playAudio();
  var http = new XMLHttpRequest();
  http.open('GET', 'convertScore.php?numberServer=' + input);
  http.setRequestHeader('Content-Type', 'application/json');
  http.onload = () => {
    // console.log(http.responseText);
    document.querySelector('.hasil-satu').innerHTML = http.responseText;
  };
  http.send();
}

function squareNum() {
  var input = document.getElementById('input2').value;
  playAudio();
  var http = new XMLHttpRequest();
  http.open('GET', 'squareNum.php?numberServer=' + input);
  http.setRequestHeader('Content-Type', 'application/json');
  http.onload = () => {
    console.log(http.responseText);
    document.querySelector('.hasil-dua').innerHTML = http.responseText;
  };
  http.send();
}

function pythagorean_theorem() {
  var input1 = document.getElementById('input3').value;
  var input2 = document.getElementById('input4').value;
  playAudio();
  var http = new XMLHttpRequest();
  http.open('GET', 'hypotenuseTriangle.php?numberServer=' + input1, input2);
  // http.open('GET', 'hypotenuseTriangle.php?numberServer2=' + input2);
  http.setRequestHeader('Content-Type', 'application/json');
  http.onload = () => {
    console.log(http.responseText);
    document.querySelector('.hasil-tiga').innerHTML = http.responseText;
  };
  http.send();
}

function playAudio() {
  var audio = document.querySelector('audio');
  audio.play();
}

// function squareNum() {
//   var input = document.getElementById('input2').value;
//   var http = new XMLHttpRequest();
//   http.open('GET', 'index.php');
//   http.setRequestHeader('Content-Type', 'application/json');
//   http.onload = () => {
//     console.log(http.responseText);
//     document.querySelector('.hasil-dua').innerHTML = http.responseText;
//   };
//   http.send(JSON.stringify({ numberServer: input }));
// }

// function squareNum() {
//   var input = parseInt(document.getElementById('input2').value);
//   var http = new XMLHttpRequest();
//   http.open('GET', 'index.php?numberServer =' + input, true);
//   http.send();
//   http.onreadystatechange = function () {
//     document.querySelector('.hasil-dua').innerHTML = http.responseText;
//   };
// }
// function convertScore() {
//   var input = parseInt(document.getElementById('input1').value);
//   if (input == 100) {
//     return (hasil = document.querySelector('.hasil-satu').innerHTML = 'A') + playAudio();
//   } else if (input <= 99 && input >= 90) {
//     return (hasil = document.querySelector('.hasil-satu').innerHTML = 'B') + playAudio();
//   } else if (input <= 89 && input >= 80) {
//     return (hasil = document.querySelector('.hasil-satu').innerHTML = 'C') + playAudio();
//   } else if (input <= 79 && input >= 70) {
//     return (hasil = document.querySelector('.hasil-satu').innerHTML = 'D') + playAudio();
//   } else if (input <= 69 && input >= 1) {
//     return (hasil = document.querySelector('.hasil-satu').innerHTML = 'D') + playAudio();
//   } else if (input == 0) {
//     return (hasil = document.querySelector('.hasil-satu').innerHTML = 'Failed') + playAudio();
//   } else {
//     // return 'E';
//     return 'Input is wrong !';
//   }
//   function playAudio() {
//     var audio = document.querySelector('audio');
//     audio.play();
//   }
// }

// ============================================================================ //

// function squareNum() {
//   var input2 = parseInt(document.getElementById('input2').value);

//   hasil2 = input2 * input2;
//   return (document.querySelector('.hasil-dua').innerHTML = hasil2) + playAudio();

// ============================================================================ //

// function pythagorean_theorem(x, y) {
//   var x = parseInt(document.getElementById('input3').value);
//   var y = parseInt(document.getElementById('input4').value);
//   final = Math.sqrt(x * x + y * y);

//   return (document.querySelector('.hasil-tiga').innerHTML = final) + playAudio();

//   function playAudio() {
//     var audio = document.querySelector('audio');
//     audio.play();
//   }
// }
