/*
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2022-01-17 09:12:24
 * @LastEditTime: 2022-01-17 09:46:34
 */
import { RouterLink } from 'vue-router'
import { reactive, h, ref } from 'vue'
import { NIcon, useMessage } from 'naive-ui'
import {
  PersonCircleOutline as UserIcon,
  LogOutOutline as LogoutIcon,
  SettingsOutline as SettingIcon,
  CloudyNightOutline as DarkModeIcon
} from '@vicons/ionicons5'
import api from '@/api'

/* 菜单渲染 */
export function useRenderMenu() {
  const renderRouter = (to, label) => () => h(
    RouterLink,
    {
      to
    },
    { default: () => label }
  )

  const menuOptions = reactive([
    { label: renderRouter({ name: 'Recommend' }, '推荐'), key: 'Recommend' },
    { label: renderRouter({ name: 'Home' }, '精选'), key: 'Home' },
    { label: renderRouter({ name: 'Rank' }, '排行'), key: 'Rank' },
    { label: renderRouter({ name: 'Singer' }, '歌手'), key: 'Singer' },
    { label: renderRouter({ name: 'Category' }, '分类歌单'), key: 'CategorySongList' }
  ])

  return {
    menuOptions
  }
}

/* 下拉菜单 */
export function useDropdownMenu() {
  const renderIcon = (icon) => {
    return () => {
      return h(NIcon, null, {
        default: () => h(icon)
      })
    }
  }
  const dropdownOptions = [
    { label: '用户资料', key: 'profile', icon: renderIcon(UserIcon) },
    { label: '夜间模式', key: 'nightMode', icon: renderIcon(DarkModeIcon) },
    { label: '退出登录', key: 'logout', icon: renderIcon(LogoutIcon) },
    { label: '登录', key: 'login', icon: renderIcon(LogoutIcon) }
  ]

  return { dropdownOptions }
}

/* 平台选择 */
export function usePlatform() {
  const platform = ref('qqmusic')
  const platformList = [
    { label: 'QQ音乐', value: 'qqmusic' },
    { label: '网易云音乐', value: 'netease' }
  ]
  return { platformList, platform }
}

/* 登录 */
export function useLogin(valid, loginModel) {
  const message = useMessage()
  if (!valid) {
    window.$message.success('Valid')
    api.UserApi.userLoginPost(loginModel).then(res => {
      console.log(res)
    })
  } else {
    message.error('Invalid')
  }
}
