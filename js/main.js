/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("window.addEventListener(\"load\", function (x) {\n\n    let buttonStart = document.getElementById(\"button\");\n    let butonsGame = document.querySelector('.buttons-wrap');\n    let buttonRestart = document.getElementById('button-restart');\n    let buttonEnd = document.getElementById('button-end');\n\n    let GAME_WIDTH = 1000;\n    let GAME_HEIGHT = 390;\n\n    let gameLive = true;\n\n    //получить контекст\n    let canvas = document.getElementById(\"mycanvas\");\n    let ctx = canvas.getContext(\"2d\");\n\n    canvas.style.display = 'none';\n    butonsGame.style.display = 'none';\n    buttonStart.addEventListener('click', function () {\n        canvas.style.display = 'block';\n        butonsGame.style.display = 'block';\n        buttonStart.style.display = 'none';\n    });\n\n    //враги\n    let enemies = [\n        {\n            x: 100, //x координата\n            y: 100, //y координата\n            speedY: 1.5, //скорость по Y\n            w: 90, //ширина\n            h: 30 //высота\n        },\n        {\n            x: 340,\n            y: 100,\n            speedY: 2,\n            w: 90,\n            h: 30\n        },\n        {\n            x: 540,\n            y: 100,\n            speedY: 3,\n            w: 90,\n            h: 30\n        },\n        {\n            x: 780,\n            y: 100,\n            speedY: 1,\n            w: 90,\n            h: 30\n        }\n    ];\n\n    //игрок\n    let player = {\n        x: 10,\n        y: 160,\n        speedX: 2,\n        w: 65,\n        h: 10,\n        isMoving: false\n    };\n\n    //finish\n    let goal = {\n        x: 900,\n        y: 150,\n        w: 10,\n        h: 36\n    };\n\n    let sprites = {};\n    console.log(sprites);\n\n    let movePlayer = function () {\n        player.isMoving = true;\n    }\n\n    let stopPlayer = function () {\n        player.isMoving = false;\n    }\n\n    //addEventListener на игрока\n    canvas.addEventListener('mousedown', movePlayer);\n    canvas.addEventListener('mouseup', stopPlayer);\n    canvas.addEventListener('touchstart', movePlayer);\n    canvas.addEventListener('touchend', stopPlayer);\n\n    //инициализация спрайта\n    let load = function () {\n        sprites.player = new Image();\n        sprites.player.src = '../img/fish.png';\n\n        sprites.enemies = new Image();\n        sprites.enemies.src = '../img/shark.png';\n\n        sprites.goal = new Image();\n        sprites.goal.src = '../img/seaweed.png';\n    }\n\n    //логика обьектов\n    let update = function () {\n\n        //проверка на финиш\n        if (checkCollision(player, goal)) {\n            //stop game\n            gameLive = false;\n            alert(\"You are a winner!\");\n            // window.location = \"\"; // рестарт\n        }\n\n        //игрок\n        if (player.isMoving) {\n            player.x = player.x + player.speedX;\n        }\n\n        //враги\n        enemies.forEach(function (element, index) {\n            if (checkCollision(player, element)) {\n                //остановка игры\n                gameLive = false;\n                alert(\"game over\");\n                window.location = \"\"; // рестарт\n            }\n            element.y += element.speedY;\n\n            //границы движения обьектов\n            if (element.y <= 10) {\n                element.y = 10;\n                element.speedY *= -1; //изменить направление движения объекта\n            } else if (element.y >= GAME_HEIGHT - 50) {\n                element.y = GAME_HEIGHT - 50;\n                element.speedY *= -1;\n            }\n        });\n    };\n\n    //показать обьекты на экране.\n    let draw = load.onload = function () {\n        //чистим холст\n        ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);\n\n        //объект игрок\n        ctx.drawImage(sprites.player, player.x, player.y);\n\n        //объекты враги\n        enemies.forEach(function (element, index) {\n            ctx.drawImage(sprites.enemies, element.x, element.y);\n        });\n\n        //финиш\n        ctx.drawImage(sprites.goal, goal.x, goal.y);\n    };\n\n    //инициализируем несколько раз в секунду\n    let step = function () {\n\n        update();\n        draw();\n        if (gameLive) {\n            window.requestAnimationFrame(step);\n        }\n    };\n    let checkCollision = function (rect1, rect2) {\n        let closeOnWidth = Math.abs(rect1.x - rect2.x) <= Math.abs(rect1.w, rect2.w);\n        let closeOnHeight = Math.abs(rect1.y - rect2.y) <= Math.abs(rect1.h, rect2.h);\n        return closeOnHeight && closeOnWidth;\n    }\n\n    load();\n    step();\n\n    buttonRestart.addEventListener('click', function () {\n        window.location = \"\";\n        canvas.style.display = 'block';\n        butonsGame.style.display = 'block';\n        buttonStart.style.display = 'none';\n    });\n\n    console.log(GAME_WIDTH);\n    console.log(player.x);\n});\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;