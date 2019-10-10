<template>
  <div id="app">
    <stepper :steps="stepsArray"/>
    <b-button-group class="mt-3 mb-2">
      <b-button @click="backwards()" v-on:keyup.left="backwards()" variant="primary"><i class="fa fa-chevron-left"> </i> Anterior</b-button>
      <b-button @click="forward()" v-on:keyup.right="forward()" variant="primary">Siguiente <i class="fa fa-chevron-right"></i></b-button>
    </b-button-group>
    <b-row>
      <b-col>
        <router-link to="/orders" tag="button" class="btn btn-primary mb-2">Ordenes</router-link>
      </b-col>
    </b-row>
    <b-button id="confBtn" @click="titlePosition()" value="false" class="mb-2" ><i class="fa fa-cog"></i></b-button>
    <b-tooltip target="confBtn" placement="left" triggers="hover">Posición de los titulos</b-tooltip>
    <component v-bind:is="currentComp"></component>
  </div>

</template>

<script>
import Stepper    from '@/components/Stepper'
import StepOne    from '@/components/StepOne'
import StepTwo    from '@/components/StepTwo'
import StepThree  from '@/components/StepThree'
import StepFour   from '@/components/StepFour'
import StepFive   from '@/components/StepFive'
import Detail     from '@/components/Detail'
import List       from '@/components/List'

export default {
  name: 'app',

  computed: {
    currentComp () {
      return this.$store.state.currentComponent
    },
    stepsArray () {
      return this.$store.state.steps
    }
  },
  components: {
    Stepper,
    'Components': StepOne,
    'CSS-Styles': StepTwo,
    'API-Request': StepThree,
    'New-Feature': StepFour,
    'Tests': StepFive
  },

  methods: {
    forward(){
      this.$store.commit('forward'); 
    },
    backwards(){
      this.$store.commit('backwards');
    },
    titlePosition(){
      this.$store.dispatch('titlePosition');
    }
  },

  data () {
    return {
      component: this.$store.state.currentComponent
    };
  }

}
</script>

<style lang="scss">
body {
  margin: 0;
}

@media only screen and (max-width: 768px){
  #confBtn{
    display: none;
  }
}

.step {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
}
.links {
  margin-bottom: 2rem;
  margin-top: 1rem;
}
hr {
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 2rem;
}

p {
  width: 100%;
  text-align: left;
  margin: .5rem 0;
}
img {
  width: 100%;
  border: 1px solid black;
  margin-top: 1rem;
}
.code {
  text-align: left;
  font-family: monospace;
  background-color: rgb(225, 225, 225);
  padding: 1rem;
  border-radius: 4px;
  margin: 1rem auto;
  width: fit-content;
}
.doc-box {
  border: 1px solid #DDD;
  padding: 1rem;
  background-color: #EFEFEF;
  margin: 2rem 0;
}
.exercise {
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #DDD;

  ul, ol {
    margin: .5em 0;
    text-align: left;
  }
}

.exercise-solution {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.info {
  margin-top: 1rem;
  border: 1px solid #DDD;
  padding: 0.5rem 1rem;
  background-color: #EFEFEF;
}

</style>
