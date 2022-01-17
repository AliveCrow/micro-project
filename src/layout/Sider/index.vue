<!--
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2022-01-13 13:38:36
 * @LastEditTime: 2022-01-17 17:57:28
-->
<template>
  <NLayoutSider class="sider" content-style="padding: 24px;" bordered>
    <NSpace vertical>
      <NAvatar round :size="60" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"></NAvatar>
      <div class="sider-item">
        <NDropdown :options="dropdownOptions" @select="handleDropDown">
          <NButton>
            <template #icon>
              <NIcon>
                <SettingIcon />
              </NIcon>
            </template>
          </NButton>
        </NDropdown>
        <NSelect @update:value="handleSelectValue" v-model:value="platform" :options="platformList"></NSelect>
      </div>
      <NMenu :value="menuSelected" @update:value="handleUpdateValue" :options="menuOptions"></NMenu>
    </NSpace>
  </NLayoutSider>
  <teleport to="body">
    <NModal
      class="login-model"
      v-model:show="showModal"
      preset="card"
      title="登录"
      size="huge"
      :bordered="false"
    >
      <NForm ref="formRef" :model="loginModel" :rules="rules" label-placement="left">
        <NFormItem path="username" label="QQ">
          <NInput v-model:value="loginModel.username"></NInput>
        </NFormItem>
        <NFormItem path="username" label="密码">
          <NInput v-model:value="loginModel.password" type="password"></NInput>
        </NFormItem>
        <NFormItem class="login-btn">
          <NButton @click="handleValidateClick" attr-type="button">登录</NButton>
        </NFormItem>
      </NForm>
    </NModal>
  </teleport>
</template>
<script setup>
import { h, ref, reactive, watchEffect } from 'vue'
import {
  NLayoutSider, NSpace,
  NAvatar, NDropdown, NButton, NIcon, NSelect, NMenu, NModal, NForm, NFormItem, NInput,
  useMessage
} from 'naive-ui'
import {
  PersonCircleOutline as UserIcon,
  LogOutOutline as LogoutIcon,
  SettingsOutline as SettingIcon,
  CloudyNightOutline as DarkModeIcon
} from '@vicons/ionicons5'
import { useApp } from '@/store/modules/app'
import { storeToRefs } from 'pinia'
import api from '@/api'
import { RouterLink, useRoute } from 'vue-router'
import { useRenderMenu, useDropdownMenu, usePlatform, useLogin } from './hooks'

const app = useApp()
const showModal = ref(false)
const loginModel = reactive({
  username: '',
  password: ''
})
const formRef = ref(null)
const rules = reactive({})
const message = useMessage()
const $route = useRoute()
const menuSelected = ref($route.name)
const { menuOptions } = useRenderMenu()
const { dropdownOptions } = useDropdownMenu()
const { platform, platformList } = usePlatform()
watchEffect(() => {
  menuSelected.value = $route.name
})

const handleSelectValue = (val) => {
  app.theme = val
}
const handleUpdateValue = (val) => {
  menuSelected.value = val
}
const handleDropDown = (val) => {
  if (val === 'nightMode') { app.nightMode === 'darkTheme' ? app.nightMode = null : app.nightMode = 'darkTheme' }
  console.log(val)
  if (val === 'login') {
    showModal.value = true
  }
}
const handleValidateClick = (e) => {
  formRef.value.validate(valid => {
    useLogin(valid, loginModel)
  })
}
</script>
<style  lang="scss">
.login-model {
  width: 33.333333%;
}
.login-btn {
  .n-form-item-blank {
    justify-content: center;
  }
}
.sider {
  text-align: center;

  .sider-item {
    display: flex;
    gap: 0.25rem;
    flex-direction: row-reverse;
  }
  .n-menu-item {
    &:before {
      left: 0;
      right: 0;
    }
    &:hover {
      left: 0;
      right: 0;
    }
  }
}
</style>
