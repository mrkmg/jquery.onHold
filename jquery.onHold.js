/**
 * This is free software. This software may be distributed under the terms of this General Public License v2.
 * http://www.gnu.org/licenses/gpl-2.0.html
 * --MrKmg
 */

/**
 *
 * callback : function(ev)
 *
 * Options:
 *
 *	time: 	Period of time a user should have to hold their mouse button down on an object to fire the event;
 *			Measured in Milliseconds
 *			Defaults to 5000
 *	click: 	Which mouse buttons should count
 *			left, middle, right, left_right, or all
 *			defaults to all
 *
 */
 
/**
 * Examples
 * 
 * using defaults (5 seconds, any mouse button)
 * 	$(selector/object).onHold(function(ev){ alert('onHold fired') });
 *
 * Custom options (1 second, only left mouse button
 * 	$(selector/object).onHold(function(ev){ alert('onHold fired') },{time:1000,click:'left'});
 */

(function( $ ){
    $.fn.onHold= function(callback,options) {
		
		var settings = $.extend({
			time:5000,
			click:'all'
		},options);
		
		return this.each(function(){
			var $this = $(this);
			$this.onHold_callback = callback;
			$this.data('onHold_selected',false);
			$this.mousedown(function(ev){
				var valid = false;
				switch(settings.click)
				{
				case 'left':
					if(ev.button == 0) valid = true;
					break;
				case 'right':
					if(ev.button == 2) valid = true;
					break;
				case 'middle':
					if(ev.button == 1) valid = true;
					break;
				case 'left_right':
					if(ev.button == 0 || ev.button == 2) valid = true;
					break;
				case 'all':
					valid = true;
					break;
				}
				
				if(valid)
				{
					$this.data('onHold_selected',true);
					
					setTimeout(function(){
							if($this.data('onHold_selected')){
								$this.onHold_callback(ev);
							}},settings.time);

					$this.mouseup(function(ev){
						$this.data('onHold_selected',false);
					});
				}
			});
		});
    };
})( jQuery );