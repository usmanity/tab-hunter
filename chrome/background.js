chrome.commands.onCommand.addListener(function(command) {
    if (command == "open-hunter") {
      // Get the currently selected tab
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // Toggle the pinned status
        var current = tabs[0]
        console.log(tabs);
        chrome.tabs.update(current.id, {'pinned': !current.pinned});
      });
    }
  });
  