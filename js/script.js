// Javascript Code.
$(document).ready(function () {
  // $.get("_posts/2014-11-09.json", function(data){
  //
  //   var posts = JSON.parse(data);
  //   $(".posts").html(posts['posts'][0]['title']);
  //
  // });

  $(this).load("_posts/posts.json", function(data){
    var posts = JSON.parse(data);
    $(".posts").html(posts['posts'][0]['content']);
    $(".posts1").html(posts['posts'][1]['content']);
    $(".posts2").html(posts['posts'][2]['content']);
    $(".posts3").html(posts['posts'][3]['content']);
    $(".posts4").html(posts['posts'][4]['content']);
    //
  });
});

//Ocultar parrafos
$(document).ready(function() {
  $('.tendencias').click(function() {
    $('.posts').toggle('slow');
  });
});

$(document).ready(function() {
  $('.second').click(function() {
    $('.posts1').toggle('slow');
  });
});

$(document).ready(function() {
  $('.three').click(function() {
    $('.posts2').toggle('slow');
  });
});

$(document).ready(function() {
  $('.fourth').click(function() {
    $('.posts3').toggle('slow');
  });
});

$(document).ready(function() {
  $('.fifth').click(function() {
    $('.posts4').toggle('slow');
  });
});

//Configuracion Boton3
$(document).ready(function() {
  $('.boton3').click(function() {
    $('.ocultar').toggle('slow');
    $('.three').show('slow');
    $('.tema').toggle('slow');
    $('.posted3').toggle('slow');
    $('.ocultar2').toggle('show');
    $('.ocultar3').toggle('slow');
    $('.fifth').show('slow');
  });
});

//Configuracion Mensajes
$(document).ready(function() {
    $('.btn').click(function() {
      var toAdd = $("input[name=message]").val();
        $('.messages').append("<p>"+toAdd+"</p>");
    });
});

$(document).ready(function() {
    $('.btn1').click(function() {
      var toAdd = $("input[name=mensaje1]").val();
        $('.mensajes1').append("<p>"+toAdd+"</p>");
    });
});

$(document).ready(function() {
    $('.btn2').click(function() {
      var toAdd = $("input[name=mensaje2]").val();
        $('.mensajes2').append("<p>"+toAdd+"</p>");
    });
});

$(document).ready(function() {
    $('.btn3').click(function() {
      var toAdd = $("input[name=mensaje3]").val();
        $('.mensajes3').append("<p>"+toAdd+"</p>");
    });
});

$(document).ready(function() {
    $('.btn4').click(function() {
      var toAdd = $("input[name=mensaje4]").val();
        $('.mensajes4').append("<p>"+toAdd+"</p>");
    });
});

//Boton busqueda
$.expr[':'].icontains = function(obj, index, meta, stack){
  return (obj.textContent || obj.innerText || jQuery(obj).text() || '').toLowerCase().indexOf(meta[3].toLowerCase()) >= 0;
};

$(document).ready(function() {
  $('#buscar').keyup(function() {
    buscar = $(this).val();
    $('.lista p').removeClass('resaltar');
    if(jQuery.trim(buscar) != '') {
      $(".lista p:icontains('" + buscar + "')").addClass('resaltar');

    }
  });
}); 













