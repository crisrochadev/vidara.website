<template>
  <header class=" backdrop-blur-md flex justify-between items-center px-4 h-[60px] fixed top-0 left-0 z-[9999] w-full">
<div class="w-full md:w-auto h-full flex justify-start items-center">
    <img width="60px" :src="dark ? '/img/logo-dark.png' :'/img/logo.png'" alt="Vidara Websites - Sites em Rio Negrinho" />

</div>
    <nav class="relative h-full flex justify-end items-center order-3 md:order-2">
        <label for="menu_toggle" class="block md:hidden">
            <span class="material-icons-outlined dark:text-white text-blue-800">menu</span>
        </label>
        <input ref="toggle_menu" type="checkbox"  class="group hidden" id="menu_toggle">
      <ul class="absolute w-40 md:w-auto rounded shadow-slate-800 md:shadow-none  md:relative flex flex-col md:flex-row md:justify-end items-center gap-2 dark:bg-gray-800 md:dark:bg-transparent md:bg-transparent bg-white  shadow-md right-2 menu_box invisible md:visible top-0 md:top-auto transition-all delay-100">
        <li v-for="item in menu" :key="menu.id" class="w-full text-left dark:hover:bg-gray-600 hover:bg-pink-100">
          <a @click="$refs.toggle_menu.checked = 0" class="uppercase  dark:text-white text-blue-800 hover:text-white hover:bg-blue-800 block w-full  p-2" :href="item.to">{{ item.label }}</a>
        </li>
      </ul>
    </nav>
    <div class="flex order-2 md:order-3">
      <ThemeMenu v-model:theme="themeMode"/>
    </div>
  </header>
</template>
<script>
import ThemeMenu from "./ThemeMenu.vue";
export default {
  components: {
    ThemeMenu,
  },
  props: ["mode", "dark"],
  emits: ["update:mode"],
  data() {
    return {
      hidden: true,
      menu:[
        {
            id:1,
            to:"#home",
            label:'Home'
        },
        {
            id:2,
            to:"#sobre",
            label:'Sobre'
        },
        {
            id:3,
            to:"#servicos",
            label:'Serviços'
        },
        {
            id:4,
            to:"#Orcamento",
            label:'Orçamento'
        },
        {
            id:5,
            to:"#contato",
            label:'Contato'
        }
      ]
    };
  },
  computed: {
    themeMode: {
      get() {
        return this.mode;
      },
      set(newvalue) {
        this.$emit("update:mode", newvalue);
      },
    },
  },
  methods: {
  },
};
</script>
<style>
#menu_toggle{
    display: none;
}

#menu_toggle:checked ~ .menu_box{
    visibility: visible !important;
    top:45px !important;
    opacity: 1 !important;
}
</style>
