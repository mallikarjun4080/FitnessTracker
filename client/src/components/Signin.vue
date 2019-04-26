<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6 hero-img">
            </div>
            <div class="col-md-6">
                <div class="container signin-wrapper">
                    <img class="brand-logo" src="./../assets/fitness-icon.png" />
                    <form v-on:submit="signin($event)">
                        <div class="form-group text-left">
                            <label for="usr">Name</label>
                            <input type="email" class="form-control" id="usr" name="email" v-model="email">
                        </div>
                        <div class="form-group text-left">
                            <label for="pwd">Password</label>
                            <input type="password" class="form-control" id="pwd" name="password" v-model="password">
                        </div>
                        <button class="d-inline-block btn btn-sm btn-signin" value="Login" type="submit">Signin</button>
                        <!-- <router-link :to="{path: 'dashboard'}" class="d-inline-block btn btn-sm btn-signin">Signin -->
                       <!-- </router-link> -->
                    </form>
                    <a class="d-block mt-5">Forgot password?</a>
                    <router-link :to="{path: 'signup'}" class="d-block">Don't have account <u><b>Signup</b></u>
                    </router-link>
                    <a class="d-block footer-txt">2019 - 2020 All rights reserved.</a>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import router from "../router"
    import axios from "axios"
    export default {
        name: "Signin",
        data: function () {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            signin(e) {
                e.preventDefault()
                let data = {
                    email: this.email,
                    password: this.password
                }
                axios.post("http://localhost:4000/users/auth", data)
                    .then((response) => {
                        localStorage.setItem('_tk',response.data.access_token)
                        localStorage.setItem('_eml',this.email)
                        localStorage.setItem('_fn',response.data.user.fname)
                        localStorage.setItem('_ln',response.data.user.lname)
                        if(localStorage.getItem('_pf_vtd') == 'true')
                            router.push("/set-profile")
                        else
                            router.push('/dashboard')
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
    }
</style>