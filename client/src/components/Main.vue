<template>
    <div class="container-fluid">
        <div class="row nav-brand">
            <div class="col-md-6">
                <img class="brand-logo" src="./../assets/fitness-icon.png" />
            </div>
            <div class="col-md-6">
                <div class="d-inline-block float-right">
                <router-link :to="{path: 'signin'}" class="d-inline-block pt-3 mr-3">Signin</router-link>
                <router-link :to="{path: 'signup'}" class="d-inline-block btn btn-sm btn-signup">Signup</router-link>
                </div>
            </div>
        </div>
        <div class="row">
             <div class="col-md-12 hero-img">
            </div>
        </div>

    </div>
</template>
<script>
export default {
  name: 'Home'
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
    }

    .hero-img {
        background: url(./../assets/main.jpg) center;
        background-size: cover;
        height: calc(100vh - 70px);
    }


    .btn-signup {
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
</style>