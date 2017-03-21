<?php get_header(); ?>

<?php 
if ( have_posts() ) {
	while ( have_posts() ) {
		the_post(); 
		?>
		
		<div class="portfolio-item">
			<?php the_post_thumbnail(); ?>
			<h3 class="title"><a href="<?php the_permalink(); ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>"><?php the_title(); ?></a></h3>
		</div>

		<?php
	} // end while
} // end if
?>

<?php get_footer(); ?>
