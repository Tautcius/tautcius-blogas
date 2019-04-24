<template>
  <Layout>
    <h1>Blogas</h1>
    <div>
      <ul v-for="post in $page.posts.edges" :key="post.id">
        <li>
          <g-link :to="post.node.path">{{ post.node.title }}</g-link>
          <div>
            <div>{{ post.node.date }}</div>
            <div>
              {{ post.node.timeToRead }}
              <font-awesome icon="clock"/>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allBlogPost {
    edges {
      node {
        title
        path
        timeToRead
        date
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
