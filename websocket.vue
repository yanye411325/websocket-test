<template>
  <div>
    <input type="text" v-model="msg" /><button @click="sendMessage">
      发送
    </button>
  </div>
</template>

<script>
export default {
  name: "websocket",
  data() {
    return {
      ws: null,
      msg: "",
    };
  },
  created() {
    this.ws = new WebSocket("ws://localhost:8081");
    this.ws.onopen = () => {
      console.log("open");
    };
    this.ws.onerror = (err) => {
      console.log(err);
    };
    this.ws.onmessage = (msg) => {
      console.log(msg.data);
    };
  },
  mounted() {},
  methods: {
    sendMessage() {
      console.log(this.ws);
      debugger;
      if (this.ws.readyState === 1) {
        this.ws.send(this.msg);
      }
    },
  },
  beforeDestroy() {
    if (this.ws) this.ws.close();
  },
};
</script>

<style lang="scss" scoped></style>
