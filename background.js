chrome.tabs.onUpdated.addListener(function (tab, info) {
  if (info.status === "complete") {
    chrome.tabs.executeScript({
      file: "content.js",
    });
  }
});
