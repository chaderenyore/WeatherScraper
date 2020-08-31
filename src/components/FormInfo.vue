<template>
    <div>
        <form class="form-group">
           <h3 class="locationMsg"><b>Location</b></h3>
            <h4 class="resultMsg"><b>Result Info</b></h4>
            <input type="text" class="form-control" id="locationSrch" placeholder="London, Uk"
                   v-model="location" @keyup="changedLocation">
            
            <button class="btn btn-warning searchBtn" @click="Searched" type="button">Search</button>
            <div class="card infoCard">
                <div class="card-body">
                   <label for="timezone">Timezone?</label>
                    <input type="checkbox" @change="changedInfotime">
                    <br>
                    <label for="Icon">Icon?</label>
                    <input type="checkbox" @change="changedInfoicon">
                </div>
            </div>
        </form>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                location: ''
            }
        },
        methods: {
            Searched() {
                this.$emit('searched')
            },
            changedLocation() {
                this.$emit('locationChanged', this.location)
            },
            changedInfotime() {
                this.$emit('timezoneAltered')
            },
            changedInfoicon() {
                this.$emit('iconAltered')
            }
        }
    }

</script>


<style scoped>
    .locationMsg {
        padding: 0;
        margin: 0;
        position: relative;
        bottom: 25px;
    }
    .resultMsg {
        padding: 0;
        margin: 0;
        position: relative;
        left: 430px;
        bottom:50px;
    }
    #locationSrch {
        width: 250px;
        position: relative;
        bottom: 30px;
    }
    .infoCard {
        width:12rem;
        float:right;
        margin: 0;
        position: relative;
        bottom: 69px;
    }
    .searchBtn {
        position: relative;
        bottom: 23px;
    }
</style>