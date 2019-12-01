var result = [];
var firstEnter = true;

function decoding(e) {
  var startCode = document.getElementById('code').value;
  var arr = startCode.split('');
  if (firstEnter) { //чекать первое и последующее вхождение
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) {
        arr.splice(i, 2);
        i = 0;
      }
    }
    firstEnter = false;
  } else {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) {
        arr.splice(i, 2);
      }
    }

  }
  var res = arr.join('');
  document.getElementById('result').innerHTML = res;
}

document.getElementById('btn').addEventListener('click', decoding);