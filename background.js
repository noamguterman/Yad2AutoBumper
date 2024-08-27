chrome.alarms.create("bumpAlarm", { periodInMinutes: 240 });

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "bumpAlarm") {
    chrome.tabs.create({ url: "https://www.yad2.co.il/my-ads" }, (tab) => {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["content.js"],
      });
    });
  }
});
