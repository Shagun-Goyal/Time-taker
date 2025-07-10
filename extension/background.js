let currentTab = null;
let startTime = null;

const productiveSites = [
  'leetcode.com',
  'github.com',
  'stackoverflow.com',
  'docs.google.com'
];

const unproductiveSites = [
  'facebook.com',
  'twitter.com',
  'instagram.com',
  'youtube.com'
];

chrome.webNavigation.onCommitted.addListener((details) => {
  if (details.frameId === 0) {
    trackTime(details);
  }
});

async function trackTime(details) {
  if (currentTab && startTime) {
    const endTime = new Date();
    const timeSpent = (endTime - startTime) / 1000; // in seconds

    const url = new URL(currentTab.url);
    const domain = url.hostname;

    let category = 'neutral';
    if (productiveSites.some(site => domain.includes(site))) {
      category = 'productive';
    } else if (unproductiveSites.some(site => domain.includes(site))) {
      category = 'unproductive';
    }

    try {
      await fetch('http://localhost:3000/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          domain,
          timeSpent,
          category,
          timestamp: new Date()
        })
      });
    } catch (error) {
      console.error('Error sending data:', error);
    }
  }

  chrome.tabs.get(details.tabId, (tab) => {
    currentTab = tab;
    startTime = new Date();
  });
}