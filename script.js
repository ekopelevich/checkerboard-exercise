var body = document.getElementsByTagName('body')[0];

for (var i = 0; i < 31; i++) {
  var color = "#"+((1<<24)*Math.random()|0).toString(16)
  var tile = document.createElement('div');
  tile.style.width = '11.1%';
  tile.style.paddingBottom = '11.1%';
  tile.style.backgroundColor = 'color';
  tile.style.float ='left';
  body.appendChild(tile);
}
