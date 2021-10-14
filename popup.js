// Initialize button with user's preferred color
// let changeColor = document.getElementById("changeColor");

// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });

let changeBG = document.getElementById("changeBG");

// When the button is clicked, inject setPageBackgroundColor into current page
changeBG.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    // function: setPageBackgroundImage,
    function: setPageBackgroundImage,
  });
});

function revert() {
  location.reload();
}

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundImage() {
  let elements = document.getElementsByTagName("*");
  const regex =
    /Hack\sReactor|Codeup|Code\sChrysalis|Code Platoon|Epicodus|Hacktiv8|Launch\sAcademy|Turing\sSchool|The\sTech\sAcademy|Juno\sCollege\sof\sTechnology|Tech\sElevator|App\sAcademy|Flatiron\sSchool|Fullstack\sAcademy|Full\sStack|Fullstack|General\sAssembly|Grace\sHopper\sAcademy|Metis|Thinkful|Nucamp|Galvanize|BrainStation|Product\sGym|Alchemy\sCode\sLab|Grace\sHopper\sProgram|NYC\sData\sScience\sAcademy|Lambda\sSchool/gi;
  for (let i = 0; i < elements.length; i++) {
    let el = elements[i];
    for (let j = 0; j < el.childNodes.length; j++) {
      let node = el.childNodes[j];
      if (node.nodeType === 3) {
        let text = node.nodeValue;
        let replaced = text.replace(regex, "Codesmith");
        if (replaced !== text)
          el.replaceChild(document.createTextNode(replaced), node);
      }
    }
  }

  let images = document.getElementsByTagName("img");

  // const sentance = chrome.runtime.getURL("images/sentance.jpeg")

  for (let i = 0; i < images.length; i++) {
    // images[i].src = sentance;
    images[i].src =
      "https://static.frontendmasters.com/assets/teachers/sentance/thumb@2x.jpg";
  }

  for (let i = 0; i < elements.length; i++) {
    if (elements[i].style.backgroundImage) {
      elements[i].style.backgroundImage =
        'url("https://static.frontendmasters.com/assets/teachers/sentance/thumb@2x.jpg")';
    }
    if (elements[i].style.backgroundColor) {
      elements[i].style.backgroundImage =
        'url("https://static.frontendmasters.com/assets/teachers/sentance/thumb@2x.jpg")';
    }
  }

  changeBG.removeEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      // function: setPageBackgroundImage,
      function: setPageBackgroundImage,
    });
  });

  changeBG.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: revert,
    });
  });
}
