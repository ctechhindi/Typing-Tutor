<template>
  <div>
    <div class="container">
      <h3 id="lesson"></h3>
      <!-- User Typing -->
      <b-field>
        <b-input type="textarea" v-model="userTypingText"></b-input>
      </b-field>
    </div>
    <br/>
    <!-- Keyboard keys -->
    <div class="container">
      <div id="keyboard">
		    <ul>
          <li id="Backquote">
            <span class="off">ॊ</span>
            <span class="on">ऒ</span>
          </li>
          <li id="Digit1">
            <span class="off">1</span>
            <span class="on">ऍ</span>
          </li>
          <li id="Digit2">
            <span class="off">2</span>
            <span class="on">ॅ</span>
          </li>
          <li id="Digit3">
            <span class="off">3</span>
            <span class="on">्र</span>
          </li>
          <li id ="Digit4">
            <span class="off">4</span>
            <span class="on">र्</span>
          </li>
          <li id="Digit5">
            <span class="off">5</span>
            <span class="on">ज्ञ</span>
          </li>
          <li id="Digit6">
            <span class="off">6</span>
            <span class="on">त्र</span>
          </li>
          <li id="Digit7">
            <span class="off">7</span>
            <span class="on">क्ष</span>
          </li>
          <li id="Digit8">
            <span class="off">8</span>
            <span class="on">श्र</span>
          </li>
          <li id="Digit9">
            <span class="off">9</span>
            <span class="on">(</span>
          </li>
          <li id="Digit0">
            <span class="off">0</span>
            <span class="on">)</span>
          </li>
          <li id="Minus">
            <span class="off">-</span>
            <span class="on">ः</span>
          </li>
          <li id="Equal">
            <span class="off">ृ</span>
            <span class="on">ऋ</span>
          </li>
          <li id="Backspace" style="width: 88px; font-size: small;">Backspace</li>
        </ul>
        <!-- New Line -->
        <ul>
          <li id="Tab" style="width: 87px; font-size: small;">Tab</li>
          <li class="char" id="KeyQ">
            <span class="off">ौ</span>
            <span class="on">औ</span>
          </li>
          <li class="char" id="KeyW">
            <span class="off">ै</span>
            <span class="on">ऐ</span>
          </li>
          <li class="char" id="KeyE">
            <span class="off">ा</span>
            <span class="on">आ</span>
          </li>
          <li class="char" id="KeyR">
            <span class="off">ी</span>
            <span class="on">ई</span>
          </li>
          <li class="char" id="KeyT">
            <span class="off">ू</span>
            <span class="on">ऊ</span>
          </li>
          <li class="char" id="KeyY">
            <span class="off">ब</span>
            <span class="on">भ</span>
          </li>
          <li class="char" id="KeyU">
            <span class="off">ह</span>
            <span class="on">ङ</span>
          </li>
          <li class="char" id="KeyI">
            <span class="off">ग</span>
            <span class="on">घ</span>
          </li>
          <li class="char" id="KeyO">
            <span class="off">द</span>
            <span class="on">ध</span>
          </li>
          <li class="char" id="KeyP">
            <span class="off">ज</span>
            <span class="on">झ</span>
          </li>
          <li class="char" id="BracketLeft">
            <span class="off">ड</span>
            <span class="on">ढ</span>
          </li>
          <li id="BracketRight">
            <span class="off">़</span>
            <span class="on">ञ</span>
          </li>
          <li id ="Backslash">
            <span class="off">ॉ</span>
            <span class="on">ऑ</span>
          </li>
        </ul>
        <!-- New Line -->
        <ul>
          <li id="CapsLock" style="width: 100px; font-size: small;">Caps Lock</li>
          <li class="char" id="KeyA">
            <span class="off">ो</span>
            <span class="on">ओ</span>
          </li>
          <li class="char" id="KeyS">
            <span class="off">े</span>
            <span class="on">ए</span>
          </li>
          <li class="char" id="KeyD">
            <span class="off">्</span>
            <span class="on">अ</span>
          </li>
          <li class="char" id="KeyF">
            <span class="off">ि</span>
            <span class="on">इ</span>
          </li>
          <li class="char" id="KeyG">
            <span class="off">ु</span>
            <span class="on">उ</span>
          </li>
          <li class="char" id="KeyH">
            <span class="off">प</span>
            <span class="on">फ</span>
          </li>
          <li class="char" id="KeyJ">
            <span class="off">र</span>
            <span class="on">ऱ</span>
          </li>
          <li class="char" id="KeyK">
            <span class="off">क</span>
            <span class="on">ख</span>
          </li>
          <li class="char" id="KeyL">
            <span class="off">त</span>
            <span class="on">थ</span>
          </li>
          <li class="char" id="Semicolon">
            <span class="off">च</span>
            <span class="on">छ</span>
          </li>
          <li id='Quote'>
            <span class="off">ट</span>
            <span class="on">ठ</span>
          </li>
          <li ID="Enter" style="width: 92px; font-size: small;">Enter</li>
        </ul>
        <!-- New Line -->
        <ul>
          <li id="ShiftLeft" style="width: 128px; font-size: small;">Left Shift</li>
          <li class="char" id="KeyZ">
            <span class="off">ॆ</span>
            <span class="on">ऎ</span>
          </li>
          <li class="char" id="KeyX">
            <span class="off">ं</span>
            <span class="on">ँ</span>
          </li>
          <li class="char" id="KeyC">
            <span class="off">म</span>
            <span class="on">ण</span>
          </li>
          <li class="char" id="KeyV">
            <span class="off">न</span>
            <span class="on">ऩ</span>
          </li>
          <li class="char" id="KeyB">
            <span class="off">व</span>
            <span class="on">ऴ</span>
          </li>
          <li class="char" id="KeyN">
            <span class="off">ल</span>
            <span class="on">ळ</span>
          </li>
          <li class="char" id="KeyM">
            <span class="off">स</span>
            <span class="on">श</span>
          </li>
          <li id= "Comma">
            <span class="off">,</span>
            <span class="on">ष</span></li>
          <li id="Period">
            <span class="off">.</span>
            <span class="on">।</span>
          </li>
          <li id="Slash">
            <span class="off">य</span>
            <span class="on">य़</span>
          </li>
          <li id="ShiftRight" style="width: 122px; font-size: small;">Right Shift</li>
        </ul>
        <!-- New Line -->
        <ul>
          <li id="Space" style="width: 807px; font-size: small;">&nbsp; Space</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "HindiTyping",
  data() {
    return {
      count: 0,
      activeLesson: false,
      lessons: [
        "चोर एक घर में घुसा। उस समय वहाँ टेलीविज़न चल रहा था। टेलीविज़न पर राष्ट्रीय गान आरंभ हो गया। चोर सावधान की मुद्रा में वहीं सावधान खड़ा हो गया। गृहस्वामी ने उसे पकड़कर पुलिस के हवाले कर दिया। न्यायाधीश महोदय ने देशभक्ति के पारितोषिक स्वरूप चोर को इज्जत सहित बरी कर दिया और गृहस्वामी को राष्ट्रीय गान का अपमान करने पर सज़ा सुना दी।"
      ],
      userTypingText: ""
    };
  },
  methods: {
    getRandomNumber: function(min, max) {
      var ran = Math.floor(Math.random() * (max - min) + min);
      // console.log(ran);
      return ran;
    },

    // this function is main one which generates the lessons/ words
    generateWords: function() {
      var that = this;

      that.count = 0;
      var totalLessons = that.lessons.length;

      // we need to get random number from the above array so pass the parameters
      var lessonsNum = that.getRandomNumber(0, totalLessons);

      that.activeLesson = that.lessons[lessonsNum];

      // here goes the core code for displaying the contents got from the array;
      var lesson = document.getElementById("lesson");

      var newDiv = document.createElement("div");
      newDiv.setAttribute("id", "thisClass");
      lesson.appendChild(newDiv);

      var oneWord = that.activeLesson.split(" ");

      $.each(oneWord, function(i, v) {
        var spans = document.createElement("span");
        spans.setAttribute("id", "span" + i);
        spans.innerHTML = v;
        newDiv.appendChild(spans);
        newDiv.appendChild(document.createTextNode(" "));
      });

      // this piece of code will highlight the first element
      this.highlight(0);
    },

    // this function is used to highlight .. it will give hint for which letter to type
    highlight: function(cnt) {
      // check on consoles you may see something interesting :P
      console.log("count is : " + this.count);
      console.log("cnt is : ", +cnt);
      if (cnt < this.activeLesson.length) {
        var get = document.getElementById("span" + cnt);
        get.style.background = "cyan";
      }
    },

    // this function will check if we need the new word
    checkNewWord: function() {
      if (this.count === this.word.length) {
        // we will reset the value of matched and error to 0 again
        var tags = document.getElementById("lesson");
        // delete the class thisclass
        var deleteid = document.getElementById("thisClass");
        tags.removeChild(deleteid);
        // again lets generate words means we will create the above deleted class again
        this.generateWords();
      }
    }
  },
  mounted() {
    var that = this;
    window.$ = window.jQuery = require("jquery");

    this.generateWords();

    window.onkeydown = function(event) {
      var key = event.key; // keyboard key
      var keyValue = event.which; // keyboard key value
      var keyCode = event.code; // keyboard key code
      var isShift = event.shiftKey; // shift key active

      console.log(event);

      /**
       * Active/Deactive Key
       */
      if (keyCode !== "CapsLock") {
        var id = $("#" + keyCode);

        if (id !== null) {
          // Check Shift Key Active
          if (isShift) {
            id.css("text-transform", "uppercase");

            // setTimeout(function() {
            //   id.css("text-transform", "lowercase");
            // }, 150);
          }

          id.addClass("active");

          setTimeout(function() {
            id.removeClass("active");
          }, 150);
        }
      }

      /**
       * If Shift Key Press
       */
      if (key == "Shift") {
        var allChar = $("#keyboard ul li.char");

        // Show small char
        $("#keyboard ul li span.on").css("display", "inherit");
        $("#keyboard ul li span.off").css("display", "none");

        setTimeout(function() {
          $("#keyboard ul li span.on").css("display", "none");
          $("#keyboard ul li span.off").css("display", "inherit");
        }, 150);
      }

      /**
       * Backspace : 8
       * Tab : 9
       * Enter : 13
       * Shift : 16
       * Control : 17
       * Alt : 18
       * Pause : 19
       * CapsLock: 20
       * Escape : 27
       * PageUp : 33
       * PageDown : 34
       * End : 35
       * Home : 36
       * ArrowLeft : 37
       * ArrowUp : 38
       * ArrowRight : 39
       * ArrowDown : 40
       * Insert : 45
       * Delete : 46
       * Meta : 91
       * ContextMenu : 93
       * F1 - F12 : 112-123
       * NumLock : 144
       * ScrollLock : 145
       */
      var notCountKeysInTyping = [
        8,
        9,
        13,
        16,
        17,
        18,
        19,
        20,
        27,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        45,
        46,
        91,
        93,
        112,
        113,
        114,
        115,
        116,
        117,
        118,
        119,
        120,
        121,
        122,
        123,
        144,
        145
      ];
      if (notCountKeysInTyping.indexOf(keyValue) === -1) {
        console.log("Input Value : " + key);

        // Old Char + New Char
        var fullChar = that.userTypingText + key;

        if (fullChar !== "") {
          var words = fullChar.split(" ");
          $.each(words, function(i, v) {
            v = v.trim();
            var act_word = $("#span" + i).text();
            
            /**
             * Check One Word One-By Character
             */
            for (var bit = 0; bit < act_word.length; bit++) {
              // console.log(act_word[bit]);
              
              console.log(act_word.substring(0, v.length) +"=="+ v);
              if (act_word.substring(0, v.length) == v) {
                var getSpan = document.getElementById("span" + i);
                getSpan.style.color = "black";
                getSpan.style.background = "cyan";
              } else {
                var getSpan = document.getElementById("span" + i);
                getSpan.style.color = "white";
                getSpan.style.background = "red";
              }
            }

            console.log(v + "==" + act_word);
            if (v === act_word) {
              console.log("Word Matched.");
              var getSpan = document.getElementById("span" + i);
              getSpan.style.color = "blue";
              getSpan.style.background = "none";
              that.count++;
            } 
            // else {
            //   console.error("Word Not Matched.");
            //   var getSpan = document.getElementById("span" + i);
            //   getSpan.style.color = "white";
            //   getSpan.style.background = "red";
            //   that.count++;
            // }
          });
        }
        // that.checkNewWord();
      }
    };
  }
};
</script>

<style>
#keyboard {
  width: min-content;
}

#keyboard ul {
  clear: both;
}

#keyboard ul li {
  float: left;
  margin: 0 5px 5px 0;
  width: 50px;
  height: 40px;
  line-height: 37px;
  text-align: center;
  background: #fee;
  color: #036;
  border: 1px solid #f9f9f9;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

#keyboard ul li span.on {
  display: none;
}

#keyboard li:hover {
  position: relative;
  top: 1px;
  left: 1px;
  border-color: #e5e5e5;
  cursor: pointer;
}

#keyboard ul li.active {
  background: rgb(51, 170, 250);
}
</style>
