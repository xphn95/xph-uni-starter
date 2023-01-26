<template>
  <view class="content">
    <image
      class="logo"
      src="/static/logo.png"
    />
    <view class="text-area">
      <text class="title">
        {{ title }}
      </text>
    </view>
    <view
      descendant-text-bg-pink-7
      c-green-3
    >
      <view>1</view>
      <text block>
        2
      </text>
      <view>3</view>
    </view>
    <hello-world />
  </view>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
const title = ref('Hello')

</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}

</style>
