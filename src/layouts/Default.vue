<template>
  <div>
    <nav class="flex items-center justify-between flex-wrap p-1 bg-transparent">
      <div class="flex items-center flex-shrink-0 text-white mr-6 ml-4">
        <g-link to="/">
          <g-image alt="Logo" src="~/assets/Logo.svg" width="135"/>
        </g-link>
      </div>
      <div class="block sm:hidden">
        <button
          @click="toggle"
          class="flex items-center px-3 py-2 border rounded text-gray-600 border-gray-700 hover:text-white hover:border-white"
        >
          <font-awesome icon="bars"/>
        </button>
      </div>
      <div
        :class="open ? 'block': 'hidden'"
        class="w-full flex-grow sm:flex sm:items-center sm:w-auto"
      >
        <div class="text-sm sm:flex-grow"></div>
        <div>
          <g-link
            to="/"
            class="block mt-4 sm:inline-block sm:mt-0 text-gray-600 hover:text-gray-900 mr-4"
          >Pagrindinis</g-link>
          <g-link
            to="/About"
            class="block mt-4 sm:inline-block sm:mt-0 text-gray-600 hover:text-gray-900 mr-4"
          >Apie</g-link>
          <g-link
            to="/blogas"
            class="block mt-4 sm:inline-block sm:mt-0 text-gray-600 hover:text-gray-900 mr-4"
          >Blogas</g-link>
        </div>
      </div>
    </nav>
    <Background id="background"/>
    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import Background from "../assets/Background.svg";
export default {
  components: {
    Background
  },
  data() {
    return {
      open: false
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  }
};
</script>

<style>
#background {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #eceff1;
  z-index: -100;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
@media screen and (max-width: 768px) {
	#background {
		  height: 100vh;
 		  width: auto;
	}
 }
.path {
  animation: draw 20s infinite;
  animation-timing-function: linear;
}
.path-01 {
  animation-delay: 0s;
}
.path-02 {
  animation-delay: 1s;
}
.path-03 {
  animation-delay: 2s;
}
.path-04 {
  animation-delay: 3s;
}
.path-05 {
  animation-delay: 4s;
}
@keyframes draw {
  0% {
  }
  100% {
    stroke-dashoffset: 0;
    stroke-opacity: 1;
  }
}
</style>

