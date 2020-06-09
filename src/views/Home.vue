<template>
  <div id="Home">
    <van-nav-bar
      title="主页"
    />
    <main>
        <van-grid class="mt-4" :column-num="3" square :clickable="true">
          <van-grid-item icon="chat-o" text="列表" />
          <van-grid-item icon="setting-o" text="设置" />
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="cross" text="退出" v-logout/>
        </van-grid>
    </main>
  </div>
</template>

<script>

import { NavBar, Panel, Grid, GridItem, Button } from 'vant'
import { logout } from '@/directive'

export default {
  name: 'Home',
  components: {
    [NavBar.name]: NavBar,
    [Panel.name]: Panel,
    [Button.name]: Button,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem
  },
  directives: { logout }
}
</script>

<style lang="scss" scoped>
  #Home {
    background-color: #f2f2f2
  }
</style>
