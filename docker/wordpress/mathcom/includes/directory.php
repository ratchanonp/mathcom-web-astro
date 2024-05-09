<?php

add_action( 'rest_api_init', function () {
    register_rest_route( 'mathcom/v1', '/directories', array(
        'methods' => 'GET',
        'callback' => 'get_directory_list',
    ));

    register_rest_route( 'mathcom/v1', '/directories' , array(
        'methods' => 'POST',
        'callback' => 'create_staff',
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

function create_staff($request) {
    /**
     * Create a new staff member with the given data
     * first_name_eng
     * last_name_eng
     * first_name_thai
     * last_name_thai
     * staff_type
     */

    $data = $request->get_json_params();

    $first_name_eng = $data['first_name_eng'];
    $last_name_eng = $data['last_name_eng'];
    $first_name_thai = $data['first_name_thai'];
    $last_name_thai = $data['last_name_thai'];
    $staff_type = $data['staff_type'];

    if (empty($first_name_eng) || empty($last_name_eng) || empty($first_name_thai) || empty($last_name_thai) || empty($staff_type)) { 
        return array(
            'message' => 'Please fill in all fields',
        );
    }


    // Create a new post object
    $post = array(
        'post_type' => 'faculty',
        'post_title' => $first_name_eng . ' ' . $last_name_eng,
        'post_status' => 'publish',
        'post_author' => 1,
    );

    // Set acf fields
    $post_id = wp_insert_post($post);
    
    update_field('first_name_eng', $first_name_eng, $post_id);
    update_field('last_name_eng', $last_name_eng, $post_id);
    update_field('first_name_thai', $first_name_thai, $post_id);
    update_field('last_name_thai', $last_name_thai, $post_id);
    update_field('staff_type', $staff_type, $post_id);

    return array(
        'message' => 'Staff member created successfully',
    );
}