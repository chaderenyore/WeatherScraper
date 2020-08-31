<template>
    <div>
        <p class="intro-text">This site was created by Chadere Oghenenyoreme. It uses data from Openweather!</p>
      <img src="static/nyore.jpg" alt="" class="portriat">
      <hr class="separating-rule">
      <p class="repo-link">Link to <a href="https://Nyosky@bitbucket.org/Nyosky/weatherscraper" target="_blank">BitBucket Repo</a></p>
      <p class="footer-text font-weight-light">Created By Chadere Oghenenyoreme &copy; 2020 - {{ thisYear }}</p>
    </div>
</template>

<script>
      export default {
        data() {
          return {
            thisYear: ''
          }
        },
        created() {
            let year = new Date();
            this.thisYear = year.getFullYear();
        }
      }
</script>

<style scoped>
      .portriat {
        width: 250px;
        height: 270px;
        position: relative;
        /*transform: translate(-50%, -50%);*/
        top: 32%;
        left: 15%;
      }
      .intro-text {
        position: relative;
        left: 15%;
        font-size: 19px;
      }
      .separating-rule {
        position: relative;
        left: 15%;
        width: 690px;
        border: none;
        height: 2px;
        background: grey;
      }
      .footer-text {
        position: relative;
        left: 15%;
      }
      .repo-link{
        position: relative;
        left: 15%;
      }

</style>
