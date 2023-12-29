<template>
  <div
    class="grid mb-8 gap-4 rounded-lg shadow-sm  md:mb-12 md:grid-cols-2"
  >
    <figure
    
      v-for="card in cards"
      :key="card.id"
      class="flex rounded  flex-col md:flex-row items-center justify-center p-8 text-center bg-gray-200 border-b border-gray-300   md:border-e dark:bg-blue-900 dark:border-blue-800"
    >
      <blockquote
        class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400"
      >
        <h2 class="text-lg text-left uppercase font-bold text-blue-800 dark:text-white ">
          {{ card.title }}
        </h2>
        <p class="my-4 text-left">
          {{card.description}}
        </p>
      </blockquote>
      <figcaption class="flex items-center justify-center" v-motion
        :initial="{ opacity: 0, x: 100 }"
        :visible="{ opacity: 1, x: 0, scale: 1 }"
        :variants="{ custom: { scale: 2 } }"
        :hovered="{ scale: 1.2 }"
        :delay="200">
       
        <div
          class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3"
        >
          <img :src="card.img" :alt="card.title"/>
        </div>
      </figcaption>
    </figure>
  </div>
</template>
<script>
export default {
  data(){
    return{
      cards:[
        {
          id:1,
          title:'Páginas Estáticas',
          description:'Dê vida à sua marca com uma página estática única. Elegância digital que permanece, destacando sua marca com sofisticação',
          img:'/img/static.svg'
        },
        {
          id:2,
          title:'Sites Institucionais',
          description:'Construímos páginas institucionais que contam sua história de maneira impactante. Sua marca, sua narrativa, seu sucesso online.',
          img:'/img/inst.svg'
        },
        {
          id:3,
          title:'Landig page - Página de Captura',
          description:'Landing pages que não apenas atraem, mas conquistam. Transforme cliques em ações significativas, impulsionando seu negócio para o próximo nível.',
          img:'/img/land.svg'
        },
        {
          id:4,
          title:'Seu negócio no google',
          description:'Seja encontrado no exato momento da busca local. Potencialize sua visibilidade com um cadastro estratégico no Google, atraindo clientes onde importa.',
          img:'/img/location.svg'
        },
      ]
    }
  }
};
</script>
<style lang=""></style>
