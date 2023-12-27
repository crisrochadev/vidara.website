<template>
  <section
    class="py-20 bg-white dark:bg-gray-800 "
    id="sobre"
  >
    <TitleDescription
      title="Sobre Nós"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae commodi
        accusamus laboriosam reiciendis quae ducimus eveniet? Esse rerum
        excepturi cupiditate."
    />

    <div class="w-full h-10 flex justify-end items-center xl:hidden">
      <span
        @click="scrollTo(10)"
        class="material-icons-outlined animate-pulse text-pink-700 dark:text-pink-100"
        >arrow_forward</span
      >
    </div>
    <div class="flex my-4 gap-4 overflow-x-auto overflow-y-hidden mx-[5%]">
      <div
        
        v-for="item in items"
        :key="item.id"
        v-motion
        :initial="{opacity:0, y:100}"
        :visible="{opacity:1, y:0}"
        
        class="max-w-sm bg-whit min-w-[320px] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <img class="rounded-t-lg" :src="item.image" :alt="item.title" />
        <header class="p-5">
          <h1
            class="mb-2 uppercase text-2xl font-bold tracking-tight text-pink-700"
          >
            {{ item.title }}
          </h1>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{ item.title }}
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
      items: [],
    };
  },
  mounted() {
    let objectData = {};
    for (let i = 1; i <= 4; i++) {
      objectData["id"] = i;
      objectData["title"] = "Lorem ipsum dolor sit amet consectetur";
      objectData["text"] =
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad impedit repellat quia sed ex veniam ducimus beatae dolores labore tenetur!";
      objectData["image"] = "/img/logo.png";
      this.items.push(objectData);
    }
  },
  components: { WaveComponent, TitleDescription },
};
</script>
<style lang=""></style>
