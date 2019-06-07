<script>
import { get } from "svelte/store"
import remark from "remark";
import html from "remark-html";
import { posts } from "../stores/post.js"
export let id;
let post = null;
posts.subscribe(value => {
    post = findPost(value, id);
    console.log(post);
})

function findPost(items, id) {
    if (items === null) {
        return null
    }
    
    return items.find(item => item.sys.id === id )
}
</script>
<style scoped>
    
</style>
<div class="post">
  {#if !post}
    <h2>読み込み中</h2>
  {:else}
    <h2>{post.fields.title}</h2>
    <div>{@html
      remark()
        .use(html)
        .processSync(post.fields.body).contents
    }</div>
  {/if}
</div>