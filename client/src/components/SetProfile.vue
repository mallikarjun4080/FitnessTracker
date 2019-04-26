<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="container setprofile-wrapper">
                    <img class="brand-logo" src="./../assets/fitness-icon.png" />
                    <a class="d-block header-txt">Lets Quickly get your profile ready!<br> so we help you to achieve your goals</a>
                    <form v-on:submit="set_profile($event)">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group text-left">
                                <label for="gender">Gender</label>
                                <input type="text" class="form-control" id="gender" name="gender" v-model="gender">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group text-left">
                                <label for="age">Age</label>
                                <input type="text" class="form-control" id="age" name="age" v-model="age">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group text-left">
                                <label for="height">Height</label>
                                <input type="text" class="form-control" id="height" name="height" v-model="height">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group text-left">
                                <label for="bodyweight">Body Weight</label>
                                <input type="text" class="form-control" id="age" name="bodyweight" v-model="bodyweight">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group text-left">
                                <label for="bmi">BMI</label>
                                <input type="text" class="form-control" id="bmi" name="bmi" v-model="bmi">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group text-left">
                                <label for="bloodpressure">Blood Pressure</label>
                                <input type="text" class="form-control" id="bloodpressure" name="bloodpressure" v-model="bloodpressure">
                            </div>
                        </div>
                    </div>
                    <div class="form-group text-left">
                        <label for="cnfrm-pwd">Confirm Password</label>
                        <input type="password" class="form-control" id="cnfrm-pwd" name="confirmpassword" v-model="confirmpassword">
                    </div>
                    <button class="d-inline-block btn btn-sm btn-save" value="Save" type="submit">Save</button>
                    </form>
                    <a class="d-block footer-txt">2019 - 2020 All rights reserved.</a>
                </div>
                <div>
                    <img class="footer-hero-img" src="./../assets/city-footer.png" />
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import router from "../router"
    import axios from "axios"    
        export default {    
            name: "SetProfile",  
            data: function() {
                return {
                    token: '',
                    email: '',
                    gender: '',
                    age: '',
                    height: '',
                    bodyweight: '',
                    bmi: '',
                    bloodpressure: '',
                    confirmpassword: ''
                }
            },
            mounted: function() {
                this.token = localStorage.getItem('_tk')
                this.email = localStorage.getItem('_eml')
                localStorage.setItem('_pf_vtd','true')
            },
            methods: {    
                set_profile (e)  {    
                    e.preventDefault()
                        let data = {    
                            gender: this.gender,
                            age: this.age,
                            height: this.height,
                            bodyweight: this.bodyweight,
                            bmi: this.bmi,
                            bloodpressure: bloodpressure,
                            confirmpassword: this.confirmpassword   
                        }
                       // console.log(data);
                        let config = {
                            headers:{
                                'token': this.token
                            },
                            params:{
                                'email': this.email
                            }
                        }
                        axios.post("http://localhost:4000/api/Profile", data, config)    
                            .then((response) => {    
                                //console.log("Profile Saved")    
                                router.push("/dashboard")  
                            })    
                            .catch((errors) => {    
                                alert('Cannot Process your request')
                            
                            })    
                       
                }    
            }    
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

    .brand-logo {
        display: block;
        width: 225px;
        height: auto;
        margin: 94px auto 60px;
    }

    .hero-img {
        background: url(./../assets/main.jpg) center right;
        background-size: cover;
        height: auto;
    }

    .setprofile-wrapper {
        display: block;
        margin: 0 auto;
        width: 357px;
    }

    .setprofile-wrapper label {
        font-weight: 800;
        font-size: 13px;
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
        background: linear-gradient(180deg, #AFE9A3 0%, #42B632 100%);
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #68c36d;
        font-size: 16px;
        font-weight: 700;
    }

    .footer-txt {
        margin-top: 80px;
        margin-bottom: 50px;
    }

    .header-txt {
        font-weight: 800;
        font-size: 13px;
        margin-bottom: 40px;
    }

    .footer-hero-img {
        margin-bottom: 0;
    }

</style>