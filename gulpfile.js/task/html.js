const { src, dest } = require("gulp");

//конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

//Плагины
const  plumber = require("gulp-plumber");
const  notify = require("gulp-notify");
const  fileinclude = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const size = require("gulp-size");
const webpHtml = require("gulp-webp-html");

//обработка html
const html = () => {
    return src(path.html.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "HTML",
            message: error.message
        }))
    }))
    .pipe(fileinclude())
    .pipe(webpHtml())
    .pipe(size())
    .pipe(htmlmin(app.htmlmin))
    .pipe(size())
    .pipe(dest(path.html.dest))
}

module.exports = html;