

 

<script setup>

import { ref } from 'vue'

 

const currentTurn = ref('x')

const board = ref(Array(9).fill(''))

 

function cellClicked(index) {

  if (board.value[index] !== '') return

  board.value[index] = currentTurn.value

  currentTurn.value = currentTurn.value === 'x' ? 'o' : 'x'

}

</script>

 

<template>

  <h1 style="font-size: 30px;">Play TicTacToe</h1>

 

  <div id="turn" style="background-color: blueviolet; font-size: 20px; width: 8%;">

    {{ currentTurn + "'s turn" }}

  </div>

 

  <table class="tictactoe-table">

    <tbody>

        <!-- nested loops for rows and columns -->

      <tr v-for="row in 3" :key="row">

        <td

          v-for="col in 3"

          :key="col"

          @click="cellClicked((row - 1) * 3 + (col - 1))"

          class="cell"

        >

        <!-- cell content bound to board state -->

          {{ board[(row - 1) * 3 + (col - 1)] }}

        </td>

      </tr>

    </tbody>

  </table>

</template>

 

<style scoped>

.tictactoe-table {

  border-collapse: collapse;

}

 

.tictactoe-table td {

  border: 5px solid black;

  width: 100px;

  height: 100px;

  font-size: 80px;

  text-align: center;

  font-family: sans;

  cursor: pointer;

  user-select: none;

}

 

/* Remove top border for the top row */

.tictactoe-table tr:first-child td {

  border-top: none;

}

 

/* Remove bottom border for the bottom row */

.tictactoe-table tr:last-child td {

  border-bottom: none;

}

 

/* Remove left border for the left-most column */

.tictactoe-table td:first-child {

  border-left: none;

}

 

/* Remove right border for the right-most column */

.tictactoe-table td:last-child {

  border-right: none;

}

</style>