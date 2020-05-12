<template>
  <Master>
    <template v-slot:content>
        <Registrationemployer/>
    </template>    
  </Master>
</template>


<script>
import Master from "../components/Layouts/Master";
import Registrationemployer from "../components/Layouts/Partials/Registrationemployer";
export default {
  name: "Registrationpage2",
  components: {
    Master,
    Registrationemployer
    
  }
};
</script>
