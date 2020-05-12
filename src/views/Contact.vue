<template>
  <Master>
      <template v-slot:content>
          <Contactslider/>
          <Contactbody/>
      </template>
  </Master>
</template>

<script>
import Master from "../components/Layouts/Master";
import Contactslider from "../components/Layouts/Partials/Contactslider";
import Contactbody from "../components/Layouts/Partials/Contactbody";


export default {
  name: "Contact",
  components: {
    Master,
    Contactslider,
    Contactbody
    
  }
};
</script>
