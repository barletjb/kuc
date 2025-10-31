<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100 p-4">
    <div class="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-lg rounded-2xl border border-indigo-200 p-6">
      <h2 class="text-2xl font-semibold text-indigo-700 text-center mb-6">
        Nouvel Utilisateur
      </h2>
  <Form :validation-schema="userSchema" @submit="onSubmit" class="space-y-5">
    <div>
      <label for="username" class="block text-sm font-medium text-indigo-500 mb-1">
        Nom utilisateur
      </label>
      <Field
        name="username"
        id="username"
        type="text"
        placeholder="Entrez votre nom"
        class="w-full p-2.5 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
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
        placeholder="Entre votre email"
        class="w-full p-2.5 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
        />
      <ErrorMessage name="email" class="text-red-500 text-sm mt-1"/>
    </div>
    <div>
      <label for="password" class="block text-sm font-medium text-indigo-500 mb-1">
        Mot de passe
      </label>
      <Field
          name="password"
          id="password"
          type="text"
          placeholder="Mot de passe"
          class="w-full p-2.5 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
      />
      <ErrorMessage name="password" class="text-red-500 text-sm mt-1"/>
    </div>
    <div>
      <label for="confirmPassword" class="block text-sm font-medium text-indigo-500 mb-1">
        Confirmer Mot de passe
      </label>
      <Field
          name="confirmPassword"
          id="confirmPassword"
          type="text"
          aria-placeholder="Confirmer mot de passe"
          class="w-full p-2.5 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
      />
      <ErrorMessage name="confirmPassword" class="text-red-500 text-sm mt-1"/>
    </div>
    <button
      type="submit"
      class="w-full py-2.5 bg-violet-700 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200"
    >
      Soumettre
    </button>
  </Form>
    </div>
  </div>

</template>

<script setup lang="ts">

import {Form, Field, ErrorMessage} from "vee-validate";
import {userSchema} from "./rules.ts";
import type {User} from "./types.ts";
import {api} from "../../lib/api.ts";
import type { SubmissionHandler } from "vee-validate";

const onSubmit: SubmissionHandler<User> = async (values) => {
  try {
    await api.post<User>('/api/auth/register', values)
    console.log('Utilisateur créé')
  } catch (err) {
    console.error('Erreur API :', err)
  }
}
</script>

