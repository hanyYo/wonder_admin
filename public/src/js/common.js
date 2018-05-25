(function ($) {
  $(function () {
    $(document).on('click', '#accordion > li > a', function () {
    	var $this = $(this);
    	if($this.next().css('display') === 'block'){
    		$this.next().slideUp('fast')
    		$this.removeClass('on');
    		return false;
    	}

      $this.parent().siblings().removeClass('active');
    	$this.parent().addClass('active');
    	$this.parent().siblings().find('ul').not(':animated').slideUp('fast');
    	$this.next().not(':animated').slideDown('fast');
    	return false;
    });
  });
})(jQuery);
