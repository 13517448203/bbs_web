<template>
  <div>
    <div v-if="flag">
      <div>
      </div>
      <ul>
        <li>

        </li>
      </ul>
    </div>
    <div v-else class="no-message">
      <p>暂无消息</p>
    </div>
  </div>

</template>

<script>
  export default {
    name: "MyMessage",
    data() {
      return {
        flag: false

      }
    }
  }
</script>

<style scoped>
  .no-message{
    width: 100%;
    position: relative;
    height: 150px;
  }
  .no-message p{
    position: absolute;
    top:35%;
    left: 45%;
    color: #b0b9c7;
    font-size: 18px;
  }
</style>