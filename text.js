let word;

function setup() {

word = label("hello world", "right", "yellow", 10, 10, 10);


//adding objects(DOM) to the textblock
slider = createSlider(0, 360, 120);
slider.position(0, 50); //how much further from the 'textblock'
slider.parent(word); //type the textblock's variable which slider is related to
}

function draw() {
}


function label(text, align, color, size, x, y){
  let div = createDiv(text);
  div.id(text);
  div.position(x,y);
  div.style ('textAlign',align);
  div.style('color', color);
  div.style('font-size', size+'px');
  return div.id(text);
}
