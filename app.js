const app = Vue.createApp({
  data() {
    return {
      message: "Hello world !!!",
      modelKeyDown: "Welcome to vuejs",
      modelEnter: "Have fun"
    };
  },

  methods: {
    showAlert() {
      alert(this.message);
    },

    handleKeyDown(e) {
       this.modelKeyDown = e.target.value.toString();
    },

    handleEnter(e){
        this.modelEnter = e.target.value.toString()
    }
  },
});

app.mount("#assignment");
