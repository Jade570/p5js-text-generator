function setup() {
let label = createDiv('hello'); //type what you want to write
label.id('hellolabel'); //type what you want to call this textbox
label.position(10, 10); //write the textblock's position

//adding objects(DOM) to the textblock
slider = createSlider(0, 360, 120);
slider.position(0, 20); //how much further from the 'textblock'
slider.parent(label); //type the textblock's variable which slider is related to
}

function draw() {
}
