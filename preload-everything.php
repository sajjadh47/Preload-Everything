<?php
/**
 * Plugin Name: Preload Everything
 * Description: Fasten Your Website Loading Speed By Preloading Internal Pages Ahead Of The Time For Your Visitors.
 * Plugin URI:  https://wordpress.org/plugins/preload-everything/
 * Author: Sajjad Hossain Sagor
 * Author URI: https://profiles.wordpress.org/sajjad67/
 * Version: 1.0.2
 * Text Domain: preload-everything
 * Domain Path: /languages
 * Requires at least: 5.6
 * Requires PHP: 7.0
 */
 
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) exit;

// ---------------------------------------------------------
// Define Plugin Folders Path
// ---------------------------------------------------------
if ( ! defined( 'PRE_EV_PLUGIN_PATH' ) ) define( 'PRE_EV_PLUGIN_PATH', plugin_dir_path( __FILE__ ) );

if ( ! defined( 'PRE_EV_PLUGIN_URL' ) ) define( 'PRE_EV_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

// ---------------------------------------------------------
// Load Language Translations
// ---------------------------------------------------------
add_action( 'plugins_loaded', 'pre_ev_load_plugin_textdomain' );

if ( ! function_exists( 'pre_ev_load_plugin_textdomain' ) )
{
	function pre_ev_load_plugin_textdomain()
	{
		load_plugin_textdomain( 'preload-everything', '', basename( dirname( __FILE__ ) ) . '/languages/' );
	}
}

// ---------------------------------------------------------
// Load Admin Settings
// ---------------------------------------------------------
require_once PRE_EV_PLUGIN_PATH . 'includes/admin_settings.php';

// ---------------------------------------------------------
// Add Go To Settings Page Link in Plugin List Table
// ---------------------------------------------------------
add_filter( 'plugin_action_links_' . plugin_basename(__FILE__), 'pre_ev_add_goto_settings_link' );

if ( ! function_exists( 'pre_ev_add_goto_settings_link' ) )
{
	function pre_ev_add_goto_settings_link( $links )
	{   
		$goto_settings_link = array( '<a href="' . admin_url( 'options-general.php?page=preload-everything.php' ) . '">' . __( "Settings", 'preload-everything' ) . '</a>' );
		
		return array_merge( $links, $goto_settings_link );
	}
}

// ---------------------------------------------------------
// Enqueue Plugin Scripts & Stylesheets in Front
// ---------------------------------------------------------
add_action( 'wp_enqueue_scripts', 'pre_ev_enqueue_scripts' );

if ( ! function_exists( 'pre_ev_enqueue_scripts' ) )
{
	function pre_ev_enqueue_scripts()
	{
		$plugin_enabled 	= PRE_EV_ADMIN_SETTINGS::get_option( 'enable_plugin', 'pre_ev_basic_settings' );

		if ( $plugin_enabled == 'on' )
		{
			$pre_ev_script 	= [];
			
			$pre_ev_script['Allowed_Hosts'] = PRE_EV_ADMIN_SETTINGS::get_option( 'preloading_url_host', 'pre_ev_basic_settings' );

			wp_enqueue_script( 'pre_ev_script', plugins_url( '/assets/js/script.js', __FILE__ ), array( 'jquery' ) );

			wp_localize_script( 'pre_ev_script', 'PRE_EV', $pre_ev_script );
		}
	}
}
