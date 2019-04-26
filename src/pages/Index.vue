<template>
  <Layout class="h-screen overflow-hidden">
    <div class="container mx-auto -mt-20 h-full flex justify-center items-center font-mono">
       <div class="w-2/3">
    <h1 class="text-5xl p-10">Tautciaus Blogas</h1>
    <h2 class="text-3xl p-6 ml-10">Apie <VueTyper
  :text='words'
  :repeat='Infinity'
  :shuffle='false'
  initial-action='typing'
  :pre-type-delay='70'
  :type-delay='200'
  :pre-erase-delay='1500'
  :erase-delay='100'
  erase-style='backspace'
  :erase-on-complete='false'
  caret-animation='blink' />
    </h2>
    <h2 class="text-3xl p-6 ml-10">ir viską kas man įdomu.</h2>
    </div>
    </div>
  </Layout>
</template>

<script>
const words = ["kompiuterius","programavimą","internetą"];

export default {
    metaInfo: {
    title: "Pagrindinis"
  },
  components: {
          VueTyper: process.isServer
      ? { inheritAttrs: false, render: h => h('span', null, [words[0]]) }
      : () => import('vue-typer').then(({ VueTyper }) => VueTyper)
  },
  data () {
      return {
          words
      }
  }
};
</script>


