<template>
<div class="w-full lg:flex">
  <div class="custom lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/44680909_2482320701793295_2502996709773148160_n.jpg?_nc_cat=100&_nc_ht=scontent-arn2-1.xx&oh=29c1c83e6cc39d00a67d280218c8367d&oe=5D3601C8')">
  </div>
  <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <div class="text-black font-bold text-xl mb-2">Susisiekime</div>
      <p class="text-grey-darker text-base">Pastebėjai klaidą, neaišku kaip ką padariau ar šiaip koks klausimas yra, visuomet gali man parašyti. Visuomet smagu pakalbėti apie tai kas patinka.</p>
    </div>
    <div class="flex items-center">
      <div class="pl-4"><a href="https://github.com/Tautcius" class="hover:text-blue-500"><font-awesome :icon="['fab', 'github']" size="3x"/></a></div>
      <div class="pl-4"><a href="https://www.linkedin.com/in/tautvydas-bujauskas/" class="hover:text-blue-500"><font-awesome :icon="['fab', 'linkedin']" size="3x"/></a></div>
      <div class="pl-4"><a href="https://www.facebook.com/tautvydas.bujauskas" class="hover:text-blue-500"><font-awesome :icon="['fab', 'facebook-square']" size="3x"/></a></div>
      <div class="pl-4"><a href="http://m.me/tautvydas.bujauskas" class="hover:text-blue-500"><font-awesome :icon="['fab', 'facebook-messenger']" size="3x"/></a></div>
    </div>
  </div>
</div>
</template>

<script>

export default {
    name: "Kontaktai"
}
</script>
<style>
.custom {
  height: 400px
}
</style>
