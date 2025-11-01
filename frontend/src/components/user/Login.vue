<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100 p-4">
    <div class="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-lg rounded-2xl border border-indigo-200 p-6">
      <h2 class="text-2xl font-semibold text-indigo-700 text-center mb-6">
        Login
      </h2>

      <Form :validation-schema="loginSchema" @submit="onSubmit" class="space-y-5">
        <div>
          <label for="username" class="block text-sm font-medium text-indigo-500 mb-1">
            Username
          </label>
          <Field
              name="username"
              id="username"
              type="text"
              placeholder="Your username"
              class="w-full p-2.5 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none placeholder-gray-400"
          />
          <ErrorMessage name="username" class="text-red-500 text-sm mt-1"/>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-indigo-500 mb-1">
            Password
          </label>
          <Field
              name="password"
              id="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Your password"
              class="w-full p-2.5 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none placeholder-gray-400"
          />
          <div class="flex items-center mt-2">
            <input
                id="showPassword"
                type="checkbox"
                v-model="showPassword"
                class="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label for="showPassword" class="ml-2 text-sm text-gray-600">
              Show password
            </label>
          </div>
          <ErrorMessage name="password" class="text-red-500 text-sm mt-1"/>
        </div>
        <div>
          <button
              type="submit"
              class="w-full py-2.5 bg-violet-700 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200"
          >
            Login
          </button>
        </div>

        <div class="text-center mt-4">
          <p class="text-sm text-gray-500 mb-2">or</p>
          <button
              type="button"
              @click="loginWithGitHub"
              class="w-full py-2.5 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-lg shadow-md transition-all duration-200 flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-5 h-5">
              <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49..."/>
            </svg>
            Login with GitHub
          </button>
        </div>

      </Form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate'
import { loginSchema } from "./rules.ts";
import type { LoginUser } from './types.ts'
import { api } from '../../lib/api.ts'
import { router } from '../../lib/router.ts'
import { ref } from 'vue'

const showPassword = ref(false)

const onSubmit = async (values: unknown) => {
  const  data = values as LoginUser
  try {
    const response = await api.post('/api/auth/login', data)
    console.log('User logged in:', response.data)
    localStorage.setItem('token', response.data.token)
    await router.push('/hello')
  } catch (error) {
    console.error('Login failed:', error)
  }
}

const loginWithGitHub = () => {
  window.location.href = 'http://localhost:8080/oauth2/authorization/github'
}
</script>