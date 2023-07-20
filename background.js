/* 
Setting up our event listener that will trigger an action every time the user loads a new webpage. 
We’ll then check if that website is LinkedIn, and if it is, we’ll block ads.
*/

chrome.webNavigation.onCommitted.addListener(function(tab){
    // Prevent script from running when other frames load
    if (tab.frameId == 0){
        chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
            // get URL of the webpage
            let url = tabs[0].url;
            // Remove unnecessary protocol definitions and www subdomain from the URL
            let parsedURL = url.replace('https://', '').replace('http://', '').replace('www.', '')

            // Remove path and queries e.g. linkedin.com/feed or linkedin.com?query=value
            // We only interested in the base domain
            let domain = parsedURL.slice(0, parsedURL.indexOf('/') == -1 ? parsedURL.length:parsedURL.indexOf('/')).slice(0, parsedURL.indexOf('?') == -1 ? parsedURL.length:parsedURL.indexOf('?'))

            try{
                if (domain.length < 1 || domain === null || domain === undefined) {
                    return;
                }
                else if (domain == 'linkedin.com'){
                    runLinkedinScript();
                    return;
                }
            }
            catch (err){
                throw err;
            }
        });
    }
});


function runLinkedinScript(){
    // Inject script froom file into the webpage
    chrome.tabs.executeScript({
        file: 'linkedin.js'
    });
    return true;
}