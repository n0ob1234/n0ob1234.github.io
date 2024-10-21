<script setup>
// Libraries
import { ref } from 'vue'

// Menu items
const items = ref([
	{
		label: 'Home',
		icon: 'pi pi-home',
		route: '/'
	},
	{
		label: 'About',
		icon: 'pi pi-info',
		route: '/about'
	},
])

</script>

<template>
	<PrimeMenubar :model="items">
		<template #start>
		</template>
		<template #item="{ item, props, hasSubmenu, root }">
			<NuxtLink :to="item.route">
				<span v-if="item.icon" :class="item.icon" />
				<span>{{ item.label }}</span>
			</NuxtLink>
		</template>
		<template #end>
		</template>
	</PrimeMenubar>
</template>

<style scoped></style>