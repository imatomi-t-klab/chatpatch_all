var script_tag = document.createElement('script');
script_tag.type = 'text/javascript';
script_tag.src = chrome.extension.getURL('chatwork_nanpa.js');
window.document.body.appendChild(script_tag);

var script_tag = document.createElement('style');
script_tag.type = 'text/css';
script_tag.innerHTML = '.chrome_extension_highlight{background:pink;color:#999;padding:0.1em 0.3em;}';
window.document.body.appendChild(script_tag);