/*
 * @Author: dingyuwen ding_yuwen@163.com
 * @Date: 2023-01-11 08:56:08
 * @LastEditTime: 2023-01-11 09:43:48
 * @LastEditors: dingyuwen
 * @Description:
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
