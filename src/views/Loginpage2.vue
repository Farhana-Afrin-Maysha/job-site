<template>
  <Master>
    <template v-slot:content>
        <Loginemployer/>
    </template>    
  </Master>
</template>


<script>
import Master from "../components/Layouts/Master";
import Loginemployer from "../components/Layouts/Partials/Loginemployer"
export default {
  name: "Loginpage",
  components: {
    Master,
    Loginemployer
    
  }
};
</script>
