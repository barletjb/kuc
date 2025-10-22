<template>

  <header
      class="sticky top-0 z-50 w-full border-b border-violet-200/60 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
    <div class="mx-auto flex h-20 max-w-7xl items-center px-4 sm:px-6 lg:px-8">

      <div class="flex items-center gap-3">
        <a href="/hello" class="inline-flex items-center gap-3" aria-label="Accueil">
          <img :src="logoSrc" :alt="logoAlt" class="h-8 w-auto"/>
        </a>
      </div>
      <nav class="ml-auto hidden items-center gap-8 md:flex lg:gap-10">
        <RouterLink
            v-for="item in nav"
            :key="item.id"
            :to="item.href"
            class="text-sm text-slate-700 transition-colors hover:text-violet-700"
        >
          {{ item.label }}
        </RouterLink>
      </nav>
    </div>
  </header>

</template>

<script setup lang="ts">

import {computed} from "vue";
import { RouterLink } from 'vue-router'
import logo from '../../assets/logo.png'


export interface NavItem {
  id: string
  label: string
  href: string
}

const props = withDefaults(defineProps<{
  isAdmin?: boolean
  nav?: NavItem[]
  logoSrc?: string
  logoAlt?: string }>(), {
  isAdmin: true,
})

const logoSrc = props.logoSrc ?? logo
const logoAlt = props.logoAlt ?? 'KUC'

const adminNav: NavItem[] = [
  {id: 'customer', label: 'Customer', href: '/customer'},
  {id: 'logout', label: 'Déconnexion', href: '/logout'}
]

const userNav: NavItem[] = [
  {id: 'documents', label: 'documents', href: '/doc'},
  {id: 'profil', label: 'Profil', href: '/profil'},
  {id: 'logout', label: 'Déconnexion', href: '/logout'}
]

const nav = computed<NavItem[]>(() => props.nav ?? (props.isAdmin ? adminNav : userNav))


</script>