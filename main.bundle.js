webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Remove the navbar's default rounded borders */ \r\n.navbar {\r\n    border-radius: 0;\r\n}\r\n\r\n/* Set black background color, white text and some padding */\r\nfooter {\r\n    background-color: #555;\r\n    color: white;\r\n    padding: 15px;\r\n    position:absolute;\r\n    bottom:0;\r\n    width:100%;\r\n}\r\n\r\n/* Fixed size for buttons */\r\n.btn-lg {\r\n    font-size: 60px;\r\n    width: 101px;\r\n    height: auto;\r\n}\r\n\r\n/* Borders of tic tac toe */\r\n.c00, .c10, .c01, .c11 {\r\n    border-left-color: white;\r\n    border-top-color: white;\r\n    border-right-color: black;\r\n    border-right-width: 3px;\r\n    border-bottom-color: black;\r\n    border-bottom-width: 3px;\r\n}\r\n\r\n.c02, .c12 {\r\n    border-bottom-color: black;\r\n    border-bottom-width: 3px;\r\n    border-right-color: white;\r\n}\r\n\r\n.c20, .c21 {\r\n    border-right-color: black;\r\n    border-right-width: 3px;\r\n    border-bottom-color: white;\r\n    border-left-color: white;\r\n}\r\n\r\n.c22 {\r\n    border-bottom-color: white;\r\n    border-right-color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<nav class=\"navbar navbar-inverse\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" href=\"#\">Tic tac toe</a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n    </div>\r\n  </div>\r\n</nav>\r\n  \r\n<div class=\"container text-center\">    \r\n  <div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n      <div class=\"form-group\">\r\n        <label for=\"sel1\">Selecionar modo:</label>\r\n        <select class=\"form-control\" id=\"sel1\" [(ngModel)]=\"selectedGameMode\"\r\n          (ngModelChange)=\"resetBoard()\">\r\n          <option>2 jogadores</option>\r\n          <option>1 jogador</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input type=\"button\" class=\"btn\" (click)=\"resetBoard()\" value=\"Limpar Tabuleiro\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-6 text-center\"> \r\n      <table class=\"table table-bordered\">\r\n        <thead>\r\n          <tr>\r\n            <th colspan=\"3\" class=\"text-center\">Jogando: {{player}}</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td class=\"c00\"><input type=\"button\" [class]=\"cellColor(mainState.board[0][0])\"\r\n              value=\"{{ mainState.board[0][0] }}\" (click)=\"play(0, 0)\" [disabled]=\"buttonsActive\"></td>\r\n            <td class=\"c01\"><input type=\"button\" [class]=\"cellColor(mainState.board[0][1])\"\r\n              value=\"{{ mainState.board[0][1] }}\" (click)=\"play(0, 1)\" [disabled]=\"buttonsActive\"></td>\r\n            <td class=\"c02\"><input type=\"button\" [class]=\"cellColor(mainState.board[0][2])\" \r\n              value=\"{{ mainState.board[0][2] }}\" (click)=\"play(0, 2)\" [disabled]=\"buttonsActive\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"c10\"><input type=\"button\" [class]=\"cellColor(mainState.board[1][0])\" \r\n              value=\"{{ mainState.board[1][0] }}\" (click)=\"play(1, 0)\" [disabled]=\"buttonsActive\"></td>\r\n            <td class=\"c11\"><input type=\"button\" [class]=\"cellColor(mainState.board[1][1])\" \r\n              value=\"{{ mainState.board[1][1] }}\" (click)=\"play(1, 1)\" [disabled]=\"buttonsActive\"></td>\r\n            <td class=\"c12\"><input type=\"button\" [class]=\"cellColor(mainState.board[1][2])\" \r\n              value=\"{{ mainState.board[1][2] }}\" (click)=\"play(1, 2)\" [disabled]=\"buttonsActive\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"c20\"><input type=\"button\" [class]=\"cellColor(mainState.board[2][0])\" \r\n              value=\"{{ mainState.board[2][0] }}\" (click)=\"play(2, 0)\" [disabled]=\"buttonsActive\"></td>\r\n            <td class=\"c21\"><input type=\"button\" [class]=\"cellColor(mainState.board[2][1])\" \r\n              value=\"{{ mainState.board[2][1] }}\" (click)=\"play(2, 1)\" [disabled]=\"buttonsActive\"></td>\r\n            <td class=\"c22\"><input type=\"button\" [class]=\"cellColor(mainState.board[2][2])\" \r\n              value=\"{{ mainState.board[2][2] }}\" (click)=\"play(2, 2)\" [disabled]=\"buttonsActive\"></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n      <h1>Placar</h1>\r\n      <table class=\"table table-bordered\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"text-center\">X</th>\r\n            <th class=\"text-center\">O</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td class=\"text-center\"> {{ xScore }} </td>\r\n            <td class=\"text-center\"> {{ oScore }} </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <input type=\"button\" class=\"btn\" value=\"Limpar Placar\" (click)=\"resetScore()\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-3\"></div>\r\n    <div class=\"col-sm-6\">\r\n      <h2>{{ winMessage }}</h2>\r\n    </div>\r\n    <div class=\"col-sm-3\"></div>\r\n  </div>\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-sm-2\"></div>\r\n    <div class=\"col-sm-8\">\r\n      <p>Segunda questão desafio da disciplina Inteligência Artificial ministrada pelo professor <a href=\"http://www.univasf.edu.br/~rosalvo.oliveira/\">Rosalvo  Neto</a>. Colegiado de Engenharia da Computação <a href=\" http://www.cecomp.univasf.edu.br/\">(CECOMP)</a> - Universidade Federal do Vale do São Francisco <a href=\"http://portais.univasf.edu.br/\">(UNIVASF)</a>.</p>\r\n    </div>\r\n    <div class=\"col-sm-2\"></div>\r\n  </div>\r\n</div>\r\n\r\n<footer class=\"container-fluid text-center\">\r\n  <p>Codigo fonte: <a href=\"https://github.com/esron/tic-tac-toe\">gitHub</a></p>\r\n  <p>Copyright Esron Dtamar da Silva © - 2017</p>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_2_service__ = __webpack_require__("../../../../../src/app/player-2.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state__ = __webpack_require__("../../../../../src/app/state.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(player2) {
        this.player2 = player2;
        // player X sempre começa
        this.player = "X";
        this.xScore = 0;
        this.oScore = 0;
        this.showWinMessage = false;
        this.winMessage = "";
        this.buttonsActive = "";
        // Escolhe entre os modos de dois jogadores e 1 jogador
        this.selectedGameMode = "2 jogadores";
        this.mainState = new __WEBPACK_IMPORTED_MODULE_2__state__["a" /* State */]([[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']], 0, [0, 0]);
    }
    AppComponent.prototype.play = function (lin, col) {
        if (this.mainState.board[lin][col] == ' ') {
            this.mainState.board[lin][col] = this.player;
            if (this.checkWin()) {
                this.buttonsActive = "disabled";
                return;
            }
            if (this.selectedGameMode == "2 jogadores") {
                if (this.player == 'X')
                    this.player = 'O';
                else
                    this.player = 'X';
                this.mainState.setPlayed(lin, col);
            }
            else {
                if (this.player == 'X') {
                    this.player = 'O';
                    this.mainState.setPlayed(lin, col);
                    var arr = this.player2.play(this.mainState);
                    this.mainState.board[arr[0]][arr[1]] = this.player;
                    if (this.checkWin()) {
                        this.buttonsActive = "disabled";
                        return;
                    }
                    this.player = 'X';
                }
            }
        }
    };
    AppComponent.prototype.resetBoard = function () {
        this.mainState.board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
        this.player = "X";
        this.winMessage = "";
        this.buttonsActive = "";
    };
    AppComponent.prototype.resetScore = function () {
        this.xScore = 0;
        this.oScore = 0;
    };
    AppComponent.prototype.resetGame = function () {
        this.resetBoard();
        this.resetScore();
    };
    // Chega se ha alguma vitória, retorna verdadeiro em caso de vitória ou empate.
    // Atualiza os elementos da interface
    AppComponent.prototype.checkWin = function () {
        for (var i = 0; i < 3; i++) {
            // Checar linhas
            if (this.mainState.board[i][0] == this.mainState.board[i][1] && this.mainState.board[i][0] == this.mainState.board[i][2]
                && (this.mainState.board[i][0] == 'X' || this.mainState.board[i][0] == 'O')) {
                this.winMessage = "Vitória do Jogador " + this.mainState.board[i][0];
                this.xScore = this.mainState.board[i][0] == 'X' ? this.xScore + 1 : this.xScore;
                this.oScore = this.mainState.board[i][0] == 'O' ? this.oScore + 1 : this.oScore;
                return true;
            }
            // Checar colunas
            if (this.mainState.board[0][i] == this.mainState.board[1][i] && this.mainState.board[0][i] == this.mainState.board[2][i]
                && (this.mainState.board[0][i] == 'X' || this.mainState.board[0][i] == 'O')) {
                this.winMessage = "Vitória do Jogador " + this.mainState.board[0][i];
                this.xScore = this.mainState.board[0][i] == 'X' ? this.xScore + 1 : this.xScore;
                this.oScore = this.mainState.board[0][i] == 'O' ? this.oScore + 1 : this.oScore;
                return true;
            }
        }
        // Checar diagonais
        if (((this.mainState.board[0][0] == this.mainState.board[1][1] && this.mainState.board[0][0] == this.mainState.board[2][2])
            || (this.mainState.board[0][2] == this.mainState.board[1][1] && this.mainState.board[0][2] == this.mainState.board[2][0]))
            && (this.mainState.board[1][1] == 'X' || this.mainState.board[1][1] == 'O')) {
            this.winMessage = "Vitória do Jogador " + this.mainState.board[1][1];
            this.xScore = this.mainState.board[1][1] == 'X' ? this.xScore + 1 : this.xScore;
            this.oScore = this.mainState.board[1][1] == 'O' ? this.oScore + 1 : this.oScore;
            return true;
        }
        // Checar empate
        for (var i = 0; i < 3; i++)
            for (var j = 0; j < 3; j++) {
                if (this.mainState.board[i][j] == ' ')
                    return false;
            }
        this.winMessage = "Empate";
        return true;
    };
    AppComponent.prototype.cellColor = function (symbol) {
        switch (symbol) {
            case 'X':
                return "btn btn-lg btn-info";
            case 'O':
                return "btn btn-lg btn-warning";
            case ' ':
                return "btn btn-lg";
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__player_2_service__["a" /* Player2Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__player_2_service__["a" /* Player2Service */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__player_2_service__ = __webpack_require__("../../../../../src/app/player-2.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__["a" /* AlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__player_2_service__["a" /* Player2Service */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/player-2.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player2Service; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Player2Service = (function () {
    function Player2Service() {
    }
    Player2Service.prototype.play = function (currentState) {
        this.move = [];
        this.minimax(currentState, true);
        return this.move;
    };
    Player2Service.prototype.minimax = function (node, maximizingPlayer) {
        var _this = this;
        var scores = new Array(0);
        var moves = [];
        if (node.isTerminal()) {
            return node.getHn();
        }
        if (maximizingPlayer) {
            var childs = node.getChilds('O');
            var maxScore = -Infinity;
            var maxScoreIndex = 0;
            childs.forEach(function (child) {
                moves.push(child.played);
                scores.push(_this.minimax(child, false));
            });
            for (var i = 0; i < scores.length; i++) {
                if (scores[i] > maxScore) {
                    maxScore = scores[i];
                    maxScoreIndex = i;
                }
            }
            this.move = moves[maxScoreIndex];
            return maxScore;
        }
        else {
            var childs = node.getChilds('X');
            var minScore = Infinity;
            var minScoreIndex = 0;
            childs.forEach(function (child) {
                moves.push(child.played);
                scores.push(_this.minimax(child, true));
            });
            for (var i = 0; i < scores.length; i++) {
                if (scores[i] < minScore) {
                    minScore = scores[i];
                    minScoreIndex = i;
                }
            }
            this.move = moves[minScoreIndex];
            return minScore;
        }
    };
    return Player2Service;
}());
Player2Service = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], Player2Service);

//# sourceMappingURL=player-2.service.js.map

/***/ }),

