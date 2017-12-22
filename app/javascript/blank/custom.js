import $ from "jquery";

$(function() {
  $('h1').on('click', event => {
    console.log('Jquery works');
  });

  $('span').on('click', e => console.log(`${event.target.textContent} Jquery works for sure`) );
});
