// JS commun à toutes les pages
export default {
  init() {
    console.log('Je suis dans toutes les pages');
    let $trigger = $('[data-toggle="card"]');
    $($trigger).click(function (e) { 
      e.preventDefault();
      let type = $(this).data('type');
      let card = $(this).parents('article');
      let target = $(card).find('[data-opener="'+ type +'"]');
      
      if(!$(target).hasClass("open")){
        $(card).find('[data-opener]').addClass('closed').removeClass('open');
        $(target).addClass("open").removeClass('closed');
        
        $($trigger).removeClass('active');
        $(this).addClass('active');
      }
      
    });
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
