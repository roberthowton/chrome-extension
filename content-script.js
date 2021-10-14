let elements = document.getElementsByTagName('*');

for (let i = 0; i < elements.length; i++) {
  let el = elements[i];
  for (let j = 0; j < el.childNodes.length; j++) {
    let node = el.childNodes[j];
    if (node.nodeType === 3) {
      let text = node.nodeValue;
      let replaced = text.replace(/Hack Reactor|App Academy|Flatiron|Fullstack Academy|Tech Elevator/gi, 'Not Codesmith');
      if (replaced !== text) el.replaceChild(document.createTextNode(replaced), node);
    }
  }
}

let images = document.getElementsByTagName('img');

// const sentance = chrome.runtime.getURL("images/sentance.jpeg")

for (let i = 0; i < images.length; i++) {
  // images[i].src = sentance;
  images[i].src = "https://static.frontendmasters.com/assets/teachers/sentance/thumb@2x.jpg";
}

// for (let i = 0; i < elements.length; i++) {
//   if (elements[i].style.backgroundImage) {
//     elements[i].style.backgroundImage = 'url("https://static.frontendmasters.com/assets/teachers/sentance/thumb@2x.jpg")'; 
//   }
//   if (elements[i].style.backgroundColor) {
//     elements[i].style.backgroundImage = 'url("https://static.frontendmasters.com/assets/teachers/sentance/thumb@2x.jpg")'; 
//   }
// }

