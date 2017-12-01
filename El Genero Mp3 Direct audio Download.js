// ==UserScript==
// @name         El Genero Mp3 Direct audio Download
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       braymarco
// @match        http://elgeneromp3.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
     var mp3=document.getElementsByClassName("btn-dl")[0]['href'];
     document.getElementsByClassName("btn-dl")[0].style.display="inline";
    document.getElementsByClassName("h3-counter")[0].style.display="none";
    var iDiv = document.createElement('div');
    iDiv.id = 'blockmp3';
    document.getElementsByTagName('body')[0].appendChild(iDiv);
    document.getElementById('blockmp3').innerHTML='<center><audio controls><source src="'+mp3+'"  type="audio/mpeg"></source></audio></center>';
})();