<template v-slot:footer>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png"/>

    <div @click="handleChange">get html2img</div>
    <div>
      <el-button
        @click="dialogVisible = true" 
        type="text">Open Dialog
      </el-button>
    </div>

    <router-link to="/sample01">Sample01</router-link> | 

    <HelloWorld msg="Vue.js Demo"/>
    <el-dialog
      :before-close="handleClose"
      :visible="dialogVisible"
      title="Dialog"
      width="30%">
      <span>dialog message</span>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">cancel</el-button>
        <el-button @click="dialogVisible = false" type="primary">ok</el-button>
      </span>
    </el-dialog>
    
  </div>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld.vue';
  export default {
    name: 'home',
    components: {
      HelloWorld,
    },
    data() {
      return {
        dialogVisible: false,
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('Sure to close？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      },
      handleChange(){
        console.log('handleChange')
      }
    },
  };
</script>
