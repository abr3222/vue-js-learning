<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>

        <hr>
      <button @click="nameChange">change my name </button>
       <p>my Name is {{name}}</p>
       <p>my Age is {{age}}</p>

        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :myName='name' @nameWasReset="name = $event"
                :resetFun="resetName" :userAge="age"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userAge="age"
                               @ageWasEdited="age = $event"
                ></app-user-edit>
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
          name: 'ABR',
          age: 27
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
