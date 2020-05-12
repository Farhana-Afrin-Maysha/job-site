<template>
  <Master>
    <template v-slot:content>
        <Login/>
    </template>    
  </Master>
</template>


<script>
import Master from "../components/Layouts/Master";
import Login from "../components/Layouts/Partials/Login"
export default {
  name: "Loginpage",
  components: {
    Master,
    Login
    
  }
};
</script>
