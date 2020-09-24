<template>
  <ul>
    <li v-for="item in data" :key="item">
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  data: () => ({
    data: [
      "Весь срок",
      "Сегодня",
      "Вчера",
      "Последние 7 дней",
      "Последние 30 дней",
      "В этом месяце",
      "Прошлый месяц",
    ],
  }),
};
</script>

<style lang="sass" scoped>
ul
	font-family: PT Sans
	font-weight: 400
	font-size: 15px
	line-height: 19px
	list-style: none
	display: flex
	flex-direction: column
	margin: 10px
	li
		padding: 10px 0px 10px 14px
		margin-top: 5px
		&:hover
			border: 2px solid #EBEEF3
			border-radius: 5px
			cursor: pointer
</style>