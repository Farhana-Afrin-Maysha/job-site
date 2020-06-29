<template>
<div class="col-lg-9">
    <div class="recent_joblist_wrap">
        <div class="recent_joblist white-bg ">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <h4>Job Listing</h4>
                </div>
                <div class="col-md-6">
                    <div class="serch_cat d-flex justify-content-end">
                        <select style="display: none;">
                            <option data-display="Most Recent">Most Recent</option>
                            <option value="1">Marketer</option>
                            <option value="2">Wordpress </option>
                            <option value="4">Designer</option>
                        </select>
                        <div class="nice-select" tabindex="0">
                            <span class="current">Most Recent</span>
                            <ul class="list">
                                <li data-value="Most Recent" data-display="Most Recent" class="option selected focus">Most Recent</li>
                                <li data-value="1" class="option">Marketer</li>
                                <li data-value="2" class="option">Wordpress </li>
                                <li data-value="4" class="option">Designer</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
                        
    
    <div class="job_lists m-0">
        <div class="row">
            <div class="col-lg-12 col-md-12" v-for="info in infos" :key="info.id" v-show="infos.length>0">
                <div class="single_jobs white-bg d-flex justify-content-between">
                    <div class="jobs_left d-flex align-items-center">
                        <div class="thumb">
                            <img src="https://colorlib.com/preview/theme/jobboard2/img/svg_icon/1.svg" alt="">
                        </div>
                        <div class="jobs_conetent">
                           
                            <router-link :to="{ name: 'Jobdetail', params: { jobid:info.id}}"><h3>{{ info.job_title}}</h3></router-link>
                            <div class="links_locat d-flex align-items-center">
                                <div class="location">
                                    
                                    <p> <i class="fa fa-map-marker"></i>{{ info.job_location}}</p>
                                </div>
                                <div class="location">
                                    <p> <i class="fa fa-clock-o"></i>{{ info.job_level}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="jobs_right">
                        <div class="apply_now">
                            <a class="heart_mark" href="#"> <i class="fa fa-heart"></i> </a>
                            <a href="job_details.html" class="boxed-btn3">Apply Now</a>
                        </div>
                        <div class="date">
                            <p>{{ info.application_deadline}}</p>
                        </div>
                    </div>
                    
                </div>
            </div> 
        </div>
    </div>    
   
</div>
    
</template>

<script>

export default {
    name: 'Main',
    props:{
        infos: [],
        
      
       
            
            
        
    },
     data () {
    return {
    
      
     }
    },
    
};

</script>
