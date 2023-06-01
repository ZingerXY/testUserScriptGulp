/**
 * npm init
 * npm install --save-dev gulp
 * npm install --save-dev gulp-concat
 * gulp
 */

const { src, dest, watch } = require('gulp');
const concat = require('gulp-concat');

/** Резузльтирующий файл */
const resultFile = 'index.user.js';
/** Результурующая директория */
const resultDir = './';
/** JS файлы для объединения */
const jsFiles = [
    'src/header.js',
    'src/modules/module.js',
    'src/body.js',
];
/** Сборка */
function jsJoin() {
    return src(jsFiles)
        .pipe(concat(resultFile))
        .pipe(dest(resultDir));
}

/**
 * Команда для сборки
 * > gulp join
 */
exports.join = jsJoin;

/**
 * По умолчанию наблюдение за именением файлов
 * > gulp
 */
exports.default = function() {

    watch(jsFiles, jsJoin);
}