<template>
  <div class="chat-container">
    <div class="chat-messages">
      <div v-for="(message, index) in messages" :key="index" :class="messageClass(message)">
        <div class="message-content">{{ message.content }}</div>
      </div>
    </div>
    <div class="chat-input">
      <input
        v-model="userInput"
        @keyup.enter="sendMessage"
        type="text"
        placeholder="请输入您的消息"
      />
      <button @click="sendMessage">发送</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const messages = ref([]);
    const userInput = ref('');

    const sendMessage = () => {
      if (!userInput.value.trim()) return;

      messages.value.push({ sender: 'user', content: userInput.value });
      userInput.value = '';

      // 这里添加与 GPT API 交互的逻辑，获取 GPT 的回复。
      // 为了简化示例，我们使用一个模拟回复。
      const gptResponse = '这是 GPT 的回复。';
      messages.value.push({ sender: 'gpt', content: gptResponse });
    };

    const messageClass = (message) => {
      return {
        'message-user': message.sender === 'user',
        'message-gpt': message.sender === 'gpt',
      };
    };
</script>

<style lang="scss" scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  margin-bottom: 72px;
}

.message-user,
.message-gpt {
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
}

.message-user {
  background-color: #d9e4ff;
  align-self: flex-end;
}

.message-gpt {
  background-color: #f0f0f0;
}

.chat-input {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 50%;
  left: 50%;
  transform: translate(-50%,0);
  padding: 1rem;
}

input {
  flex: 1;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
}

button {
  width: 80px;
  margin-left: 1rem;
  background-color: #4a69bd;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}
</style>