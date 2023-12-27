<template>
  <section class="py-20 bg-white dark:bg-gray-800" id="sobre">
    <TitleDescription
      title="Sobre Nós"
      description="Vidara Websites - Criação de sites em Rio Negrinho: Onde Experiência e Paixão se Unem para Elevar Pequenos Negócios Locais na Era Digital."
    />

    <div class="w-full h-10 flex justify-end items-center xl:hidden">
      <span
        @click="scrollTo(10)"
        class="material-icons-outlined animate-pulse text-pink-700 dark:text-pink-100"
        >arrow_forward</span
      >
    </div>
    <div
      class="flex justify-start md:justify-center my-4 gap-4 overflow-x-auto overflow-y-hidden mx-[5%]"
    >
      <div
        v-for="item in items"
        :key="item.id"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :visible="{ opacity: 1, y: 0 }"
        class="max-w-sm bg-whit min-w-[320px] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 grid grid-rows-2"
      >
        <div class="flex justify-center items-center">
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
      </div>
    </div>
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

  components: { WaveComponent, TitleDescription },
};
</script>
<style lang=""></style>
