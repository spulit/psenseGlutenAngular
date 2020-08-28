$(document).ready(function(){
    var selector = '#translateEsI,#translateEs,#translateCaI,#translateCa';
    
    $(selector).on('click', function(e){
      e.preventDefault();
      startLang( $(this) );
    });
    
    var startLang = function(el){
      var el = $(el);
      var text = el.attr('data-text');

      loadLang(text);
      $('html').attr('lang', text);
    };
  
    var loadLang = function(lang){
      var processLang = function(data){
        var arr = data.split('\n');
        for(var i in arr){
          if( lineValid(arr[i]) ){
            var obj = arr[i].split('=>');
            assignText(obj[0], obj[1]);
          }
        }
      };
      
      var assignText = function(key, value){
        $('[data-lang="'+key+'"]').each(function(){
          var attr = $(this).attr('data-destine');
          if(typeof attr !== 'undefined'){
            $(this).attr(attr, value);
          }else{
            $(this).html(value);
          }
        });
      };
      
      var lineValid = function(line){
        return (line.trim().length > 0);
      };
      
      $('.loading-lang').addClass('show');
      
      $.ajax({
        url: 'lang/'+lang+'.txt',
        error:function(){
          alert('No se cargó traducción');
        },
        success: function(data){
          $('.loading-lang').removeClass('show');
          processLang(data);
        }
      });
    };  
  });