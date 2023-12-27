<template>
    <div :class="{ dark: dark }" class="w-screen h-screen">
      <div class="bg-white dark:bg-gray-700 w-full h-full">
        <HeaderComponent v-model:mode="mode" :dark="dark" />
        <router-view :key="$router.path" />
      </div>
    </div>
  </template>
  <script>
  import HeaderComponent from "@/components/HeaderComponent.vue";
  import { useStorage } from '@vueuse/core'
  
  export default {
    components: { HeaderComponent },
    data() {
      return {
        mode: {
          id: 3,
          label: "Sistema",                                    
          icon: "computer",
        },
        dark: useStorage('dark-mode', false),
      };
    },
    watch: {
      mode(newvalue) {
        if (newvalue.id === 3) {
          const dark = window.matchMedia("(prefers-color-scheme: dark)");
          this.dark = dark.matches;
        }else if(newvalue.id === 1){
          this.dark = true
        }else{
          this.dark = false;
        }
      },
    },
  };
  </script>
  <style lang=""></style>
  