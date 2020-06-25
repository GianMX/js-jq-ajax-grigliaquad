$(document).ready(function () {
  var numeroQuadrati = 36
    for (var i = 0; i < numeroQuadrati ; i++) {
      var source = $('#quadrato-template').html();
      var template = Handlebars.compile(source);
      var html = template();
      $('.wrap').append(html);
}
$(document).on('click','.box',
  function () {
    var questoQuadrato = $(this);
      $.ajax({
        url: 'https://flynn.boolean.careers/exercises/api/random/int',
        method: 'GET',
        success: function(data) {
        $(questoQuadrato).removeClass('yellow');
        $(questoQuadrato).removeClass('green');
        var result = data.response;
        $(questoQuadrato).children('h2').text(result);
          if (result <= 5) {
          $(questoQuadrato).addClass('yellow');
          }else if (result > 5) {
          $(questoQuadrato).addClass('green');
          }
        },
        error: function() {
        alert("Si è verificato un errore");
        }

        }
    );

  });
});
