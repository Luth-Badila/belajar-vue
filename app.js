const app = Vue.createApp({
  data() {
    return {
      title: "The Final Episode",
      author: "Nikola Zigic",
      age: 39,
    };
  },
  methods: {
    changeTitle() {
      this.title = "World of Valhalla";
    },
  },
});

app.mount("#app");
