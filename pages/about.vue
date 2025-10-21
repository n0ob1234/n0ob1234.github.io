<script setup>
import { ref, onMounted } from 'vue';

import Divider from 'primevue/divider';


// Custom Components
import TicTacToe from '@/components/TicTacToe.vue';

</script>
<template>
	<!-- <link rel="stylesheet" type="text/css" href="assets/css/fancy.css"> -->
	 <head><title>About</title></head>
	<div style="background-color:lightsalmon;">
		<h1 style="font-size: 30px;">The First 4 paragraphs</h1>
		<br></br>
		<br></br>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula ut nisl a tincidunt. Vestibulum
			tempus lorem eu elit hendrerit efficitur.
			Praesent a <strong>vestibulum</strong> odio, ornare tristique nibh. Nulla consectetur pulvinar massa, in
			lacinia urna mattis non. Class aptent taciti sociosqu ad
			litora torquent per conubia nostra, per inceptos <i>itialicised</i>. Phasellus non mauris dui. Nam at
			imperdiet neque. Vivamus efficitur blandit consequat.
			Cras vitae lobortis quam, sit amet viverra est. In eget ante laoreet, egestas lectus at, aliquet lectus.</p>
		<br></br>
		<p>Quisque vehicula leo ligula, non commodo diam ultrices ut. Duis porttitor sem odio, ut convallis urna
			facilisis ac. Curabitur
			semper interdum aliquet. Suspendisse neque ipsum, cursus id pretium at, luctus id ante. Morbi ac tincidunt
			tortor, sed fringilla
			nunc. Ut mauris libero, fringilla nec diam quis, <b>dignissim</b> consequat sem. Ut blandit luctus massa ut
			commodo. Cras a consequat purus,
			in gravida nisi. Donec mollis, magna id aliquam venenatis, velit turpis ultrices eros, sit amet mattis
			tortor orci vel libero. Nam
			interdum nisl sit amet lacus auctor dictum. <i>Vivamus</i> in convallis elit. Phasellus in tortor lacinia,
			efficitur felis vel, pretium ante.
			Praesent maximus lorem ac tincidunt tristique. Sed tincidunt sodales mi sit amet viverra.</p>
		<br></br>
		<p>Suspendisse dignissim efficitur ligula quis commodo. Phasellus suscipit sagittis lorem, quis posuere leo
			feugiat non. Aenean hendrerit aliquam
			dui quis dapibus. Nam mi lorem, dictum nec <strong>condimentum</strong> amet, suscipit et turpis. Donec eget
			cursus dui, id vulputate sapien. Fusce euismod
			vulputate diam. Sed sagittis neque lorem, eget vehicula elit dapibus nec. <i>Maecenas</i> varius nunc
			auctor, luctus nibh in, suscipit odio.</p>
		<br></br>
		<p>Morbi nec orci vehicula, facilisis nunc ac, laoreet ante. Sed massa lacus, interdum at pulvinar non, congue
			vitae lacus. Nullam varius eros a sapien maximus venenatis. In sem lectus,
			tincidunt non magna id, posuere bibendum quam. Mauris convallis ante nec finibus hendrerit. Nam
			<b>condimentum</b> sed elit sit amet eleifend. Duis sed orci vitae
			neque sagittis bibendum ac sit amet neque. Praesent non orci mi. Nam congue maximus nibh vel malesuada.
			Aenean venenatis tortor sit amet nunc luctus
			scelerisque. Nulla facilisi. Pellentesque fringilla molestie orci ac dictum. <i>Praesent</i> in lectus vel
			libero sollicitudin interdum.</p>
		<br></br>
		<a href="/resume" style="color: blue"><u>Click here to go to resume.</u></a>
		<br></br>
		<a href="/" style="color: blue"><u>Click here to go to index.</u></a>
		<Divider />
		<TicTacToe/>
  

	</div>

	

</template>