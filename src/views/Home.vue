<template>
  <Master>
    <template v-slot:content>
        <Slider/>
        <Category/>
        <Popular/>
        <Job/>
        <Featured/>
        <Company/>
        <Jobsearch/>
        <Testimonial/>
      </template>
  </Master>
</template>

<script>
import Master from "../components/Layouts/Master";
import Slider from "../components/Layouts/Partials/Slider";
import Category from "../components/Layouts/Partials/Category";
import Popular from "../components/Layouts/Partials/Popular";
import Job from "../components/Layouts/Partials/Job";
import Featured from "../components/Layouts/Partials/Featured";
import Company from "../components/Layouts/Partials/Company";
import Jobsearch from "../components/Layouts/Partials/Jobsearch";
import Testimonial from "../components/Layouts/Partials/Testimonial";

export default {
  name: "Home",
  components: {
    Master,
    Slider,
    Category,
    Popular,
    Job,
    Featured,
    Company,
    Jobsearch,
    Testimonial
    
  }
};
</script>
