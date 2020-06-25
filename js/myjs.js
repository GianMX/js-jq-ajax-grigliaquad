$(document).ready(function() {
  $(".column").click(function() {
    var clickRandom = $(this);
  // Griglia 6x6, ad ogni click sul quadrato parte una richiesta AJAX che prende un numero random da 1 a 9.
    $.ajax({
      "url" : "https://flynn.boolean.careers/exercises/api/random/int",
      "method" : "GET",
      "success" : function(reply) {
      var result = reply.response;
      // Se è <= 5 il quadrato diventa giallo
        if (result <= 5) {
        clickRandom.addClass('yellow').text(result);
        clickRandom.removeClass('green').text(result);
        }
        // Se è > di 5 il quadrato diventa verde
        else if (result > 5) {
        clickRandom.addClass('green').text(result);
        clickRandom.removeClass('yellow').text(result);
        }
        },
      "error" : function() {
      alert('Ops! Qualcosa è andato storto...');
    }
    });
  });
});
