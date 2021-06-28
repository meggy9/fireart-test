<template>
  <div class="progress">
    <div class="progress__digit">
      <span class="progress__digit--completed">{{ completed }}/</span>
      <span class="progress__digit--total">{{ total }}</span>
    </div>
    <div class="progress__line">
      <span
          :style="{width: progress + '%'}"
          class="progress__line--completed"
      ></span>
      <span class="progress__line--total"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    completed: {
      type: String
    },
    total: {
      type: String
    }
  },
  computed: {
    progress() {
      return this.completed/this.total * 100
    }
  }
}
</script>

<style lang="scss" scoped>
  .progress {
    width: 16rem;

    &__digit {
      text-align: start;
      margin-bottom: .5rem;
      font-weight: bold;

      &--completed {
        font-size: 1.2rem;
        color: #FF7878;
      }
      &--total {

      }
    }

    &__line {
      position: relative;
      width: 100%;
      height: 3px;
      border-radius: 20px;
      overflow: hidden;

      &--total {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #DBDEFF;
      }

      &--completed {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background: #FF7878;
        z-index: 2;
        border-radius: 20px;
      }
    }
  }
</style>