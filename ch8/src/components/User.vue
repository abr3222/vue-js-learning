<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>

        <hr>
      <button @click="nameChange">change my name </button>
       <p>my Name is {{name}}</p>

        <div class="row">
            <div class="col-xs-12 col-sm-6">
<!--                <app-user-detail :myName='name' v-on: nameWasReset ></app-user-detail>-->
                <app-user-detail :myName='name' @nameWasReset="name = $event"

                :resetFun="resetName"></app-user-detail>
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
          name: 'ABR'
        };
      },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
      methods:{
        nameChange(){
          this.name = "Max"
        },
        resetName(){
          this.name = "ABC"
        }

      }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
