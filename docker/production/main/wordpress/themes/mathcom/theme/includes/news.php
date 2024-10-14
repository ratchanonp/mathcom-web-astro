<?php

add_action( 'rest_api_init', function () {
    register_rest_route( 'mathcom/v1', '/news', array(
        'methods' => 'GET',
        'callback' => 'get_news',
    ));
});


function get_news_data($news) {
    $news_meta = get_post_meta($news->ID);
    $date = $news->post_date;

    return [
        'id' => $news->ID,
        'title' => $news->post_title,
        'thumbnail' => get_the_post_thumbnail_url($news->ID, 'full'), // 'thumbnail', 'medium', 'large', 'full
        'date' => $date,
        'slug' => get_permalink($news->ID),
    ];
}

/**
 * Get All News
 * 
 */
function get_news($request) {
    $args = array(
        'post_type' => 'post',
    );

    $category = $request['category'];
    $parent = $request['parent'];
    if (isset($category)) {
        $args['tax_query'] = array(
            array(
                'taxonomy' => 'category',
                'field' => 'slug',
                'terms' => $category,
                'parent' => $parent,
            )
        );
    }

    $limit = $request['limit'] ? $request['limit'] : 10;
    $args['posts_per_page'] = $limit;

    // Order by post date
    $args['orderby'] = 'date';
    $args['order'] = 'DESC';

    $query = new WP_Query($args);
    $news = $query->posts;

    return array_map('get_news_data', $news);

}