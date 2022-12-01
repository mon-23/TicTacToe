let game_active = 0;
let sym_counter = 0;
let draw = 0
function change(){
    let player = document.querySelector('#p_sym');

    if(sym_counter == 0){
        sym = 'X';
        sym_counter++;
        player.innerText = 'Player: O';
    }
    else{
        sym = 'O';
        sym_counter--;
        player.innerText = 'Player: X';
    }
}

function restart_exit(){
    let r = document.querySelector('.restart');
    r.innerHTML = 'NEW';
    r.addEventListener('click', () => {window.location.reload()});

    let q = document.querySelector('.quit');
    q.innerHTML = 'EXIT';
    q.addEventListener('click', () => {window.close()});
}

function check_win(){
    const board = ['n', '#c1', '#c2', '#c3', '#c4', '#c5', '#c6', '#c7', '#c8', '#c9'];
    let win_check = 0
    if(document.querySelector(board[1]).innerHTML == 'X' & document.querySelector(board[2]).innerHTML == 'X' & document.querySelector(board[3]).innerHTML == 'X'){
        win_check = 1;
    }
    if(document.querySelector(board[4]).innerHTML == 'X' & document.querySelector(board[5]).innerHTML == 'X' & document.querySelector(board[6]).innerHTML == 'X'){
        win_check = 1;
    }
    if(document.querySelector(board[7]).innerHTML == 'X' & document.querySelector(board[8]).innerHTML == 'X' & document.querySelector(board[9]).innerHTML == 'X'){
        win_check = 1;
    }
    if(document.querySelector(board[1]).innerHTML == 'X' & document.querySelector(board[4]).innerHTML == 'X' & document.querySelector(board[7]).innerHTML == 'X'){
        win_check = 1;
    }
    if(document.querySelector(board[2]).innerHTML == 'X' & document.querySelector(board[5]).innerHTML == 'X' & document.querySelector(board[8]).innerHTML == 'X'){
        win_check = 1;
    }
    if(document.querySelector(board[3]).innerHTML == 'X' & document.querySelector(board[6]).innerHTML == 'X' & document.querySelector(board[9]).innerHTML == 'X'){
        win_check = 1;
    }
    if(document.querySelector(board[1]).innerHTML == 'X' & document.querySelector(board[5]).innerHTML == 'X' & document.querySelector(board[9]).innerHTML == 'X'){
        win_check = 1;
    }
    if(document.querySelector(board[3]).innerHTML == 'X' & document.querySelector(board[5]).innerHTML == 'X' & document.querySelector(board[7]).innerHTML == 'X'){
        win_check = 1;
    }
    if(document.querySelector(board[1]).innerHTML == 'O' & document.querySelector(board[2]).innerHTML == 'O' & document.querySelector(board[3]).innerHTML == 'O'){
        win_check = 2;
    }
    if(document.querySelector(board[4]).innerHTML == 'O' & document.querySelector(board[5]).innerHTML == 'O' & document.querySelector(board[6]).innerHTML == 'O'){
        win_check = 2;
    }
    if(document.querySelector(board[7]).innerHTML == 'O' & document.querySelector(board[8]).innerHTML == 'O' & document.querySelector(board[9]).innerHTML == 'O'){
        win_check = 2;
    }
    if(document.querySelector(board[1]).innerHTML == 'O' & document.querySelector(board[4]).innerHTML == 'O' & document.querySelector(board[7]).innerHTML == 'O'){
        win_check = 2;
    }
    if(document.querySelector(board[2]).innerHTML == 'O' & document.querySelector(board[5]).innerHTML == 'O' & document.querySelector(board[8]).innerHTML == 'O'){
        win_check = 2;
    }
    if(document.querySelector(board[3]).innerHTML == 'O' & document.querySelector(board[6]).innerHTML == 'O' & document.querySelector(board[9]).innerHTML == 'O'){
        win_check = 2;
    }
    if(document.querySelector(board[1]).innerHTML == 'O' & document.querySelector(board[5]).innerHTML == 'O' & document.querySelector(board[9]).innerHTML == 'O'){
        win_check = 2;
    }
    if(document.querySelector(board[3]).innerHTML == 'O' & document.querySelector(board[5]).innerHTML == 'O' & document.querySelector(board[7]).innerHTML == 'O'){
        win_check = 2;
    }

    if(win_check == 1){
        let win = document.querySelector('.message');
        win.innerHTML = 'Player X: WIN!';
        game_active = 1;
        restart_exit();
    }
    if(win_check == 2){
        let win = document.querySelector('.message');
        win.innerHTML = 'Player O: WIN!';
        game_active = 1;
        restart_exit();
    }
}

function check_draw(){
    let draw_field = document.querySelector('.message');
    draw++;
    if(draw == 9){
        draw_field.innerHTML = 'Unentschieden';
        game_active = 1;
        restart_exit();
    }
}

let move_counter = 0;
function check_cell(c){
    let fail = document.querySelector('.message');

    if(game_active == 1){
        return;
    }
    else if(c.innerHTML == 'X' || c.innerHTML == 'O'){
        fail.innerHTML = 'Fail!';
    }
    else if(c.innerHTML != 'X' & c.innerHTML != 'O'){
        change();
        move_counter++;
        c.innerHTML = sym;
        fail.innerHTML = '';
        check_win();
        check_draw();
    }
}



// main.js
function symbol(s){
    let cell = document.querySelector('#c1');

    if(s == 1){
    cell = document.querySelector('#c1');
    check_cell(cell);
    }
    if(s == 2){
    cell = document.querySelector('#c2');
    check_cell(cell);
    }
    if(s == 3){
    cell = document.querySelector('#c3');
    check_cell(cell);
    }
    if(s == 4){
    cell = document.querySelector('#c4');
    check_cell(cell);
    }
    if(s == 5){
    cell = document.querySelector('#c5');
    check_cell(cell);
    }
    if(s == 6){
    cell = document.querySelector('#c6');
    check_cell(cell);
    }
    if(s == 7){
    cell = document.querySelector('#c7');
    check_cell(cell);
    }
    if(s == 8){
    cell = document.querySelector('#c8');
    check_cell(cell);
    }
    if(s == 9){
    cell = document.querySelector('#c9');
    check_cell(cell);
    }
}
