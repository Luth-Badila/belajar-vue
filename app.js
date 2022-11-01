const app = Vue.createApp({
  data() {
    return {
      title: "The Final Episode",
      author: "Nikola Zigic",
      age: 39,
    };
  },
  methods: {
    changeTitle(title) {
      // this.title = "World of Valhalla";
      this.title = title;
    },
  },
});

app.mount("#app");
