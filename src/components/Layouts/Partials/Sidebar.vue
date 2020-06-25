<template>
   
    <div class="col-lg-3">
        <div class="job_filter white-bg">
            <div class="form_inner white-bg">
                <h3>Filter</h3>
                <form action="http://localhost:8080/browsejob" method="GET">
                    <div class="row">
                        
                        <div class="col-lg-12">
                            <div class="single_field">
                                <select class="nice-select wide" name="job_status">
                                    <option value="">Job status</option>
                                     <option v-for="(status, index) in employment_status" :value="index" :key="index">{{status}}</option>
                                    
                                </select>
                               
                            </div>
                        </div>        

                        <div class="col-lg-12">
                            <div class="single_field">
                                <select class="nice-select wide" name="job_level">
                                    <option value="">Job level</option>
                                    <option  v-for="(level, index) in job_levels"  :value="index" :key="index">{{level}}</option>
                                  
                                </select> 
                            </div>
                        </div> 
                        
                        <div class="col-lg-12">
                            
                            <div class="single_field">
                                
                                <select class="nice-select wide" name="gender"> 
                                    <option  value="">Gender</option>
                                    <option  v-for="(gender, index) in genders" :value="index" :key="index">{{gender}}</option>
                                    
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="reset_btn">
                        <button  class="boxed-btn3 w-100" type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <!-- <div class="range_wrap">
                <label for="amount">Price range:</label>
                <div id="slider-range" class="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                    <div class="ui-slider-range ui-corner-all ui-widget-header" style="left: 3.04878%; width: 96.9512%;"></div>
                    <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 0%;"></span>
                    <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 100%;"></span>
                    <div class="ui-slider-range ui-corner-all ui-widget-header" style="left: 0%; width: 100%;"></div>
                    <div class="ui-slider-range ui-corner-all ui-widget-header" style="left: 0%; width: 100%;"></div>
                </div>
                <p>
                    <input type="text" id="amount" readonly="readonly" style="border: 0px; color: rgb(122, 131, 139); font-size: 14px; font-weight: 400;">
                </p>
            </div>
            <div class="reset_btn">
                <button  class="boxed-btn3 w-100" type="submit">Reset</button>
            </div> -->
        </div>
        
    </div> 
    
</template>

<script>
import axios from 'axios'

export default {
    name: 'Sidebar',
     data () {
    return {
     
      employment_status:[],
      genders:[],
      job_levels:[] 
     }
    },
    created() {

            axios.get('http://galib04.pythonanywhere.com/api/choices/')
                .then(response => {
                    this.genders = response.data.data[0].gender;
                    this.job_levels = response.data.data[0].job_level;
                    this.employment_status = response.data.data[0].employment_status
                    
                    console.log(this.genders);
                    
                })

            
        },
    

}
</script>



