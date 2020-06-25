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
                        <a href="jobs.html"><h4>{{designation.name}}</h4></a>
                        <p> <span>{{designation.job_count}}</span> Available position</p>
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
            axios.get('http://galib04.pythonanywhere.com/api/category/')
                .then(response => {
                    this.designations = response.data.data
                    console.log(response)
                })

            
        }
}
</script>
