# semaxspaul_LinkedinAdblocker
This is a fully-functional extension to block LinkedIn ads

`manifest.json` contains metadata about the extension, the permissions it needs to operate, and the script it should run in the background.

`background.js` sets up an event listener that will trigger an action every time the user loads a new webpage. 
It then check if that website is LinkedIn, and if it is blocks the ads.

`linkedin.js` specifies how to actually block the ads by simply looking through the page for elements that contain the word “Promoted” in and hiding them.



Credit to 
Yakko Majuri
https://levelup.gitconnected.com/building-your-own-adblocker-in-literally-10-minutes-1eec093b04cd
