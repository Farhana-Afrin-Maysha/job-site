<template>
<!-- header-start -->
    <header>
        <div class="header-area ">
            <div id="sticky-header" class="main-header-area">
                <div class="container-fluid ">
                    <div class="header_bottom_border">
                        <div class="row align-items-center">
                            <div class="col-xl-3 col-lg-2">
                                <div class="logo">
                                    <a href="index.html">
                                        <img src="https://colorlib.com/preview/theme/jobboard2/img/logo.png" alt="">
                                    </a>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-7">
                                <div class="main-menu  d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li class="nav-item">
                                               <router-link :to="{ name: 'Home' }">
                                                    <a href="#" class="nav-link">Home</a>
                                               </router-link>
                                            </li>
                                            <li class="nav-item">
                                               <router-link :to="{ name: 'Browsejob' }">
                                                    <a href="#" class="nav-link">Browsw Job</a>
                                               </router-link>
                                            </li>
                                            <li><a href="#">pages <i class="ti-angle-down"></i></a>
                                                <ul class="submenu">
                                                    <li><a href="candidate.html">Candidates </a></li>
                                                    <li><a href="job_details.html">job details </a></li>
                                                    <li><a href="elements.html">elements</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">blog <i class="ti-angle-down"></i></a>
                                                <ul class="submenu">
                                                    <li><a href="blog.html">blog</a></li>
                                                    <li><a href="single-blog.html">single-blog</a></li>
                                                </ul>
                                            </li>
                                            <li class="nav-item">
                                               <router-link :to="{ name: 'Contact' }">
                                                    <a href="#" class="nav-link">Contact</a>
                                               </router-link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            
                            <div class="col-xl-3 col-lg-3 d-none d-lg-block">
                                
                                <!-- <div class="Appointment">
                                    <div class="phone_num d-none d-xl-block">
                                        <a href="#">Log in</a>
                                    </div>
                                    <div class="d-none d-lg-block">
                                        <a class="boxed-btn3" href="#">Post a Job</a>
                                    </div>
                                </div> -->
                                
                                <div class="Appointment">
                                    <div class="main-menu  d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                 <li><a href="#">log in <i class="ti-angle-down"></i></a>
                                                                <ul class="submenu">
                                                                    <li class="nav-item">
                                                                      <router-link :to="{ name: 'Loginpage' }">
                                                                         <a href="#" class="nav-link">Job seeker</a>
                                                                       </router-link>
                                                                    </li>
                                                                    <li class="nav-item">
                                                                      <router-link :to="{ name: 'Loginpage2' }">
                                                                         <a href="#" class="nav-link">Employer</a>
                                                                       </router-link>
                                                                    </li>
                                                                </ul>
                                                  </li>   
                                            </ul>
                                        </nav>   
                                    </div> 

                                    <div class="d-none d-lg-block">
                                        <a class="boxed-btn3" href="#">Post a Job</a>
                                    </div>
                                </div>    
                                
                                
                            </div>
                          
                            <div class="col-12">
                                <div class="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </header>
    <!-- header-end -->
</template>

<script>
export default {
    name: 'Navbar'
};
</script>