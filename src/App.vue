<template>
  <component :is="layout" />
</template>

<script>
import Main from "@/layouts/Main";
export default {
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
  components: {
    Main,
  },
};
</script>
<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=PT+Sans:wght@400;700&display=swap')
*
	box-sizing: border-box
	margin: 0
	padding: 0
	#app
		background-color: #F0F6FC
		width: 100%
</style>