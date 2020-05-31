<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'prointex' );

/** Имя пользователя MySQL */
define( 'DB_USER', 'root' );

/** Пароль к базе данных MySQL */
define( 'DB_PASSWORD', '' );

/** Имя сервера MySQL */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'nFo3DK=oq7[C7?sD}XifaCr?AL06=Ln<vuy~N0Kd5&A]+<L^T:8#]j$;]89Mt.=e' );
define( 'SECURE_AUTH_KEY',  'n~K$|h{gKV=#mO>^:V+Bn:[a0q1((]YvK[na,m^:{i601_N^b6XNQ_3j_/UI!GK$' );
define( 'LOGGED_IN_KEY',    '%VZHNYd&^MEh ]/B<>EFPwa(PkYW0w*Sa{,Vn!2na[}W<;{yhOfO{BnFL@6=-J`k' );
define( 'NONCE_KEY',        'e]=plc&GD:GX}r5HTLtK)F8_gByGr{~.2R{vq8toeS59A*4>7`xB5:AJav=Rsuc=' );
define( 'AUTH_SALT',        '2SDG-NDY=-(F?o?)5!D|lkkd:i!P~E2,v|b`F1w.DBZ&GpBYmKQ78|{@ ,=7F rL' );
define( 'SECURE_AUTH_SALT', '9c4(o*&jxcX|=6PA[>gHgc55_/$=wLAs3j|Icj-KCXZ+<2sfT{U@ zXrN2S80)r1' );
define( 'LOGGED_IN_SALT',   '2t{pi@U SjPMK4Rz^NR>myME[wa?@N>~tBd:9%U)Eg##IHf#7OgH6hX>*|.%$[Om' );
define( 'NONCE_SALT',       '|(a0+^gIh]wwDq_;K&h6t:tBX<Vx;sO9t}^+FVF^&LM|!;T;=wyR?7dJg pQyj;X' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once( ABSPATH . 'wp-settings.php' );
