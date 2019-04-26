<template>
    <div class="col-md-2 sidebar-container">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 sidebar-container">
                    <img class="brand-logo" src="./../assets/fitness-icon.png" />
                    <ul class="menu-items text-left">
                        <li class="menu-item">
                            <router-link :to="{path: 'dashboard'}"><img src="./../assets/dashboard-icon.png" />Dashboard</router-link>
                        </li>
                        <li class="menu-item">
                            <router-link :to="{path: 'dietplan'}"><img src="./../assets/diet-plan-icon.png" />Diet Plans</router-link>
                        </li>
                        <li class="menu-item">
                            <router-link :to="{path: 'workouts'}"><img src="./../assets/workouts-icon.png" />Workouts</router-link>
                        </li>
                        <li class="menu-item">
                            <router-link :to="{path: 'dailyactivity'}"><img src="./../assets/daily-activities.png" />Daily Activities</router-link>
                        </li>
                        <li class="menu-item">
                            <router-link :to="{path: 'fitnessgoal'}"><img src="./../assets/fitness-goals.png" />Fitness Goals</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import router from "../router";
    import axios from "axios"
    export default {
        name: "Sidebar",
        data: {
            email: '',
            password: ''
        },
        methods: {}
    }
</script>


<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    .nav-brand {
        height: 70px;
        margin: 18px 0 0 34px;
    }

    .sidebar-container {
        height: 100vh;
        width: 100%;
        background-color: #2F2F2F;
    }

    .menu-items {
        list-style: none;
        display: block;
        padding: 0;
        margin: 0;
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

    .menu-item:nth-child(1) a img {
        width: 26px;
        height: auto;
        margin-right: 10px;
    }

    .menu-item:nth-child(2) a img {
        width: 20px;
        height: auto;
        margin-top: -10px;
        margin-right: 10px;
    }

    .menu-item:nth-child(3) a img {
        width: 30px;
        height: auto;
        margin-right: 10px;
    }

    .menu-item:nth-child(4) a img {
        width: 25px;
        height: auto;
        margin-right: 10px;
    }

    .menu-item:nth-child(5) a img {
        width: 24px;
        height: auto;
        margin-right: 10px;
    }

    .brand-logo {
        display: block;
        width: 100%;
        height: auto;
        margin: 38px auto 84px;
    }

    /* .hero-img {
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