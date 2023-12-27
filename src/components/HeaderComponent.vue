<template>
  <header
    class="w-full h-[60px] z-[9999] fixed px-4 flex justify-between items-center backdrop-blur-lg"
  >
    <h1 class="w-[60px] h-[60px] flex justify-center items-center">
      <img
        class="w-[40px] h-[40px]"
        :src="`/img/${dark ? 'logo' : 'logo-dark'}.png`"
        title="Vidara Websites - Criação de Sites em Rio Negrinho"
        alt="Vidara Websites - Criação de Sites em Rio Negrinho"
      />
    </h1>
    <ul class="hidden md:flex flex-1  justify-center items-center gap-2">
      <li v-for="item in menu" :key="item.id">
      <a :href="item.to" class=" p-2 uppercase text-blue-800 dark:text-pink-100 font-bold hover:bg-blue-800 hover:text-pink-100 dark:hover:bg-pink-100 dark:hover:text-blue-800 transition-colors delay-75">{{ item.label }}</a>
      </li>
    </ul>
    <div class="flex justify-end items-center gap-2  h-full">
      <div class="block">
        <label for="theme_toggle" ref="label_theme_toggle">
          <span class="material-icons-outlined text-blue-800 cursor-pointer dark:text-pink-100 hover:text-blue-900 dark:hover:text-pink-200">{{
            themeMode.icon
          }}</span></label
        >
        <input
          ref="theme_toggle"
          type="checkbox"
          id="theme_toggle"
          class="hidden peer"
        />
        <ul
          class="absolute peer-checked:top-[40px] bg-white dark:bg-gray-800 p-2 right-4 -top-8 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible transition-all delay-75"
        >
          <li
            @click="changeTheme({ id: 2, label: 'Claro', icon: 'light_mode' })"
            class="w-full h-full p-2 flex justify-start items-center text-gray-800 dark:text-pink-100 gap-2 hover:bg-pink-100 dark:hover:bg-gray-900"
            href=""
          >
            <span class="material-icons-outlined">light_mode</span>
            <span>Claro</span>
          </li>
          <li
            @click="changeTheme({ id: 1, label: 'Escuro', icon: 'dark_mode' })"
            class="w-full h-full p-2 flex justify-start items-center text-gray-800 dark:text-pink-100 gap-2 hover:bg-pink-100 dark:hover:bg-gray-900"
            href=""
          >
            <span class="material-icons-outlined">dark_mode</span>
            <span>Escuro</span>
          </li>
          <li
            @click="changeTheme({ id: 3, label: 'Sistema', icon: 'computer' })"
            class="w-full h-full p-2 flex justify-start items-center text-gray-800 dark:text-pink-100 gap-2 hover:bg-pink-100 dark:hover:bg-gray-900"
            href=""
          >
            <span class="material-icons-outlined">computer</span>
            <span>Sistema</span>
          </li>
        </ul>
      </div>
      <div class="block md:hidden">
        <label for="menu_toggle" ref="label_menu_toggle">
          <span class="material-icons-outlined text-blue-800 cursor-pointer hover:text-blue-900 dark:hover:text-pink-200 dark:text-pink-100">menu</span></label
        >
        <input type="checkbox" id="menu_toggle" ref="menu_toggle" class="hidden peer" />
        <ul
          class="absolute peer-checked:top-[40px] bg-white dark:bg-gray-800 p-2 right-4 -top-8 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible transition-all delay-75"
        >
          <li
            v-for="item in menu"
            :key="item.id"
            class="w-full h-full  hover:bg-pink-100 dark:hover:bg-gray-900"
          >
            <a @click="$refs.menu_toggle.checked = 0" :href="item.to" class="w-full h-full p-2 flex justify-start items-center text-gray-800 dark:text-pink-100 gap-2">{{ item.label }}</a>
          </li>
        </ul>
      </div>
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
      menu: [
        {
          id: 1,
          to: "#home",
          label: "Home",
        },
        {
          id: 2,
          to: "#sobre",
          label: "Sobre",
        },
        {
          id: 3,
          to: "#servicos",
          label: "Serviços",
        },
        {
          id: 4,
          to: "#Orcamento",
          label: "Orçamento",
        },
        {
          id: 5,
          to: "#contato",
          label: "Contato",
        },
      ],
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
    changeTheme(theme) {
      this.themeMode = theme;
      this.$refs.theme_toggle.checked = 0;
    },
  },
  mounted() {
  document.addEventListener('click', (e) => {
    // Fechar o menu se clicar fora
    if (this.$refs.menu_toggle && this.$refs.menu_toggle.checked && !e.target.closest('#menu_toggle')) {
      this.$refs.menu_toggle.checked = false;
    }

    // Fechar o tema se clicar fora
    if (this.$refs.theme_toggle && this.$refs.theme_toggle.checked && !e.target.closest('#theme_toggle')) {
      this.$refs.theme_toggle.checked = false;
    }
  });
}

};
</script>
