#textReplace
**Inspired by [xkcd #1288](http://www.xkcd.com/1288/).** :heart:

textReplace is a simple Chrome extension that replaces user defined words with others of your choosing. It isn't a particularly useful plugin, I just made it for giggles. Note: This plugin does break some pages such as Facebook, because I choose a lazy implementation. Disable it if a website isn't loading.

##Installation
Downlaod this repositry from the `Download ZIP` button on the right. Unzip it and place the folder somewhere you can find it, like your desktop. Next open up Chrome, go to the menu in the upper right, settigs, then extensions. Check the `Developer mode` box in the upper right. Finally, click the `Load unpacked extension...` and navigate to the folder. Done!

##Usage

###Adding words
To add a word to the list, just put the word to replace in first, then the word to replace it with. For example, to turn `Pope` to `Pimp` just input them into the respective boxes, click `Add`, then refresh any pages.

Please note that all entries are case sensitive, so `Cat` is not the same as `cat`. Also it will replace words even if they are part of a larger word. For instance the rule `work - twerk` will still change `working` to `twerking`. If you want to prevent this, add spaces before and after your word.

###Deleting words
To remove a word, first look in the list. For our example lets say it looks like the following.
```
Pope - Pimp
Car - Cat
Space - Spaaaaaaaace
```
To delete a conversion, type the original word in the box and press `Delete word`. If we input `Pope`, our list will now look like this:
```
Car - Cat
Space - Spaaaaaaaace
```
