<script>
  import { Link } from "svelte-routing";
  import { posts } from "../stores/post.js"

  let items = null;

  posts.subscribe(value => {
    items = value;
  })
</script>
<style scoped>
</style>
<div class="posts">
  {#if !items}
    <h2>読み込み中</h2>
  {:else}
    {#each items as post}
      <Link to="posts/{post.sys.id}">{post.fields.title} - {post.sys.createdAt}</Link>
    {/each}
  {/if}
</div>