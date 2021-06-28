<template>
  <button :class="classObject"><slot></slot></button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      required: true
    }
  },

  computed: {
    classObject() {
      return {
        button: true,
        [this.type]: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  button {
    width: 100%;
    max-width: 20rem;
    min-height: 4rem;
    border: none;
    border-radius: 14px;
    box-sizing: border-box;
    font-style: normal;
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 149.9%;
    text-align: center;
    text-transform: uppercase;
  }

  .colorful {
    background: linear-gradient(90deg, #FFA67A 0%, #FF6065 100%);
    color: #FFFFFF;
    -webkit-box-shadow: 0px -6px 0px 0px rgba(198, 82, 82, 0.6) inset;
    -moz-box-shadow: 0px -6px 0px 0px rgba(198, 82, 82, 0.6) inset;
    box-shadow: 0px -6px 0px 0px rgba(198, 82, 82, 0.6) inset;
    transition: box-shadow 0.2s ease-out;

    &:hover {
      cursor: pointer;
      -webkit-box-shadow: 0px -6px 6px 0px rgba(198, 82, 82, 0.6) inset;
      -moz-box-shadow: 0px -6px 6px 0px rgba(198, 82, 82, 0.6) inset;
      box-shadow: 0px -6px 6px 0px rgba(198, 82, 82, 0.6) inset;
    }
  }

  .boolean_true {
    background: #424A9E;
    color: #FFFFFF;

    &:hover {
      cursor: pointer;
      -webkit-box-shadow: 0px -6px 6px 0px rgba(198, 82, 82, 0.6) inset;
      -moz-box-shadow: 0px -6px 6px 0px rgba(198, 82, 82, 0.6) inset;
      box-shadow: 0px -6px 6px 0px rgba(198, 82, 82, 0.6) inset;
    }

    &:active {
      -webkit-box-shadow: 0px 0px 6px 0px rgba(198, 82, 82, 0.6) inset;
      -moz-box-shadow: 0px 0px 6px 0px rgba(198, 82, 82, 0.6) inset;
      box-shadow: 0px 0px 6px 0px rgba(198, 82, 82, 0.6) inset;
    }
  }

  .boolean_false {
    background: #FFFFFF;
    color: #4953BE;
    border: 2px solid #4953BE;

    &:hover {
      cursor: pointer;
      -webkit-box-shadow: 0px -6px 6px 0px rgba(73, 83, 190, 0.6) inset;
      -moz-box-shadow: 0px -6px 6px 0px rgba(73, 83, 190, 0.6) inset;
      box-shadow: 0px -6px 6px 0px rgba(73, 83, 190, 0.6) inset;
    }

    &:active {
      -webkit-box-shadow: 0px 0px 6px 0px rgba(198, 82, 82, 0.6) inset;
      -moz-box-shadow: 0px 0px 6px 0px rgba(198, 82, 82, 0.6) inset;
      box-shadow: 0px 0px 6px 0px rgba(198, 82, 82, 0.6) inset;
    }
  }

</style>