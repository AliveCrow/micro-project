/*
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2022-01-17 11:01:05
 * @LastEditTime: 2022-01-17 11:20:24
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// 通用字体
import "vfonts/Lato.css";
// 等宽字体
import "vfonts/FiraCode.css";
import { createPinia } from "pinia";
import Player from "@/components/Player/Player";
import directives from '@/directives'

const app = createApp(App);
const pinia = createPinia();
app.component('Player', Player);
app.use(router).use(pinia).use(directives);
app.mount("#app");
