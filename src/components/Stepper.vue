<template>
<div class="checkout-wrapper">
    <ol class="checkout">
     <b-col id="compName" style="font-size: 40px;">{{currentComp}}</b-col>
        <li id="stepList" class="step" v-for="(step, stepIndex) in steps"
            :key="stepIndex"
            :class="{
              'prev': stepIndex < currentStep,
              'active': stepIndex === currentStep }"
            :value="stepIndex">
            <span class="step-dot">{{ stepIndex }}</span>
            <span v-if="titlePosition == false" class="step-label-bot">{{ step.name }}</span>
            <span v-else-if="titlePosition == true" class="step-label-top">{{ step.name }}</span>
        </li>
    </ol>
     
</div>
</template>

<script>
import StepOneVue from './StepOne.vue';
import StepTwoVue from './StepTwo.vue';
export default {
  name: 'Stepper',

computed: {
    currentComp () {
      return this.$store.state.currentComponent
    },
    currentStep () {
      return this.$store.state.currentStep
    },
    titlePosition () {
      return this.$store.state.titlePos
    }
},

  props: {

    steps: {
      type: Array,
      required: true
    }
  },

  methods: {


    changeComp(stepIndex){
      this.$store.dispatch('changeComponent',stepIndex);
    }
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="scss">

$line-width: 6px;
$line-color: rgb(224, 102, 102);
$label-height: 2em;
$label-color-active: rgb(224, 102, 102);
$label-color-inactive: #99a4ac;

.checkout-wrapper {
  box-sizing: border-box;
  border: 1px solid #DDD;
  padding: 1rem;
  width: 100%;
}

@media only screen and (max-width: 768px){
  #stepList{
    display: none;
  }
}

@media only screen and (min-width: 768px){
  #compName{
    display: none;
  }
}

.checkout {
  display: flex;
  margin: 2rem 0;
  padding-left: 0;
  padding-bottom: 2em;
  text-align: center;
  list-style: none;

  .step {
    cursor: default;
    flex: 1 1 100%;
    height: 20px;
    position: relative;
    z-index: 0;

    &:before, 
    &:after {
      position: absolute;
      content: '';
      top: 50%;
      transform: translateY(-2px);
      border-bottom: $line-width solid #eee;
      z-index: -1;
    }

    &:before {
      left: 0;
      right: 50%;
    }

    &:after {
      left: 50%;
      right: 0;
    }

    &:first-child:before { left: 50%; }
    &:last-child:after { right: 50%; }
  }

  .step-dot {
    display: inline-block;
    background-color: #eee;
    color: #aaa;
    width: 4 * $line-width;
    height: 4 * $line-width;
    border: 2px solid #fff;
    border-radius: 8px;
    cursor: pointer;
  }

  .step.prev,
  .step.active {

    .step-dot {
      background-color: $line-color;
      color: #fff;
      cursor: pointer;
    }

    &:before {
      border-bottom-color: $line-color;
    }
  }

  .step.prev {

    &:after {
      border-bottom-color: $line-color;
    }
  }

  .step-label-bot {
    position: absolute;
    bottom: -$label-height;
    left: 50%;
    transform: translateX(-50%);
    color: $label-color-inactive;
    font-weight: 600;
    white-space: nowrap;
    visibility: visible;
    cursor: pointer;
  }

  .step-label-top {
    position: absolute;
    top: -$label-height;
    left: 50%;
    transform: translateX(-50%);
    color: $label-color-inactive;
    font-weight: 600;
    white-space: nowrap;
    visibility: visible;
    cursor: pointer;
  }


  .step.active .step-label {
    color: $label-color-active;
    font-weight: bold;
    visibility: visible;
  }

  .step:not(.active) .step-label {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

button + button {
  margin-left: 1rem;
}  

</style>
