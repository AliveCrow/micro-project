<!--
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2022-01-17 11:01:05
 * @LastEditTime: 2022-01-19 11:12:16
-->
<template>
  <NScrollbar>
    <NMessageProvider>
      <NConfigProvider
        class="wrapper"
        :theme="app.nightMode === 'darkTheme' ? darkTheme : null"
        :theme-overrides="app.theme === 'netease' ? themeOverrides : {}"
      >
        <NLayout has-sider class="layout">
          <Sider></Sider>
          <NLayout :native-scrollbar="true" class="layout-content"
          >
            <Player></Player>
            <NLayoutContent
              :native-scrollbar="true"
              style="width:1200px; margin: 0 auto; min-height:100vh"
            >
              <suspense>
                <router-view />
              </suspense>
            </NLayoutContent>
          </NLayout>
        </NLayout>
        <NGlobalStyle></NGlobalStyle>
      </NConfigProvider>
    </NMessageProvider>
  </NScrollbar>
</template>
<script setup>
import { useApp } from "@/store/modules/app";
import {
  NConfigProvider,
  NGlobalStyle,
  NLayout,
  NLayoutContent,
  darkTheme,
  NMessageProvider,
  NScrollbar
} from "naive-ui";
import Sider from "@/layout/Sider/index.vue";

const app = useApp();
const themeOverrides = {
  common: {
    baseColor: "#FF0000",
    primaryColor: "#FF0000",
    primaryColorHover: "#FF0000",
    primaryColorPressed: "#FF0000",
    primaryColorSuppl: "#FF0000"
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<style lang="scss" scoped>
.wrapper {
  width: 100vw;
}

.layout {
  height: 100%;
}
</style>
