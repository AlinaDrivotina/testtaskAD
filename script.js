var firstEnter = true;

function decoding(e) {
  var res = '';
  if (firstEnter) {
    var startCode = document.getElementById('code').value;
    var arr = startCode.split('');
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) {
        arr.splice(i, 2);
        i = 0;
      }
    }
    firstEnter = false;
  } else {
    var startCode = document.getElementById('code').value;
    var arr = startCode.split('');
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) {
        arr.splice(i, 2);
        i = 0;
      }
    }
  }
  res = arr.join('');
  document.getElementById('result').innerHTML = res;
}

document.getElementById('btn').addEventListener('click', decoding);
