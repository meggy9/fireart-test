<template>
  <div id="app">
    <component :is="mode"></component>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Start from "./views/StartPage";
import Quiz from "./views/QuizPage";
import Result from "./views/ResultPage";

export default {
  components: {
    Start,
    Quiz,
    Result
  },

  computed: {
    ...mapState(['mode'])
  }

}
</script>

<style lang="scss">
  #app {
    font-family: Quicksand;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2C3E50;
    height: 100%;
  }

  .fade-enter-active {
    transition: all 1s ease;
  }

  .fade-enter, .fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
