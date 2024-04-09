<?php

add_action( 'rest_api_init', function () {
    register_rest_route( 'mathcom/v1', '/directories', array(
        'methods' => 'GET',
        'callback' => 'get_directory_list',
    ));
});

function directory_list_data($directory) {
    $directory_meta = get_post_meta($directory->ID);
    
    return [
        'id' => $directory->ID,
        'slug' => $directory->post_name,
        'title' => get_field("first_name_eng", $directory->ID) . ' ' . get_field("last_name_eng", $directory->ID),
        'first_name' => $directory_meta['first_name_eng'][0],
        'last_name' => $directory_meta['last_name_eng'][0],
        'picture' => wp_get_attachment_url($directory_meta['picture'][0]),
        'academic_rank' => $directory_meta['academic_rank'][0],
        'staff_type' => $directory_meta['staff_type'][0],
        'research_areas' => get_field('faculty_research_relationship' , $directory->ID),
    ];
}

function get_directory_list($request) {
    $args = array(
        'post_type' => 'faculty',
        'posts_per_page' => -1,
    );

    $staff_type = $request['staff_type'];
    $ids = $request['ids'];

    if (isset($ids)) {
        $args['post__in'] = explode(',', $ids);
    
        $query = new WP_Query($args);
        $directories = $query->posts;

        return array_map('directory_list_data', $directories);
    }

    if (isset($staff_type)) {
        $args['meta_query'] = array(
            array(
                'key' => 'staff_type',
                'value' => $staff_type,
                'compare' => '=',
            )
        );
    }


    $query = new WP_Query($args);
    $directories = $query->posts;

    return array_map('directory_list_data', $directories);
}

