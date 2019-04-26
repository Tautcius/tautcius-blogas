<template>
  <Layout>
  <div class="container mx-auto px-5">
    <h1 class="text-5xl flex py-2 font-semibold">Apie</h1>
    <h2 class="text-3xl font-medium">blogą...</h2>
    <p class="text-xl text-justify">Blogą pradėjau daryti su mintimi, kad reikia kažkaip parodyti, ką moku padaryti su front-end'u. Taigi šis blogas yra padarytas su
    <a href="https://gridsome.org/" class="link">Gridsome <font-awesome class="text-xs align-text-top" icon="external-link-alt"/></a>, kurio pagrindas yra
    <a href="https://vuejs.org/" class="link">Vue.js <font-awesome class="text-xs align-text-top" icon="external-link-alt"/></a>. Sukasi viskas kaip supratote
    <a href="https://www.netlify.com/" class="link">Netlify <font-awesome class="text-xs align-text-top" icon="external-link-alt"/></a>. CMS naudoju
    <a href="https://www.netlifycms.org/" class="link">Netlify CMS <font-awesome class="text-xs align-text-top" icon="external-link-alt"/></a>. Jei kam kada bus įdomu kaip viskas ir kur yra galėsiu detaliau parodyti.</P>
    <h2 class="text-3xl font-medium">mane...</h2>
    <p class="text-xl">Trumpai kas as ir apie ką čia vikas</P>
    <Timeline/>
    <h2 class="text-3xl font-medium">Kontaktai</h2>

    <Kontaktai/>
    </div>
 </Layout>
</template>

<script>
import Timeline from "~/components/Timeline.vue"
import Kontaktai from "~/components/Kontaktai.vue"
export default {
  metaInfo: {
    title: 'Apie'
  },
  components : {
      Timeline,
      Kontaktai
  }
}
</script>
<style>
.link {
    @apply no-underline text-blue-500;
}
.link:hover {
    @apply underline;
     }
</style>
