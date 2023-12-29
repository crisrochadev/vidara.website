<template>
  <article class="w-11/12 mx-auto">
    <form
      ref="form_el"
      class="w-full md:w-10/12 mx-auto p-4 bg-gray-200 dark:bg-gray-800 rounded"
      @submit="sendForm"
    >
      <div class="flex flex-wrap w-full justify-start items-center gap-4">
        <label
          for="name"
          class="flex flex-col gap-2 mb-2 text-sm font-bold text-blue-900 dark:text-pink-100 w-full md:w-[calc(50%_-_8px)]"
        >
          <span class="block pl-2">Seu Nome</span>
          <input
            type="text"
            id="name"
            v-model="form.name"
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
            type="tel"
            inputmode="numeric"
            v-model="form.phone"
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
          v-model="form.message"
          id="repeat-password"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        ></textarea>
      </div>
      <div class="w-full flex justify-end">
        <button
          ref="button_el"
          type="submit"
          class="text-white bg-pink-800 hover:bg-pink-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-blue-800"
        >
         
            <img
            height="auto"
              width="15px"
              src="/img/spinner.svg"
              class="animate-spin"
              v-if="loading"
            />
            <span v-else>Enviar Mensagem</span>
         
        </button>
      </div>
    </form>
  </article>
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      loading: false,
      form: {
        phone: "",
        name: "",
        message: "",
      },
    };
  },
  methods: {
    async sendForm(e) {
      e.preventDefault();
      this.loading = true;
      let data = {
        service_id: process.env.VUE_APP_SERVICE_ID,
        template_id: process.env.VUE_APP_TEMPLATE_ID,
        user_id: process.env.VUE_APP_PUBLIC_KEY,
        template_params: this.form,
      };

      const res = await axios
        .post("https://api.emailjs.com/api/v1.0/email/send", data)
        .then((res) => res.data)
        .catch((err) => err);

      console.log(res);
      if (res === "OK") {
        Swal.fire({
          position: "bottom-center",
          icon: "success",
          title: "Enviamos sua mensagem " + this.form.name,
          text: "Logo entraremos em contato.",
          confirmButtonText: `
    <p class="flex items-center gap-2">
      <span class="material-icons-outlined">done</span> Tudo bem!
      </p>
  `,
          showClass: {
            popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
          },
          hideClass: {
            popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
          },
        });
      } else {
        let linkWp =
          "https://api.whatsapp.com/send?phone=5547992321879&text=Mensagem%20de%20%7B%7Bname%7D%7D,%20telefone%20%7B%7Bphone%7D%7D%20:%20%7B%7Bmessage%7D%7D";
        let link = linkWp
          .replace("%7B%7Bname%7D%7D", this.form.name.replace(/ /g, "%20"))
          .replace("%7B%7Bphone%7D%7D", this.form.phone)
          .replace("%7B%7Bmessage%7D%7D", this.form.message);
        console.log(link);
        Swal.fire({
          icon: "error",
          html: `
           <div class="h-[100px]">
            <h2 class="uppercase font-bold text-xl">Não pudemos enviar sua mensagem</h2>
            <p >Envie um email para <a class="bg-pink-800 text-xs p-2 rounded hover:bg-pink-700 text-white" href="contato@vidara.website">contato@vidara.website</a></p>
          </div>
          `,
          footer: `<a target="_blank" class="text-green-800 hover:text-green-900" href="${link}">Ou nos chame no whatsap</a>`,
          confirmButtonText: `
    <p class="flex items-center gap-2">
      <span class="material-icons-outlined">done</span> Tudo bem!
      </p>
  `,
          showClass: {
            popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
          },
          hideClass: {
            popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
          },
        });
      }

      this.loading = false;
      this.form = {
        name:'',
        phone:'',
        message:''
      }
    },
  },
};
</script>
<style lang=""></style>
