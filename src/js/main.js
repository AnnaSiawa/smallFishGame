Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => {
    img.onload = img.onerror = resolve;
}))).then(() => {
    let buttonStart = document.getElementById("button");
    let butonsGame = document.querySelector('.buttons-wrap');
    let buttonRestart = document.getElementById('button-restart');
    let buttonEnd = document.getElementById('button-end');

    let GAME_WIDTH = 1000;
    let GAME_HEIGHT = 390;

    let gameLive = true;

    //получить контекст
    let canvas = document.getElementById("mycanvas");
    let ctx = canvas.getContext("2d");

    canvas.style.display = 'none';
    butonsGame.style.display = 'none';
    buttonStart.addEventListener('click', function () {
        canvas.style.display = 'block';
        butonsGame.style.display = 'block';
        buttonStart.style.display = 'none';
    });

    //враги
    let enemies = [
        {
            x: 100, //x координата
            y: 100, //y координата
            speedY: 1.5, //скорость по Y
            w: 90, //ширина
            h: 30 //высота
        },
        {
            x: 340,
            y: 100,
            speedY: 2,
            w: 90,
            h: 30
        },
        {
            x: 540,
            y: 100,
            speedY: 3,
            w: 90,
            h: 30
        },
        {
            x: 780,
            y: 100,
            speedY: 1,
            w: 90,
            h: 30
        }
    ];

    //игрок
    let player = {
        x: 10,
        y: 160,
        speedX: 2,
        w: 65,
        h: 10,
        isMoving: false
    };

    //finish
    let goal = {
        x: 900,
        y: 150,
        w: 10,
        h: 36
    };

    let sprites = {};
    console.log(sprites);

    let movePlayer = function () {
        player.isMoving = true;
    }

    let stopPlayer = function () {
        player.isMoving = false;
    }

    //addEventListener на игрока
    canvas.addEventListener('mousedown', movePlayer);
    canvas.addEventListener('mouseup', stopPlayer);
    canvas.addEventListener('touchstart', movePlayer);
    canvas.addEventListener('touchend', stopPlayer);

    //инициализация спрайта
    let load = function () {
        sprites.player = new Image();
        sprites.player.src = '../img/fish.png';

        sprites.enemies = new Image();
        sprites.enemies.src = '../img/shark.png';

        sprites.goal = new Image();
        sprites.goal.src = '../img/seaweed.png';
    }

    //логика обьектов
    let update = function () {

        //проверка на финиш
        if (checkCollision(player, goal)) {
            //stop game
            gameLive = false;
            alert("You are a winner!");
            // window.location = ""; // рестарт
        }

        //игрок
        if (player.isMoving) {
            player.x = player.x + player.speedX;
        }

        //враги
        enemies.forEach(function (element, index) {
            if (checkCollision(player, element)) {
                //остановка игры
                gameLive = false;
                alert("game over");
                window.location = ""; // рестарт
            }
            element.y += element.speedY;

            //границы движения обьектов
            if (element.y <= 10) {
                element.y = 10;
                element.speedY *= -1; //изменить направление движения объекта
            } else if (element.y >= GAME_HEIGHT - 50) {
                element.y = GAME_HEIGHT - 50;
                element.speedY *= -1;
            }
        });
    };

    //показать обьекты на экране.
    let draw = load.onload = function () {
        //чистим холст
        ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

        //объект игрок
        ctx.drawImage(sprites.player, player.x, player.y);

        //объекты враги
        enemies.forEach(function (element, index) {
            ctx.drawImage(sprites.enemies, element.x, element.y);
        });

        //финиш
        ctx.drawImage(sprites.goal, goal.x, goal.y);
    };

    //инициализируем несколько раз в секунду
    let step = function () {

        update();
        draw();
        if (gameLive) {
            window.requestAnimationFrame(step);
        }
    };
    let checkCollision = function (rect1, rect2) {
        let closeOnWidth = Math.abs(rect1.x - rect2.x) <= Math.abs(rect1.w, rect2.w);
        let closeOnHeight = Math.abs(rect1.y - rect2.y) <= Math.abs(rect1.h, rect2.h);
        return closeOnHeight && closeOnWidth;
    }

    load();
    step();

    buttonRestart.addEventListener('click', function () {
        window.location = "";
        canvas.style.display = 'block';
        butonsGame.style.display = 'block';
        buttonStart.style.display = 'none';
    });

    console.log(GAME_WIDTH);
    console.log(player.x);
});

