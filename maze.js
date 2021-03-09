var mazeHolder = document.getElementById('maze-holder');
var tileCount = 256;
mazeHolder.innerHTML = '';

for (var tileIndex = 0; tileIndex < tileCount; tileIndex++) {
    var isOn = Math.random() > 0.5;
    var className = 'off';
    if (isOn){
        className = 'on'
    }
    var element = '<span class="' + className + '"></span>';
    mazeHolder.innerHTML += element;
}
