/**
 * npm init
 * npm install --save-dev gulp
 * npm install --save-dev gulp-concat
 * npm install --save-dev gulp-footer
 * gulp
 */

const { src, dest, watch } = require('gulp');
const concat = require('gulp-concat');
const footer = require('gulp-footer');

/** Резузльтирующий файл */
const resultFile = 'index.user.js';
/** Результурующая директория */
const resultDir = './scripts';

const headerFile = 'src/header.js';
/** JS файлы для объединения */
const jsFiles = [
	'src/body.js',
	'src/modules/module.js',
];
/** Сборка */
function jsJoin() {
	return src(headerFile)
		.pipe(footer('(function() {')) // текст для добавления в конец
		.pipe(src(jsFiles))
		.pipe(concat(resultFile))
		.pipe(footer('})();')) // текст для добавления в конец
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
exports.default = function () {
	watch([headerFile, ...jsFiles], jsJoin);
}