<template>
  <section>
    <h3><span>My Boards</span> ▸ {{ name }}</h3>
    <input
      type="text"
      placeholder="Add a list..."
      v-model="listName"
      @keyup.enter="add()"
    />
    <template v-if="fetchingData">
      <span>Loading...</span>
    </template>
    <div class="container">
      <column
        v-for="(list, index) in boardLists"
        :key="index"
        :listId="list.id"
        :name="list.name">
      </column>
    </div>
  </section>
</template>

<script>

import Column from './components/Column'

  export default  {
    name: 'board',
    components: { Column },
    props: ['name', 'id'],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  h3 {
    color: #37474f;
    text-align: left;
    margin: 1.5rem;
  }

  span {
      color: #546e7a;
    }

  section {
    text-align: left;
  }

  .container {
    box-sizing: border-box;
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  input {
    background-color: #607d8b;
    border: 0;
    border-radius: 3px;
    box-shadow: 0 0 0 0.5px rgba(49,49,93,.03),
      0 2px 5px 0 rgba(49,49,93,.1),
      0 1px 2px 0 rgba(0,0,0,.08);
    color: #607d8b;
    font-size: 1.2rem;
    margin: 0 1rem;
    outline: 0;
    padding: 1rem;
    transition: all 600ms ease;
/*
    &:active,
    &:focus {
      background-color: #fafafa;
    }

    &::placeholder {
      color: #fafafa;
    }
*/  }
</style>
