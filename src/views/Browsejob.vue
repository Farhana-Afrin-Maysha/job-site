<template>
  <div>
    <Master>
      <template v-slot:content>
        <Commonlayout>
          <template v-slot:contentside>
            <Sidebar/>
          </template>
          <template v-slot:contentmain>
            <Main/>
          </template>
        </Commonlayout>
      </template>
    </Master>
  </div>
</template>

<script>
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
    
  }
};
</script>