<template>
  <div>
    <nav class="flex items-center justify-between flex-wrap p-1 bg-gray-200">
      <div class="flex items-center flex-shrink-0 text-white mr-6 ml-4">
        <g-link to="/">
          <g-image alt="Logo" src="~/assets/Logo.svg" width="100"/>
        </g-link>
      </div>
      <div class="block sm:hidden">
        <button
          @click="toggle"
          class="flex items-center px-3 py-2 border rounded text-gray-600 border-gray-700 hover:text-white hover:border-white"
        >
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <div
        :class="open ? 'block': 'hidden'"
        class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
      >
        <div class="text-sm lg:flex-grow"></div>
        <div>
          <g-link
            to="/"
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-900 mr-4"
          >Pagrindinis</g-link>
          <g-link
            to="/About"
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-900 mr-4"
          >Apie</g-link>
          <g-link
            to="/Blogas"
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-900 mr-4"
          >Blogas</g-link>
        </div>
      </div>
    </nav>
    <Background/>
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
svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #eceff1;
  z-index: -100;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
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

