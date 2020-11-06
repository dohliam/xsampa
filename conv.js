var xsIn = ['_R_F', 'J\\_<', '_H_T', 'G\\_<', '_B_L', '\|\\\|\\', 'r\\`', '<R>', 'g_<', '<F>', 'd_<', 'b_<', '_\?\\', 'z\\', 'z`', 'X\\', 'x\\', '_x', '_X', '_w', 'v\\', '_v', 'U\\', 't`', '_t', '_T', 's\\', 's`', 'r\\', 'r`', '_r', 'R\\', '_R', '_q', 'p\\', '_o', 'O\\', '_O', 'n`', '_n', 'N\\', '_N', '_m', 'M\\', '_M', 'l\\', 'l`', '_l', 'L\\', '_L', '_k', 'K\\', 'j\\', '_j', 'J\\', 'I\\', 'h\\', '_h', 'H\\', '_H', 'G\\', '_G', '_F', '_e', 'd`', '_d', '_c', 'B\\', '_B', '_a', '_A', '3\\', '_0', '@\\', '\?\\', '\!\\', ':\\', '\-\\', '_\+', '_\\', '_\}', '_"', '_/', '_\-', '_>', '_=', '_~', '_\^', '\|\\', '\|\|', '>\\', '=\\', '<\\', 'Z', 'z', 'y', 'Y', 'X', 'x', 'w', 'W', 'v', 'V', 'u', 'U', 'T', 't', 's', 'S', 'r', 'R', 'q', 'Q', 'p', 'P', 'O', 'o', 'N', 'n', 'm', 'M', 'l', 'L', 'k', 'K', 'j', 'J', 'i', 'I', 'h', 'H', 'g', 'G', 'f', 'F', 'E', 'e', '@', 'D', 'd', 'C', 'c', 'B', 'b', '{', 'a', 'A', '9', '8', '7', '6', '5', '4', '3', '2', '1', '%', '&', '\}', '"', '\'', '\.', '\?', '\!', ':', '\|', '=', '~', '\^', '`'];
var ipaOut = [' ᷈', 'ʄ', ' ᷄', 'ʛ', ' ᷅', 'ǁ', 'ɻ', '↗', 'ɠ', '↘', 'ɗ', 'ɓ', 'ˤ', 'ʑ', 'ʐ', 'ħ', 'ɧ', '  ̽', '  ̆', 'ʷ', 'ʋ', '  ̬', 'ᵿ', 'ʈ', '  ̤', '  ̋', 'ɕ', 'ʂ', 'ɹ', 'ɽ', '  ̝', 'ʀ', '  ̌', '  ̙', 'ɸ', '  ̞', 'ʘ', '  ̹', 'ɳ', 'ⁿ', 'ɴ', '  ̼', '  ̻', 'ɰ', '  ̄', 'ɺ', 'ɭ', 'ˡ', 'ʟ', '  ̀', '  ̰', 'ɮ', 'ʝ', 'ʲ', 'ɟ', 'ᵻ', 'ɦ', 'ʰ', 'ʜ', '  ́', 'ɢ', 'ˠ', '  ̂', '  ̴', 'ɖ', '  ̪', '  ̜', 'ʙ', '  ̏', '  ̺', '  ̘', 'ɞ', '  ̥', 'ɘ', 'ʕ', 'ǃ', 'ˑ', '‿', '  ̟', '̂', '  ̚', '  ̈', '̌', '  ̠', 'ʼ', '  ̩', '̃', '  ̯', 'ǀ', '‖', 'ʡ', 'ǂ', 'ʢ', 'ʒ', 'z', 'y', 'ʏ', 'χ', 'x', 'w', 'ʍ', 'v', 'ʌ', 'u', 'ʊ', 'θ', 't', 's', 'ʃ', 'r', 'ʁ', 'q', 'ɒ', 'p', 'ʋ', 'ɔ', 'o', 'ŋ', 'n', 'm', 'ɯ', 'l', 'ʎ', 'k', 'ɬ', 'j', 'ɲ', 'i', 'ɪ', 'h', 'ɥ', 'ɡ', 'ɣ', 'f', 'ɱ', 'ɛ', 'e', 'ə', 'ð', 'd', 'ç', 'c', 'β', 'b', 'æ', 'a', 'ɑ', 'œ', 'ɵ', 'ɤ', 'ɐ', 'ɫ', 'ɾ', 'ɜ', 'ø', 'ɨ', 'ˌ', 'ɶ', 'ʉ', '\ˈ', 'ʲ', '.', 'ʔ', 'ꜜ', 'ː', '|', '̩', '̃', 'ꜛ', '˞'];

function ipa() {
  RegExp.escape = function(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  };

  var output = document.getElementById("outbox");
  var input = document.getElementById("textbox");

  output.value = input.value;

  for (t in xsIn) {
    var re = new RegExp(RegExp.escape(xsIn[t]), "g");
    output.value = output.value.replace(re, ipaOut[t]);
  }
  htmlOut();
}

function geturl() {
  var url = location.href;
  if (/\?/.test(url) == true) {
    var args = /\?(.*)/.exec(url)[1];
    args=/\+/.test(args) ? args.replace(/\+/g,' ') : args;
    var input = document.getElementById("textbox");
    input.value = decodeURIComponent(args);
  }
}

function htmlOut() {
  var htmlout = document.getElementById("htmlout");
  var input = document.getElementById("outbox");
  htmlout.innerHTML = input.value.replace(/\n/g, "<br>");
}

function legend() {
  xsort = xsIn.slice(0).sort();
  ltext = document.getElementById("ltext");

  txt = "";
  ltext.innerHTML = "";
  for (t in xsort) {
    i = xsIn.indexOf(xsort[t]);
    txt = txt + "<div class='gr'>" + xsIn[i] + "</div> → <div class='pr'>" + ipaOut[i] + "</div><br>";
  }
  var output = document.getElementById("outbox");
  ltext.innerHTML = txt;
}
