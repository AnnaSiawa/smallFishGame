const { src, dest } = require("gulp");

//конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

//Плагины
const  plumber = require("gulp-plumber");
const  notify = require("gulp-notify");
const  favicons = require("gulp-favicons");
const  filter = require("gulp-filter");

//обработка favicon
const favicon = () => {
    return src(path.favicon.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "FAVICON",
            message: error.message
        }))
    }))
    .pipe(dest(path.favicon.dest))
    .pipe(favicons(app.favicons))
    .pipe(dest(path.favicon.dest))

}

module.exports = favicon;
