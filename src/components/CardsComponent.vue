<template>
  <div
    class="grid mb-8 gap-4 rounded-lg shadow-sm  md:mb-12 md:grid-cols-2"
  >
    <figure
      v-for="index in 4"
      :key="index"
      class="flex rounded  flex-col items-center justify-center p-8 text-center bg-gray-200 border-b border-gray-300   md:border-e dark:bg-blue-900 dark:border-blue-800"
    >
      <blockquote
        class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400"
      >
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          Very easy this was to integrate
        </h3>
        <p class="my-4">
          If you care for your time, I hands down would go with this."
        </p>
      </blockquote>
      <figcaption class="flex items-center justify-center">
        <img
          class="rounded-full w-9 h-9"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
          alt="profile picture"
        />
        <div
          class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3"
        >
          <div>Bonnie Green</div>
          <div class="text-sm text-gray-500 dark:text-gray-400">
            Developer at Open AI
          </div>
        </div>
      </figcaption>
    </figure>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
