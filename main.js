jQuery(document).ready(function() {
	lazyload();
	jQuery('#search').on('input', function() {
		if(jQuery('#search').val().length > 0) {
		jQuery(".column").each(function() { jQuery(this).hide(); });
		jQuery(".namegame:contains('"+(jQuery('#search').val().toLowerCase()).replace("'", "").replace("\"", "")+"')").parent().show();
		} else {
			jQuery(".column").each(function() { jQuery(this).show(); });
		}
	});
	
});

