<template>
  <section class="max-w-7xl mx-auto p-4 sm:p-6">

    <div class="mb-4 flex items-center justify-between">
      <h1 class="text-2xl font-semibold text-slate-900">Customer</h1>
      <div class="text-end">
        <form
            class="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
          <div class=" relative ">
            <input type="text" id="&quot;form-subscribe-Filter"
                   class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                   placeholder="nom"/>
          </div>
          <button
              type="submit"
              class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">
            Filter
          </button>
        </form>
      </div>
      <RouterLink
          to="/create"
          class="inline-flex items-center rounded-lg bg-violet-700 px-3 py-2 text-sm font-medium text-white hover:bg-violet-800">
        Ajouter un client
      </RouterLink>
    </div>

    <div class="overflow-hidden rounded-xl border border-violet-200/70 bg-white shadow-sm">
      <table class="min-w-full divide-y divide-violet-100">
        <thead class="bg-violet-50/50">
        <tr class="text-left text-sm text-slate-600">
          <th class="px-4 py-3">Nom</th>
          <th class="px-4 py-3">Entreprise</th>
          <th class="px-4 py-3">Email</th>
          <th class="px-4 py-3">Documents</th>
          <th class="px-4 py-3">Status</th>

        </tr>
        </thead>
        <tbody class="divide-y divide-violet-100">
        <tr v-for="c in mockClients" :key="c.id" class="text-sm">
<!--          <td class="px-4 py-3">-->
<!--            <RouterLink-->
<!--                :to="{ name: 'client-missions', params: { id: c.id } }"-->
<!--                class="hover:underline text-violet-700"-->
<!--                :title="`Voir les missions de ${c.name}`"-->
<!--            >-->
<!--              {{ c.name }}-->
<!--            </RouterLink>-->
<!--          </td>-->
          <td class="px-4 py-3 text-slate-700">{{ c.name }}</td>
          <td class="px-4 py-3 text-slate-700">{{ c.company }}</td>
          <td class="px-4 py-3 text-slate-700">{{ c.email }}</td>
          <!-- -->
          <td class="px-4 py-3 text-slate-700">
            <div class="w-30 h-5 bg-gray-300 rounded-full mt-3">
              <div
                  class="h-full flex items-center justify-center text-xs text-white bg-purple-600 rounded-full transition-all duration-300"
                  :style="{ width: (c.document / 4 * 100) + '%' }"
              >
                {{ c.document }} / 4
              </div>
            </div>
          </td>
          <td class="px-4 py-3 text-slate-700">
              <span
                  class="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium"
                  :class="c.status === 'open'
                  ? 'bg-green-50 text-green-700 ring-1 ring-green-200'
                  : 'bg-red-50 text-red-700 ring-1 ring-red-200'">
                {{ c.status }}
              </span>
          </td>
<!--          <td class="px-4 py-3">-->
<!--            <div class="flex items-center gap-2">-->
<!--              <RouterLink-->
<!--                  :to="{ name: 'edit', params: { id: c.id } }"-->
<!--                  class="inline-flex items-center gap-2 rounded-lg border border-violet-300 px-3 py-1.5 text-violet-700 hover:bg-violet-50">-->
<!--                Modifier-->
<!--              </RouterLink>-->
<!--            </div>-->
<!--          </td>-->
          <!--          <td class="px-4 py-3">-->
          <!--            <RouterLink-->
          <!--                to="/missions"-->
          <!--                class="inline-flex items-center rounded-lg bg-violet-700 px-2.5 py-1.5 text-white hover:bg-violet-800">-->
          <!--              CREER MISSIONNN-->
          <!--            </RouterLink>-->

          <!--          </td>-->
        </tr>
        <tr v-if="mockClients.length === 0">
          <td colspan="4" class="px-4 py-10 text-center text-slate-500">
            Aucun client pour le moment.
          </td>
        </tr>
        </tbody>
      </table>
    </div>

    <div class="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
      <div class="flex items-center">
        <button type="button"
                class="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100">
          <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792"
               xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
            </path>
          </svg>
        </button>
        <button type="button"
                class="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100">
          <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792"
               xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
            </path>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {RouterLink} from 'vue-router'

type Status = 'open' | 'closed'

interface Customer {
  id:number
  name: string
  email: string
  company: string
  document: number
  status: Status
}

const mockClients = ref<Customer[]>( [
  {id: 1, name: 'BARLET', company:'DELIA', email: 'barlet.pro@gmail.com', document: 2, status: "open"},
  {id: 2, name: 'BERNARD', company:'SNCF', email: 'bernard.pro@gmail.com', document: 4, status: "closed"},
  {id: 3, name: 'BOULE', company:'THALES', email: 'boule.pro@gmail.com', document: 3, status: "open"},
  {id: 4, name: 'PAF', company:'NAVAL GROUPE', email: 'paf.pro@gmail.com', document: 1, status: "open"},

])


</script>