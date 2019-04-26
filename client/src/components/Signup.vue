<template>
    <div class="container-fluid">
        <!-- <div class="row nav-brand">
            <div class="col-md-6">
                <img class="brand-logo" src="./../assets/fitness-icon.png" />
            </div>
            <div class="col-md-6">
                <div class="d-inline-block float-right">
                <a href="" class="d-inline-block pt-3 mr-3">Signin</a>
                <a class="d-inline-block btn btn-sm btn-signup">Signup</a>
                </div>
            </div>
        </div> -->
        <div class="row">
            <div class="col-md-6 hero-img">
            </div>
            <div class="col-md-6 hero-signup-container">
                <div class="container signup-wrapper">
                    <img class="brand-logo" src="./../assets/fitness-icon.png" />
                    <form v-on:submit="signup($event)">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group text-left">
                                <label for="usr">First Name</label>
                                <input type="text" class="form-control" id="usr" name="firstname" v-model="firstname">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group text-left">
                                <label for="usr">Last Name</label>
                                <input type="text" class="form-control" id="usr" name="lastname" v-model="lastname">
                            </div>
                        </div>
                    </div>
                    <div class="form-group text-left">
                        <label for="exampleInputEmail">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail" name="email" v-model="email">
                    </div>
                    <div class="form-group text-left">
                        <label for="pwd">Password</label>
                        <input type="password" class="form-control" id="pwd" name="password" v-model="password">
                    </div>
                    <div class="form-group text-left">
                        <label for="cnfrm-pwd">Confirm Password</label>
                        <input type="password" class="form-control" id="pwd" name="confirmpassword" v-model="confirmpassword">
                    </div>
                    <button class="d-inline-block btn btn-sm btn-signup" value="Signup" type="submit">Signup</button>
                    </form>
                    <a class="d-block mt-5">Forgot password?</a>
                    <router-link :to="{path: 'signin'}" class="d-block">Already have account <u><b>Signin</b></u></router-link>
                    <a class="d-block footer-txt">2019 - 2020 All rights reserved.</a>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import router from "../router";
    import axios from "axios"    
        export default {    
            name: "Signup",  
            data: function () {
                return {
                    firstname: '',
                    lastname: '',
                    email: '',
                    password: '',
                    confirmpassword: ''
                }
            },
            methods: {    
                signup (e) {    
                    e.preventDefault()     
                        let data = {    
                            firstName: this.firstname,
                            lastName: this.lastname,
                            email: this.email,
                            password: this.password,
                            confirmpassword: this.confirmpassword   
                        }
                        axios.post("http://localhost:4000/users", data)    
                            .then(() => {    
                                alert('registered')
                                router.push("/signin")  
                            })    
                            .catch((errors) => {
                                alert(errors)   
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

    .hero-signup-container {
        height: 100vh;
        overflow: hidden;
        overflow-y: scroll;
    }

    .signup-wrapper {
        display: block;
        margin: 0 auto;
        width: 357px;
    }

    .signup-wrapper label {
        font-weight: 800;
        font-size: 13px;
    }


    .btn-signup {
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

    button {
        color: #68c36d;
        font-size: 16px;
        font-weight: 700;
    }

    .footer-txt {
        margin-top: 80px;
        margin-bottom: 50px;
    }
</style>