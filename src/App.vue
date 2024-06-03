<script setup>
  const user = {
    id:'123',
    name:'Tope'
  }
</script>

<template>
  
  
  
 

  <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid text-center">
    <!-- <a class="navbar-brand" href="#">Recipe</a> -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            <RouterLink :to="{name:'home'}" class="mx-2 text-white">Go to Home</RouterLink>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <RouterLink to="/about" class="mx-2 text-white">Go to About</RouterLink>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <RouterLink :to="`/user/${user.name}`" class="mx-2 text-white">Go to User</RouterLink>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-disabled="true">
             <RouterLink to="/recipes" class="mx-2 text-white">Go to Recipes</RouterLink>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <RouterView/>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
