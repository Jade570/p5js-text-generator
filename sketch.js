let word1, word2;
let div;

//example
function setup() {

word1 = label("hello world", "hello", "right", "blue", 18, 10, 10);
word2 = label("what am I", "I", "center", "red", 25, 50, 10);

//adding objects(DOM) to the textblock
slider = createSlider(0, 100);
slider.position(0, 20); //how much further from the label
slider.parent(word1); //type the label's variable which slider is related to
}
