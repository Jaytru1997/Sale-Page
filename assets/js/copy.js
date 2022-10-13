function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
  
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      alert('Copying wallet address was ' + msg);
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
  
    document.body.removeChild(textArea);
  }
  function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text).then(function() {
      alert('Copying wallet address to clipboard was successful!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }
  
  var copyBTCAddress = document.querySelector('#btc-copy'),
    copyUSDTAddress = document.querySelector('#usdt-copy');
  
  copyBTCAddress.addEventListener('click', function(event) {
    copyTextToClipboard('1An5itHotYq4EQ4Ln6TWRH8bUkgBdu8fBE');
  });
  
  
  copyUSDTAddress.addEventListener('click', function(event) {
    copyTextToClipboard('TRAkeE1tueD9obH7PYf6tQHWHDYY4yF3c5');
  })
