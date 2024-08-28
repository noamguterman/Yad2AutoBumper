chrome.alarms.create("bumpAlarm", { periodInMinutes: 241 });

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "bumpAlarm") {
    chrome.tabs.create({ url: "https://www.yad2.co.il/my-ads" }, (tab) => {
      setTimeout(() => {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["content.js"],
        });
      }, 5000);
    });
  }
});
