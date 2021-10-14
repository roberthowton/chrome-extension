let elements = document.getElementsByTagName('*');

for (let i = 0; i < elements.length; i++) {
  let el = elements[i];
  for (let j = 0; j < el.childNodes.length; j++) {
    let node = el.childnodes[j];
    if (node.nodeType === 3) {
      let text = node.nodeValue;
      let replaced = text.replace(/'Hack Reactor'/gi, 'Codesmith');
      if (replaced !== text) element.replaceChild(document.createTextNode(replaced, text))
    }
  }
}

let images = documents.getElementsByTagName('img');

for (let i = 0; i < images.length; i++) {
  images[i].src = "/images/sentance.jpeg";
}