// window.addEventListener("load", function (x) {
//
//     let buttonStart = document.getElementById("button");
//     let butonsGame = document.querySelector('.buttons-wrap');
//     let buttonRestart = document.getElementById('button-restart');
//     let buttonEnd = document.getElementById('button-end');
//
//     let GAME_WIDTH = 1000;
//     let GAME_HEIGHT = 390;
//
//     let gameLive = true;
//
//     //получить контекст
//     let canvas = document.getElementById("mycanvas");
//     let ctx = canvas.getContext("2d");
//
//     canvas.style.display = 'none';
//     butonsGame.style.display = 'none';
//     buttonStart.addEventListener('click', function () {
//         canvas.style.display = 'block';
//         butonsGame.style.display = 'block';
//         buttonStart.style.display = 'none';
//     });
//
//     //враги
//     let enemies = [
//         {
//             x: 100, //x координата
//             y: 100, //y координата
//             speedY: 1.5, //скорость по Y
//             w: 90, //ширина
//             h: 30 //высота
//         },
//         {
//             x: 340,
//             y: 100,
//             speedY: 2,
//             w: 90,
//             h: 30
//         },
//         {
//             x: 540,
//             y: 100,
//             speedY: 3,
//             w: 90,
//             h: 30
//         },
//         {
//             x: 780,
//             y: 100,
//             speedY: 1,
//             w: 90,
//             h: 30
//         }
//     ];
//
//     //игрок
//     let player = {
//         x: 10,
//         y: 160,
//         speedX: 2,
//         w: 65,
//         h: 10,
//         isMoving: false
//     };
//
//     //finish
//     let goal = {
//         x: 900,
//         y: 150,
//         w: 10,
//         h: 36
//     };
//
//     let sprites = {};
//     console.log(sprites);
//
//     let movePlayer = function () {
//         player.isMoving = true;
//     }
//
//     let stopPlayer = function () {
//         player.isMoving = false;
//     }
//
//     //addEventListener на игрока
//     canvas.addEventListener('mousedown', movePlayer);
//     canvas.addEventListener('mouseup', stopPlayer);
//     canvas.addEventListener('touchstart', movePlayer);
//     canvas.addEventListener('touchend', stopPlayer);
//
//     //инициализация спрайта
//     let load = function () {
//         sprites.player = new Image();
//         sprites.player.src = '../img/fish.png';
//
//         sprites.enemies = new Image();
//         sprites.enemies.src = '../img/shark.png';
//
//         sprites.goal = new Image();
//         sprites.goal.src = '../img/seaweed.png';
//     }
//
//     //логика обьектов
//     let update = function () {
//
//         //проверка на финиш
//         if (checkCollision(player, goal)) {
//             //stop game
//             gameLive = false;
//             alert("You are a winner!");
//             // window.location = ""; // рестарт
//         }
//
//         //игрок
//         if (player.isMoving) {
//             player.x = player.x + player.speedX;
//         }
//
//         //враги
//         enemies.forEach(function (element, index) {
//             if (checkCollision(player, element)) {
//                 //остановка игры
//                 gameLive = false;
//                 alert("game over");
//                 window.location = ""; // рестарт
//             }
//             element.y += element.speedY;
//
//             //границы движения обьектов
//             if (element.y <= 10) {
//                 element.y = 10;
//                 element.speedY *= -1; //изменить направление движения объекта
//             } else if (element.y >= GAME_HEIGHT - 50) {
//                 element.y = GAME_HEIGHT - 50;
//                 element.speedY *= -1;
//             }
//         });
//     };
//
//     //показать обьекты на экране.
//     let draw = load.onload = function () {
//         //чистим холст
//         ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
//
//         //объект игрок
//         ctx.drawImage(sprites.player, player.x, player.y);
//
//         //объекты враги
//         enemies.forEach(function (element, index) {
//             ctx.drawImage(sprites.enemies, element.x, element.y);
//         });
//
//         //финиш
//         ctx.drawImage(sprites.goal, goal.x, goal.y);
//     };
//
//     //инициализируем несколько раз в секунду
//     let step = function () {
//
//         update();
//         draw();
//         if (gameLive) {
//             window.requestAnimationFrame(step);
//         }
//     };
//     let checkCollision = function (rect1, rect2) {
//         let closeOnWidth = Math.abs(rect1.x - rect2.x) <= Math.abs(rect1.w, rect2.w);
//         let closeOnHeight = Math.abs(rect1.y - rect2.y) <= Math.abs(rect1.h, rect2.h);
//         return closeOnHeight && closeOnWidth;
//     }
//
//     load();
//     step();
//
//     buttonRestart.addEventListener('click', function () {
//         window.location = "";
//         canvas.style.display = 'block';
//         butonsGame.style.display = 'block';
//         buttonStart.style.display = 'none';
//     });
//
//     console.log(GAME_WIDTH);
//     console.log(player.x);
// });
