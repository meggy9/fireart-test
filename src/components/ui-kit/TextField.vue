<template>
  <div class="text-field">
    <p class="label">Amount</p>
    <input type="number" :value="value" @input="updateValue">
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    value: {
      type: String
    },
    placeholder: {
      type: String,
      default: 'Type a number'
    }
  },
  methods: {
    updateValue(evt) {
      const inputValue = evt.target.value
      const cleanValue = inputValue.length > 0 ? parseInt(inputValue).toString() : ''
      this.$emit('input', cleanValue)
    }
  }
}
</script>

<style lang="scss" scoped>

  .text-field {
    position: relative;
    width: 100%;
    max-width: 22em;
  }
  .label {
    position: relative;
    height: 1.5rem;
    line-height: 1.5rem;
    padding-left: 2.5rem;
    text-align: start;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    color: $label_font_color;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 2rem;
      height: 2rem;
      background-image: url("~@/assets/images/shield.svg");
      background-size: contain;
    }
  }

  input {
    padding: 0 5rem 0 1.5rem;
    margin: 0;
    height: 3.5rem;
    width: 100%;
    box-sizing: border-box;
    background: transparent;
    border: 1px solid #FFFFFF;
    border-radius: 10px;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 3.5rem;

    &:hover {
      border: 1px solid #FFFFFF;
      -webkit-box-shadow: 0px 0px 5px 5px rgba(255, 255, 255, 0.2);
      -moz-box-shadow: 0px 0px 5px 5px rgba(255, 255, 255, 0.2);
      box-shadow: 0px 0px 5px 5px rgba(255, 255, 255, 0.2);
    }

    &:focus {
      outline: none;
      border: 1px solid #F7A491;
      -webkit-box-shadow: 0px 0px 5px 5px rgba(247, 164, 145, 0.2);
      -moz-box-shadow: 0px 0px 5px 5px rgba(247, 164, 145, 0.2);
      box-shadow: 0px 0px 5px 5px rgba(247, 164, 145, 0.2);
    }
  }
</style>