// ==UserScript==
// @name         nospy-gmail
// @namespace    http://architecht.esy.es/
// @version      0.1
// @description  Clean google's click tracking in gmail
// @author       architecht
// @match        /^https?\:\/\/(gmail|mail|webmail)\.google\./
// @match        https://mail.google.com/mail/*
// @run-at       document-end
// ==/UserScript==
/* jshint -W097 */
'use strict';

function fixLinks() {
    var alink = document.getElementsByTagName("A");
    var cleanedLinks = 0;
    for (var i=0; i < alink.length; i++) {
        var t = alink[i];
        
        var badUrl = new RegExp('\/url?.*q=([^&]*)');
        if(badUrl.test(t)) {
            var href = t.getAttribute("href");
            var m = href.match(/url?.*q=([^&]*)/);
            t.setAttribute('href',decodeURIComponent(m[1]));
            cleanedLinks++;
        }
    }
    console.log("Clean Gmail cleaned " + cleanedLinks + "\n");
}

fixLinks();
