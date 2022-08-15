<template>
  <section>
    <header>
      <nav>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About </router-link>
          </li>
          <!-- <li>
            <router-link to="/Blog">Blog-Post</router-link>
          </li> -->
        </ul>
      </nav>
    </header>
    <router-view></router-view>
  </section>
</template>

<script>
export default {

}
</script>

<style>

section {
  margin: 2rem auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  max-width: 80rem;
 
}
header {
  width: 100%;
  height: 5rem;
  background-color: #11005c;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
 
}

li {
  margin: 0 2rem;
  color:white;
 
}

a {
  text-decoration: none;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  font-weight: 300px;
}

a:hover,
a:active {
  color: #f1a80a;
  border-color: #f1a80a;
}
li a.router-link-exact-active {
  background-color: #eef4f6;
  color: #050505;
  font-size: bold;

}
</style>

