/*
This is free software, its code can be redistributed and/or modified at will for any purpose. Just leave this header here. Thanks
--MrKmg
*/

/*

callback : function(ev)

Options:

	time: 	Period of time a user should have to hold their mouse button down on an object to fire the event;
			Measured in Milliseconds
			Defaults to 5000
	click: 	Which mouse buttons should count
			left, middle, right, left_right, or all
			defaults to all

*/

(function( $ ){
    $.fn.onHold= function(callback,options) {
		
		var settings = $.extend({
			time:5000,
			click:'all'
		},options);
		
		return this.each(function(){
			var $this = $(this);
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
								 callback(ev);
							}},settings.time);

					$this.mouseup(function(ev){
						$this.data('onHold_selected',false);
					});
				}
			});
		});
    };
})( jQuery );