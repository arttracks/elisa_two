import Vue from "vue";
import Vuex from "vuex";
import * as actions from "./actions";
import mmo from "./modules/mmo";
import editor_ui from "./modules/editor_ui";
import provenance from "./modules/provenance";
import * as types from "./mutation-types.js";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

const store = new Vuex.Store({
  actions,
  modules: {
    mmo,
    editor_ui,
    provenance
  },
  strict: debug
});

// This is a placeholder for the eventual sync code with the backend.
store.watch(
  state => state.provenance.periods,
  (oldVal, newVal) => {
    new Promise(resolve => setTimeout(resolve, 1000)).then(() =>
      store.commit(types.UPDATE_REFRESHED_TIME)
    );
  }
);

export default store;
