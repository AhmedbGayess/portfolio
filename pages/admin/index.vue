<template>
  <div>
    <h1 class="mb-5">Welcome</h1>
  </div>
</template>
 
 <script>
export default {
  layout: "admin",
  
};
</script>
 
 <style scoped>
h1 {
  overflow: hidden;
  text-align: center;
}
h1:before,
h1:after {
  background-color: #333;
  content: "";
  display: inline-block;
  height: 1px;
  position: relative;
  vertical-align: middle;
  width: 50%;
}
h1:before {
  right: 0.5em;
  margin-left: -50%;
}
h1:after {
  left: 0.5em;
  margin-right: -50%;
}
</style>
 