<template>
  <section class="dark:bg-gray-800 bg-gray-100 pt-20" id="contato">
    <TitleDescription
      title="Entre em contato"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae commodi
          accusamus laboriosam reiciendis quae ducimus eveniet? Esse rerum
          excepturi cupiditate."
    />
    <article
      class="flex justify-around items-center gap-2 flex-wrap my-8 w-11/12 mx-auto"
    >
      <a
        v-for="info in infos"
        :key="info.id"
        :href="info.link"
        target="_blank"
        v-motion
        :initial="{ opacity: 0, x: 100 }"
        :visible="{ opacity: 1, x: 0, scale: 1 }"
        :variants="{ custom: { scale: 2 } }"
        :hovered="{ scale: 1.2 }"
        :delay="200"
        class="flex flex-col justify-center items-center gap-4 w-1/4"
      >
          <component :is="info.icon"></component>
       
      </a>
    </article>
    <ContactForm />
    <WaveComponent color="fill-gray-200 dark:fill-gray-900"/>
  </section>
</template>
<script>
import TitleDescription from "./TitleDescription.vue";
import WaveComponent from "./WaveComponent.vue";
import facebook from "@/components/icons_svg/facebook.vue";
import instagram from "@/components/icons_svg/instagram.vue";
import whatsapp from "@/components/icons_svg/whatsapp.vue";
import ContactForm from "./ContactForm.vue";

export default {
  components: { TitleDescription, facebook, instagram, whatsapp, ContactForm, WaveComponent },
  data() {
    return {
      infos: [
        {
          id: 1,
          icon: "facebook",
          link: "https://www.facebook.com/profile.php?id=61550207123021",
          label: "@vidara.webistes",
        },
        {
          id: 2,
          icon: "instagram",
          link: "https://www.instagram.com/vidara.websites/",
          label: "@vidara.webistes",
        },
        {
          id: 3,
          icon: "whatsapp",
          link: "https://api.whatsapp.com/send?phone=5547992321879&text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20site",
          label: "(47) 99232-1879",
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
