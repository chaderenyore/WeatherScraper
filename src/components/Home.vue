<template>
  <div class="container">
    <div class="row app">
      <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <appForm @searched="fetchWeather" :Location="location" @locationChanged="location = $event"
                 @timezoneAltered="showTimezone = !showTimezone"
                 @iconAltered="showIcon = !showIcon"></appForm>
      </div>
    </div>

    <div id="Result" class="row">
      <transition name="fade" appear>
        <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3" v-if="showResult">
          <h3>Country: {{ countryvalue }}</h3>
          <h5>City Name: {{ namevalue }}</h5>
          <p>Temp: {{ tempvalue }}</p>
          <p v-if="showTimezone">Timezone: {{ timezonevalue }}</p>
          <p :key="descvalue">Description: {{ descvalue }}</p>
          <p v-if="showIcon"><img :src="iconUrl" alt=""></p>
        </div>
      </transition>
      <transition enter-active-class="animate__animated animate__jackInTheBox">
        <div v-if="gotError" style="padding: 10px;">
          <p>Error Try checking your connection or your spelling.
            Also Note: searchbox can't be empty</p>
          <p>Fixed? Try searching Again</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
    import navbar from "./navbar";
    import FormInfo from "./FormInfo";

    export default {
      data() {
        return {
          showResult: false,
          showTimezone: false,
          gotError: false,
          showIcon: false,
          location: '',
          countryvalue: '',
          namevalue: '',
          tempvalue: '',
          descvalue: '',
          timezonevalue: '',
          iconCode: '',
          iconUrl: ''
        }
      },
      methods: {
        fetchWeather() {
          this.$http.get('https://api.openweathermap.org/data/2.5/weather?q='+this.location+'&appid=3b31227980f7ad4425f12ed0799bea92')
            .then((response) => {
              return response.json()
            })
            .then(data => {
              this.countryvalue = data['sys']['country']
              this.namevalue = data['name'];
              this.tempvalue = data['main']['temp'];
              this.descvalue = data['weather'][0]['description'];
              this.timezonevalue = data['timezone'];
              this.iconCode = data['weather'][0].icon;

              this.iconUrl = "http://openweathermap.org/img/w/" + this.iconCode + ".png";
              console.log(data)
              this.showResult = true;
              this.gotError = false;
            }, error => {
              this.gotError = true;
              this.showResult = false;
            });
        }
      },
      components: {
        appNav: navbar,
        appForm: FormInfo
      }
    }
</script>

<style scoped>
.app {
  margin-top: 8px;
  margin-bottom: 0;
}
#Result {
  width: 600px;
  background: #136a8a;  /* fallback for old browsers */
  background: #833ab4;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #fcb045, #fd1d1d, #833ab4);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #fcb045, #fd1d1d, #833ab4); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


  /*        display: flex;*/
  /*        align-content: center;*/
  position: relative;
  left: 25%;
  border-radius: 10px;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {
  opacity: 0;
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
</style>
