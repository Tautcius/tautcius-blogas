<template>
  <Layout>
    <div class="markdown-body" v-html="$page.blogPost.content"/>
  </Layout>
</template>

<page-query>
query BlogPost($path: String!) {
  blogPost: blogPost(path: $path) {
    content
    title
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.blogPost.title
    };
  }
};
</script>

<style scoped>
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style>

