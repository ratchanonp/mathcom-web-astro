<?php

/**
 * Template part for displaying single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package mathcom
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<header class="py-10 flex flex-col space-y-5 border-b-2 border-b-yellow-500">

		<!-- Category -->
		<div class="text-center">
			<?php
			$categories = get_the_category();
			if (! empty($categories)) {
				echo '<a href="' . esc_url(get_category_link($categories[0]->term_id)) . '" class="inline-block px-3 py-1 bg-yellow-400 text-xs font-kanit font-medium rounded-full">' . esc_html($categories[0]->name) . '</a>';
			}
			?>
		</div>
		<?php the_title('<h1 class="text-5xl font-kanit text-center">', '</h1>'); ?>
		<div class="text-center text-gray-500 text-sm">
			<?php mathcom_posted_on(); ?>
		</div>
	</header><!-- .entry-header -->

	<div <?php mathcom_content_class('entry-content mt-5'); ?>>
		<?php
		the_content(
			sprintf(
				wp_kses(
					/* translators: %s: Name of current post. Only visible to screen readers. */
					__('Continue reading<span class="sr-only"> "%s"</span>', 'mathcom'),
					array(
						'span' => array(
							'class' => array(),
						),
					)
				),
				get_the_title()
			)
		);

		wp_link_pages(
			array(
				'before' => '<div>' . __('Pages:', 'mathcom'),
				'after'  => '</div>',
			)
		);
		?>
	</div><!-- .entry-content -->

	<footer class="entry-footer">
		<?php // mathcom_entry_footer(); 
		?>
	</footer><!-- .entry-footer -->

</article><!-- #post-${ID} -->