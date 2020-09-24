<template>
  <div class="wrapper-calendar">
    <div class="calendar">
      <div class="calendar__left">
				<CalendarSideBar />
        <!--<ul>
          <li>Весь срок</li>
          <li>Сегодня</li>
          <li>Вчера</li>
          <li>Последние 7 дней</li>
          <li>Последние 30 дней</li>
          <li>В этом месяце</li>
          <li>Прошлый месяц</li>
        </ul>-->
      </div>
      <div class="calendar__right">
        <div class="calendar__header">
          <img
            src="../assets/icons/decrease.svg"
            alt="decrease"
            @click="decrease"
          />
          <div>{{ monthes[month] }}, {{ year }}</div>
          <img
            src="../assets/icons/increase.svg"
            alt="increase"
            @click="increase"
          />
        </div>
        <table class="table">
          <tbody>
            <tr class="table__week">
              <td v-for="d in days" :key="d">{{ d }}</td>
            </tr>
            <tr
              class="table__days"
              v-for="(week, $index) in calendar()"
              :key="$index"
            >
              <td
                class="day"
                v-for="(day, index) in week"
                :key="index"
                :style="{
                  'background-color': day.background,
                  color: day.color,
                  'border-radius': day.borderRadius,
                }"
                @click="choose($event)"
              >
                {{ day.index }}
              </td>
            </tr>
          </tbody>
        </table>

        <div class="calendar__buttons">
          <button class="cancel" @click="cancel">Отмена</button>
          <button class="refresh">Обновить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarSideBar from './CalendarSideBar'
export default {
  data: () => ({
    style: {},
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    date: new Date(),
    dFirstMonth: "1",
    days: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    monthes: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
	}),
	components:{
		CalendarSideBar
	},
  methods: {
    calendar() {
      let days = [];
      let week = 0;
      let a = null;
      let lastdays = null;
      let dlength = 0;
      days[week] = [];
      let dlast = new Date(this.year, this.month + 1, 0).getDate();

      for (let i = 1; i <= dlast; i++) {
        if (new Date(this.year, this.month, i).getDay() != this.dFirstMonth) {
          a = { index: i };
          days[week].push(a);
          if (
            i == new Date().getDate() &&
            this.year == new Date().getFullYear() &&
            this.month == new Date().getMonth()
          ) {
            a.background = "#FF7439";
            a.borderRadius = "50%";
            a.color = "#ffffff";
          }
        } else {
          week++;

          days[week] = [];
          a = { index: i };
          days[week].push(a);
        }
      }

      if (days[0].length > 0) {
        for (let i = days[0].length, j = 0; i < 7; i++, j++) {
          lastdays = new Date(this.year, this.month, 0).getDate();

          days[0].unshift({ index: lastdays - j, color: "#c2c6ca" });
        }
      }

      dlength = days.length - 1;

      if (days[dlength].length > 0) {
        for (let i = days[dlength].length, j = 1; i < 7; i++, j++) {
          days[dlength].push({ index: j, color: "#c2c6ca" });
        }
      }

      return days;
    },
    decrease() {
      this.month--;
      if (this.month < 0) {
        this.month = 12;
        this.month--;
        this.year--;
      }
    },
    increase() {
      this.month++;
      if (this.month > 11) {
        this.month = -1;
        this.month++;
        this.year++;
      }
    },
    cancel() {
      this.$store.commit("calendarIsOpen", false);
    },
    choose(e) {
      e.target.style.color = "#ffffff";
      e.target.style.background = "#FF7439";
      e.target.style.borderRadius = "50%"
    },
  },
};
</script>

<style lang="sass">
.wrapper-calendar
	position: absolute
	left: 0
	top: 70px
	z-index: 2
	.calendar
		display: flex
		align-items: flex-start
		justify-content: center
		&__left
			background: #FFFFFF
			box-shadow: 0px 10px 40px rgba(128, 158, 191, 0.2)
			border-radius: 10px
			width: 176px
			height: 373px
		&__right
			margin-left: 20px
			background: #FFFFFF
			box-shadow: 0px 10px 40px rgba(128, 158, 191, 0.2)
			border-radius: 10px
		&__header
			display: flex
			justify-content: space-around
			align-items: center
			font-family: PT Sans
			font-size: 16px
			line-height: 21px
			font-weight: 400
			height: 57px
		&__buttons
			background: #FFFFFF
			display: flex
			align-items: center
			height: 65px
			padding: 0 11px
			.cancel
				border: 2px solid #000000
				background: transparent
				font-family: Montserrat
				border-radius: 7px
				width: 130px
				height: 45px
				display: flex
				justify-content: center
				align-items: center
				font-weight: 600
				font-size: 12px
				line-height: 150%
				&:hover
					background: #000000
					color: #FFFFFF
					cursor: pointer
			.refresh
				background: rgba(255, 116, 57, 0.5)
				border-radius: 7px
				border: none
				font-family: Montserrat
				width: 130px
				height: 45px
				display: flex
				justify-content: center
				align-items: center
				margin-left: 7px
				font-weight: 600
				font-size: 12px
				line-height: 150%
				color: #FFFFFF
				&:hover
					background: #F16E36
					cursor: pointer
		.table
			width: 100%
			padding: 17px 0px
			text-align: center
			background: #F3F8FD
			font-family: Montserrat
			font-size: 12px
			&__week
				font-weight: 700
				line-height: 15px
				color: #000000
				height: 28px
			&__days
				.day
					padding: 10px
					height: 28px
					&:hover
						background: #DFE9F3
						border-radius: 50%
						cursor: pointer

	
</style>