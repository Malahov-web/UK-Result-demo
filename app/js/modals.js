/* Работает под jQuery 1.7 */

/*
 * . Modal показать/скрыть 
 * ----------------------------------------------------------------- 
 */	

 // jQuery(document).ready(function() {


 	function modals(argument) {		


		$('.js-modal-open').click(function( event ) {
			event.preventDefault();
		});

		// var overlay = jQuery('.overlay');
		var overlay = jQuery('#overlay');

		jQuery('.js-modal-open').on( 'click', function(){ 
	  
			var target_id = jQuery(this).attr('data-target'); 
			
			overlay.fadeIn(600);
			
			jQuery('#'+target_id+'').slideDown(600);
			
		});
		
		
		jQuery('.js-modal-close').on( 'click', function(){ 
	  
			target_id = jQuery(this).attr('data-target'); 
			overlay.fadeOut(600);
			//jQuery('#'+target_id+':visible').slideUp(600);	
			jQuery(this).closest('.js-modal').slideUp(600);
			
		});	
		
		
		// Скрываем
		// jQuery(document).mouseup(function (e){ // событие клика по веб-документу

		overlay.on( 'click', function(e){ 
		
			var modal = overlay.find('.js-modal'); // тут указываем ID элемента
			if (!modal.is(e.target) && modal.has(e.target).length === 0) { // если клик был не по нашему блоку // и не по его дочерним элементам
			
				//div.hide(); // скрываем его 			
				
				overlay.fadeOut(600);	
				modal.slideUp(600);
				//jQuery('.js-modal:visible').slideUp(1600);
				//modal=""; 
				
			}
			
		}); 
		



 	}
  
// });