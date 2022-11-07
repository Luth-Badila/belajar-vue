const app = Vue.createApp({
  data() {
    return {
      url: "https://www.youtube.com",
      showBooks: true,
      books: [
        {
          title: "name of the window",
          author: "nikola zigic",
          img: "assets/bgIMG.png",
        },
        {
          title: "dragon of metal",
          author: "lee chung young",
          img: "assets/bgIMGGreen.png",
        },
        {
          title: "metal slug",
          author: "marko",
          img: "assets/bgIMGYellow.png",
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
