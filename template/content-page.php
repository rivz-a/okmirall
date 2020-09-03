<?php


?>
<div class="breadcrumbs pt-3">
	<div class=""><?php echo breadcrumbs(' | '); ?></div>
</div>

<h1><?php wp_title("", true); ?></h1>

<div class="entry-content">
		<?php
			the_content();			
		?>
</div><!-- .entry-content -->

