import Vue from 'vue'
import Vuex from 'vuex'
import request from './services/request'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentComponent: 'Components',
    steps: [
      { name: 'Components', },
      { name: 'CSS Styles', },
      { name: 'API Request', },
      { name: 'New Feature', },
      { name: 'Tests', },
    ],
    currentStep: 0,
    titlePos: false
  },


  //Self note: tratar de mover las condiciones de la mutacion a las acciones
  mutations: {
    forward(state) {
      if(state.currentStep < 4){ 
        state.currentStep++;
        if(state.currentStep === 0) state.currentComponent = 'Components';
        else if (state.currentStep === 1) state.currentComponent = 'CSS-Styles';
        else if (state.currentStep === 2) state.currentComponent = 'API-Request';
        else if (state.currentStep === 3) state.currentComponent = 'New-Feature';
        else if (state.currentStep === 4) state.currentComponent = 'Tests';   
      }
      else
      {
        state.currentStep = 0;
        state.currentComponent = 'Components';
      }
    },
    backwards(state){
      if(state.currentStep > 0 && state.currentStep < 5){ 
        state.currentStep--;
        if(state.currentStep === 0) state.currentComponent = 'Components';
        else if (state.currentStep === 1) state.currentComponent = 'CSS-Styles';
        else if (state.currentStep === 2) state.currentComponent = 'API-Request';
        else if (state.currentStep === 3) state.currentComponent = 'New-Feature';
        else if (state.currentStep === 4) state.currentComponent = 'Tests';   
      }
      else
      {
        state.currentStep = 4;
        state.currentComponent = 'Tests';
      }
    },
    changeComponentMutation(state, payload){
      state.currentComponent = payload;
    },
    titlePosition(state){
      if(state.titlePos == false) state.titlePos = true;
      else if (state.titlePos == true) state.titlePos = false;
    }
  },
  actions: {
    changeComponent: (state, payload) => {
      if(payload === 0) state.currentComponent = 'Components';
      else if (payload === 1) state.currentComponent = 'CSS Styles';
      else if (payload === 2) store.currentComponent = 'API-request';
      else if (payload === 3) store.currentComponent = 'New-feature';
      else if (payload === 4) store.currentComponent = 'Tests';
      commit('changeComponentMutation')
    },
    titlePosition(context){
      context.commit('titlePosition');
    }
  },

  getters: {
    currentComp: state => {
      return state.currentComponent
    },
    titlePos: state => {
      return state.titlePos
    }
  },
})
