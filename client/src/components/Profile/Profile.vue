<template>
    <div class="container-fluid">
        <div class="row">
            <Sidebar />
            <div class="col-md-10 pl-0 pr-0 vertical-scroll">
                <Header />
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="diet-wrapper text-left mt-5">
                                <div class="row">
                                    <div class="form-group">

                                        <div>
                                            <img class="avatar-preview" v-bind:src="previewImage" />
                                            <label @click="uploadImage()" for="uploadImage"><img
                                                    class="v-btn avatar-edit" src="../../assets/pencil.png" /></label>
                                            <input type="file" class="d-none" id="uploadImage" accept="image/jpeg"
                                                @change=uploadImage>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-9">
                            <div class="container profile-wrapper">
                                <a class="d-block header-txt text-left">Edit your Profile</a>
                                <form v-on:submit="profile($event)">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="form-group text-left">
                                                <label for="name">First Name</label>
                                                <input type="text" class="form-control" id="name" name="fname"
                                                    v-model="fname">
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="form-group text-left">
                                                <label for="name">Last Name</label>
                                                <input type="text" class="form-control" id="name" name="lname"
                                                    v-model="lname">
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="form-group text-left">
                                                <label for="designation">Designation</label>
                                                <input type="text" class="form-control" id="designation"
                                                    name="designation" v-model="designation">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group text-left">
                                                <label for="gender">Gender</label>
                                                <input type="text" class="form-control" id="gender" name="gender"
                                                    v-model="gender">
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group text-left">
                                                <label for="age">Age</label>
                                                <input type="text" class="form-control" id="age" name="age"
                                                    v-model="age">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group text-left">
                                                <label for="height">Height</label>
                                                <input type="text" class="form-control" id="height" name="height"
                                                    v-model="height">
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group text-left">
                                                <label for="bmi">BMI</label>
                                                <input type="text" class="form-control" id="bmi" name="bmi"
                                                    v-model="bmi">
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group text-left">
                                                <label for="bloodpressure">Blood Pressure</label>
                                                <input type="text" class="form-control" id="bloodpressure"
                                                    name="bloodpressure" v-model="bloodpressure">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group text-left">
                                        <label for="oldpassword">Old Password</label>
                                        <input type="password" class="form-control" id="oldpassword" name="oldpassword"
                                            v-model="oldpassword">
                                    </div>
                                    <div class="form-group text-left">
                                        <label for="newpassword">New Password</label>
                                        <input type="password" class="form-control" id="newpassword" name="newpassword"
                                            v-model="newpassword">
                                    </div>
                                    <div class="form-group text-left">
                                        <label for="cnfrm-pwd">Confirm New Password</label>
                                        <input type="password" class="form-control" id="cnfrm-pwd"
                                            name="confirmpassword" v-model="confirmpassword">
                                    </div>
                                    <button class="d-inline-block btn btn-sm btn-save" value="Save"
                                        type="submit">Save</button>
                                </form>
                                <a class="d-block footer-txt">2019 - 2020 All rights reserved.</a>
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
        name: "Profile",
        components: {
            Sidebar,
            Header
        },
        data: function () {
            return {
                token: '',
                email: '',
                imageUrl: '',
                image: null,
                fname: '',
                lname: '',
                designation: '',
                gender: '',
                age: '',
                height: '',
                bodyweight: '',
                bmi: '',
                bloodpressure: '',
                oldpassword: '',
                uploadFieldName: 'file',
                maxSize: 1024,
                newpassword: '',
                confirmpassword: '',
                selectedFile: null,
                previewImage: null

            }
        },
        created: function () {
            this.token = localStorage.getItem('_tk')
            this.email = localStorage.getItem('_eml')
            let config = {
                headers: {
                    'token': this.token
                },
                params: {
                    email: this.email
                }
            }
            this.profileDetail = 'View Profile Details'
            axios.get(`http://localhost:4000/api/profile`, config)
                .then((response) => {
                    console.log(response.data)
                    let profile = response.data;
                    console.log(profile.name)
                    this.previewImage = profile.previewImage;
                    this.fname = profile.firstName;
                    this.lname = profile.lastName;
                    this.designation = profile.designation;
                    this.gender = profile.gender;
                    this.age = profile.age;
                    this.height = profile.height;
                    this.bodyweight = profile.bodyweight;
                    this.bmi = profile.bmi;
                    this.bloodpressure = profile.bloodpressure;
                    this.oldpassword = profile.oldpassword;
                    this.newpassword = profile.newpassword;
                    this.confirmpassword = profile.confirmpassword;
                })
                .catch((errors) => {
                    console.log("Cannot add profile details")
                })
        },
        methods: {
            profile(e) {
                e.preventDefault()
                if (this.newpassword == this.confirmpassword) {
                    let data = {
                        uploadImage: this.uploadImage,
                        firstName: this.fname,
                        lastName: this.lname,
                        designation: this.designation,
                        gender: this.gender,
                        age: this.age,
                        height: this.height,
                        bodyweight: this.bodyweight,
                        bmi: this.bmi,
                        bloodpressure: this.bloodpressure,
                        oldpassword: this.oldpassword,
                        newpassword: this.newpassword,
                        confirmpassword: this.confirmpassword,
                        imageUrl: this.imageUrl,
                    }
                    let config = {
                        headers: {
                            'token': this.token
                        },
                        params: {
                            email: this.email
                        }
                    }

                    axios.get("http://localhost:4000/api/profile", config).then((person) => {
                        if (!person.data) {
                            axios.post("http://localhost:4000/api/profile", data, config)
                                .then((response) => {
                                    console.log("Profile Details Stored")
                                    router.push("/profile")
                                })
                                .catch((errors) => {
                                    alert(`POST ERR ${errors}`)
                                    console.log("Cannot store profile details")
                                })
                        } else {
                            axios.put("http://localhost:4000/api/profile", data, config)
                                .then((response) => {
                                    console.log("Profile Details Updated")
                                    router.push("/profile")
                                })
                                .catch((errors) => {
                                    alert(`UPDATE ERR ${errors}`)
                                    console.log("Cannot store profile details")
                                })
                        }
                    }).catch((errors) => {
                        alert(`GET ERR ${errors}`)
                        console.log("Cannot store profile details")
                    })
                } else {
                    alert('New Password didn\' match. Confirm New password again')
                }
            },
            uploadImage(e) {
                const URL = '';
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e => {
                    this.previewImage = e.target.result;
                    this.uploadImage = this.previewImage.path;
                    console.log(e);
                };
            }
        }
    }
</script>


<style scoped>
    .avatar {
        height: 230px;
        width: 230px;
        border-radius: 50%;
        margin-left: 20px;
    }

    .avatar-edit {
        height: 35px;
        width: 35px;
        border: 6px solid #F8F8F8;
        border-radius: 100%;
        position: relative;
        top: -30px;
        left: 180px;
    }

    .avatar-edit:hover {
        background: #999898;
        border: #999898;
    }

    .avatar-preview {
        margin-left: 20px;
        width: 230px;
        height: 230px;
        border-radius: 100%;
        border: 6px solid #F8F8F8;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
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

    .uploading-image {
        display: flex;
    }

    .profile-wrapper {
        display: block;
        margin: 0 auto;
        width: 100%;
    }

    .header-txt {
        margin: 30px 0 30px;
        font-weight: 800;
        font-size: 20px;
    }

    .profile-wrapper label {
        font-weight: 800;
        font-size: 13px;
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
</style>