<script>
  import { Router, Route, Link } from "svelte-routing";
  import Home from "./pages/Home.svelte"
  import Post from "./pages/Post.svelte"

  function getTitleProps() {
    return {
      class: "no-decoration"
    }
  }
</script>

<style scoped>
  h1 {
    color: purple;
    text-align: center;
  }
  main {
    margin: 100px 200px;
  }
</style>

<Router>
  <Link to="/" getProps="{getTitleProps}"><h1>こたにゆうくのブログ</h1></Link>
  <main>
    <Route path="posts/:id" component={Post}></Route>
    <Route path="/"><Home /></Route>
  </main>
</Router>