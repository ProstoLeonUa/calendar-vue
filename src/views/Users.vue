<template>
  <div class="users-wrapper">
    <div class="bar">
			<Calendar v-if="calendarIsOpen" />
      <div class="bar__column">
        <div class="sort" @click="openCalendar">
          <img src="../assets/icons/calendar.svg" alt="calendar" />
          <p>За 1 день</p>
          <img src="../assets/icons/arrow_down.svg" alt="arrow" />
        </div>

        <div class="filter">
          <img src="../assets/icons/filter.svg" alt="filter" />
          <p>Фильтр</p>
          <img src="../assets/icons/arrow_down.svg" alt="arrow" />
        </div>
      </div>

      <div class="bar__column">
        <button class="download">Выгрузить</button>
        <button class="add">Добавить контакты</button>
      </div>
      
    </div>

    <ul class="users">
      <li class="users__header">
        <span class="select"></span>
        <span>Пользователь</span>
        <span>Дата регистрации</span>
        <span>Последняя активность</span>
        <span>Последнее действие</span>
        <span>Продукт</span>
        <span>Отобразить</span>
        <span>
          15
          <img src="../assets/icons/arrow_down.svg" alt="arrow" />
        </span>
      </li>
      <li class="users__items" v-for="user in users" :key="user.id">
        <span class="select"></span>
        <span>
          {{ user.name }}
          <br />
          {{ user.email }}
        </span>
        <span>{{ user.registration_data }}</span>
        <span>{{ user.last_active_data }}</span>
        <span>{{ user.last_action }}</span>
        <span class="users__items-product">{{ user.product }}</span>
        <img src="../assets/icons/edit.svg" alt="edit" />
        <img src="../assets/icons/delete.svg" alt="delete" />
      </li>
    </ul>
  </div>
</template>

<script>
import Calendar from "@/components/Calendar";
export default {
  data: () => ({
    users: null,
  }),
  name: "Users",
  computed: {
    calendarIsOpen() {
      return this.$store.getters.getterCalnedar;
    },
  },
  async mounted() {
    try {
      const data = await this.$store.dispatch(
        "fetch",
        "http://localhost:4000/"
      );
      this.users = data;
    } catch (e) {
      console.log(e, "Ошибка во время отправки запроса");
    }
  },
  methods: {
    openCalendar() {
      this.$store.commit("calendarIsOpen", true);
    },
  },
  components: {
    Calendar,
  },
};
</script>

<style lang="sass">
.users-wrapper
	width: 1269px
	margin-left: 104px
	.bar
		background: #FFFFFF
		border-radius: 10px
		display: flex
		justify-content: space-between
		padding: 20px
		position: relative
		&__column
			display: flex
			justify-content: center
			align-items: center
			margin-left: 35px
			margin-right: 21px
			.sort,.filter
				display: flex
				justify-content: space-between
				align-items: center
				font-family: Montserrat
				font-weight: 500
				font-size: 15px
				line-height: 130%
			.sort
				width: 134px
				&:hover
					cursor: pointer
			.filter
				width: 121px
				margin-left: 44px
		.download
			font-family: Montserrat
			font-weight: 700
			font-size: 14px
			line-height: 150%
			color: #000000
			border: 2px solid #000000
			box-sizing: border-box
			border-radius: 7px
			padding: 11px 17px 11px 19px
			background: #FFFFFF
			display: inline
		.add
			background: #FF7439
			border-radius: 7px
			color: #FFFFFF
			font-family: Montserrat
			font-weight: 700
			font-size: 14px
			line-height: 150%
			padding: 11px 15px 11px 30px
			margin-left: 11px
			border: none
			display: inline
	.users
		background: #FFFFFF
		border-radius: 10px
		margin-top: 10px
		&__header, &__items
			display: flex
			justify-content: space-between
			color: #000000
			font-family: Montserrat
			padding: 24px
		&__header
			font-weight: 700
			font-size: 13px
			line-height: 130%
			border-bottom: 1px solid #E7ECF1
		&__items
			font-weight: 500
			font-size: 15px
			line-height: 130%
			&-product
				position: relative
			&-product:after
				content: ''
				background: linear-gradient(270deg, #FFFFFF 53.27%, rgba(255, 255, 255, 0) 115.44%)
				position: absolute
				top: 0
				right: -30px
				width: 87px
				height: 47px
		.select
			width: 26px
			height: 26px
			border-radius: 50%
			border: 2px solid rgba(131, 142, 157, 0.3)
</style>