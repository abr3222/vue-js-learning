<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <hr>
      <button @click="nameChange">change my name </button>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
      data: function (){
        return {
          change: 'ABR'
        };
      },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
      methods:{
        nameChange(){
          this.name = "Max"
        }
      }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
