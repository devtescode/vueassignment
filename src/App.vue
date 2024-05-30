<script setup>
  const user = {
    id:'123',
    name:'Tope'
  }
</script>

<template>
  <RouterLink :to="{name:'home'}" class="mx-2 ">Go to Home</RouterLink>
  <RouterLink to="/about" class="mx-2">Go to About</RouterLink>
  <RouterLink :to="`/user/${user.name}`" class="mx-2">Go to User</RouterLink>
  <RouterLink to="/recipes" class="mx-2">Go to Recipes</RouterLink>
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
