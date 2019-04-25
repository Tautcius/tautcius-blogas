<template>
  <Layout class="h-screen overflow-hidden">
    <div class="container mx-auto -mt-20 h-full flex justify-center items-center font-mono">
       <div class="w-2/3">
    <h1 class="text-5xl p-10">Tautciaus Blogas</h1>
    <h2 class="text-3xl p-6 ml-10">Apie <vue-typer
  :text='["kompiuterius","programavimą","internetą"]'
  :repeat='Infinity'
  :shuffle='false'
  initial-action='typing'
  :pre-type-delay='70'
  :type-delay='200'
  :pre-erase-delay='1500'
  :erase-delay='100'
  erase-style='backspace'
  :erase-on-complete='false'
  caret-animation='blink'
></vue-typer>
    </h2>
    <h2 class="text-3xl p-6 ml-10">ir viską kas man įdomu.</h2>
    </div>
    </div>
  </Layout>
</template>

<script>
export default {
    metaInfo: {
    title: "Pagrindinis"
  }
};
</script>


