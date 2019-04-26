<template>
    <div class="container-fluid">
        <div class="row">
            <Sidebar />
            <div class="col-md-10 pl-0 pr-0 vertical-scroll">
                <Header />
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="diet-wrapper text-left mt-5">
                                <div class="row mb-4">
                                    <div class="col-md-12">
                                        <h3><b>{{fitnessgoalComponentName}}</b></h3>
                                        <p>Create your own fitness goal</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-5" v-if="videoLinkCol">
                                        <div class="video-wrapper">
                                            <iframe width="100%" height="420" src="https://www.youtube.com/embed/lMOJlsYJKXc?rel=0&amp;autoplay=1&amp;modestbranding=1&amp;feature=player_embedded" frameborder="0" allowfullscreen=""></iframe>
                                        </div>
                                    </div>
                                    <div v-bind:class="{ 'col-md-7': videoLinkCol == true, 'col-md-12': videoLinkCol == false}">
                                        <form v-on:submit="fitnessgoal($event)">
                                            <div class="form-group">
                                                <label for="uploadImage" class="btn btn-md btn-primary">Upload goal
                                                    Thumbnail</label>
                                                <input type="file" class="d-none" id="uploadImage" name="uploadImage"
                                                    placeholder="Your fitness goal name">
                                            </div>
                                            <div class="form-group">
                                                <label for="goalName"><b>Fitness Goal Name</b></label>
                                                <input type="text" class="form-control" id="goalName"
                                                    name="goalName" v-model="goalName"
                                                    placeholder="Your goal name">
                                            </div>
                                            <div class="form-group">
                                                <label for="goalDetail"><b>Fitness Goal Detail</b></label>
                                                <textarea type="text" class="form-control" id="goalDetail"
                                                    name="goalDetail" v-model="goalDetail"
                                                    row="12" col="4">Your fitness goal details</textarea>
                                            </div>
                                            <div class="form-group">
                                                <label for="calories"><b>Calories Burn</b></label>
                                                <input type="number" min="1" class="form-control" id="calories" name="repitition"
                                                    v-model="calories" placeholder="How many calories burn">
                                            </div>
                                            <div class="form-group">
                                                <label for="duration"><b>Duration</b></label>
                                                <input type="number" min="1" class="form-control" id="duration"
                                                    name="duration" v-model="duration" placeholder="Duration">
                                            </div>
                                            <div class="form-group">
                                                <label for="type"><b>Type</b></label>
                                                <input type="text" class="form-control" id="type" name="type"
                                                    v-model="type" placeholder="Your activity type">
                                            </div>
                                            <div class="form-group">
                                                <label for="goalPeriod"><b>Goal Status</b></label>
                                                <div class="dropdown">
                                                    <button class="btn btn-secondary dropdown-toggle" type="button"
                                                        id="dropdownMenuButton" data-toggle="dropdown"
                                                        aria-haspopup="true" aria-expanded="false">
                                                        Choose Goal Status
                                                    </button>
                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <a class="dropdown-item" v-on:click="setStatus('Not started')"><span
                                                                class="badge badge-secondary">Not started</span></a>
                                                        <a class="dropdown-item" v-on:click="setStatus('Pending')"><span
                                                                class="badge badge-warning">Pending</span></a>
                                                        <a class="dropdown-item" v-on:click="setStatus('In Progress')"><span
                                                                class="badge badge-info">In Progress</span></a>
                                                        <a class="dropdown-item" v-on:click="setStatus('Completed')"><span
                                                                class="badge badge-success">Completed</span></a>
                                                        <a class="dropdown-item" v-on:click="setStatus('Stopped')"><span
                                                                class="badge badge-danger">Stopped</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="goalStatus" v-if="this.goalStatus!==''"><b></b></label>
                                                <input type="text" class="form-control" id="goalStatus" name="goalStatus"
                                                    v-model="goalStatus" placeholder="Your goal status">
                                            </div>
                                            <div class="text-center">
                                                <button class="d-inline-block btn btn-sm btn-save" value="Save"
                                                    type="submit">Save</button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import router from "../../router"
    import axios from "axios"
    import Sidebar from './../Sidebar.vue'
    import Header from './../Header.vue'
    import CircleChart from 'circle-chart'
    import Chart from 'chart.js'
    export default {
        name: "CreateFitnessGoal",
        components: {
            Sidebar,
            Header
        },
        data: function () {
            return {
                token: '',
                email: '',
                fitnessgoalComponentName: '',
                uploadImage: '',
                videoLinkCol: true,
                goalName: '',
                goalDetail: '',
                goalStatus: '',
                calories: '',
                duration: '',
                type: ''
            }
        },
        created: function () {
            this.token = localStorage.getItem('_tk')
            this.email = localStorage.getItem('_eml')
            if(this.$route.query.fitnessgoals_id) {
                let config = {
                            headers:{
                                'token': this.token
                            },
                            params: {
                                email: this.email
                            }
                        }
                this.fitnessgoalComponentName = 'View Fitness Goal Details'
                axios.get(`http://localhost:4000/api/FitnessGoals/${this.$route.query.fitnessgoals_id}`,config)
                .then((response) => {
                    console.log(response.data)
                    let activity = response.data;
                    this.goalName = activity.goalName;
                    this.goalDetail = activity.goalDetail;
                    this.goalStatus = activity.goalStatus;
                    this.calories = activity.calories;
                    this.duration = activity.duration;
                    this.type = activity.type;
                })
                .catch((errors) => {
                    console.log("Cannot create workout")
                })
            } else {
                this.fitnessgoalComponentName = 'Add Goal Details'
                this.videoLinkCol = false;
            }
        },
        methods: {
            fitnessgoal (e)  {
                e.preventDefault()
                 if (!this.$route.query.fitnessgoals_id) {
                    let data = {
                        uploadImage: this.uploadImage,
                        goalName: this.goalName,
                        goalDetail: this.goalDetail,
                        goalStatus: this.goalStatus,
                        calories: this.calories,
                        duration: this.duration,
                        type: this.type,
                    }
                    let config = {
                            headers:{
                                'token': this.token
                            },
                            params: {
                                email: this.email
                            }
                        }
                    axios.post("http://localhost:4000/api/FitnessGoals", data, config)
                        .then((response) => {
                            console.log("Daily Fitness Goal created")
                            router.push("/fitnessgoal")
                        })
                        .catch((errors) => {
                            console.log("Cannot create Daily Fitness Goal")
                        })
                 }else{
                  this.update_fitnessgoal();
                 }
                
            },
               update_fitnessgoal() {
                if(this.$route.query.fitnessgoals_id) {
                    let data = {
                        goalName: this.goalName,
                        goalDetail: this.goalDetail,
                        goalStatus: this.goalStatus,
                        calories: this.calories,
                        duration: this.duration,
                        type: this.type
                    }
                     let config = {
                            headers:{
                                'token': this.token
                            },
                            params: {
                                email: this.email
                            }
                        }
                 axios.put(`http://localhost:4000/api/FitnessGoals/${this.$route.query.fitnessgoals_id}`, data,config)
                 .then((response) => {
                    console.log(response.data)
                    router.push("/fitnessgoal");
                })
                .catch((errors) => {
                    console.log("Cannot update daily activity")
                })
            }
            },
            setStatus(status) {
                this.goalStatus = status
            } 
        }
    }
