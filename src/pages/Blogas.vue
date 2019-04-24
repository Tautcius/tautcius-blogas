<template>
  <Layout>
    <div class="container mx-auto">
      <h1 class="text-5xl flex justify-center py-2">Blogas</h1>
      <div class="flex justify-center">
        <div class="bg-gray-200 max-w-5xl m-auto p-4 sm:p-2 w-4/5">
          <ul v-for="post in $page.posts.edges" :key="post.id">
            <li class="p-2 hover:bg-gray-400">
              <g-link :to="post.node.path">
                <div class="text-3xl">{{ post.node.title }}</div>
                <div>{{ post.node.excerpt }}</div>
                <div class="flex row justify-between mr-2 ml-2">
                  <div>{{ post.node.date }}</div>
                  <div>
                    {{ post.node.timeToRead }}
                    <font-awesome icon="clock"/>
                  </div>
                </div>
              </g-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allBlogPost {
    edges {
      node {
        title
        excerpt
        path
        timeToRead
        date(format: "YYYY MM DD")
        id
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Blogas"
  }
};
</script>
