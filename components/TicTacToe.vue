<script setup>

    let currentTurn = "x";
	function cellClicked(event) {
		
		var square = event.target
		if (square.textContent == "") {
			square.textContent= currentTurn;
			
			if (currentTurn == "x") {
				currentTurn = "o";
			} else {
				currentTurn = "x";
			}
			const ele = document.getElementById("turn")
			ele.innerHTML = currentTurn + '\'s turn';
		}
	}
</script>
<template>
	<h1 style="font-size: 30px; ">Play TicTacToe</h1>
	
	  <div id="turn" style="background-color: blueviolet; font-size: 20px; width: 8%;">x's Turn</div>
	  <!-- table for the game -->
      <table style = "border-collapse: collapse;">
		<tbody style="width: 50%;">
		  <tr>
			<td @click="cellClicked" style = "border: 5px solid black;
				width: 100px;
				height: 100px;
				font-size: 80px;
				text-align: center;
				font-family: sans;
				border-top: none;
				border-left: none;"></td>
			<td @click="cellClicked" style = "border: 5px solid black;
				width: 100px;
				height: 100px;
				font-size: 80px;
				text-align: center;
				font-family: sans;
				border-top: none;"></td>
			<td @click="cellClicked" style = "border: 5px solid black;
				width: 100px;
				height: 100px;
				font-size: 80px;
				text-align: center;
				font-family: sans;
				border-top: none;
				border-right: none;"></td>
		  </tr>
		  <tr>
			<td  @click="cellClicked" style = "border: 5px solid black;
				width: 100px;
				height: 100px;
				font-size: 80px;
				text-align: center;
				font-family: sans;
				border-left: none;"></td>
			<td @click="cellClicked" style = "border: 5px solid black;
				width: 100px;
				height: 100px;
				font-size: 80px;
				text-align: center;
				font-family: sans;"></td>
			<td @click="cellClicked" style = "border: 5px solid black;
				width: 100px;
				height: 100px;
				font-size: 80px;
				text-align: center;
				font-family: sans;
				border-right: none;"></td>
		  </tr>
		  <tr>
			<td @click="cellClicked" style = "border: 5px solid black;
				width: 100px;
				height: 100px;
				font-size: 80px;
				text-align: center;
				font-family: sans;
				border-bottom: none;
				border-left: none;"></td>
			<td @click="cellClicked" style = "border: 5px solid black;
				width: 100px;
				height: 100px;
				font-size: 80px;
				text-align: center;
				font-family: sans;
				border-bottom: none;"></td>
			<td  @click="cellClicked"style = "border: 5px solid black;
				width: 100px;
				height: 100px;
				font-size: 80px;
				text-align: center;
				font-family: sans;
				border-bottom: none;
				border-right: none;"></td>
		  </tr>
		</tbody>
	  </table>
	  <!-- <script src="https://code.jquery.com/jquery-3.1.1.js"></script> -->
</template>