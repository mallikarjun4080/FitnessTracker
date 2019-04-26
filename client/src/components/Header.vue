<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 header-row">
                <div class="row">
                    <div class="col-md-8 text-left">
                        <img class="search-icon" src="./../assets/search-icon.png"/>
                    </div>
                    <div class="col-md-4 text-right">
                        <a>Welcome! {{fName}} <img class="avatar" src="./../assets/face.png"/></a>
                        <div class="btn-group">
                        <button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="sr-only">Toggle Dropdown</span>
                        </button>
                        <div class="dropdown-menu">
                            <router-link :to="{path: 'profile'}" class="dropdown-item"><a>Profile Settings</a></router-link>
                            <div class="dropdown-divider"></div>
                           <div  class="dropdown-item" @click="signout()"><a>Sign Out</a></div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
 import router from "../router";
 import axios from "axios"    
    export default {    
        name: "Header",  
        data: function(){
            return {
                fName: ''
            }
        },
        mounted: function() {
            this.fName = localStorage.getItem('_fn')
        },
        methods: {
            signout() {
                localStorage.clear();
                router.push('/');
            }
        }
    }
</script>


<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    .header-row {
        height: 53px;	
        width: 100%;	
        background-color: #F9F9F9;
        padding: 10px 0; 
    }

    .avatar {
        height: 34px;	
        width: 34px;
        border-radius: 50%; 
        margin-right: 5px;
    }
    
    .search-icon {
       	height: 25px;	
        width: 25px;	
        margin-left: 12px;
        margin-top: 5px;
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