// ==UserScript==
// @name         Bing New Edit button
// @namespace    http://tampermonkey.net/
// @version      2024-02-26
// @description  try to take over the world!
// @author       fhnb16
// @match        https://www.bing.com/images/create/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

const targetClass = "detailMeta";

const observer = new MutationObserver(checkForElement);

function checkForElement() {
    const element = document.querySelector("#" + targetClass);
    if (element) {
        // Элемент найден, запускаем скрипт
        start();
        observer.disconnect();
    }
}

observer.observe(document.body, { childList: true, subtree: true });

function start() {

    if (
        window.location.href.includes("https://www.bing.com/images/create/")
    ) {

        var editButton = document.createElement("a");
        editButton.textContent = "Edit";
        editButton.target = "_blank";
        editButton.classList.add("action");
        editButton.classList.add("share");
        var tempUrl = window.location.href;
        tempUrl = tempUrl.replace("&ajaxhist=0&ajaxserp=0", "&edit=1&clientName=BING+CHAT&sappdirectload=1&showselective=1&FORM=SYDBIC");
        editButton.href = tempUrl;


        var provDiv = document.querySelectorAll(".actn_container>ul>li:first-child")[0];
        if (provDiv) {
            provDiv.innerHTML = "";
            provDiv.appendChild(editButton);
        }
    }

}

})();
