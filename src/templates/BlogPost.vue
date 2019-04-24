<template>
  <Layout>
    <button
      class="ml-64 mt-1 bg-gray-300 hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
    >
      <g-link to="/blogas">
        <font-awesome icon="angle-double-left"/>
        <span>&nbsp;Visi postai</span>
      </g-link>
    </button>
    <div
      class="markdown-body text-justify container max-w-5xl m-auto p-4 sm:p-2"
      v-html="$page.blogPost.content"
    />
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

