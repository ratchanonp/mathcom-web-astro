<?php 

add_action( 'rest_api_init', function () {
    register_rest_route( 'mathcom/v1', '/course', array(
        'methods' => 'GET',
        'callback' => 'get_courses',
    ));

});


function course_data($course) {
    $course_meta = get_post_meta($course->ID);

    return [
        'id' => $course->ID,
        'slug' => $course->post_name,
        'title' => $course->post_title,
    ];
}


function get_courses($request) {
    $args = array(
        'post_type' => 'course',
        'posts_per_page' => -1,
    );

    $slug = $request['slug'];
    $acf_field_name = $request['field'];

    if (isset($slug)) {
        $args['name'] = $slug;

        if (isset($acf_field_name)) {
            $query = new WP_Query($args);
            $course = $query->posts[0];
            return get_field($acf_field_name, $course->ID);
        } else {
            $query = new WP_Query($args);
            $courses = array_map(function($course) {
                return course_data($course);
            }, $query->posts);
            return $courses;
        }
    }

    $query = new WP_Query($args);

    $courses = array_map(function($course) {
        return course_data($course);
    }, $query->posts);

    return $courses;
}