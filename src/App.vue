<template>
  <router-view />
</template>
<script>
import { initFlowbite } from "flowbite";
export default {
  mounted() {
    initFlowbite();
  },
  head() {
    return {
      title: "Vidara Websites - Criação de SITES em Rio Negrinho",
      content:
        "Criação de sites em Rio Negrinho, coloque sua empresa no google e seja encontrado na internet!",
      titleTemplate: "%s | Coloque sua empresa no google",
      meta: [
        {
          charset: "UTF-8",
        },
        {
          name: "keywords",
          content:
            "criação, sites, google, empresa, rio negrinho, criação de sites em rio negrinho, colocar negócio no google, colocar empresa no google, negócio",
        },
        {
          name: "canonical",
          content: "https://vidara.website",
        },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "facebook:card",
          content: "summary_large_image",
        },
        {
          name: "instagram:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: "Coloque sua empresa no google - Vidara Websites",
        },
        {
          name: "facebook:title",
          content: "Coloque sua empresa no google - Vidara Websites",
        },
        {
          name: "instagram:title",
          content: "Coloque sua empresa no google - Vidara Websites",
        },
        {
          name: "twitter:description",
          content:
            "Criação de sites em Rio Negrinho, coloque sua empresa no google e seja encontrado na internet!",
        },
        {
          name: "facebook:description",
          content:
            "Criação de sites em Rio Negrinho, coloque sua empresa no google e seja encontrado na internet!",
        },
        {
          name: "instagram:description",
          content:
            "Criação de sites em Rio Negrinho, coloque sua empresa no google e seja encontrado na internet!",
        },
        {
          name: "twitter:image",
          content: "https://vidara.website/img/hero.svg",
        },
        {
          name: "facebook:image",
          content: "https://vidara.website/img/hero.svg",
        },
        {
          name: "instagram:image",
          content: "https://vidara.website/img/hero.svg",
        },
      ],
      link: [
        {
          rel: "icon",
          href: "/favicon.ico",
        },
      ],
      script: [
        {
          type: "application/ld+json",
          json: {
            "@context": "http://schema.org",
            "@type": "Organization",
            name: "Vidara Websites",
            url: "https://vidara.website",
            logo: "https://vidara.website/img/logo.png",
          },
        },
        // Adicione mais scripts conforme necessário
      ],
    };
  },
};
</script>
<style>
html {
  scroll-behavior: smooth;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
