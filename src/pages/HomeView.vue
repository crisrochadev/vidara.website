<template>
  <div>
    <BannerComponent />
    <AboutComponent />
    <ServicesComponent />
    <AcquirimentComponent />
    <ContactComponent />
    <FooterComponent />
  </div>
</template>
<script>
import AboutComponent from "@/components/AboutComponent.vue";
import AcquirimentComponent from "@/components/AcquirimentComponent.vue";
import BannerComponent from "@/components/BannerComponent.vue";
import ContactComponent from "@/components/ContactComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import ServicesComponent from "@/components/ServicesComponent.vue";
import WaveComponent from "@/components/WaveComponent.vue";

export default {
  components: {
    BannerComponent,
    WaveComponent,
    AboutComponent,
    ServicesComponent,
    AcquirimentComponent,
    ContactComponent,
    FooterComponent,
  },
};
</script>
<style lang=""></style>
