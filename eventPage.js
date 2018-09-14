var menuItem = {
  id: "convert",
  title: "תקן הקלדה",
  contexts: ["selection"]
};
chrome.contextMenus.create(menuItem);

var dict = {
  t: "\u05D0",
  c: "\u05D1",
  d: "\u05D2",
  s: "\u05D3",
  v: "\u05D4",
  u: "\u05D5",
  z: "\u05D6",
  j: "\u05D7",
  y: "\u05D8",
  h: "\u05D9",
  l: "\u05DA",
  f: "\u05DB",
  k: "\u05DC",
  o: "\u05DD",
  n: "\u05DE",
  i: "\u05DF",
  b: "\u05E0",
  x: "\u05E1",
  g: "\u05E2",
  ";": "\u05E3",
  p: "\u05E4",
  ".": "\u05E5",
  m: "\u05E6",
  e: "\u05E7",
  r: "\u05E8",
  a: "\u05E9",
  ",": "\u05EA",
  q: "\u002F",
  w: "\u0027",
  "'": "\u002C",
  "/": "\u002E"
};

chrome.contextMenus.onClicked.addListener(function(clickData) {
  if (clickData.menuItemId === "convert" && clickData.selectionText) {
    var oldWord = clickData.selectionText;
    var newWord = "";
    for (var i = 0; i < oldWord.length; i++) {
      if (oldWord.charAt(i) in dict) {
        newWord += dict[oldWord.charAt(i)];
      } else {
        newWord += oldWord.charAt(i);
      }
    }
    alert("האם התכוונת ל" + newWord + "?");
  }
});
