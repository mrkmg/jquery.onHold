/*
This is free software, its code can be redistributed and/or modified at will for any purpose. Just leave this header here. Thanks
--MrKmg
*/

/*

Options:

	time: 	Period of time a user should have to hold their mouse button down on an object to fire the event;
			Measured in Milliseconds
			Defaults to 5000
*/

(function( $ ){
    $.fn.onHold= function(callback,options) {
		
		var settings = $.extend({
			time:5000
		},options);
		
		return this.each(function(){
			var $this = $(this);
			$this.data('onHold_selected',false);
			$this.mousedown(function(){
				$this.data('onHold_selected',true);
				setTimeout(function(){
					if($this.data('onHold_selected')){
						 callback();
					}
				},settings.time);
			});
			$this.mouseup(function(){
				$this.data('onHold_selected',false);
			});
		});
		
    };
})( jQuery );