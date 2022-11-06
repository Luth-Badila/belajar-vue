const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        {
          title: "name of the window",
          author: "nikola zigic",
        },
        {
          title: "dragon of metal",
          author: "lee chung young",
        },
        {
          title: "metal slug",
          author: "marko",
        },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount("#app");
