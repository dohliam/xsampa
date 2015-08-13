# xsampa.js - X-SAMPA to IPA conversion in the browser

* [1.1 Usage](#usage)
    * [1.1.1 Access keys](#access-keys)
    * [1.1.2 API](#api)
* [1.2 Why?](#why?)
    * [1.2.1 Hasn't this been done before?](#hasnt-this-been-done-before?)
* [1.3 To do](#to-do)
* [1.4 License](#license)

Xsampa.js converts [X-SAMPA](https://en.wikipedia.org/wiki/X-SAMPA) text into equivalent Unicode [IPA symbols](https://en.wikipedia.org/wiki/International_Phonetic_Alphabet). It has no dependencies and should work in any browser with JavaScript enabled. It is designed to work locally and does not require an internet connection. It also has a handy API allowing you to get arbitrary IPA text by linking directly to an X-SAMPA string in the URL.

The main purpose of xsampa.js is to allow easy input of IPA without the need to install any special software, input methods, or command-line tools, and in circumstances where it may not be possible to get online.

## Usage

To start converting X-SAMPA text immediately, just open up [xsampa.js](https://dohliam.github.io/xsampa) in your browser and start typing. Text entered into the input box will be automatically converted to its equivalent IPA as you type.

If you can't remember how to type a particular IPA symbol in X-SAMPA, there is a handy pop-up guide containing all the symbols and their equivalents which you can access by just hovering your mouse over the "X-SAMPA Guide" button in the middle of the page.

### Access keys

The input and output boxes can be accessed using keyboard access keys for convenience:

* `Modifier key + i`: Input box
* `Modifier key + o`: Output box

The modifier keys you need to press will differ depending on which browser and operating system you are using. See below for a list of common access keys for different browsers.

* __Chrome__: `Alt` (_*nix & Windows_) or `Ctrl + ⌥ Opt` (_Mac_)
* __Firefox__: `Alt + Shift` (_*nix & Windows_) or `Ctrl + ⌥ Opt` (_Mac_)
* __IE__: `Alt`
* __Konqueror__: `Ctrl`
* __Opera__: `Alt` (_*nix & Windows_) or `Ctrl + ⌥ Opt` (_Mac_)
* __Safari__: `Alt` (_*nix & Windows_) or `Ctrl + ⌥ Opt` (_Mac_)

A more complete list can be found [here](https://en.wikipedia.org/wiki/Access_key).

### API

The converter can be accessed by typing X-SAMPA text directly after a question mark (`?`) appended to the end of the file url. For example, to convert the string `[aI p_hi: eI]` into IPA, you can use a link like this:

`http://dohliam.github.io/xsampa/?[aI p_hi: eI]`

You can see what it looks like [here](http://dohliam.github.io/xsampa/?ai pI: ei). You should see text `[aɪ pʰiː eɪ]` appear in the text output box, as well as in the HTML output area at the bottom of the screen. Here is an [example in SVG format](https://commons.wikimedia.org/wiki/File:IPA_in_IPA.svg) of what the text should look like.

## Why?

Because I needed something that did this.

### Hasn't this been done before?

Yes. X-SAMPA to IPA conversion is a long-solved problem and there are a wide variety of tools that already do this very nicely. For example, if you are using Moodle, there is an [IPA filter](https://moodle.org/plugins/view/filter_ipa) that will convert X-SAMPA into IPA. There is nothing innovative about the conversion itself either, since it involves nothing more than a straightforward search-and-replace of each of the unique X-SAMPA symbols into IPA.

So, to be clear, what I was looking for already existed -- just not in the specific configuration I needed, **and** under a free license, **and** also accessible offline without running a local server.

## To do

* Button to switch conversion to IPA => X-SAMPA

## License

MIT -- see LICENSE file for details.