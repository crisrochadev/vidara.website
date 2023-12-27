<template>
  <article class="w-11/12 mx-auto">
    <form class="w-full md:w-10/12 mx-auto p-4 bg-gray-200 dark:bg-gray-800 rounded">
      <div class="flex flex-wrap w-full justify-start items-center gap-4">
        <label
          for="email"
          class="flex flex-col gap-2 mb-2 text-sm font-bold text-blue-900 dark:text-pink-100 w-full md:w-[calc(50%_-_8px)]"
        >
          <span class="block pl-2">Seu email</span>
          <input
            type="email"
            id="email"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder=""
            required
          />
        </label>
        <label
          for="phone"
          class="flex flex-col gap-2 mb-2 text-sm font-bold text-blue-900 dark:text-pink-100 w-full md:w-[calc(50%_-_8px)]"
        >
          <span class="block pl-2">Seu Telefone</span>
          <input
            type="text"
            id="phone"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </label>
      </div>
      <div class="mb-5">
        <label
          for="repeat-password"
          class="block ml-2 font-bold mb-2 text-sm text-blue-900 dark:text-pink-100"
          >Sua Mensagem</label
        >
        <textarea
          id="repeat-password"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        ></textarea>
      </div>
      <div class="w-full flex justify-end">
        <button
          type="submit"
          class="text-white bg-pink-800 hover:bg-pink-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-blue-800"
        >
          Enviar mensagem
        </button>
      </div>
    </form>
  </article>
</template>
<script>
export default {};
</script>
<style lang=""></style>
