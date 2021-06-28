<template>
  <div class="select-container">
    <div class="wrapper">
      <header>
        <div class="title">Welcome to the</div>
        <img class="logo" src="../assets/images/890-01.png" alt="Trivia logo">
      </header>
      <Select v-model="difficulty" :options="options" label="Difficulty" class="mb-select"></Select>
      <TextField v-model="amount"></TextField>
      <Button @click.native="startGame" class="mt-100" type="colorful">Start</Button>
    </div>
  </div>
</template>

<script>
import Select from "@/components/ui-kit/Select"
import TextField from "@/components/ui-kit/TextField";
import Button from "@/components/ui-kit/Button"

import { mapActions } from 'vuex'

export default {
  name: 'Start',
  components: {
    Select,
    TextField,
    Button
  },
  data: () => ({
    options: ['easy', 'medium', 'hard'],
  }),
  computed: {
    difficulty: {
      get() {
        return this.$store.state.difficulty
      },
      set(newValue) {
        this.$store.commit('SET_DIFFICULTY', newValue)
      }
    },
    amount: {
      get() {
        return this.$store.state.amount
      },
      set(newValue) {
        this.$store.commit('SET_AMOUNT', newValue)
      }
    }
  },
  methods: {
    ...mapActions(['startGame'])
  }
}
</script>

<style lang="scss">
  .select-container {
    min-height: 100%;
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
    background: $bg_blue;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    min-height: 100%;
  }

  header {
    margin-bottom: -4rem;

    .logo {
      width: 30rem;

      @media screen and (max-width: 480px) {
        width: 28rem;
      }

      @media screen and (max-width: 340px) {
        width: 25rem;
      }
    }

    .title {
      font-style: normal;
      font-weight: bold;
      font-size: 1.7rem;
      text-align: center;
      color: #FFFFFF;
      margin-top: 6rem;
      margin-bottom: -2rem;
      letter-spacing: .1rem;
    }
  }

  .mt-100 {
    margin-top: 5rem;
  }

  .mb-select {
    margin-bottom: 1rem;
  }
</style>
