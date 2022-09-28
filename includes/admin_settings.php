<?php

if ( ! defined( 'ABSPATH' ) )
{
	exit( 'restricted access' );
}

/**
 * Admin Settings Page
 *
 * @author Sajjad Hossain Sagor
 */
class PRE_EV_ADMIN_SETTINGS
{
    private $settings_api;

    private $timezones;

    function __construct()
    {	
    	// add settings api wrapper
		require_once PRE_EV_PLUGIN_PATH . 'includes/vendor/class.settings-api.php';
        
        $this->settings_api = new PRE_EV_SETTINGS_API;

        add_action( 'admin_init', array( $this, 'admin_init') );
        
        add_action( 'admin_menu', array( $this, 'admin_menu') );
    }

    public function admin_init()
    {
        //set the settings
        $this->settings_api->set_sections( $this->get_settings_sections() );
        
        $this->settings_api->set_fields( $this->get_settings_fields() );

        //initialize settings
        $this->settings_api->admin_init();
    }

    public function admin_menu()
    {
        add_options_page( __( 'Preload Everything', 'preload-everything' ), __( 'Preload Everything', 'preload-everything' ), 'manage_options' , 'preload-everything.php', array( $this, 'render_settings_page' ) );
    }

    public function get_settings_sections()
    {
        $sections = array(
            array(
                'id'    => 'pre_ev_basic_settings',
                'title' => __( 'General Settings', 'preload-everything' )
            ),
        );
        
        return $sections;
    }

    /**
     * Returns all the settings fields
     *
     * @return array settings fields
     */
    public function get_settings_fields()
    {
		$settings_fields = array(
            'pre_ev_basic_settings' => array(
                array(
                    'name'    => 'enable_plugin',
                    'label'   => __( 'Enable Preloading', 'preload-everything' ),
                    'type'    => 'checkbox',
                    'desc'    => __( 'Checking this box will enable the plugin functionality.', 'preload-everything' )
                ),
                array(
                    'name'    => 'preloading_url_host',
                    'label'   => __( 'Enable Preloading For', 'preload-everything' ),
                    'type'    => 'select',
                    'options' => array(
                    	'internal' => 'Internal Links Only',
                        'external' => 'External Links Only',
                    	'internal_external' => 'Internal & External Links',
                    ),
                    'desc'    => __( 'Select the preloading target links.', 'preload-everything' ),
                ),
            ),
        );

        return $settings_fields;
    }

    /**
     * Render settings fields
     *
     */
    public function render_settings_page()
    {    
        echo '<div class="wrap">';

	        $this->settings_api->show_navigation();
	       
	        $this->settings_api->show_forms();

        echo '</div>';
    }

    /**
	 * Returns option value
	 *
	 * @return string|array option value
	 */
	static public function get_option( $option, $section, $default = '' )
    {
	    $options = get_option( $section );

	    if ( isset( $options[$option] ) )
        {
	        return $options[$option];
	    }

	    return $default;
	}
}

$PRE_EV_ADMIN_SETTINGS = new PRE_EV_ADMIN_SETTINGS();
