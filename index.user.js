// ==UserScript==
// @name         exempleGulpConcatUserScripts
// @namespace    exempleGulpConcatUserScripts
// @version      0.1
// @description  Пример сборки пользовательских скриптов
// @author       ZingerY
// @match        https://gulpjs.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gulpjs.com
// @grant        none
// ==/UserScript==


class Module {
    constructor() {
        this.name = 'Module';
    }

    getInfo () {
        return 'New ' + this.name;
    }
}

(function() {
    'use strict';
    console.log('Start ' + GM_info.script.name + ', v' + GM_info.script.version);
    let module = new Module();
    console.log(module.getInfo());
})();
