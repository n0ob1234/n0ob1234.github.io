<script>
	function cellClicked(event) {
		alert("hi")
		var square = event.target
		if (square.text() == "") {
			square.text(turn);
			if (turn == "x") {
				turn = "o";
			} else {
				turn = "x";
			}
			//$("#turn").text(turn + "'s turn");
		}
	}
</script>
<template>
	<h1>Play TicTacToe</h1>
	<button @click="cellClicked">click</button>
	  <div id="turn">x's Turn</div>
	  <!-- table for the game -->
      <table style = "border-collapse: collapse;">
		<tbody>
		  <tr>
			<td @click="cellClicked" style = "border: 5px solid black;
				width: 100px;
				height: 100px;
				font-size: 80px;
				text-align: center;
				font-family: sans;
				border-top: none;
				border-left: none;"></td>
			<td style = "border: 5px solid black;
				width: 100px;
				height: 100px;
				font-size: 80px;
				text-align: center;
				font-family: sans;
				border-top: none;"></td>
			<td style = "border: 5px solid black;
				width: 100px;
				height: 100px;
				font-size: 80px;
				text-align: center;
				font-family: sans;
				border-top: none;
				border-right: none;"></td>
		  </tr>
		  <tr>
			<td style = "border: 5px solid black;
				width: 100px;
				height: 100px;
				font-size: 80px;
				text-align: center;
				font-family: sans;
				border-left: none;"></td>
			<td style = "border: 5px solid black;
				width: 100px;
				height: 100px;
				font-size: 80px;
				text-align: center;
				font-family: sans;"></td>
			<td style = "border: 5px solid black;
				width: 100px;
				height: 100px;
				font-size: 80px;
				text-align: center;
				font-family: sans;
				border-right: none;"></td>
		  </tr>
		  <tr>
			<td style = "border: 5px solid black;
				width: 100px;
				height: 100px;
				font-size: 80px;
				text-align: center;
				font-family: sans;
				border-bottom: none;
				border-left: none;"></td>
			<td style = "border: 5px solid black;
				width: 100px;
				height: 100px;
				font-size: 80px;
				text-align: center;
				font-family: sans;
				border-bottom: none;"></td>
			<td style = "border: 5px solid black;
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