var menuItem = {
  id: "convert",
  title: "תקן הקלדה",
  contexts: ["selection"]
};
chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(clickData) {
  if (clickData.menuItemId === "convert" && clickData.selectionText) {
  }
});
