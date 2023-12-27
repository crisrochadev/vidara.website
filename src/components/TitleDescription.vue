<template>
    <section :class="color ? color : ''" id="servicos">
      <header class="border-b pb-4 border-pink-500 mx-[5%]">
        <h1
          class="tracking-tigh font-extrabold uppercase mb-4 text-2xl lg:text-4xl  text-pink-500 gap-2 flex justify-start items-center"
        >
          <span class="material-icons-outlined">tag</span>
          <span>{{ title }}</span>
        </h1>
        <p class="px-2 text-lg " :class="withDark ? 'text-gray-100' : 'dark:text-gray-100 text-gray-800'">
         {{ description }}
        </p>
      </header>
      
    </section>
  </template>
  <script>
  export default {
      props:['withDark', 'title', 'description', 'color']
  };
  </script>
  <style lang=""></style>
  