/***/ "../../../../../src/app/state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return State; });
var State = (function () {
    function State(board, depth, played) {
        this.board = [[], [], []];
        this.played = [0, 0];
        for (var i = 0; i < 3; i++) {
            this.board[i] = [];
            for (var j = 0; j < 3; j++) {
                this.board[i][j] = board[i][j];
            }
        }
        this.played[0] = played[0];
        this.played[1] = played[1];
        this.depth = depth;
    }
    State.prototype.equals = function (state) {
        for (var i = 0; i < 3; i++)
            for (var j = 0; j < 3; j++)
                if (this.board[i][j] != state.board[i][j])
                    return false;
        return true;
    };
    State.prototype.copy = function () {
        return new State(this.board, this.depth, this.played);
    };
    State.prototype.setPlayed = function (i, j) {
        this.played[0] = i;
        this.played[1] = j;
    };
    State.prototype.toString = function () {
        var string = "board:\n";
        for (var i = 0; i < 3; i++)
            string += "[" + this.board[i][0] + "," + this.board[i][1] + "," + this.board[i][2] + "]\n";
        string += "terminal ? " + this.isTerminal() +
            "\nPlayed (" + this.played[0] + ", " + this.played[1] + ")" +
            "\nhn(n) = " + this.getHn() +
            "\nDepth " + this.depth;
        return string;
    };
    State.prototype.getChilds = function (player) {
        var childs = [];
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (this.board[i][j] == ' ') {
                    var child = this.copy();
                    child.setPlayed(i, j);
                    child.board[i][j] = player;
                    child.depth++;
                    childs.push(child);
                }
            }
        }
        return childs;
    };
    State.prototype.getHn = function () {
        for (var i = 0; i < 3; i++) {
            // Checar linhas
            if (this.board[i][0] == this.board[i][1] && this.board[i][0] == this.board[i][2]
                && (this.board[i][0] == 'X' || this.board[i][0] == 'O')) {
                return this.board[i][0] == 'X' ? this.depth - 10 : 10 - this.depth;
            }
            // Checar colunas
            if (this.board[0][i] == this.board[1][i] && this.board[0][i] == this.board[2][i]
                && (this.board[0][i] == 'X' || this.board[0][i] == 'O')) {
                return this.board[0][i] == 'X' ? this.depth - 10 : 10 - this.depth;
            }
        }
        // Checar diagonais
        if (((this.board[0][0] == this.board[1][1] && this.board[0][0] == this.board[2][2])
            || (this.board[0][2] == this.board[1][1] && this.board[0][2] == this.board[2][0]))
            && (this.board[1][1] == 'X' || this.board[1][1] == 'O')) {
            return this.board[1][1] == 'X' ? this.depth - 10 : 10 - this.depth;
        }
        return 0;
    };
    State.prototype.isTerminal = function () {
        if (this.getHn() == 0)
            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 3; j++) {
                    if (this.board[i][j] == ' ') {
                        return false;
                    }
                }
            }
        return true;
    };
    return State;
}());

//# sourceMappingURL=state.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map