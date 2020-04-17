///label function///
function label(text, align, color, size, x, y){
  let div = createDiv(text);
  div.id(text);
  div.position(x,y);
  div.style ('textAlign',align);
  div.style('color', color);
  div.style('font-size', size+'px');
  return div.id(text);
}
