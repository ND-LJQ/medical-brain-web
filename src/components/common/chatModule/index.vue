<template>
  <div class="chat-container">
    <div class="chat-messages" v-if="showChatMessages">
      <div v-for="(message, index) in messages" :key="index" :class="messageClass(message)">
        <div class="avatar">
            <!-- <img :src="showAvatarFlag?userAvatarSrc:brainAvatarSrc" alt=""> -->
            <!-- <img src="../../../assets/images/braincoloful.svg" v-if="showAvatarFlag" alt=""> -->
            <el-icon v-if="showAvatarFlag"><User /></el-icon>
            <img src="../../../assets/images/logo1-removebg-preview.svg" v-if="!showAvatarFlag"  alt="">
        </div>
        <div :class="['message-content','message-content'+index]">
          {{ message.content }}
        </div>
      </div>
    </div>
    <div class="chat-input">
      <input
        v-model="userInput"
        type="text"
        placeholder="请输入您的消息"
      />
      <el-button :loading="buttonLoading" size="large"  @click="sendMessage">发送</el-button>
    </div>
  </div>

  <el-backtop :bottom="40" />
</template>

<script setup>
import { ref,onMounted,defineEmits } from 'vue';
import { AnswerAPI } from '../../../network/index'

// const userAvatarSrc = "../../../assets/images/braincoloful.svg"
// const brainAvatarSrc = "../../../assets/images/logo1-removebg-preview.svg"
const showAvatarFlag = ref(true)
const showChatMessages = ref(true)
const emit = defineEmits(['dropDownValueChange'])
const buttonLoading = ref(false)

const messages = ref([]);
    const userInput = ref('');

    const sendMessage = async () => {
      if(userInput.value!=''){
        emit('dropDownValueChange',true)
      if (!userInput.value.trim()) return;

      messages.value.push({ sender: 'user', content: userInput.value });
      const userInputCopy = userInput.value
      userInput.value = '';
      buttonLoading.value = true
      // 这里添加与 GPT API 交互的逻辑，获取 GPT 的回复。
      // 为了简化示例，我们使用一个模拟回复。
      let gptResponse = '这是 GPT 的回复。';
      await AnswerAPI.sendMessage(userInputCopy).then(res=>{
        gptResponse = res.answer
        buttonLoading.value = false
      })
      messages.value.push({ sender: 'gpt', content: gptResponse });
      }
    };


    const messageClass = (message) => {
      if(message.sender === 'user'){
        showAvatarFlag.value = true
        return 'message-user'
      }else{
        showAvatarFlag.value = false
        return 'message-gpt'
      }
      // return {
      //   'message-user': message.sender === 'user',
      //   'message-gpt': message.sender === 'gpt',
      // };
    };

    const textOptions = {
        strings:[],
        typeSpeed:150, //打印速度,number越大速度越慢
        // startDelay:300,
        loop:false
    }


    onMounted(()=>{

      

      
      
    })
</script>

<style lang="scss" scoped>
.chat-container {
  display: flex;
  // flex-direction: column;
  justify-content: center;
  width: 77%;
  height: 100%;
  // max-width: 600px;
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
  display: flex;
  background-color: #d9e4ff;
  align-self: flex-end;
}

.message-gpt {
  display: flex;
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

.avatar{
  width: 5%;
  position: relative;
  /* 设置高度与宽度相等 */
  height: 0;
  padding-bottom: 5%;
  margin-right: 1%;
  img{
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  :deep(.el-icon){
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: 100%;
    background-color: rgb(7, 135, 199);
    border-radius: 3px;
    color: #fff;
  }
}

.message-content{
  text-align: left;
  line-height: 1.5;
  width: 89%;
}

.message-gpt{
  opacity: 0;
  animation: gpt-show 300ms forwards ease-out;
}

@keyframes gpt-show {
  0% {
    transform: translateY(50px);
    opacity: .5;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

// :deep(.el-icon){
//   text-align: left;
//   width: 100%;
//   font-size: large;
// }


</style>