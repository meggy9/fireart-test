<template>
  <div class="container">
    <p class="label">{{ label }}</p>
    <div class="select">
      <div
          @click="openList"
          class="select__field"
      >
        {{ value }}
      </div>
      <ul
          :class="[opened ? 'opened' : 'closed']"
      >
        <li
            v-for="(option, key) in options"
            :key="key"
            :value="key"
            @click="updateValue"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: [
      "value",
      "options",
      "label"
  ],
  data: () => ({
    opened: false
  }),
  created() {
    const onClickOutside = e => this.opened = this.$el.contains(e.target) && this.opened;
    document.addEventListener('click', onClickOutside);
    this.$on('hook:beforeDestroy', () => document.removeEventListener('click', onClickOutside));
  },
  methods: {
    updateValue(evt) {
      const value = this.options[evt.target.value]
      this.$emit('input', value)
      this.opened = false
    },
    openList() {
      this.opened = !this.opened
    }
  }
}
</script>

<style lang="scss" scoped>

  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 22em;
  }

  .select {
    position: relative;
    width: 100%;
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
      width: 1.9rem;
      height: 2rem;
      background-image: url("~@/assets/images/cup.svg");
      background-size: contain;
    }
  }

  .select__field {
    height: 3.5rem;
    width: 100%;
    padding: 0 5rem 0 1.5rem;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 10px;
    text-align: left;
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    color: #FFFFFF;
    line-height: 3.5rem;
    text-transform: lowercase;

    @media screen and (max-width: 640px) {

    }
  }

  ul {
    position: absolute;
    top: 4.5rem;
    left: 0;
    width: 100%;
    color: #000;
    margin: 0;
    padding: 0;
    list-style-type: none;
    box-sizing: border-box;
    border-radius: 10px;
    background: #FFFFFF;
    overflow: hidden;
    transition: height .5s;
    z-index: 10;

    & > li {
      padding: 1rem 4rem;
      font-size: 1.2rem;

      &:hover {
        background: #FFA67A;
        color: #FFFFFF;
        cursor: pointer;
      }
    }
  }

  .opened {
    height: 10.5rem;
  }

  .closed {
    height: 0;
  }

  .select:after {
    /* Vector */
    content: "";
    width: 15px;
    height: 10px;

    position: absolute;
    left: 90.31%;
    right: 5%;
    top: 41.26%;
    bottom: 40.22%;
    background-image: url('~@/assets/images/arrow-down.svg');
    background-size: contain;
  }
</style>