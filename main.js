const cells = document.querySelectorAll('.cell');
const statusDiv = document.getElementById("status");
const resetBtn = document.getElementById("resetBtn");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;


const winningConditions = [

  [0, 1, 2],

  [3, 4, 5],

  [6, 7, 8],

  [0, 3, 6],

  [1, 4, 7],

  [2, 5, 8],

  [0, 4, 8],

  [2, 4, 6],

];