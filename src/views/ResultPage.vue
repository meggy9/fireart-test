<template>
  <div class="container">
    <div class="profile">
      <div class="profile__info">
        <img class="avatar" src="../assets/images/avatar.jpg" alt="">
        <span>You scored</span>
        <span class="score">{{ trueAnswersAmount }}</span>
        <span>/{{ totalQuestionsAmount }}</span>
      </div>
      <div class="profile__stars">
        <span v-for="star in successStarsAmount" :key="star" class="success-star"></span>
        <span v-for="star in failStarsAmount" :key="star" class="fail-star"></span>
      </div>
    </div>
    <ul class="questions__list">
      <li
          v-for="(q, key) in questions"
          :key="key"
          :class="[q.correct_answer === q.answer ? 'question-success' : 'question-fail']"
          v-html="q.question"
      ></li>
    </ul>
    <Button @click.native="startAgain" type="colorful">Start Again</Button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import Button from '@/components/ui-kit/Button'

export default {
  name: "Result",
  components: {
    Button
  },
  data: () => ({
    starsAmount: 10
  }),
  computed: {
    ...mapState(['questions']),
    ...mapGetters([
        'totalQuestionsAmount',
        'trueAnswersAmount',
        'successRate'
    ]),
    successStarsAmount() {
      return Number.parseInt(this.starsAmount * this.successRate)
    },
    failStarsAmount() {
      return this.starsAmount - this.successStarsAmount
    }
  },
  methods: {
    ...mapActions(['startAgain'])
  }
}
</script>

<style lang="scss" scoped>

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: 0;
    padding: 0;
    background: $bg_blue;
  }

  .profile {
    margin-bottom: 2.5rem;
    &__info {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #FFFFFF;
      margin-bottom: 1.2rem;

      .avatar {
        width: 2rem;
        height: 2rem;
        margin-right: 1rem;
        border-radius: 50%;
        background: #FFFFFF;
      }

      .score {
        font-size: 1.2rem;
        font-weight: bold;
        color: $label_font_color;
      }
    }

    &__stars span:not(:last-child) {
      margin-right: .2rem;
    }
  }

  .success-star {
    display: inline-block;
    width: 1.5rem;
    height: 1.45rem;
    background: url("~@/assets/images/star_red.svg");
    background-size: contain;
  }

  .fail-star {
    display: inline-block;
    width: 1.5rem;
    height: 1.45rem;
    background-image: url("~@/assets/images/star_grey.svg");
    background-size: contain;
  }

  .questions__list {
    max-width: 40rem;
    max-height: 30rem;
    overflow-y: auto;
    margin-bottom: 2rem;
    padding: 0 2rem;

    li {
      padding: 1rem 4rem 1rem 2rem;
      font-style: normal;
      font-weight: 500;
      font-size: .9rem;
      line-height: 148.9%;
      text-align: start;
      color: #464FAC;
      border-radius: 14px;
      box-sizing: border-box;
      margin-bottom: 1rem;
    }
  }
  .question {
    &-success {
      position: relative;
      background: #FFFBFA;

      &:after {
        position: absolute;
        top: 50%;
        right: 0.875rem;
        margin-top: -.5rem;
        width: 1.25rem;
        height: .95rem;
        content: "";
        background: url("~@/assets/images/check.svg");
        background-size: contain;
      }
    }
    &-fail {
      position: relative;
      background: #FFDBDB;

      &:after {
        position: absolute;
        top: 50%;
        right: 1rem;
        margin-top: -.5rem;
        width: .95rem;
        height: 1rem;
        content: "";
        background: url("~@/assets/images/cross.svg");
        background-size: contain;
      }
    }
  }
</style>