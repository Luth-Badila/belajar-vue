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
          isFav: true,
        },
        {
          title: "dragon of metal",
          author: "lee chung young",
          img: "assets/bgIMGGreen.png",
          isFav: false,
        },
        {
          title: "metal slug",
          author: "marko",
          img: "assets/bgIMGYellow.png",
          isFav: true,
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
