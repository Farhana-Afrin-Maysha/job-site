<template>
  <div>
    <Master>
      <template v-slot:content>
        <Sliderjobdetail/>
        <Jobdetailbody :detail="jobs"></Jobdetailbody>
     </template>   
    </Master>
  </div>
</template>

<script>
import Master from "../components/Layouts/Master";
import Sliderjobdetail from "../components/Layouts/Partials/Sliderjobdetail";
import Jobdetailbody from "../components/Layouts/Partials/Jobdetailbody";
import axios from 'axios'
export default {
  name: "Browsejob",
  components: {
    Master,
    Sliderjobdetail,
    Jobdetailbody
    
  },
  data () {
    return {
      jobs: {}
    }
  },
  created () {
    axios
      .get(
        'http://galib04.pythonanywhere.com/api/job/' + this.$route.params.jobid)
      .then(response => {
        console.log(response.data)
        this.jobs = response.data
      })
  }
};
</script>



