<template>
  <div class="wrapper">
   
    <div class="blur" v-if="calendarIsOpen"></div>
    <Header />

    <main>
      <Navbar />
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Navbar from "@/components/NavBar";


export default {
  computed: {
    calendarIsOpen() {
      return this.$store.getters.getterCalnedar;
    },
  },

  components: {
    Header,
    Navbar,
    
  },
};
</script>

<style lang="sass">
.wrapper
	max-width: 1920px
	margin: 0 auto
	overflow-x: hidden
	background: rgba(240, 246, 252, 0.7)
	backdrop-filter: blur(4px)
	.blur
		background: rgba(240, 246, 252, 0.7)
		backdrop-filter: blur(4px)
		width: 100%
		height: 100%
		position: fixed
		top: 0
		left: 0
		z-index: 1
	main
		display: flex
		margin-top: 60px
		width: 100%
</style>