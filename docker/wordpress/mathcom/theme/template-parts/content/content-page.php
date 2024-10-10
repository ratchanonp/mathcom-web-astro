<?php
/**
 * Template part for displaying pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package mathcom
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<!-- <header
		class="h-40 bg-black/50 bg-[url('https://math.sc.chula.ac.th/mhvh/MHVH-Corner.jpg')] bg-cover bg-[center_50%] bg-no-repeat bg-blend-darken [clip-path:polygon(0_0,100%_0,100%_80%,0_100%)] lg:h-80"
	>
		<div class="mx-auto flex h-full max-w-screen-xl flex-col items-start justify-center space-y-5 px-5">
			<h1 class="text-left font-kanit text-2xl font-semibold text-white lg:text-6xl"><?php the_title() ?></h1>
			<h2 class="font-kanit text-white lg:text-2xl">{subtitle}</h2>
		</div>
	</header>

	<?php mathcom_post_thumbnail(); ?> -->

	<div <?php mathcom_content_class( 'entry-content' ); ?>>
		<?php
		the_content();

		wp_link_pages(
			array(
				'before' => '<div>' . __( 'Pages:', 'mathcom' ),
				'after'  => '</div>',
			)
		);
		?>
	</div><!-- .entry-content -->

	<?php if ( get_edit_post_link() ) : ?>
		<footer class="entry-footer">
			<?php
			edit_post_link(
				sprintf(
					wp_kses(
						/* translators: %s: Name of current post. Only visible to screen readers. */
						__( 'Edit <span class="sr-only">%s</span>', 'mathcom' ),
						array(
							'span' => array(
								'class' => array(),
							),
						)
					),
					get_the_title()
				)
			);
			?>
		</footer><!-- .entry-footer -->
	<?php endif; ?>

</article><!-- #post-<?php the_ID(); ?> -->
