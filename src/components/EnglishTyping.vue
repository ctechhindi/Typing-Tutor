<template>
  <div class="hello">
    <section class="hero is-primary">
      <div class="hero-body" style="padding: 2rem 1.5rem;">
        <div class="container">
          <h1 class="title" id="lesson"></h1>
        </div>
      </div>
    </section>
    <section class="hero is-success">
      <div class="hero-body" style="padding: 1rem 0.5rem;">
        <nav class="level">
          <div class="level-item has-text-centered">
            <div title="Gross Word Per Minute">
              <p class="heading">GWPM</p>
              <p class="title">{{ result.GrossWPM }}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div title="Net Word Per Minute">
              <p class="heading">NWPM</p>
              <p class="title">{{ result.NetWPM }}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div title="Accuracy">
              <p class="heading">ACCURACY ({{ result.totalWrongChar }})</p>
              <p class="title">{{ result.Accuracy }} %</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div title="Total Character">
              <p class="heading">Total Character ({{ result.totalChar }})</p>
              <p class="title">{{ count }}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div title="Total Words">
              <p class="heading">Total Words</p>
              <p class="title">{{ result.totalWords }}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div title="Time">
              <p class="heading">TIME</p>
              <p class="title">
                <countdown :time="totalTime" :auto-start="false" ref="countdown" @countdownprogress="handleCountdownProgress" @countdownend="handleCountdownEnd">
                  <template slot-scope="props">{{ props.minutes }}:{{ props.seconds }}</template>
                </countdown>
              </p>
            </div>
          </div>
        </nav>
      </div>
    </section>
    <br/>
    <div class="container">
      <div id="keyboard">
		    <ul>
          <li id ="Backquote">
            <span class="off">`</span>
            <span class="on">~</span>
          </li>
          <li id="Digit1">
            <span class="off">1</span>
            <span class="on">!</span>
          </li>
          <li id="Digit2">
            <span class="off">2</span>
            <span class="on">@</span>
          </li>
          <li id="Digit3">
            <span class="off">3</span>
            <span class="on">#</span>
          </li>
          <li id ="Digit4">
            <span class="off">4</span>
            <span class="on">$</span>
          </li>
          <li id="Digit5">
            <span class="off">5</span>
            <span class="on">%</span>
          </li>
          <li id="Digit6">
            <span class="off">6</span>
            <span class="on">^</span>
          </li>
          <li id="Digit7">
            <span class="off">7</span>
            <span class="on">&amp;</span>
          </li>
          <li id="Digit8">
            <span class="off">8</span>
            <span class="on">*</span>
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
            <span class="on">_</span>
          </li>
          <li id="Equal">
            <span class="off">=</span>
            <span class="on">+</span>
          </li>
          <li id="Backspace" style="width: 88px; font-size: small;">Backspace</li>
        </ul>
        <!-- New Line -->
        <ul>
          <li id="Tab" style="width: 87px; font-size: small;">Tab</li>
          <li class="char" id="KeyQ">q</li>
          <li class="char" id="KeyW">w</li>
          <li class="char" id="KeyE">e</li>
          <li class="char" id="KeyR">r</li>
          <li class="char" id="KeyT">t</li>
          <li class="char" id="KeyY">y</li>
          <li class="char" id="KeyU">u</li>
          <li class="char" id="KeyI">i</li>
          <li class="char" id="KeyO">o</li>
          <li class="char" id="KeyP">p</li>
          <li class="char" id="BracketLeft">
            <span class="off">[</span>
            <span class="on">{</span>
          </li>
          <li id="BracketRight">
            <span class="off">]</span>
            <span class="on">}</span>
          </li>
          <li id ="Backslash">
            <span class="off">\</span>
            <span class="on">|</span>
          </li>
        </ul>
        <!-- New Line -->
        <ul>
          <li id="CapsLock" style="width: 100px; font-size: small;">Caps Lock</li>
          <li class="char" id="KeyA">a</li>
          <li class="char" id="KeyS">s</li>
          <li class="char" id="KeyD">d</li>
          <li class="char" id="KeyF">f</li>
          <li class="char" id="KeyG">g</li>
          <li class="char" id="KeyH">h</li>
          <li class="char" id="KeyJ">j</li>
          <li class="char" id="KeyK">k</li>
          <li class="char" id="KeyL">l</li>
          <li class="char" id="Semicolon">
            <span class="off">;</span>
            <span class="on">:</span>
          </li>
          <li id='Quote'>
            <span class="off">'</span>
            <span class="on">&quot;</span>
          </li>
          <li ID="Enter" style="width: 92px; font-size: small;">Enter</li>
        </ul>
        <!-- New Line -->
        <ul>
          <li id="ShiftLeft" style="width: 128px; font-size: small;">Left Shift</li>
          <li class="char" id ="KeyZ">z</li>
          <li class="char" id="KeyX">x</li>
          <li class="char" id="KeyC">c</li>
          <li class="char" id="KeyV">v</li>
          <li class="char" id="KeyB">b</li>
          <li class="char" id="KeyN">n</li>
          <li class="char" id="KeyM">m</li>
          <li id= "Comma">
            <span class="off">,</span>
            <span class="on">&lt;</span></li>
          <li id="Period">
            <span class="off">.</span>
            <span class="on">&gt;</span>
          </li>
          <li id="Slash">
            <span class="off">/</span>
            <span class="on">?</span>
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
import Vue from "vue";

import VueCountdown from "@xkeshi/vue-countdown";
Vue.component(VueCountdown.name, VueCountdown);

export default {
  name: "EnglishTyping",
  data() {
    return {
      count: 0, // Count Total Character [Include Space and Other Keys],
      totalTime: 60000, // Total Typing Duration : Millisecond
      word: false,
      lessons: [
        "India's first bullet train is going to be built between Mumbai and Ahmedabad for various reasons. We are all excited about the same. It will be the fastest mode of transport on the ground between Mumbai and Ahmedabad. Right now, travel time between Mumbai and Ahmedabad through trains is 8 hours. It will be brought down to just 3 hours with the help of bullet trains. But, that is not all that you should be excited about in this venture. Apparently, the train will go travel below the sea for 21 kilometers during the travel. Yes, you heard it right. For a stretch of 21 kilometers, the bullet train will go below the sea, as shown in the video. In a bid to modernize the Indian railways and to make travel by Indian railways an overall pleasant experience, Railway is taking a lot of steps. Suresh Prabhu, India's Railway minister, has emphasized on the importance of upgrading coaches in trains. The railways is planning to do the same and bring the railway coaches on par with those in European countries.",
        "kathmandu university dhulikhel nepal",
        "final project demo presentation at leapfrog technology inc",
        "i am bijaya prasad kuikel bijayananda from kathmandu university i learnt so many things and today i completed this project i am really happy to learn this please tell me how are you feeling thank you"
      ],
      isClockStart: false,
      result: {
        totalRightChar: 0, // total Right characters
        totalWrongChar: 0, // total wrong characters
        totalChar: 0, // total typing content characters
        totalWords: 0, // total typing content words
        // https://www.speedtypingonline.com/typing-equations
        NetWPM: 0, // Gross WPM = (All Typed Entries/5)/Time (min)
        GrossWPM: 0, // Net WPM = = Gross WPM - (Uncorrected Errors)/Time (min)
        Accuracy: 0,
      }
    };
  },
  methods: {
    // this function is main one which generates the lessons/ words
    generateWords: function() {
      var that = this;

      that.count = 0;
      var totalLessons = that.lessons.length;

      // we need to get random number from the above array so pass the parameters
      var lessonsNum = that.getRandomNumber(0, totalLessons);

      that.word = that.lessons[lessonsNum];

      // here goes the core code for displaying the contents got from the array;
      var lesson = document.getElementById("lesson");

      var newDiv = document.createElement("div");
      newDiv.setAttribute("id", "thisClass");
      lesson.appendChild(newDiv);

      // Total Character and Words
      that.result.totalChar = that.word.length;
      that.result.totalWords = that.countWords(that.word);

      for (var i = 0; i < that.word.length; i++) {
        var spans = document.createElement("span");
        spans.setAttribute("id", "span" + i);
        spans.innerHTML = that.word[i];
        newDiv.appendChild(spans);
      }

      // this piece of code will highlight the first element
      this.highlight(0);
    },

    getRandomNumber: function(min, max) {
      var ran = Math.floor(Math.random() * (max - min) + min);
      // console.log(ran);
      return ran;
    },

    // this function is used to highlight .. it will give hint for which letter to type
    highlight: function(cnt) {
      // check on consoles you may see something interesting :P
      // console.log("count is : " + this.count);
      // console.log("cnt is : ", +cnt);
      if (cnt < this.word.length) {
        var get = document.getElementById("span" + cnt);
        get.style.background = "cyan";
        get.style.color = "#28463b";
        get.style.padding = "5px";
        get.style.border = "2px solid black";
      }
    },

    // this function will check if we need the new word
    checkNewWord: function() {
      if (this.count === this.word.length) {
        // we will reset the value of matched and error to 0 again
        // var tags = document.getElementById("lesson");
        // // delete the class thisclass
        // var deleteid = document.getElementById("thisClass");
        // tags.removeChild(deleteid);
        // again lets generate words means we will create the above deleted class again
        // this.generateWords();
        this.$refs.countdown.stop();
      }
    },

    // Count Total Words in String
    countWords: function(s) {
      s = s.replace(/(^\s*)|(\s*$)/gi, ""); //exclude  start and end white-space
      s = s.replace(/[ ]{2,}/gi, " "); //2 or more space to 1
      s = s.replace(/\n /, "\n"); // exclude newline with a start spacing
      return s.split(" ").filter(function(str) {
        return str != "";
      }).length;
    },

    // Format Currencie and Float Character: @return: two char
    formatFloatNumber: function(value) {
      var val = (value/1).toFixed(2).replace('.', '.');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },

    // Count Real-Time Typing Speed
    countTypingSpeed: function(totalMinutes) {
      // Gross WPM = (All Typed Entries/5)/Time (min)
      // Net WPM = Gross WPM - (Uncorrected Errors)/Time (min)
      // Accuracy = (Total Corrected Entries/Total Entries) * 100
      var gross_wpm = (this.count/5)/totalMinutes;
      var net_wpm = gross_wpm - (this.result.totalWrongChar/totalMinutes);
      var accuracy = ((this.result.totalRightChar/this.count) * 100);

      this.result.NetWPM = this.formatFloatNumber(net_wpm);
      this.result.GrossWPM = this.formatFloatNumber(gross_wpm);
      this.result.Accuracy = this.formatFloatNumber(accuracy);
    },

    // This event fires when the countdown is in progress.
    handleCountdownProgress: function(data) {
      // console.log("days : " + data.days);
      // console.log("hours : " + data.hours);
      // console.log("minutes : " + data.minutes);
      // console.log("seconds : " + data.seconds);
      // console.log("totalDays : " + data.totalDays);
      // console.log("totalHours : " + data.totalHours);
      // console.log("totalMinutes : " + data.totalMinutes);
      // console.log("totalSeconds : " + data.totalSeconds);
      // console.log("Total Time Duration : " + this.totalTime);
      // console.log("Run Time Duration : " + (this.totalTime - ((data.minutes * 60) + data.seconds)));
      // debugger
      // Count Typing Speed
      this.countTypingSpeed(((this.totalTime / 1000) - ((data.minutes * 60) + data.seconds))/60);
    },

    // This event fires when the countdown stops.
    handleCountdownEnd: function() {
      alert("Stop Countdown");
    }
  },
  mounted() {
    var that = this;
    window.$ = window.jQuery = require("jquery");

    this.generateWords();

    function isCapsLock(status) {
      var capsLockBtn = $("#CapsLock");
      var allChar = $("#keyboard ul li.char");

      // Active Button Backgroud
      if (status === true) {
        capsLockBtn.addClass("active");

        /**
         * All Character [uppercase]
         */
        if (typeof allChar == "object") {
          $.each(allChar, function(index, el) {
            $(el).css("text-transform", "uppercase");
          });
        }
      } else {
        capsLockBtn.removeClass("active");

        /**
         * All Character [lowercase]
         */
        if (typeof allChar == "object") {
          $.each(allChar, function(index, el) {
            $(el).css("text-transform", "lowercase");
          });
        }
      }
    }

    var chekOldScrollValue = ""; // Scroll Typing Content

    window.onkeydown = function(event) {
      var key = event.key; // keyboard key
      var keyValue = event.which; // keyboard key value
      var keyCode = event.code; // keyboard key code
      var isShift = event.shiftKey; // shift key active
      var isCapsLockValue = event.getModifierState("CapsLock"); // CapsLock key active

      // Start Time Clock
      if (that.isClockStart === false) {
        that.$refs.countdown.start();
        that.isClockStart = true;
      }

      // console.log(event.which);
      // console.log(isCapsLockValue);
      isCapsLock(isCapsLockValue);

      // Scroll Typing Content
      if (that.count > 0) {
        var scrollTo = $("#thisClass span:nth-child(" + (that.count + 1) + ")");
        var scrollToValue =
          scrollTo.offset().top -
          $("#thisClass").offset().top +
          $("#thisClass").scrollTop();

        if (scrollToValue !== chekOldScrollValue) {
          $("#thisClass").animate({
            scrollTop: scrollToValue
          });
          chekOldScrollValue = scrollToValue;
        }
      }

      /**
       * Active/Deactive Key
       */
      if (keyCode !== "CapsLock") {
        var id = $("#" + keyCode);

        if (id !== null) {
          // Check Shift Key Active
          if (isShift) {
            id.css("text-transform", "uppercase");
          }

          id.addClass("active");

          setTimeout(function() {
            id.removeClass("active");
          }, 150);
        }
      }

      /**
       * If CapsLock Key Press
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

        /**
         * All Character [uppercase, lowercase]
         */
        if (typeof allChar == "object") {
          if (isCapsLockValue === true) {
            $.each(allChar, function(index, el) {
              $(el).css("text-transform", "lowercase");
              setTimeout(function() {
                $(el).css("text-transform", "uppercase");
              }, 150);
            });
          } else {
            $.each(allChar, function(index, el) {
              $(el).css("text-transform", "uppercase");
              setTimeout(function() {
                $(el).css("text-transform", "lowercase");
              }, 150);
            });
          }
        }
      }

      if (
        (keyValue > 47 && keyValue < 58) ||
        (keyValue > 64 && keyValue < 91) ||
        (keyValue > 96 && keyValue < 123) ||
        keyValue == 32 ||
        keyValue == 222 ||
        keyValue == 190 ||
        keyValue == 192 ||
        keyValue == 187 ||
        keyValue == 219 ||
        keyValue == 221 ||
        keyValue == 220 ||
        keyValue == 186 ||
        keyValue == 222 ||
        keyValue == 188 ||
        keyValue == 191
      ) {
        var cnt = that.count + 1;
        that.highlight(cnt);

        // Decrease Number in Total Typing Character
        --that.result.totalChar;

        // var inputToNum = String.fromCharCode(keyValue).toLowerCase();
        var inputToNum = key;
        // console.log("Input Value : " + inputToNum);

        var check = that.word.charAt(that.count);
        // console.log("Word Value : " + check);

        if (inputToNum === check) {
          console.log("Word Matched.");
          ++that.result.totalRightChar;
          var getSpan = document.getElementById("span" + that.count);
          getSpan.style.color = "blue";
          getSpan.style.background = "none";
          getSpan.style.color = "#fff";
          getSpan.style.padding = "0px";
          getSpan.style.border = "0px solid black";
          that.count++;
        } else {
          console.error("Word Not Matched.");
          ++that.result.totalWrongChar;
          var getSpan = document.getElementById("span" + that.count);
          getSpan.style.color = "white";
          getSpan.style.background = "red";
          getSpan.style.color = "#fff";
          getSpan.style.padding = "0px";
          getSpan.style.border = "0px solid black";
          that.count++;
        }
        that.checkNewWord();
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

/** Typing Content Div */
#thisClass {
  width: 96.4%;
  height: 113px;
  overflow-y: scroll;
}

/**
 * Custom Scrollbar Styling
 * https://codepen.io/devstreak/pen/dMYgeO
 */
#thisClass::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
  border-radius: 10px;
}

#thisClass::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f5f5;
}

#thisClass::-webkit-scrollbar-thumb {
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(0.44, rgb(122, 153, 217)),
    color-stop(0.72, rgb(73, 125, 189)),
    color-stop(0.86, rgb(28, 58, 148))
  );
}
</style>
