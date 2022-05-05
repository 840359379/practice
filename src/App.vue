<template>
  <router-view class="router-view" v-slot="{ Component }">
      <transition name="transitionName">
        <component :is="Component" />
      </transition>
    </router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
