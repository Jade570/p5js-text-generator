let word1;

//example
function setup() {

word = label("hello", "right", "blue", 18, 10, 10);

//adding objects(DOM) to the textblock
slider = createSlider(0, 100);
slider.position(0, 20); //how much further from the label
slider.parent(word); //type the label's variable which slider is related to
}
