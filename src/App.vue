<script setup lang="ts">
import { ref } from 'vue';
import {useMealStore} from './stores/meal'

const response = useMealStore();

let ingredients: { [index: string]: string; } = {};
if(!response.isLoading){
  for(let i = 1; i<= 20; i++){
    if(response.data[`strIngredient${i}`] && response.data[`strMeasure${i}`]){
      ingredients[response.data[`strIngredient${i}`]] = response.data[`strMeasure${i}`];
      console.log(response.data[`strIngredient${i}`], response.data[`strMeasure${i}`]);
    }
  }
}
</script>

<template>
  <div v-if="response.isLoading">
    loading...
  </div>
  <div v-else>
    <img alt="Vue logo" class="logo" :src="response.data.strMealThumb" width="400" />
    <h1>{{response.data.strMeal}}</h1>
<p>{{ response.data.strInstructions }}</p>
<ul>
  <li v-for="(measure, ingredient) in ingredients" key="ingredient">{{ ingredient }} - {{ measure }}</li>
</ul>

  </div>
  
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    /*display: flex;*/
    place-items: center;
    padding: 25px calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    /*place-items: flex-start;*/
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
