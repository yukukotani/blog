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
    <h1>読み込み中</h1>
  {:else}
    <div class="markdown-body">
      <h1>{post.fields.title}</h1>
      {@html
      remark()
        .use(html)
        .processSync(post.fields.body).contents
      }
    </div>
  {/if}
</div>