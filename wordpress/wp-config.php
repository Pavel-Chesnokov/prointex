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
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'prointex' );

/** Имя пользователя MySQL */
define( 'DB_USER', 'root' );

/** Пароль к базе данных MySQL */
define( 'DB_PASSWORD', 'root' );

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
define( 'AUTH_KEY',         'c%hYAS8k/wIX|6WP~h)wx*qfI10Bt_2C7yskrsutzZol?Ka6y%pauGIzlS48%Eb9' );
define( 'SECURE_AUTH_KEY',  'd^)t.QZuV9i.)8P/s*>z@.,w}&.A)<e,ntJS?X:jJ N;39|*V(+qnG8a;VKlNw7b' );
define( 'LOGGED_IN_KEY',    'e655M2r9YA)su8yfV}4Q3e4k|0?1Yk;L+bTMJ]+GT.Z @-m::t*3z=W`eVU0~MlE' );
define( 'NONCE_KEY',        '~e$}!zf|WAWk;me|9)&zieKTfx;-2^4>B1Fu:-O8U@BXjJM]WBoR=<<FRl~huIl!' );
define( 'AUTH_SALT',        '!ZaHo1QM2Ppw!I5>B#Bl#x4VZB>O-q5;cj6?k7j66TQ]v]KBqr}~~_hbju193g+_' );
define( 'SECURE_AUTH_SALT', 'gVNe*TWg$S*p?J0~;3xqmdx^;V{rfZDAANYwY,yvf+Dt>::0bEeWFKXbRmX>}bRM' );
define( 'LOGGED_IN_SALT',   'XCtudIu{NlgOz0^S6Jf+ts9+r=oll!SM%A J-<BjCM9b72`$dgC!ZY,:L*]a4*1d' );
define( 'NONCE_SALT',       'hMD]wHGao+v,1@JUh~~SziA cHAE5JpO<SbvVK>k|]coDgFOKQRyUW&X=AXAJ`-{' );

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
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
