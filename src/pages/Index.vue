<template>
  <Layout class="h-screen overflow-hidden">
    <div class="container mx-auto -mt-20 h-full flex justify-center items-center font-mono">
       <div class="w-2/3">
    <h1 class="text-5xl p-10">Tautciaus Blogas</h1>
    <h2 class="text-3xl p-6 ml-10">Apie
    <ClientOnly>
    <VueTyper
  :text='words'
   initial-action='typing'
  :type-delay='200'
  caret-animation='blink' />
  </ClientOnly>
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

<style>
@keyframes Type {
  from {
    transform: translateX(-5px);
  }
  to {
    color: currentColor;
  }
}

.vue-typer {
  display: inline-block;
  text-align: left;
  white-space: nowrap;
}
.vue-typer .custom.char {
  color: #fff;
}
.vue-typer .custom.char.typed {
  animation: Type 0.3s;
}
.vue-typer .custom.caret {
  background-color: rgba(255, 255, 255, .5);
  margin: 0 2px;
  width: 2px;
}
</style>
