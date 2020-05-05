// ==UserScript==
// @name         Make Fonts PGothic Again
// @version      0.1
// @description  frame要素内のフォントをMS Pゴシックに戻す
// @author       fukuchan
// @match        http://gikoheiki.web.fc2.com/*
// ==/UserScript==

// bodyのフォントをMS Pゴシックに戻す
document.body.style.fontFamily = "MS PGothic";

// frame要素内のbodyについてもMS Pゴシックに戻す
const frames = document.getElementsByTagName("frame");
Array.from(frames).forEach(f => {
    f.onload = () => {
        f.contentDocument.body.style.fontFamily = "MS PGothic";
    };
});