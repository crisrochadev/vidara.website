<template>
  <section id="Orcamento">
    <div class="bg-white dark:bg-gray-900">
      <header
        class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative"
      >
        <a
          title="Formulario de Orçamento"
          alt="Formulario de Orçamento"
          href="/formulario-orcamento"
          class="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800"
        >
          <span
            class="text-xs bg-blue-900 rounded-full text-white px-4 py-1.5 me-3"
            >Novidade</span
          >
          <span class="text-sm font-medium"
            >Clique aqui para simular o seu orçamento</span
          >
          <span class="material-icons-outlined">chevron_right</span>
        </a>
        <h1
          class="uppercase mb-4 text-4xl font-extrabold tracking-tight leading-none text-blue-900 md:text-5xl lg:text-6xl dark:text-white"
        >
          Vamos colocar seu negócio online?
        </h1>
        <p
          class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200"
        >
          Para fazer seu negócio ser encontrado online, deixe que nosso serviço
          de criação de site em Rio Negrinho garanta seu espaço na internet!
          Seja encontrado, coloque seu telefone e entraremos em contato.
        </p>
        <form
          @submit="sendForm"
          class="w-full max-w-md mx-auto"
          v-motion
          :initial="{ opacity: 0, scale: 0.8 }"
          :visible="{ opacity: 1, scale: 1 }"
        >
          <label
            for="default-email"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >Telefone</label
          >
          <div class="relative">
            <div
              class="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none"
            >
              <span class="material-icons-outlined">phone</span>
            </div>
            <input
              type="tel"
              v-model="form.phone"
              class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Digite seu telefone e entraremos em contato"
              required
            />
            <button
              type="submit"
              class="text-white absolute end-2.5 bottom-2.5 bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
            <img
              width="15px"
              height="auto"
              src="/img/spinner.svg"
              class="animate-spin"
              v-if="loading"
            />
            <span v-else>Enviar</span>
            </button>
          </div>
        </form>
      </header>
      <div
        class="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"
      ></div>
    </div>
  </section>
</template>
<script>
import WaveComponent from "./WaveComponent.vue";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  components: { WaveComponent },
  data() {
    return {
      loading: false,
      form: {
        phone: "",
        name: "",
        message: "Gostaria que entrasse em contado comigo.",
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
        name: "",
        phone: "",
        message: "",
      };
    },
  },
};
</script>
<style lang=""></style>
