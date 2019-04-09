<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about">About</g-link>
      </nav>
    </header>
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

