<template>
    <div>
        <!-- nav -->
        <Smallslider/>
        <!-- job_listing_area_start  -->
        <div class="job_listing_area plus_padding">
            <div class="container">
                <div class="row">
                    <slot name="contentside"></slot>
                    <slot name="contentmain"></slot>
                </div>
            </div> 
        </div>       
        <!-- job_listing_area_end  -->
    </div>   
</template>

<script>
 import Smallslider from './Partials/Smallslider'
 
export default {
    name: 'Commonlayout',
    components:{
      Smallslider
     
    }
}
</script>