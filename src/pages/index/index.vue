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
  </view>
  <button
    type="primary"
    size="mini"
  >
    按钮
  </button>
  <view c-pink-5>
    test
  </view>
  <view class="[&>view]:fw-900 [&>view]:c-purple-6">
    <view>1</view>
    <view>2</view>
    <view>3</view>
    <view>4</view>
    <view>5</view>
  </view>
</template>

<script lang="ts" setup>
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
