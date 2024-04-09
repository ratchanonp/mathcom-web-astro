<?php

add_action( 'rest_api_init', function () {
    register_rest_route( 'mathcom/v1', '/events', array(
        'methods' => 'GET',
        'callback' => 'get_event',
    ));

    register_rest_route( 'mathcom/v1', '/event-dates', array(
        'methods' => 'GET',
        'callback' => 'get_event_dates',
    ));
});

function get_event_data($event) {
    $event_meta = get_post_meta($event->ID);
    $event_start = $event_meta['event_start'][0];
    $event_end = $event_meta['event_end'][0];

    $category_names = [];
    $categories = get_the_terms($event->ID, 'event-category');
    if ($categories) {
        foreach ($categories as $category) {
            $category_names[] = $category->name;
        }
    }

    return [
        'id' => $event->ID,
        'title' => $event->post_title,
        'thumbnail' => get_the_post_thumbnail_url($event->ID, 'medium'), // 'thumbnail', 'medium', 'large', 'full
        'speaker' => $event_meta['speaker'][0],
        'location' => $event_meta['location'][0],
        'register_link' => $event_meta['register_link'][0],
        'more_information' => $event_meta['more_information'][0],
        'event_start' => $event_start,
        'event_end' => $event_end,
        'category' => $category_names,
    ];
}

/**
 * Get All Events
 * 
 */
function get_event($request) {
    $args = array(
        'post_type' => 'event',
    );

    $limit = $request['limit'] ? $request['limit'] : 10;
    $args['posts_per_page'] = $limit;

    // Order by event start date
    $args['meta_key'] = 'event_start';
    $args['orderby'] = 'meta_value';
    $args['order'] = 'ASC';


    $event_start_date = $request['date'] ? $request['date'] : time();
    $event_start_date_midnight = date('Y-m-d 00:00:00', strtotime($event_start_date));
    $event_start_date_23_59 = date('Y-m-d 23:59:59', strtotime($event_start_date));

    if (isset($request['date'])) {
        $args['meta_query'] = array(
            array(
                'key' => 'event_start',
                'value' => array($event_start_date_midnight, $event_start_date_23_59),
                'compare' => 'BETWEEN',
                'type' => 'DATETIME',
            )
        );
    }

    $query = new WP_Query($args);
    $events = $query->posts;

    return array_map('get_event_data', $events);
}

/**
 * Get list of date in month that has event
 * if not define month, it will return current month
 */
function get_event_dates($request) {
    $args = array(
        'post_type' => 'event',
    );
    
    // $request['month'] = '2021-09'
    $month = $request['month'] ? strtotime($request['month']) : time();

    $month_start = date('Y-m-01', $month);
    $month_end = date('Y-m-t', $month);

    $args['meta_query'] = array(
        array(
            'key' => 'event_start',
            'value' => array($month_start, $month_end),
            'compare' => 'BETWEEN',
            'type' => 'DATETIME',
        )
    );

    $query = new WP_Query($args);
    $events = $query->posts;

    $dates = [];
    foreach ($events as $event) {
        $event_meta = get_post_meta($event->ID);
        $event_start = $event_meta['event_start'][0];
        $event_start_date = date('Y-m-d', strtotime($event_start));
        $dates[$event_start_date] = $event_start_date;
    }

    return array_values($dates);
}