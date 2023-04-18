<template>
  <div class="about">
    <h1>This is about page</h1>

    <div>
      <h5> store </h5>
      state.numbers = {{ $store.state.sample.numbers }} <br/>
    </div>

    <div>
      <h5> ...mapState </h5>
      this.nums = {{ storeNumbers }}  - ({{ storeNumbersCount }}) <br/>
    </div>

    <div>
      <h5> ...mapGetters </h5>
      storeStringifyOby = {{ storeStringifyOby }}  - {{ typeof storeStringifyOby }}<br/>
    </div>

  </div>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex'
  import store from '@/store' 

  export default {
    name: 'About',
    data() {
      return {
        dialogVisible: false,
      };
    },
    computed: {
      ...mapState({
        storeNumbers: state => state.sample.numbers, 
        storeNumbersCount : (state) => {
          return state.sample.numbers.length 
        } 
      }),
      ...mapGetters({
        storeSorted: "sample/sortedNumbers",
        storeStringifyOby: "sample/stringifyObj",
      }),
    },
    mounted () {
      console.log('this > ', store)
      // console.log('this.numbersCount > ', this.numbersCount)

      // store sample
      if (this.$store) {
        console.log('this > ', this.$store)
        const store1 = this.$store.state.sample.numbers
        // const store1 = this.$store.state.numbers
        this.$store.dispatch('sample/addNumber', 99) // this.$store.dispatch('某action')
        this.$store.commit('sample/ADD_NUMBER', 103) // this.$store.commit('某mutation')
        const store4 = this.$store.getters['sample/sortedNumbers']
        // const store4 = this.$store.getters.sortedNumbers

        console.log('store1 > ', store1)
        console.log('store4 > ', store4)
      }

      // store sample
      this.startAdd()
    },

    methods: {
      ...mapActions({
        storeAddNumber: "sample/addNumber",
        returnTotal: "sample/returnTotal",
      }),
      
      startAdd () {
        console.log('ttt startAdd')
        this.storeAddNumber(70)
        this.storeAddNumber(78)
        this.storeAddNumber(87)
        this.storeAddNumber(67)
        this.storeAddNumber(88)

        this.returnTotal()
      }
    }
  }
</script>

<style scoped>
  .about {
    color: #7265e6;
  }
</style>
