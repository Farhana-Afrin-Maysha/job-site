<template>
  <div class="job_details_area">
    <div class="container">
      <div class="row">
              <div class="col-lg-8">
                <div class="job_details_header">
                  <div class="single_jobs white-bg d-flex justify-content-between">
                    <div class="jobs_left d-flex align-items-center">
                      <div class="thumb">
                          <img src="https://colorlib.com/preview/theme/jobboard2/img/svg_icon/1.svg" alt="">
                      </div>
                      <div class="jobs_conetent">
                        <a href="#"><h4>{{ detail.job_title}}</h4></a>
                          <div class="links_locat d-flex align-items-center">
                            <div class="location">
                              <p> <i class="fa fa-map-marker"></i> {{ detail.job_location}}</p>
                            </div>
                            <div class="location">
                              <p> <i class="fa fa-clock-o"></i> {{ detail.job_level}}</p>
                            </div>              
                          </div>
                      </div>
                    </div>
                    <div class="jobs_right">
                      <div class="apply_now">
                          <a class="heart_mark" href="#"> <i class="ti-heart"></i> </a>
                      </div>
                    </div>
                          </div>
                      </div>
                      <div class="descript_wrap white-bg">
                          <div class="single_wrap">
                              <h4>Responsibility</h4>
                                <p>{{ detail.job_responsibilities}}</p>
                          </div>
                         
                          <div class="single_wrap">
                              <h4>Benefits</h4>
                              <p>{{ detail.compensation_and_other_benefits}}</p>
                          </div>
                      </div>
                      <div class="apply_job_form white-bg">
                          <h4>Apply for the job</h4>
                          <form action="#">
                              <div class="row">
                                  <div class="col-md-6">
                                      <div class="input_field">
                                          <input type="text" placeholder="Your name">
                                      </div>
                                  </div>
                                  <div class="col-md-6">
                                      <div class="input_field">
                                          <input type="text" placeholder="Email">
                                      </div>
                                  </div>
                                  <div class="col-md-12">
                                      <div class="input_field">
                                          <input type="text" placeholder="Website/Portfolio link">
                                      </div>
                                  </div>
                                  <div class="col-md-12">
                                      <div class="input-group">
                                          <div class="input-group-prepend">
                                            <button type="button" id="inputGroupFileAddon03"><i class="fa fa-cloud-upload" aria-hidden="true"></i>
                                            </button>
                                          </div>
                                          <div class="custom-file">
                                            <input type="file" class="custom-file-input" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03">
                                            <label class="custom-file-label" for="inputGroupFile03">Upload_CV</label>
                                          </div>
                                        </div>
                                  </div>
                                  <div class="col-md-12">
                                      <div class="input_field">
                                          <textarea name="#" id="" cols="30" rows="10" placeholder="Coverletter"></textarea>
                                      </div>
                                  </div>
                                  <div class="col-md-12">
                                      <div class="submit_btn">
                                          <button class="boxed-btn3 w-100" type="submit">Apply Now</button>
                                      </div>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
                  <div class="col-lg-4">
                      <div class="job_sumary">
                          <div class="summery_header">
                              <h3>Job Summery</h3>
                          </div>
                          <div class="job_content">
                              <ul>
                                  <li>Company name: <span>{{ detail.employer_name}}</span></li>
                                  <li>Vacancy: <span>{{ detail.no_of_vacancies}}</span></li>
                                  <li>Salary: <span>{{ detail.salary}}</span></li>
                                  <li>Location: <span>{{ detail.employer_location}}</span></li>
                                  <li>Job Nature: <span> {{ detail.employment_status}}</span></li>
                              </ul>
                          </div>
                      </div>
                      <div class="share_wrap d-flex">
                          <span>Share at:</span>
                          <ul>
                              <li><a href="#"> <i class="fa fa-facebook"></i></a> </li>
                              <li><a href="#"> <i class="fa fa-google-plus"></i></a> </li>
                              <li><a href="#"> <i class="fa fa-twitter"></i></a> </li>
                              <li><a href="#"> <i class="fa fa-envelope"></i></a> </li>
                          </ul>
                      </div>
                  </div>
              </div>
        </div>
    
  </div>
</template>
<script>

export default {
  name: "Jobdetailbody",
  props: {
    detail : Object
  }
  
}

</script>
