<template>
  <header>

    <div class="logo">
      <img src="../assets/logo.svg" alt="logo" />
      <p class="logo__version">Beta</p>
    </div>
    <div class="header-info">
      <div class="header-info__bell">
        <img src="../assets/icons/bell.svg" alt="bell" />
      </div>
      <div class="header-info__name">
        <p>Артем</p>
        <img src="../assets/icons/arrow_down.svg" alt="arrow" />
      </div>
      <div class="header-info__search">
        <img src="../assets/icons/search.svg" alt="search" />
      </div>
      <div class="header-info__lang">
        <p>Ru</p>
        <img src="../assets/icons/arrow_down.svg" alt="arrow" />
      </div>
    </div>
  </header>
</template>



<style lang="sass">
header
	display: flex
	justify-content: space-between
	font-family: 'Montserrat', sans-serif
	width: 100%
	padding: 10px 38px 0px 38px
	.logo
		display: flex
		align-items: center
		&__version
			padding-left: 9px
			font-weight: 500
			font-size: 13px
	.header-info
		display: flex
		align-items: center
		font-weight: 700
		font-size: 14px
		color: #000000
		line-height: 17px
		&__bell
			background: #FFFFFF
			box-shadow: 0px 10px 40px rgba(213, 221, 230, 0.6)
			border-radius: 50%
			width: 43px
			height: 43px
			display: flex
			justify-content: center
			align-items: center
		&__name
			margin-left: 17px
			background: #FFFFFF
			box-shadow: 0px 10px 40px rgba(213, 221, 230, 0.6)
			border-radius: 100px
			display: flex
			justify-content: center
			align-items: center
			width: 120px
			height: 43px
			img
				padding-left: 15px
		&__search
			margin-left: 17.5px
			background: rgba(203, 215, 228, 0.4)
			width: 43px
			height: 43px
			border-radius: 50%
			display: flex
			justify-content: center
			aligin-item: center
		&__lang
			margin-left: 17px
			background: rgba(203, 215, 228, 0.4)
			border-radius: 100px
			display: flex
			justify-content: center
			align-items: center
			width: 64px
			height: 43px
			img
				padding-left: 15px


</style>