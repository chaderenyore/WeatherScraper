<template>
   <div>
           <nav class="navbar navbar-expand-lg navbar-light bg-light">
             <router-link to="/" tag="a" class="navbar-brand" active-class="active" exact>Home</router-link>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <span class="navbar-toggler-icon"></span>
               </button>

               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                   <ul class="navbar-nav mr-auto">
                       <li class="nav-item">
                            <router-link to="/about" tag="a" class="nav-link" active-class="active">About</router-link>
                       </li>
                       <li class="nav-item">
                           <router-link to="/help" tag="a" class="nav-link" tabindex="-1" active-class="active">Help</router-link>
                       </li>
                  </ul>

            </div>
          </nav>
    </div>
</template>


<script>
    export default {
        data() {
            return {

            }
        },
      methods: {
        goHome() {
          this.$router.push('')
        }
      }
    }

</script>
