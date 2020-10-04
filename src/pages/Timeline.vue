<template>
  <div>
    <Header />
    <form @submit="createPost">
      <textarea
        placeholder="No que você está pensando, Amanda ?"
        v-model="post"
      ></textarea>
      <button>Publicar</button>
    </form>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.post }}</li>
    </ul>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import axios from "axios";
export default {
  data() {
    return {
      post: "",
      posts: [],
    };
  },

  components: {
    Header,
  },

  mounted() {
    this.loadPosts();
  },
  methods: {
    async loadPosts() {
      const { data } = await axios.get("http://localhost:3000/posts");

      this.posts = data;
    },

    async createPost(e) {
      e.preventDefault();
      const { data } = await axios.post("http://localhost:3000/posts", {
        post: this.post,
      });

      this.loadPosts();
    },
  },
};
</script>
