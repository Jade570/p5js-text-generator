///label function///
function label(text, id, align, color, size, x, y){
  let div = createDiv(text);
  div.position(x,y);
  div.style ('textAlign',align);
  div.style('color', color);
  div.style('font-size', size+'px');
  return div.id(id); //return the textblock's id
}
