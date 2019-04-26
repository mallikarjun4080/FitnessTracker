<template>
    <div class="container-fluid">
        <div class="row">
            <Sidebar />
            <div class="col-md-10 pl-0 pr-0 vertical-scroll">
                <Header />
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="circles-graph">
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="chart-card">
                                            <div class="row">
                                                <div class="col-6 pr-0">
                                                    <div class="circle" id="circles-1"></div>
                                                </div>
                                                <div class="col-6">
                                                    <p class="main-title">Workouts</p>
                                                    <p class="main-subtitle">20%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="chart-card">
                                            <div class="row">
                                                <div class="col-6 pr-0">
                                                    <div class="circle" id="circles-2"></div>
                                                </div>
                                                <div class="col-6">
                                                    <p class="main-title">Nutritions</p>
                                                    <p class="main-subtitle">20%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="chart-card">
                                            <div class="row">
                                                <div class="col-6 pr-0">
                                                    <div class="circle" id="circles-3"></div>
                                                </div>
                                                <div class="col-6">
                                                    <p class="main-title">Goals</p>
                                                    <p class="main-subtitle">20%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="chart-card">
                                            <div class="row">
                                                <div class="col-6 pr-0">
                                                    <div class="circle" id="circles-4"></div>
                                                </div>
                                                <div class="col-6">
                                                    <p class="main-title">Calories</p>
                                                    <p class="main-subtitle">20%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="chart-wrapper">
                                <canvas id="canvas"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import router from "../router"
    import axios from "axios"
    import Sidebar from './Sidebar.vue'
    import Header from './Header.vue'
    import CircleChart from 'circle-chart'
    import Chart from 'chart.js'
    export default {
        name: "Dashboard",
        components: {
            Sidebar,
            Header
        },
        data: function () {
            return {
                token: '',
                email: ''
            }
        },
        mounted: function () {
            this.token = localStorage.getItem('_tk')
            this.email = localStorage.getItem('_eml')
            this.charts_workouts()
            this.charts_nutritions()
            this.charts_goals()
            this.charts_calories()
            this.charts_main()
        },
        methods: {
            charts_workouts() {
                let config = {
                    headers: {
                        'token': this.token
                    },
                    params: {
                        email: this.email
                    }
                }
                axios.get("http://localhost:4000/api/dashboard/workouts", config).then((response) => {
                    return new CircleChart({
                        $container: document.getElementById('circles-1'),
                        ringProportion: 0.45,
                        tooltips: true,
                        size: '80',
                        staticTotal: true,
                        total: 100,
                        middleCircleColor: '#F5F5F5',
                        background: 'lightgrey',
                        definition: [{
                            label: 'Workouts',
                            name: 'work',
                            color: '#70BF00',
                            value: parseInt(response.data)
                        }]
                    })
                    console.log(response.data);
                }).catch((error) => {
                    alert(error);
                });
            },
            charts_nutritions() {
                let config = {
                    headers: {
                        'token': this.token
                    },
                    params: {
                        email: this.email
                    }
                }
                axios.get("http://localhost:4000/api/dashboard/nutritions", config).then((response) => {
                    return new CircleChart({
                        $container: document.getElementById('circles-2'),
                        ringProportion: 0.45,
                        tooltips: true,
                        size: '80',
                        staticTotal: true,
                        total: 100,
                        middleCircleColor: '#F5F5F5',
                        background: 'lightgrey',
                        definition: [{
                            label: 'Nutritions',
                            name: 'nutrit',
                            color: '#70BF00',
                            value: parseInt(response.data)
                        }]
                    })
                    console.log(response.data);
                }).catch((error) => {
                    alert(error);
                });
            },
            charts_goals() {
                let config = {
                    headers: {
                        'token': this.token
                    },
                    params: {
                        email: this.email
                    }
                }
                axios.get("http://localhost:4000/api/dashboard/goals", config).then((response) => {
                    return new CircleChart({
                        $container: document.getElementById('circles-3'),
                        ringProportion: 0.45,
                        tooltips: true,
                        size: '80',
                        staticTotal: true,
                        total: 100,
                        middleCircleColor: '#F5F5F5',
                        background: 'lightgrey',
                        definition: [{
                            label: 'Goals',
                            name: 'goals',
                            color: '#70BF00',
                            value: parseInt(response.data)
                        }]
                    })
                    console.log(response.data);
                }).catch((error) => {
                    alert(error);
                });
            },
            charts_calories() {
                let config = {
                    headers: {
                        'token': this.token
                    },
                    params: {
                        email: this.email
                    }
                }
                axios.get("http://localhost:4000/api/dashboard/calories", config).then((response) => {
                    return new CircleChart({
                        $container: document.getElementById('circles-4'),
                        ringProportion: 0.45,
                        tooltips: true,
                        size: '80',
                        staticTotal: true,
                        total: 100,
                        middleCircleColor: '#F5F5F5',
                        background: 'lightgrey',
                        definition: [{
                            label: 'Calories',
                            name: 'calories',
                            color: '#70BF00',
                            value: parseInt(response.data)
                        }]
                    })
                    console.log(response.data);
                }).catch((error) => {
                    alert(error);
                });
            },
            charts_main() {
                let config = {
                    headers: {
                        'token': this.token
                    },
                    params: {
                        email: this.email
                    }
                }
                axios.get("http://localhost:4000/api/dashboard/achvieved-goals", config).then((a_goals) => {
                    axios.get("http://localhost:4000/api/dashboard/pending-goals", config).then((p_goals) => {
                        console.log(a_goals);
                        console.log(p_goals)
                        var ctx = document.getElementById('canvas').getContext('2d');
                        var barChartData = {
                            labels: ['January', 'February', 'March', 'April', 'May', 'June',
                                'July'],
                            datasets: [{
                                label: 'Dataset 1',
                                backgroundColor: [
                                    '#81CD00',
                                    '#00C6CD',
                                    '#1B2A00',
                                    '#00252A',
                                    'maroon',
                                    'magenta',
                                    'lightblue'
                                ],
                                yAxisID: 'y-axis-1',
                                data: a_goals.data
                            }, {
                                label: 'Dataset 2',
                                backgroundColor: '#00C6CD',
                                yAxisID: 'y-axis-2',
                                data: p_goals.data
                            }]
                        };
                        return new Chart(ctx, {
                            type: 'bar',
                            data: barChartData,
                            options: {
                                responsive: true,
                                title: {
                                    display: true,
                                    text: 'Acheived Goals'
                                },
                                tooltips: {
                                    mode: 'index',
                                    intersect: true
                                },
                                scales: {
                                    yAxes: [{
                                        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                                        display: true,
                                        position: 'left',
                                        id: 'y-axis-1',
                                    }, {
                                        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                                        display: true,
                                        position: 'right',
                                        id: 'y-axis-2',
                                        gridLines: {
                                            drawOnChartArea: false
                                        }
                                    }],
                                }
                            }
                        })
                    }).catch((error) => {
                        alert(error);
                    });
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