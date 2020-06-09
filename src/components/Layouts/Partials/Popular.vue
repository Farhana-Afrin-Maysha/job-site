<template>

     <!-- popular_catagory_area_start  -->
    <div class="popular_catagory_area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section_title mb-40">
                        <h3>Popolar Categories</h3>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-xl-3 col-md-6" v-for="designation in designations" :key="designation.id">
                    <div class="single_catagory" >
                        <a href="jobs.html"><h4>{{designation.job}}</h4></a>
                        <p> <span>{{designation.vacancy}}</span> Available position</p>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
    <!-- popular_catagory_area_end  -->
</template>

<script>
import axios from 'axios'
export default {
    name: 'Popular',
    data () {
    return {
      designations: []
     }
    },
    
    created() {
            axios.get('http://127.0.0.1:8000/designations/')
                .then(response => {
                    this.designations = response.data
                    console.log(response)
                })

            
        }
}
</script>
