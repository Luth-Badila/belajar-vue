const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: "The Final Episode",
      author: "Nikola Zigic",
      age: 39,
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount("#app");
