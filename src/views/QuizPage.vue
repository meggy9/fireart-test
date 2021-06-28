<template>
  <div class="container">
    <h1 class="title">{{ currentQuestion.category }}</h1>
    <h3 class="level">level {{ level }}</h3>
    <ProgressBar
        :completed="answeredAmount"
        :total="totalQuestionsAmount"
        class="m-progress"
    ></ProgressBar>
    <p
        class="question"
        v-html="currentQuestion.question"
    ></p>
    <Button
        type="boolean_true"
        @click.native="acceptAnswer(true)"
        class="m-button"
    >
      True
    </Button>
    <Button
        type="boolean_false"
        @click.native="acceptAnswer(false)"
    >
      False
    </Button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProgressBar from '@/components/ProgressBar'
import Button from '@/components/ui-kit/Button'

export default {
  name: "Quiz",
  components: {
    ProgressBar,
    Button
  },
  data: () => ({
    levelList: ['easy', 'medium', 'hard']
  }),
  computed: {
    ...mapGetters([
        'currentQuestion',
        'answeredAmount',
        'totalQuestionsAmount'
    ]),
    level() {
      return this.levelList.findIndex((element) => element === this.currentQuestion.difficulty) + 1
    }
  },
  methods: {
    ...mapActions(['acceptAnswer'])
  }
}
</script>

<style lang="scss" scoped>

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    max-width: 480px;
    margin: 0 auto;
    height: 100%;
    color: #4953BE;
  }
  .title {
    font-style: normal;
    font-weight: bold;
    font-size: 3.5rem;
    line-height: 4rem;
    text-align: center;
    letter-spacing: 0.05em;
    margin-bottom: -1rem;
    margin-top: 6rem;
    color: #4953BE;

    @media screen and (max-width: 370px) {
      font-size: 2.5rem;
    }
  }
  .level {
    font-style: normal;
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 3rem;
    text-align: center;
    letter-spacing: 0.5em;
    text-transform: lowercase;
    color: #4953BE;
  }

  .question {
    line-height: 1.8rem;
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 4rem;
  }

  .m-progress {
    margin-bottom: 2.5rem;
  }

  .m-button {
    margin-bottom: 1.7rem;
  }
</style>