<script>
  import { Link } from "svelte-routing";
  import format from "date-fns/format";
  import { posts } from "../stores/post.js"

  let items = null;

  posts.subscribe(value => {
    items = value;
  });
</script>
<style scoped>
</style>
<div class="posts">
  {#if !items}
    <h1>読み込み中</h1>
  {:else}
    <ul>
    {#each items as post}
      <li>
        <Link to="posts/{post.sys.id}">{post.fields.title} - {format(post.sys.createdAt, "YYYY/MM/DD")}</Link>
      </li>
    {/each}
    </ul>
  {/if}
</div>