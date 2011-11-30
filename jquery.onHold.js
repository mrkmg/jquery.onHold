(function( $ ){
    $.fn.onHold= function(time,action) {
        this.data('onHold_selected',false);
        this.mousedown(function(){
            $(this).data('onHold_selected',true);
            var object = this;
            setTimeout(function(){
                if($(object).data('onHold_selected')){
                     action();
                }
            },time);
        });
        this.mouseup(function(){
            $(this).data('onHold_selected',false);
        });
       return this;
    };
})( jQuery );