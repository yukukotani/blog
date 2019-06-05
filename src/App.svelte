<script>
  import { onMount } from 'svelte';
  import { fetchEntries } from "./api";

  const posts = [];

  onMount(async () => {
    const res = await fetchEntries();
    console.log(res);
	});
</script>

<style scoped>
  h1 {
    color: purple;
  }
</style>

<h1>こたにゆうくのブログ</h1>