      
<template>
    <div>    
        <!-- bradcam_area  -->
            <div class="bradcam_area bradcam_bg_1">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="bradcam_text">
                                <h3>Login page</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--/ bradcam_area  -->
        <div class="container login-container" >
                    <div class="row">
                        <div class="col-md-6 login-form-1">
                            <h3>Login for Form 1</h3>
                            <form>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Your Email *" value="" />
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="Your Password *" value="" />
                                </div>
                                <div class="form-group">
                                    <input type="submit" class="btnSubmit" value="Login" />
                                </div>
                                <div class="form-group">
                                    <a href="#" class="ForgetPwd">Forget Password?</a>
                                </div>
                            </form>
                            <!-- sign up form -->
                            <div class="newuser"><i class="fa fa-user" aria-hidden="true"></i> New User? <a href="https://www.sharjeelanjum.com/demos/jobsportal-update/register">Register Here</a></div>
                            <div class="newuser"><i class="fa fa-user" aria-hidden="true"></i> Forgot Your Password? <a href="https://www.sharjeelanjum.com/demos/jobsportal-update/company/password/reset">Click here</a></div>
                            <!-- sign up form end-->
                    </div> 

                   
                </div>	                    
            </div>	 
     </div>       
</template>

<script>
export default {
    name: 'Login'
}
</script>

<style scoped>
.login-container{
    margin-top: 10%;
    margin-bottom: 5%;
    color:white;
   
}


.login-form-1{
    padding: 5%;
    background: #0062cc;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}
.login-form-1 h3{
    text-align: center;
    color: #fff;
}
.login-container form{
    padding: 10%;
}
.btnSubmit
{
    width: 50%;
    border-radius: 1rem;
    padding: 1.5%;
    border: none;
    cursor: pointer;
}

.login-form-1 .btnSubmit{
    font-weight: 600;
    color: #0062cc;
    background-color: #fff;
}
.login-form-1 .ForgetPwd{
    color: #fff;
    font-weight: 600;
    text-decoration: none;
}


</style>
