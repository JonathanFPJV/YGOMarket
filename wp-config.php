<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ygomarket' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'P1}ANlH{fO]km|G!1U!G.mxx^<1oi*N}7)X-2fPsU~[zK0?]$UZkBO^>*>{OAqbt' );
define( 'SECURE_AUTH_KEY',  'b4TsdPockx_1;VtK<(LNGC+4lkruZ+w[+Sln]H/d72b1,40l8P7@E|]x55eoI-G1' );
define( 'LOGGED_IN_KEY',    'SN5!sOuhnz`H%>V+F~P={9B2:~zd_Hv^|RMx9W>eGI<hZo6rj+Ca4V1?<WBv/;a*' );
define( 'NONCE_KEY',        ',HV|Rvl7K}%/Q@=>:%EwQV6O>eFrQ6bS%{)wvbe-rjYtM9YPN!x#Q?yynO_#c`jr' );
define( 'AUTH_SALT',        'v)wZ]Us<dexy7vMJ@0VG1#E?kfdwp_+}.uiaN6t:ud#k~T6UpLCl<?N)9T<;/uoB' );
define( 'SECURE_AUTH_SALT', ':lAUZa]PFb0vgT[}ATX(80GaAV36mE(CimO>~<E{U0G{g^n[Z`$!42$g?#>1jF(,' );
define( 'LOGGED_IN_SALT',   'hOXL7~bBxx!ME27e*ncUH#$II}Lh}Ne1v{CM7{H(86NumjI2/_4Lgg9plyxzvdS-' );
define( 'NONCE_SALT',       'w3 LtFd$x3.Yf(@X{}bi+F7YRu.s#OZ MjW41 MD!)Z)S%!d7g1jk;zT&kZC^D(g' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
