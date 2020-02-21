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
define( 'AUTH_KEY',         'mL}kmZ-Q=0ysTN[bZx.Fb~>f<jA$=rG{0nAMI!Av NBEUg/O2RNjXIm+Y?qG[T7v' );
define( 'SECURE_AUTH_KEY',  '0a1:Ci.I4:2EMNUY_7M8gap<8}Rr82evj<9wyF^9`mCA}COEf.K>HR0[C0O*!7qq' );
define( 'LOGGED_IN_KEY',    '&M[`CD-PQaAG|nl.X=4Ojha`>t!!Q:~j[Pr)P6o1c~^ -%> &~lQW_vl`r7Z9^C(' );
define( 'NONCE_KEY',        'j?t#6P.}>6+=$4eM%+vwIIR7YZ5g&dbdFSs!J !a m`TTL4W! ,2VDbl=WAR$=>s' );
define( 'AUTH_SALT',        'bCMZ%CUEkg4UNP1>(uHshSi,3S%6K-x1N56w@31^:UwyIx9ZuzxLko8uM3m}}Xjw' );
define( 'SECURE_AUTH_SALT', '*ncn]IP|A0_jP7nmP|xe)cr,?k%#_:uHNmQMZh71s^fF-0o2q!1aG::)@00 1%|(' );
define( 'LOGGED_IN_SALT',   'YV*5R]c]0s|i;kx#U?Q$Zw{[GDEB< d!ZQL1L>_1=7B8=efpj3o`imY wBHu/eZ>' );
define( 'NONCE_SALT',       'ns+n}eahA?8[}$%[aE)oXa{vu&Fvc,dT_P!Zt,m/4pJR(K1H!d(|<+)odF|v2*Zq' );

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
