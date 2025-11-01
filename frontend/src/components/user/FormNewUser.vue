<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100 p-4">
    <div class="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-lg rounded-2xl border border-indigo-200 p-6">
      <h2 class="text-2xl font-semibold text-indigo-700 text-center mb-6">
        Create User
      </h2>
      <Form
          :validation-schema="userSchema"
          @submit="onSubmit"
          class="space-y-5">

        <div>
          <label for="sexe" class="block text-sm font-medium text-indigo-500 mb-1">
            Sexe
          </label>
          <div class="relative">
            <Field
                name="sexe"
                id="sexe"
                as="select"
                class="w-full p-2.5 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none placeholder-gray-400"
            >
              <option value="">Select your title</option>
              <option value="Mr">Mr</option>
              <option value="Ms">Ms</option>
              <option value="Mx">Mx</option>
            </Field>
          </div>
          <ErrorMessage name="sexe" class="text-red-500 text-sm mt-1"/>
        </div>
        <div>
          <label for="username" class="block text-sm font-medium text-indigo-500 mb-1">
            Username
          </label>
          <Field
              name="username"
              id="username"
              type="text"
              placeholder="Your name"
              class="w-full p-2.5 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none placeholder-gray-400"
          />
          <ErrorMessage name="username" class="text-red-500 text-sm mt-1"/>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-indigo-500 mb-1">
            Email
          </label>
          <Field
              name="email"
              id="email"
              type="text"
              placeholder="Your email"
              class="w-full p-2.5 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none placeholder-gray-400"
          />
          <ErrorMessage name="email" class="text-red-500 text-sm mt-1"/>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-indigo-500 mb-1">
            Password
          </label>
          <Field
              name="password"
              id="password"
              :type="showPassword ? 'text': 'password' "
              placeholder="Password"
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
          <label for="confirmPassword" class="block text-sm font-medium text-indigo-500 mb-1">
            Confirm password
          </label>
          <Field
              name="confirmPassword"
              id="confirmPassword"
              :type="showConfirmPassword ? 'text' : 'password' "
              placeholder="Confirm your password"
              class="w-full p-2.5 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none placeholder-gray-400"
          />
          <div class="flex items-center mt-2">
            <input
                id="showConfirmPassword"
                type="checkbox"
                v-model="showConfirmPassword"
                class="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label for="showPassword" class="ml-2 text-sm text-gray-600">
              Show confirm password
            </label>
          </div>
          <ErrorMessage name="confirmPassword" class="text-red-500 text-sm mt-1"/>
        </div>
        <div>
          <button
              type="submit"
              class="w-full py-2.5 bg-violet-700 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200"
          >
            Register
          </button>
        </div>
      </Form>
    </div>
  </div>

</template>

<script setup lang="ts">

import {Form, Field, ErrorMessage} from "vee-validate";
import {userSchema} from "./rules.ts";
import type {NewUser} from "./types.ts";
import {api} from "../../lib/api.ts";
import {router} from "../../lib/router.ts";
import {ref} from "vue";

const showPassword = ref(false)
const showConfirmPassword = ref(false)

const onSubmit = async (values: unknown) => {
  const data = values as NewUser
  try {
    const {confirmPassword, ...userData} = data
    await api.post<NewUser>('/api/auth/register', userData)
    console.log('User created')
    await router.push('/hello')
  } catch (err) {
    console.error('API error :', err)
  }
}
</script>