</script>


<style scoped>
    /* h3 {
        margin: 40px 0 0;
    } */

    /* .nav-brand {
        height: 70px;
        margin: 18px 0 0 34px;
    } */


    .btn-diet-plan {
        height: 46px;
        width: 159px;
        border-radius: 4px;
        color: #fff !important;
        font-weight: 700;
        font-family: Helvetica;
        font-size: 16px;
        line-height: 22px;
        padding: 12px 10px;
        background: linear-gradient(180deg, #AFE9A3 0%, #42B632 100%);
    }

    .sidebar-container {
        height: 100vh;
        width: 100%;
        background-color: #2F2F2F;
    }

    .meal {
        height: 60px;
    }

    .vertical-scroll {
        overflow: hidden;
        overflow-y: scroll;
        height: 100vh;
    }

    .menu-items {
        list-style: none;
    }

    .menu-item {
        color: #FFFFFF;
        font-family: Helvetica;
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 25px;
    }

    .menu-item a {
        color: #FFFFFF;
        font-family: Helvetica;
        font-size: 18px;
    }

    .chart-wrapper {
        height: auto;
        width: 100%;
        border: 1px solid #D7D7D7;
        border-radius: 4px;
        background-color: #F5F5F5;
        box-shadow: 0 7px 14px 0 rgba(0, 0, 0, 0.06);
        margin-bottom: 80px;
    }

    .chart-card {
        margin: 98px 0 30px;
        width: 100%;
        height: 107px;
        border: 1px solid #D7D7D7;
        border-radius: 4px;
        background-color: #F5F5F5;
        box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.05);
    }

    .chart-card .main-title {
        color: #000000;
        font-family: Helvetica;
        font-size: 20px;
        font-weight: bold;
        line-height: 24px;
        text-align: left;
        margin: 0;
        padding-top: 28px;
    }

    .chart-card .main-subtitle {
        color: #000000;
        font-family: Helvetica;
        font-size: 12px;
        font-weight: bold;
        line-height: 14px;
        text-align: left;
        margin: 0;
    }


    .circle {
        width: 80px;
        display: block;
        margin: 0 auto;
        padding: 12px 0;
    }

    .btn-save {
        height: 46px;
        width: 159px;
        border-radius: 4px;
        color: #fff !important;
        font-weight: 700;
        font-family: Helvetica;
        font-size: 14px;
        line-height: 22px;
        padding: 12px 10px;
        margin-top: 30px;
        margin-bottom: 30px;
        background: linear-gradient(180deg, #AFE9A3 0%, #42B632 100%);
    }

    /* .brand-logo {
        display: block;
        width: 225px;
        height: auto;
        margin: 94px auto 60px;
    }

    .hero-img {
        background: url(./../assets/main.jpg) center;
        background-size: cover;
        height: 100vh;
    }

    .signin-wrapper {
        display: block;
        margin: 0 auto;
        width: 357px;
    }

    .signin-wrapper label {
        font-weight: 800;
        font-size: 13px;
    }


    .btn-signin {
        height: 46px;
        width: 159px;
        border-radius: 4px;
        color: #fff !important;
        font-weight: 700;
        font-family: Helvetica;
        font-size: 14px;
        line-height: 22px;
        padding: 12px 10px;
        margin-top: 30px;
        background: linear-gradient(180deg, #AFE9A3 0%, #42B632 100%);
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    } */

    /* a {
        color: #68c36d;
        font-size: 16px;
        font-weight: 700;
    }

    button {
        color: #68c36d;
        font-size: 16px;
        font-weight: 700;
    }

    .footer-txt {
        margin-top: 80px;
    } */
</style>