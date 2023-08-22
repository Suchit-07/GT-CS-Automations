// ==UserScript==
// @name         GT CS Open Window
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://learning.edx.org/course/course-v1:GTx+CS1301+2T2023/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const button = document.createElement('button');
    button.textContent = 'Open Page';

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
        let iframe = document.querySelector('#unit-iframe');
        window.open(iframe.src, '_blank');

    });


})();