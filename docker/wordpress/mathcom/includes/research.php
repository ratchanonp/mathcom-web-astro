<?php 

add_action( 'rest_api_init', function () {
    register_rest_route( 'mathcom/v1', '/research', array(
        'methods' => 'GET',
        'callback' => 'get_research_list',
    ));

});

function research_list_data($research, $is_mini = false) {
    $research_meta = get_post_meta($research->ID);

    if ($is_mini) {
        return [
            'id' => $research->ID,
            'title' => $research->post_title,
        ];
    }
    
    return [
        'id' => $research->ID,
        'slug' => $research->post_name,
        'title' => $research->post_title,
        'thumbnail' => get_the_post_thumbnail_url($research->ID, 'medium'), // 'thumbnail', 'medium', 'large', 'full
    ];
}

function research_data($research) {
    $research_meta = get_post_meta($research->ID);
    
    return [
        'id' => $research->ID,
        'slug' => $research->post_name,
        'title' => $research->post_title,
        'thumbnail' => get_the_post_thumbnail_url($research->ID, 'medium'), // 'thumbnail', 'medium', 'large', 'full
    ];
}

function get_research_list($request) {
    $args = array(
        'post_type' => 'research',
        'posts_per_page' => -1,
    );

    $slug = $request['slug'];
    $is_mini = $request['is_mini'];
    $is_mini = filter_var($is_mini, FILTER_VALIDATE_BOOLEAN);
    $ids = array_map('intval', explode(',', $request['ids']));
    $ids = array_filter($ids);

    if (count($ids) > 0) {
        $args['post__in'] = $ids;
        $args['orderby'] = 'post__in';
    }
    
    if (isset($slug)) {
        $args['name'] = $slug;

        $query = new WP_Query($args);
        $researches = $query->posts;

        return array_map('research_data', $researches);
    }

    else {
        $query = new WP_Query($args);
        $researches = $query->posts;

        return array_map('research_list_data', $researches, array_fill(0, count($researches), $is_mini));
    }
}