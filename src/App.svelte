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
  main {
    font-size: 18px;
  }
  h1 {
    color: purple;
    text-align: center;
  }
  /*
    mobile
  */
  @media screen and (max-width: 600px) { 
    main {
    margin: 100px 20px;
    }
  }
  /*
    pc
  */
  @media screen and (min-width: 600px) { 
    main {
    margin: 100px 400px;
    }
  }
</style>

<Router>
  <Link to="/" getProps="{getTitleProps}"><h1>こたにゆうくのブログ</h1></Link>
  <main>
    <Route path="posts/:id" component={Post}></Route>
    <Route path="/"><Home /></Route>
  </main>
</Router>