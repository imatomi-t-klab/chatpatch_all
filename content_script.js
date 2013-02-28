var script_tag = document.createElement('script');
script_tag.type = 'text/javascript';
script_tag.src = chrome.extension.getURL('chatwork_nanpa.js');
window.document.body.appendChild(script_tag);

var script_tag = document.createElement('style');
script_tag.type = 'text/css';
script_tag.innerHTML = '.chrome_extension_highlight{background:pink;color:#999;padding:0.1em 0.3em;}.chrome_extension_group_highlight{background:yellow;color:#999;padding:0.1em 0.3em;}.chrome_extension_ghighlight{background:pink !important;}';
window.document.body.appendChild(script_tag);