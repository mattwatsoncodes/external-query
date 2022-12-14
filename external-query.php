<?php
/**
 * Plugin Name:       External Query
 * Description:       Proof of Concept block for creating a query loop from an external source.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Matt Watson
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       external-query
 * Domain Path:       external-query
 *
 * @package           external-query
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function external_query_external_query_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'external_query_external_query_block_init' );
