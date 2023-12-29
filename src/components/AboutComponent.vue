<template>
  <section class="py-20 bg-white dark:bg-gray-800" id="sobre">
    <TitleDescription
      title="Sobre Nós"
      description="Vidara Websites - Criação de sites em Rio Negrinho: Onde Experiência e Paixão se Unem para Elevar Pequenos Negócios Locais na Era Digital."
    />

    <Splide :options="options" class="w-full px-[5%] py-4">
      <SplideSlide
        v-for="item in items"
        :key="item.id"
        class="shadow-md rounded grid grid-rows-2 w-11/12 bg-gray-100 dark:bg-gray-900 p-4 max-h-[600px]"
      >
        <div class="flex justify-center items-center w-11/12 mx-auto h-full p-4">
          <img class="rounded-t-lg" :src="item.image" :alt="item.title" />
        </div>
        <header class="p-5 flex flex-col justify-center items-center">
          <h1
            class="mb-2 uppercase text-2xl font-bold tracking-tight text-pink-700"
          >
            {{ item.title }}
          </h1>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{ item.description }}
          </p>
        </header>
      </SplideSlide>
    </Splide>
  </section>
</template>
<script>
import TitleDescription from "./TitleDescription.vue";
import WaveComponent from "./WaveComponent.vue";

export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: "5+ Anos Transformando Ideias em Realidade Online",
          description:
            "Desenvolvemos sites de qualidade para destacar sua marca, alavancando sua presença digital com eficiência e inovação.",
          image: "/img/1.svg",
        },
        {
          id: 2,
          title: "Nossa Missão: Fazer Seu Negócio Local Prosperar Online",
          description:
            "Buscamos o crescimento e a visibilidade para os negócios locais, tornando-os facilmente encontrados e destacados no cenário digital.",
          image: "/img/2.svg",
        },
        {
          id: 3,
          title: "Raízes Familiares, Crescimento Sustentável",
          description:
            "Somos uma empresa em crescimento, mantendo firmes nossas raízes familiares e o compromisso de impulsionar pequenos negócios locais.",
          image: "/img/3.svg",
        },
        {
          id: 4,
          title: "Conheça a Mente Criativa: Cristiane da Rocha",
          description:
            "Comandando a Vidara com paixão, minha dedicação ao desenvolvimento de sites reflete a missão de capacitar negócios locais para o sucesso online.",
          image: "/img/4.svg",
        },
      ],
    };
  },
  computed: {
    options() {
      return {
        type: "loop",
        perPage:4,
        mediaQuery: 'min',
        breakpoints: {
          480:{
            perPage:1
          },
          640: {
            perPage: 2,
          },
          1024:{
            perPage:3
          },
          1100:{
            classes:{
              arrows:'hidden'
            },
            perPage:4
          }
        },
        gap: "20px",
        autoplay: true,
        interval: 4000,
        pauseOnHover: true,
      };
    },
  },
  components: { WaveComponent, TitleDescription },
};
</script>
<style lang=""></style>
