<template>
   
    <div class="col-lg-3">
        <div class="job_filter white-bg">
            <div class="form_inner white-bg">
                <h3>Filter</h3>
                <form action="http://localhost:8080/browsejob" method="GET" @submit.prevent="get_filtered_data()">
                    <div class="row">
                        
                        <div class="col-lg-12">
                            <div class="single_field">
                                <label for="job_status">Job status</label>
                                <select id="job_status" class="nice-select wide" name="job_status" v-model="form_data.job_status">
                                    <option value="">Job status</option>
                                     <option  v-for="(status, index) in employment_status" :value="index" :key="index">{{status}}</option>
                                    
                                </select>
                               
                            </div>
                        </div>        

                        <div class="col-lg-12">
                            <div class="single_field">
                                <label for="job_level">job level</label>
                                <select id="job_level" class="nice-select wide" name="job_level" v-model="form_data.job_level">
                                    <option value="">job level</option>
                                    <option  v-for="(level, index) in job_levels"  :value="index" :key="index">{{level}}</option>
                                  
                                </select> 
                            </div>
                        </div> 
                        
                        <div class="col-lg-12">
                            
                            <div class="single_field">
                                <label for="gender">Gender</label>
                                <select id="gender" class="nice-select wide" name="gender" :value="update_data" v-model="form_data.gender"> 
                                    <option  value="">Gender</option>
                                    <option  v-for="(gender, index) in genders" :value="index" :key="index">{{gender}}</option>
                                    
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="reset_btn">
                        <button  class="boxed-btn3 w-100" type="submit" :value="form_data">Submit</button>
                    </div>
                </form>
            </div>
            <div class="range_wrap">
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
                <button  class="boxed-btn3 w-100" type="reset">Reset</button>
            </div>
        </div>
        
    </div> 
    
</template>

<script>
import axios from 'axios'

export default {
    name: 'Sidebar',
    props:{
        // update_data:{
        //     type: Object
        // }
        form_data :{
        gender: null,
        job_level: null,
        job_status: null  
      }
    },
     data () {
    return {
     
      employment_status:[],
      genders:[],
      job_levels:[] ,
    //   form_data :{
    //     gender: null,
    //     job_level: null,
    //     employment_status: null  
    //   }
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
    methods: {
   
    //  get_filtered_data(event) {
    //             this.form_data = event.target.value;
    //             this.$emit('get_filtered_data',this.form_data)
    //             console.log("i am farhana")
    //         }

    // },
     get_filtered_data() {
                
                // this.form_data = event.target.value;
                this.$emit('get_filter',this.form_data)
                console.log("sidebar component")
            }

    },
    
}

</script>



