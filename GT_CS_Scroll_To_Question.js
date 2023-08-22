// ==UserScript==
// @name         GT CS Next Question
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://courses.edx.org/xblock/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var x = 0;
    const button = document.createElement('button');
    button.textContent = 'Next Question';

    button.style.position = 'fixed';
    button.style.top = '0';
    button.style.left = '50%';
    button.style.transform = 'translateX(-50%)';
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#007bff';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';

    document.body.appendChild(button);

    button.addEventListener('click', () => {

        let list = document.querySelectorAll('.problem-progress');
        list[x%list.length].scrollIntoView();
        x++;
    });

})();