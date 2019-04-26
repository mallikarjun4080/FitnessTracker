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
                                    <div class="col-md-9">
                                        <h3><b>Daily Activity</b></h3>
                                        <p>Pre-built daily activity that fits your needs or you can create your own customized daily activity</p>
                                    </div>
                                    <div class="col-md-3 text-right">
                                        <router-link :to="{path: 'createdailyactivity'}" class="btn btn-md btn-diet-plan"><i class="glyphicon glyphicon-plus"></i>
                                            Create Activity</router-link>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <table class="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col"></th>
                                                    <th scope="col">Daily Activity</th>
                                                    <th scope="col">Repitition</th>
                                                    <th scope="col">Duration</th>
                                                    <th scope="col">Type</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(daily, index) in dailyactivityarray">
                                                   <th scope="row">{{ ++index }}</th>
                                                    <td>
                                                        <img src="./../../assets/push_ups.jpg" class="workout-icon-image"/>
                                                    </td>
                                                   
                                                     <td>
                                                        <b>{{daily.activityName}}</b>
                                                        <br>
                                                        {{daily.activityDetail}}
                                                    </td>
                                                    <td>{{daily.repitition}}</td>
                                                    <td>{{daily.duration}}</td>
                                                    <td>{{daily.type}}</td>
        
                                                    
                                                    <td class="max-width-full"><span class="badge badge-info">In Progress</span></td>
                                                    <td>
                                                        <div class="dropdown">
                                                            <button class="btn btn-secondary dropdown-toggle"
                                                                type="button" id="dropdownMenuButton"
                                                                data-toggle="dropdown" aria-haspopup="true"
                                                                aria-expanded="false">
                                                                Actions
                                                            </button>
                                                            <div class="dropdown-menu"
                                                                aria-labelledby="dropdownMenuButton">
                                                                <div class="col-md-3 text-right">
                                                                    <router-link class="dropdown-item" :to="{path: 'createdailyactivity', query: { dailyactivity_id: daily.daily_activity_id }}" ><i class="glyphicon glyphicon-plus"></i>
                                                                        Edit/View</router-link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>
                                                        <img src="./../../assets/push_ups.jpg" class="workout-icon-image"/>
                                                    </td>
                                                    <td>
                                                        <b>Aerobic exercise classes</b>
                                                        <br>
                                                        <p>Place your hands to your side and your feet together. While jumping in the air, simultaneously clap your hands and spread your feet slightly wider than shoulder width apart. Jump again, this time returning your arms to your side and clicking your heels together like Dorothy.</p>
                                                    </td>
                                                    <td>3 times</td>
                                                    <td>30 min</td>
                                                    <td>Body Weight Workouts</td>
                                                    <td class="max-width-full"><span class="badge badge-info">In Progress</span></td>
                                                    <td>
                                                        <div class="dropdown">
                                                            <button class="btn btn-secondary dropdown-toggle"
                                                                type="button" id="dropdownMenuButton"
                                                                data-toggle="dropdown" aria-haspopup="true"
                                                                aria-expanded="false">
                                                                Actions
                                                            </button>
                                                            <div class="dropdown-menu"
                                                                aria-labelledby="dropdownMenuButton">
                                                                <div class="col-md-3 text-right">
                                                                    <router-link class="dropdown-item" :to="{path: 'createdailyactivity', query: { dailyactivity_id: 2 }}" ><i class="glyphicon glyphicon-plus"></i>
                                                                        Edit/View</router-link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>
                                                        <img src="./../../assets/squats.jpg" class="workout-icon-image"/>
                                                    </td>
                                                    <td>
                                                        <b>Dancing</b>
                                                        <br>
                                                        <p>Place your hands to your side and your feet together. While jumping in the air, simultaneously clap your hands and spread your feet slightly wider than shoulder width apart. Jump again, this time returning your arms to your side and clicking your heels together like Dorothy.</p>
                                                    </td>
                                                    <td>3 times</td>
                                                    <td>30 min</td>
                                                    <td>Body Weight Workouts</td>
                                                    <td class="max-width-full"><span class="badge badge-success">Completed</span></td>
                                                    <td>
                                                        <div class="dropdown">
                                                            <button class="btn btn-secondary dropdown-toggle"
                                                                type="button" id="dropdownMenuButton"
                                                                data-toggle="dropdown" aria-haspopup="true"
                                                                aria-expanded="false">
                                                                Actions
                                                            </button>
                                                            <div class="dropdown-menu"
                                                                aria-labelledby="dropdownMenuButton">
                                                                <router-link class="dropdown-item" :to="{path: 'createdailyactivity', query: { dailyactivity_id: 2  }}" ><i class="glyphicon glyphicon-plus"></i>
                                                                        Edit/View</router-link>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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
        name: "DailyActivity",
        components: {
            Sidebar,
            Header
        },
        data: function() {
              return {
                token: '',
                email: '',
                dailyactivityarray: []
            }
        },
        mounted: function () {
            this.token = localStorage.getItem('_tk')
            this.email = localStorage.getItem('_eml')
            this.fetchDailyActivity()
        },
        methods: {
              fetchDailyActivity() {
                let config = {
                    headers: {
                        'token': this.token
                    },
                    params: {
                        email: this.email
                    }
                }
                axios.get("http://localhost:4000/api/DailyActivities",config).then((response) => {
                    this.dailyactivityarray = response.data;
                    console.log(response.data);
                }).catch((error) => {
                    alert(error);
                });
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

    .workout-icon-image {
        width: 100px;
        height: 100px;
    }

    .max-width-full {
        width: 280px;
        height: auto;
    }


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