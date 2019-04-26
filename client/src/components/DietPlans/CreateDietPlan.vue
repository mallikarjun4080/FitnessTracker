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
                                        <h3><b>Create Diet Plan</b></h3>
                                        <p>Create your own customized diet plan</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <form v-on:submit="dietplan($event)">
                                            <div class="form-group">
                                                <label for="dietplanName"><b>Diet Plan Name</b></label>
                                                <input type="text" class="form-control" id="dietplanName"
                                                    name="dietplanName" v-model="dietplanName"
                                                    placeholder="Your diet plan name">
                                            </div>
                                            <div class="form-group">
                                                <label for="dietplanPeriod"><b>Diet Plan Period</b></label>
                                                <input type="number" min="1" class="form-control" id="dietplanPeriod"
                                                    name="dietplanPeriod" v-model="dietplanPeriod"
                                                    placeholder="Your diet plan period (7)">
                                            </div>
                                            <div class="form-group">
                                                <label for="dietplanName"><b>Diet Plan Period Type</b></label>
                                                <div class="dropdown">
                                                    <button class="btn btn-secondary dropdown-toggle" type="button"
                                                        id="dropdownMenuButton" data-toggle="dropdown"
                                                        aria-haspopup="true" aria-expanded="false">
                                                        Diet Plan Period Type
                                                    </button>
                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        
                                                        <a class="dropdown-item" href="#">Monthly</a>
                                                        <a class="dropdown-item" href="#">Weekly</a>
                                                        <a class="dropdown-item" href="#">Yearly</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="dietplanPeriod"><b>Diet Plan Status</b></label>
                                                <div class="dropdown">
                                                    <button class="btn btn-secondary dropdown-toggle" type="button"
                                                        id="dropdownMenuButton" data-toggle="dropdown"
                                                        aria-haspopup="true" aria-expanded="false">
                                                        Choose Diet Plan Status
                                                    </button>
                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <a class="dropdown-item" href="#"><span
                                                                class="badge badge-secondary">Not started</span></a>
                                                        <a class="dropdown-item" href="#"><span
                                                                class="badge badge-warning">Pending</span></a>
                                                        <a class="dropdown-item" href="#"><span
                                                                class="badge badge-info">In Progress</span></a>
                                                        <a class="dropdown-item" href="#"><span
                                                                class="badge badge-success">Completed</span></a>
                                                        <a class="dropdown-item" href="#"><span
                                                                class="badge badge-danger">Stopped</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-2">
                                                    <div class="form-group">
                                                        <label for="dietplanName"><b>Meals Type</b></label>
                                                        <input type="text" v-model="meal01type" name="meal01type"
                                                            class="form-control meal" id="dietplanName"
                                                            placeholder="Meal Type">
                                                    </div>
                                                </div>
                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <label for="dietplanName"><b>Mon</b></label>
                                                        <input type="text" v-model="meal01mon" name="meal01mon"
                                                            class="form-control meal" id="dietplanName" placeholder="">
                                                    </div>
                                                </div>
                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <label for="dietplanName"><b>Tue</b></label>
                                                        <input type="text" v-model="meal01tue" name="meal01tue"
                                                            class="form-control meal" id="dietplanName" placeholder="">
                                                    </div>
                                                </div>
                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <label for="dietplanName"><b>Wed</b></label>
                                                        <input type="text" v-model="meal01wed" name="meal01wed"
                                                            class="form-control meal" id="dietplanName" placeholder="">
                                                    </div>
                                                </div>
                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <label for="dietplanName"><b>Thu</b></label>
                                                        <input type="text" v-model="meal01thu" name="meal01thu"
                                                            class="form-control meal" id="dietplanName" placeholder="">
                                                    </div>
                                                </div>
                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <label for="dietplanName"><b>Fri</b></label>
                                                        <input type="text" v-model="meal01fri" name="meal01fri"
                                                            class="form-control meal" id="dietplanName" placeholder="">
                                                    </div>
                                                </div>
                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <label for="dietplanName"><b>Sat</b></label>
                                                        <input type="text" v-model="meal01sat" name="meal01sat"
                                                            class="form-control meal" id="dietplanName" placeholder="">
                                                    </div>
                                                </div>
                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <label for="dietplanName"><b>Sun</b></label>
                                                        <input type="text" v-model="meal01sun" name="meal01sun"
                                                            class="form-control meal" id="dietplanName" placeholder="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-2">
                                                    <div class="form-group">
                                                        <label for="dietplanName"><b></b></label>
                                                        <input type="text" v-model="meal02type" name="meal02type"
                                                            class="form-control meal" id="dietplanName"
                                                            placeholder="Meal Type">
                                                    </div>
                                                </div>
                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <label for="dietplanName"><b>Mon</b></label>
                                                        <input type="text" v-model="meal02mon" name="meal02mon"
                                                            class="form-control meal" id="dietplanName" placeholder="">
                                                    </div>
                                                </div>
                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <label for="dietplanName"><b>Tue</b></label>
                                                        <input type="text" v-model="meal02tue" name="meal02tue"
                                                            class="form-control meal" id="dietplanName" placeholder="">
                                                    </div>
                                                </div>
                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <label for="dietplanName"><b>Wed</b></label>
                                                        <input type="text" v-model="meal02wed" name="meal02wed"
                                                            class="form-control meal" id="dietplanName" placeholder="">
                                                    </div>
                                                </div>
                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <label for="dietplanName"><b>Thu</b></label>
                                                        <input type="text" v-model="meal02thu" name="meal02thu"
                                                            class="form-control meal" id="dietplanName" placeholder="">
                                                    </div>
                                                </div>
                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <label for="dietplanName"><b>Fri</b></label>
                                                        <input type="text" v-model="meal02fri" name="meal02fri"
                                                            class="form-control meal" id="dietplanName" placeholder="">
                                                    </div>
                                                </div>
                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <label for="dietplanName"><b>Sat</b></label>
                                                        <input type="text" v-model="meal02sat" name="meal02sat"
                                                            class="form-control meal" id="dietplanName" placeholder="">
                                                    </div>
                                                </div>
                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <label for="dietplanName"><b>Sun</b></label>
                                                        <input type="text" v-model="meal02sun" name="meal02sun"
                                                            class="form-control meal" id="dietplanName" placeholder="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-2">
                                                    <div class="form-group">
                                                        <label for="dietplanName"><b></b></label>
                                                        <input type="text" v-model="meal03type" name="meal03type"
                                                            class="form-control meal" id="dietplanName"
                                                            placeholder="Meal Type">
                                                    </div>
                                                </div>
                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <label for="dietplanName"><b>Mon</b></label>
                                                        <input type="text" v-model="meal03mon" name="meal03mon"
                                                            class="form-control meal" id="dietplanName" placeholder="">
                                                    </div>
                                                </div>
                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <label for="dietplanName"><b>Tue</b></label>
                                                        <input type="text" v-model="meal03sun" name="meal03tue"
                                                            class="form-control meal" id="dietplanName" placeholder="">
                                                    </div>
                                                </div>
                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <label for="dietplanName"><b>Wed</b></label>
                                                        <input type="text" v-model="meal03wed" name="meal03wed"
                                                            class="form-control meal" id="dietplanName" placeholder="">
                                                    </div>
                                                </div>
                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <label for="dietplanName"><b>Thu</b></label>
                                                        <input type="text" v-model="meal03thu" name="meal03thu"
                                                            class="form-control meal" id="dietplanName" placeholder="">
                                                    </div>
                                                </div>
                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <label for="dietplanName"><b>Fri</b></label>
                                                        <input type="text" v-model="meal03fri" name="meal03fri"
                                                            class="form-control meal" id="dietplanName" placeholder="">
                                                    </div>
                                                </div>
                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <label for="dietplanName"><b>Sat</b></label>
                                                        <input type="text" v-model="meal03sat" name="meal03sat"
                                                            class="form-control meal" id="dietplanName" placeholder="">
                                                    </div>
                                                </div>
                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <label for="dietplanName"><b>Sun</b></label>
                                                        <input type="text" v-model="meal03sun" name="meal03sun"
                                                            class="form-control meal" id="dietplanName" placeholder="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-2">
                                                    <div class="form-group">
                                                        <label for="dietplanName"><b>Do Ahead</b></label>
                                                        <input type="text" v-model="meal04type" name="meal04type"
                                                            class="form-control meal" id="dietplanName" placeholder="">
                                                    </div>
                                                </div>
                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <label for="dietplanName"><b>Mon</b></label>
                                                        <input type="text" v-model="meal04mon" name="meal04mon"
                                                            class="form-control meal" id="dietplanName" placeholder="">
                                                    </div>
                                                </div>
                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <label for="dietplanName"><b>Tue</b></label>
                                                        <input type="text" v-model="meal04tue" name="meal04tue"
                                                            class="form-control meal" id="dietplanName" placeholder="">
                                                    </div>
                                                </div>
                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <label for="dietplanName"><b>Wed</b></label>
                                                        <input type="text" v-model="meal04wed" name="meal04wed"
                                                            class="form-control meal" id="dietplanName" placeholder="">
                                                    </div>
                                                </div>
                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <label for="dietplanName"><b>Thu</b></label>
                                                        <input type="text" v-model="meal04thu" name="meal04thu"
                                                            class="form-control meal" id="dietplanName" placeholder="">
                                                    </div>
                                                </div>
                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <label for="dietplanName"><b>Fri</b></label>
                                                        <input type="text" v-model="meal04fri" name="meal04fri"
                                                            class="form-control meal" id="dietplanName" placeholder="">
                                                    </div>
                                                </div>
                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <label for="dietplanName"><b>Sat</b></label>
                                                        <input type="text" v-model="meal04sat" name="meal04sat"
                                                            class="form-control meal" id="dietplanName" placeholder="">
                                                    </div>
                                                </div>
                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <label for="dietplanName"><b>Sun</b></label>
                                                        <input type="text" v-model="meal04sun" name="meal04sun"
                                                            class="form-control meal" id="dietplanName" placeholder="">
                                                    </div>
                                                </div>
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
        name: "CreateDietPlan",
        components: {
            Sidebar,
            Header
        },
        data: function () {
            return {
                token: '',
                email: '',
                dietplanName: '',
                dietplanPeriod: '',
                meal01type: '',
                meal02type: '',
                meal03type: '',
                meal04type: '',
                meal01mon: '',
                meal01tue: '',
                meal01wed: '',
                meal01thu: '',
                meal01fri: '',
                meal01sat: '',
                meal01sun: '',
                meal02mon: '',
                meal02tue: '',
                meal02wed: '',
                meal02thu: '',
                meal02fri: '',
                meal02sat: '',
                meal02sun: '',
                meal03mon: '',
                meal03tue: '',
                meal03wed: '',
                meal03thu: '',
                meal03fri: '',
                meal03sat: '',
                meal03sun: '',
                meal04mon: '',
                meal04tue: '',
                meal04wed: '',
                meal04thu: '',
                meal04fri: '',
                meal04sat: '',
                meal04sun: ''
            }

        },
        created: function () {
            this.token = localStorage.getItem('_tk')
            this.email = localStorage.getItem('_eml')
            if (this.$route.query.dietplan_id) {
                let config = {
                    headers: {
                        'token': this.token
                    },
                    params: {
                        email: this.email
                    }
                }
                this.workoutComponentName = 'View Workout Details'
                axios.get(`http://localhost:4000/api/DietPlans/${this.$route.query.dietplan_id}`, config)
                    .then((response) => {
                        console.log(response.data)
                        let dietplan = response.data;
                        console.log(dietplan.dietplanName)
                        this.dietplanName = dietplan.dietplanName;
                        this.dietplanPeriod = dietplan.dietplanPeriod;
                        this.meal01type = dietplan.meal01type;
                        this.meal02type = dietplan.meal02type;
                        this.meal03type = dietplan.meal03type;
                        this.meal04type = dietplan.meal04type;
                        this.meal01mon = dietplan.meal01mon;
                        this.meal01tue = dietplan.meal01tue;
                        this.meal01wed = dietplan.meal01wed;
                        this.meal01thu = dietplan.meal01thu;
                        this.meal01fri = dietplan.meal01fri;
                        this.meal01sat = dietplan.meal01sat;
                        this.meal01sun = dietplan.meal01sun;
                        this.meal02mon = dietplan.meal02mon;
                        this.meal02tue = dietplan.meal02tue;
                        this.meal02wed = dietplan.meal02wed;
                        this.meal02thu = dietplan.meal02thu;
                        this.meal02fri = dietplan.meal02fri;
                        this.meal02sat = dietplan.meal02sat;
                        this.meal02sun = dietplan.meal02sun;
                        this.meal03mon = dietplan.meal03mon;
                        this.meal03tue = dietplan.meal03tue;
                        this.meal03wed = dietplan.meal03wed;
                        this.meal03thu = dietplan.meal03thu;
                        this.meal03fri = dietplan.meal03fri;
                        this.meal03sat = dietplan.meal03sat;
                        this.meal03sun = dietplan.meal03sun;
                        this.meal04mon = dietplan.meal04mon;
                        this.meal04tue = dietplan.meal04tue;
                        this.meal04wed = dietplan.meal04wed;
                        this.meal04thu = dietplan.meal04thu;
                        this.meal04fri = dietplan.meal04fri;
                        this.meal04sat = dietplan.meal04sat;
                        this.meal04sun = dietplan.meal04sun;

                    })
                    .catch((errors) => {
                        console.log("Cannot create workout")
                    })
            } else {
                this.workoutComponentName = 'Add Workout Details'
                this.videoLinkCol = false;
            }

            function setStatus(status) {
                this.workoutStatus = status
            }
        },

        methods: {
            dietplan(e) {
                e.preventDefault()
                if (!this.$route.query.dietplan_id) {
                    let data = {
                        dietplanName: this.dietplanName,
                        dietplanPeriod: this.dietplanPeriod,
                        meal01type: this.meal01type,
                        meal02type: this.meal02type,
                        meal03type: this.meal03type,
                        meal04type: this.meal04type,
                        meal01mon: this.meal01mon,
                        meal01tue: this.meal01tue,
                        meal01wed: this.meal01wed,
                        meal01thu: this.meal01thu,
                        meal01fri: this.meal01fri,
                        meal01sat: this.meal01sat,
                        meal01sun: this.meal01sun,
                        meal02mon: this.meal02mon,
                        meal02tue: this.meal02tue,
                        meal02wed: this.meal02wed,
                        meal02thu: this.meal02thu,
                        meal02fri: this.meal02fri,
                        meal02sat: this.meal02sat,
                        meal02sun: this.meal02sun,
                        meal03mon: this.meal03mon,
                        meal03tue: this.meal03tue,
                        meal03wed: this.meal03wed,
                        meal03thu: this.meal03thu,
                        meal03fri: this.meal03fri,
                        meal03sat: this.meal03sat,
                        meal03sun: this.meal03sun,
                        meal04mon: this.meal04mon,
                        meal04tue: this.meal04tue,
                        meal04wed: this.meal04wed,
                        meal04thu: this.meal04thu,
                        meal04fri: this.meal04fri,
                        meal04sat: this.meal04sat,
                        meal04sun: this.meal04sun,
                        dietplanStatus:this.dietplanStatus
                    }
                    let config = {
                        headers: {
                            'token': this.token
                        },
                        params: {
                            email: this.email
                        }
                    }
                    axios.post("http://localhost:4000/api/DietPlans", data, config)
                        .then((response) => {
                            console.log("Diet plan created")
                            router.push("/dietplan")
                        })
                        .catch((errors) => {
                            console.log("Cannot create diet plan")
                        })

                } else {
                    this.update_dietplan();
                }
            },
            update_dietplan() {
                if (this.$route.query.dietplan_id) {
                    let data = {
                        dietplanName: this.dietplanName,
                        dietplanPeriod: this.dietplanPeriod,
                        meal01type: this.meal01type,
                        meal02type: this.meal02type,
                        meal03type: this.meal03type,
                        meal04type: this.meal04type,
                        meal01mon: this.meal01mon,
                        meal01tue: this.meal01tue,
                        meal01wed: this.meal01wed,
                        meal01thu: this.meal01thu,
                        meal01fri: this.meal01fri,
                        meal01sat: this.meal01sat,
                        meal01sun: this.meal01sun,
                        meal02mon: this.meal02mon,
                        meal02tue: this.meal02tue,
                        meal02wed: this.meal02wed,
                        meal02thu: this.meal02thu,
                        meal02fri: this.meal02fri,
                        meal02sat: this.meal02sat,
                        meal02sun: this.meal02sun,
                        meal03mon: this.meal03mon,
                        meal03tue: this.meal03tue,
                        meal03wed: this.meal03wed,
                        meal03thu: this.meal03thu,
                        meal03fri: this.meal03fri,
                        meal03sat: this.meal03sat,
                        meal03sun: this.meal03sun,
                        meal04mon: this.meal04mon,
                        meal04tue: this.meal04tue,
                        meal04wed: this.meal04wed,
                        meal04thu: this.meal04thu,
                        meal04fri: this.meal04fri,
                        meal04sat: this.meal04sat,
                        meal04sun: this.meal04sun
                    }
                    let config = {
                        headers: {
                            'token': this.token
                        },
                        params: {
                            email: this.email
                        }
                    }
                    axios.put(`http://localhost:4000/api/DietPlans/${this.$route.query.dietplan_id}`, data, config)
                        .then((response) => {
                            console.log(response.data)
                            router.push("/dietplan");
                        })
                        .catch((errors) => {
                            console.log("Cannot update diet plan")
                        })
                }
            },
               delete_dietplan() {
                if (this.$route.query.dietplan_id) {
                   // let data = {}
                    let config = {
                        headers: {
                            'token': this.token
                        },
                        params: {
                            email: this.email
                        }
                    }
                    axios.delete(`http://localhost:4000/api/DietPlans/${this.$route.query.dietplan_id}`, config)
                        .then((response) => {
                            console.log(response.data)
                            router.push("/dietplan");
                        })
                        .catch((errors) => {
                            console.log("Cannot delete diet plan")
                        })
                }
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