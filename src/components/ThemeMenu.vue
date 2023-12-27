<template>
  <div class="relative ">
    <div @click="show = !show" ref="mode" class="cursor-pointer hover:text-blue-900 text-blue-800 dark:text-white dark:hover:text-pink-200">
      <span class="material-icons-outlined">{{currentTheme.icon}}</span>
    </div>
    <transition>
      <div
        v-show="show"
        class="absolute top-full right-0 bg-white dark:bg-gray-900 shadow-md rounded"
      >
        <div
          v-for="item in themes"
          :key="item.id"
          @click="currentTheme = item, show = false"
          class="w-full bg-white dark:bg-gray-900 text-blue-800 dark:text-white flex gap-2 items-center p-2 hover:bg-blue-800 hover:text-white transition-all delay-100 cursor-pointer"
        >
          <span class="material-icons-outlined">{{ item.icon }}</span>
          <span>{{ item.label }}</span>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: ["theme"],
  emits: ["update:theme"],
  data() {
    return {
      show: false,
      themes: [
        {
          id: 1,
          label: "Escuro",
          icon: "dark_mode",
        },
        {
          id: 2,
          label: "Claro",
          icon: "light_mode",
        },
        {
          id: 3,
          label: "Sistema",
          icon: "computer",
        },
      ],
    };
  },
  computed: {
    currentTheme: {
      get() {
        return this.theme;
      },
      set(newtheme) {
        this.$emit("update:theme", newtheme);
      },
    },
  },
  mounted() {
    document.addEventListener("click", (e) => {
      if (e.target.contains(this.$refs.mode)) {
        this.show = false;
      }
    });
  },
};
</script>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
