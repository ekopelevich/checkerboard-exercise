var body = document.getElementsByTagName('body')[0];

var black = document.createElement('div');
black.style.width = '11.1%';
black.style.paddingBottom = '11.1%';
black.style.backgroundColor = 'black';
black.style.float ='left';
body.appendChild(black);

for (var i = 0; i < 31; i++) {

  var red = document.createElement('div');
  red.style.width = '11.1%';
  red.style.paddingBottom = '11.1%';
  red.style.backgroundColor = 'red';
  red.style.float ='left';
  body.appendChild(red);

  black = document.createElement('div');
  black.style.width = '11.1%';
  black.style.paddingBottom = '11.1%';
  black.style.backgroundColor = 'black';
  black.style.float ='left';
  body.appendChild(black);
}
