<template>
  <div>
    <Master>
      <template v-slot:content>
        <Commonlayout>
          <template v-slot:contentside>
                
            <sidebar  v-on:get_filter="get_filtered_data"></Sidebar>
          </template>
          <template v-slot:contentmain>
            <Main :infos="informations" ></Main>
            
          </template>
        </Commonlayout>
      </template>
    </Master>
  </div>
</template>

<script>
import axios from 'axios';
import Master from "../components/Layouts/Master";
import Commonlayout from "../components/Layouts/Commonlayout";
import Sidebar from "../components/Layouts/Partials/Sidebar";
import Main from "../components/Layouts/Partials/Main";

export default {
  name: "Browsejob",
  components: {
    Master,
    Commonlayout,
    Sidebar,
    Main
    
  },
 
  
  
   data: function () {
    return {
      informations:[],
      
      
     }
    },
    
    methods: {
     get_filtered_data (form_data)
            {
            Object.entries(form_data).forEach(data=>{
              console.log(data)
            })
            axios.get('http://galib04.pythonanywhere.com/api/job/')
                    .then(response => {
                        this.informations = response.data.data
                        console.log("success1")
                    })
            
                    
    
            console.log("success2")
            }
      
    },
    created() {
       this.get_filtered_data({})
    },
    
};
</script>



