<template>
  <div class="flex flex-col h-full w-full bg-white dark:bg-gray-900 px-4 py-6">
    <div class="flex flex-row items-center py-4 px-6 rounded-2xl border dark:border-gray-700">
      <div
        class="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-100"
      >
        T
      </div>
      <div class="flex flex-col ml-3">
        <div class="font-semibold text-sm dark:text-white">UI Art Design</div>
        <div class="text-xs text-gray-400">Active</div>
      </div>
      <div class="ml-auto">
        <ul class="flex flex-row items-center space-x-2">
          <li>
            <a
              href="#"
              class="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-400 h-10 w-10 rounded-full dark:bg-gray-600 dark:hover:bg-gray-700 dark:text-white"
            >
              <span>
                <font-awesome-icon :icon="['fas', 'phone']" />
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-400 h-10 w-10 rounded-full dark:bg-gray-600 dark:hover:bg-gray-700 dark:text-white"
            >
              <span>
                <font-awesome-icon :icon="['fas', 'video']" />
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-400 h-10 w-10 rounded-full dark:bg-gray-600 dark:hover:bg-gray-700 dark:text-white"
            >
              <span>
                <font-awesome-icon :icon="['fas', 'ellipsis-v']" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="h-full overflow-hidden py-4">
      <div class="h-full overflow-y-auto">
        <div class="grid grid-cols-12 gap-y-2">
          <div class="col-start-1 col-end-8 p-3 rounded-lg">
            <div class="flex flex-row items-center">
              <div
                class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
              >
                A
              </div>
              <div
                class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl dark:bg-gray-800 dark:text-white"
              >
                <div>Hey How are you today?</div>
              </div>
            </div>
          </div>
          <div class="col-start-1 col-end-8 p-3 rounded-lg">
            <div class="flex flex-row items-center">
              <div
                class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
              >
                A
              </div>
              <div
                class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl dark:bg-gray-800 dark:text-white"
              >
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                  ipsa commodi illum saepe numquam maxime asperiores voluptate
                  sit, minima perspiciatis.
                </div>
              </div>
            </div>
          </div>
          <div class="col-start-6 col-end-13 p-3 rounded-lg">
            <div class="flex items-center justify-start flex-row-reverse">
              <div
                class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
              >
                A
              </div>
              <div
                class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl dark:bg-blue-900 dark:text-white"
              >
                <div>I'm ok what about you?</div>
              </div>
            </div>
          </div>
          <div class="col-start-6 col-end-13 p-3 rounded-lg">
            <div class="flex items-center justify-start flex-row-reverse">
              <div
                class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
              >
                A
              </div>
              <div
                class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl dark:bg-blue-900 dark:text-white"
              >
                <div>
                  Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                </div>
              </div>
            </div>
          </div>
          <div class="col-start-1 col-end-8 p-3 rounded-lg">
            <div class="flex flex-row items-center">
              <div
                class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
              >
                A
              </div>
              <div
                class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl dark:bg-gray-800 dark:text-white"
              >
                <div>Lorem ipsum dolor sit amet !</div>
              </div>
            </div>
          </div>
          <div class="col-start-6 col-end-13 p-3 rounded-lg">
            <div class="flex items-center justify-start flex-row-reverse">
              <div
                class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
              >
                A
              </div>
              <div
                class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl dark:bg-gray-800 dark:text-white dark:bg-blue-900 dark:text-white"
              >
                <div>
                  Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                </div>
                <div
                  class="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-400"
                >
                  Seen
                </div>
              </div>
            </div>
          </div>
          <div class="col-start-1 col-end-8 p-3 rounded-lg">
            <div class="flex flex-row items-center">
              <div
                class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
              >
                A
              </div>
              <div
                class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl dark:bg-gray-800 dark:text-white"
              >
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis, in.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-row items-center">
      <div
        class="flex flex-row items-center w-full border rounded-3xl h-12 px-2 dark:border-gray-700"
      >
        <button
          class="flex items-center justify-center h-10 w-10 text-gray-400 ml-1 hover:text-gray-500 focus:outline-none"
        >
          <font-awesome-icon :icon="['fas', 'microphone']" />
        </button>
        <div class="w-full">
          <input
            type="text"
            class="border border-transparent w-full focus:focus:outline-none text-sm h-10 flex items-center dark:bg-gray-900 dark:text-white focus:outline-none"
            placeholder="Type your message...."
          />
        </div>
        <div class="flex flex-row">
          <button
            class="flex items-center justify-center h-10 w-8 text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <font-awesome-icon :icon="['fas', 'paperclip']" />
          </button>
          <button
            class="flex items-center justify-center h-10 w-8 text-gray-400 ml-1 mr-2 hover:text-gray-500 focus:outline-none"
          >
            <font-awesome-icon :icon="['far', 'image']" />
          </button>
        </div>
      </div>
      <div class="ml-6">
        <button
          class="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-400 h-10 w-10 rounded-full dark:bg-gray-600 dark:hover:bg-gray-700 dark:text-white focus:outline-none"
        >
          <font-awesome-icon :icon="['fas', 'paper-plane']" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  faPaperPlane,
  faPaperclip,
  faMicrophone,
  faEllipsisV,
  faVideo,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-regular-svg-icons";

export default {
  name: "HelloWorld",
  props: {},
  data() {
    return {};
  },
  beforeCreate() {
    this.$library.add(
      faPaperPlane,
      faImage,
      faPaperclip,
      faMicrophone,
      faEllipsisV,
      faVideo,
      faPhone
    );
  },
};
</script>