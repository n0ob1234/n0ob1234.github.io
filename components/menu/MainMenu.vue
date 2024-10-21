<script setup>
// Libraries
import { ref } from 'vue'

// Menu items
const items = ref([
	{
		label: 'Home',
		icon: 'pi pi-home',
		url: '/'
	},
	{
		label: 'About',
		icon: 'pi pi-info',
		url: '/about'
	},
	{
		label: 'Contact',
		icon: 'pi pi-envelope',
		url: '/contact'
	}
])

</script>

<template>
	<PrimeMenubar :model="items">
		<template #start>
		</template>
		<template #end>
		</template>
	</PrimeMenubar>
</template>

<style scoped></style>