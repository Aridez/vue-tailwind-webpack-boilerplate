<template>
  <div class="flex flex-row w-96 flex-shrink-0 bg-gray-100 p-4 dark:bg-gray-800">
    <div
      class="flex flex-col items-center py-4 flex-shrink-0 w-20 bg-indigo-800 rounded-3xl dark:bg-gray-700"
    >
      <a
        href="#"
        class="flex items-center justify-center h-12 w-12 bg-indigo-100 text-indigo-800 rounded-full dark:text-gray-700"
      >
        <font-awesome-icon :icon="['far', 'comments']" size="lg" />
      </a>
      <ul class="flex flex-col space-y-2 mt-12">
        <li>
          <a href="#" class="flex items-center">
            <span
              class="flex items-center justify-center text-indigo-100 hover:bg-indigo-700 h-12 w-12 rounded-2xl dark:hover:bg-gray-600"
            >
              <font-awesome-icon :icon="['fas', 'home']" size="lg" />
            </span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center">
            <span
              class="flex items-center justify-center text-indigo-100 hover:bg-indigo-700 h-12 w-12 rounded-2xl dark:hover:bg-gray-600"
            >
              <font-awesome-icon :icon="['fas', 'comment-dots']" size="lg" />
            </span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center">
            <span
              class="flex items-center justify-center text-indigo-100 hover:bg-indigo-700 h-12 w-12 rounded-2xl dark:hover:bg-gray-600"
            >
              <font-awesome-icon :icon="['fas', 'calendar-minus']" size="lg" />
            </span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center">
            <span
              class="flex items-center justify-center text-indigo-100 hover:bg-indigo-700 h-12 w-12 rounded-2xl dark:hover:bg-gray-600"
            >
              <font-awesome-icon :icon="['fas', 'cog']" size="lg" />
            </span>
          </a>
        </li>
      </ul>
      <button
        class="mt-auto flex items-center justify-center hover:text-white text-indigo-500 h-10 w-10 focus:outline-none dark:text-gray-500 dark:hover:text-white"
        @click="toggleDarkMode()"
      >
        <font-awesome-icon :icon="['far', 'moon']" size="lg" />
      </button>
    </div>
    <div class="flex flex-col w-full h-full pl-4 pr-4 py-4 -mr-4">
      <div class="flex flex-row items-center">
        <div class="flex flex-row items-center">
          <div class="text-xl font-semibold dark:text-white">Messages</div>
          <div
            class="flex items-center justify-center ml-2 text-xs h-5 w-5 text-white bg-red-500 rounded-full font-medium dark:bg-blue-600 dark:text-white"
          >
            5
          </div>
        </div>
        <div class="ml-auto">
          <button
            class="flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-400 h-7 w-7 rounded-full dark:bg-gray-600 dark:hover:bg-gray-700 dark:text-white rounded-full"
            
          >
            <font-awesome-icon :icon="['fas', 'search']" />
          </button>
        </div>
      </div>
      <div class="mt-5">
        <ul class="flex flex-row items-center justify-between">
          <li>
            <a
              href="#"
              class="flex items-center pb-3 text-xs font-semibold relative text-indigo-800 dark:text-blue-300"
            >
              <span>All Conversations</span>
              <span
                class="absolute left-0 bottom-0 h-1 w-6 bg-indigo-800 rounded-full dark:bg-blue-300"
              ></span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center pb-3 text-xs text-gray-700 font-semibold dark:text-white"
            >
              <span>Archived</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center pb-3 text-xs text-gray-700 font-semibold dark:text-white"
            >
              <span>Starred</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="mt-5">
        <div class="text-xs text-gray-400 font-semibold uppercase">Team</div>
      </div>
      <div class="mt-2">
        <div class="flex flex-col -mx-4">
          <div class="relative flex flex-row items-center p-4">
            <div class="absolute text-xs text-gray-400 right-0 top-0 mr-4 mt-3">
              5 min
            </div>
            <div
              class="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0"
            >
              T
            </div>
            <div class="flex flex-col flex-grow ml-3">
              <div class="text-sm font-medium dark:text-white">Cuberto</div>
              <div class="text-xs truncate w-40 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Debitis, doloribus?
              </div>
            </div>
            <div class="flex-shrink-0 ml-2 self-end mb-1">
              <span
                class="flex items-center justify-center h-5 w-5 bg-red-500 text-white text-xs rounded-full dark:bg-blue-600"
                >5</span
              >
            </div>
          </div>
          <div
            class="flex flex-row items-center p-4 bg-gradient-to-r from-red-100 to-transparent border-l-2 border-red-500 dark:from-blue-700 dark:border-blue-200"
          >
            <div
              class="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0"
            >
              T
            </div>
            <div class="flex flex-col flex-grow ml-3">
              <div class="flex items-center">
                <div class="text-sm font-medium dark:text-white">UI Art Design</div>
                <div class="h-2 w-2 rounded-full bg-green-500 ml-2"></div>
              </div>
              <div class="text-xs truncate w-40 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Debitis, doloribus?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  faHome,
  faCalendarMinus,
  faCog,
  faCommentDots,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { faComments, faMoon } from "@fortawesome/free-regular-svg-icons";

export default {
  name: "HelloWorld",
  props: {},
  data() {
    return {};
  },
  methods: {
    toggleDarkMode() {
      this.$emit("toggle-dark-mode");
    },
  },
  beforeCreate() {
    this.$library.add(
      faComments,
      faHome,
      faCommentDots,
      faCalendarMinus,
      faCog,
      faMoon,
      faSearch
    );
  },
};
</script>