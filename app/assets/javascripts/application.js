// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

var BOT_WRONG_ANSWER = "Nope, sorry, wrong one, nope nope nope. Try again.";
var BOT_GOOD_ANSWER = "You got it! Get in touch with us: secret_services@muxumuxu.com.";
var PASSWORD = "123jaimelesinternets";

var PROMPT_HTML = "<p class=\"light-blue\">muxu.computer <span class=\"dark-blue\">git:(<span class=\"red\">secret_password</span>)</span></p>";

$(document).ready(function() {
  $('form').on('submit', function(e){
    var password = $('#password').val();
    var botAnswer = password === PASSWORD ? BOT_GOOD_ANSWER : BOT_WRONG_ANSWER;

    var previousMessages = $("#previous_messages");
    var lastAnswer = previousMessages.lastChild;

    var newPreviousMessage = document.createElement("div");
    newPreviousMessage.innerHTML =
      PROMPT_HTML + "<span class=\"user_input\">" + password + "</span>" +
      botAnswer;

      newPreviousMessage.appendTo(lastAnswer);
  });
});
