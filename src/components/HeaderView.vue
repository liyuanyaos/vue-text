<!-- eslint-disable vue/no-multiple-template-root -->
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable vue/no-duplicate-attributes -->
<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div
    class="dark:from-[#5f385d] dark:to-[#40475e] bg-gradient-to-b from-[#E6E6FB] to-[#f1f1f1] opacity-0.2 w-[100vw] p-[1vw] flex justify-between align-middle items-center"
  >
    <div
      class="w-[100vw] h-[20vw] p-[3vw] pl-[1vw] flex justify-between items-center"
    >
      <svg
        @click="showPopup"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        width="10vw"
        height="10vw"
        viewBox="0 0 24 24"
        class="dark:text-[#e8eaf2] text-[#3A455B] iconify iconify--majesticons"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 8h12M6 12h12M6 16h12"
        ></path>
      </svg>
      <div class="relative">
        <label for="">
          <input
            type="text"
            placeholder="Love Is Gone (Acoustic)"
            class="dark:from-[#34304b] dark:to-[#403246] dark:border-0 text-[4.47vw] pl-[8vw] bg-gradient-to-r from-[#d9ddfd] text-[#8189A1] to-[#f3d9ef] opacity-0.2 w-[75vw] h-[10vw] border-2 border-[#CCCEF7] rounded-[25px] from-purple-500 to-pink-500"
          />
        </label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          class="absolute left-[3.68vw] top-[3vw] w-[4.47vw] h-[4.47vw] text-[#8189A1] iconify iconify--tabler"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          class="absolute right-[3.68vw] top-[3vw] w-[4.47vw] h-[4.47vw] text-[#8189A1] iconify iconify--tabler"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 7V6a2 2 0 0 1 2-2h2M4 17v1a2 2 0 0 0 2 2h2m8-16h2a2 2 0 0 1 2 2v1m-4 13h2a2 2 0 0 0 2-2v-1M5 12h14"
          ></path>
        </svg>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        width="8vw"
        height="8vw"
        viewBox="0 0 24 24"
        class="dark:text-[#e8eaf2] text-[#3A455B] iconify iconify--material-symbols"
      >
        <path
          fill="currentColor"
          d="m5 10l-.95-2.05L2 7l2.05-.95L5 4l.95 2.05L8 7l-2.05.95L5 10Zm13-3l-.625-1.375L16 5l1.375-.625L18 3l.625 1.375L20 5l-1.375.625L18 7Zm2 4l-.625-1.375L18 9l1.375-.625L20 7l.625 1.375L22 9l-1.375.625L20 11Zm-8 4q-1.25 0-2.125-.875T9 12V6q0-1.25.875-2.125T12 3q1.25 0 2.125.875T15 6v6q0 1.25-.875 2.125T12 15Zm0-6Zm-1 13v-3.075q-2.6-.35-4.3-2.325T5 12h2q0 2.075 1.463 3.538T12 17q2.075 0 3.538-1.463T17 12h2q0 2.625-1.7 4.6T13 18.925V22h-2Zm1-9q.425 0 .713-.288T13 12V6q0-.425-.288-.713T12 5q-.425 0-.713.288T11 6v6q0 .425.288.713T12 13Z"
        ></path>
      </svg>
    </div>
    <van-popup
      v-model="show"
      position="left"
      :style="{ width: '83%', height: '100%' }"
    >
      <div
        data-v-7bfda910=""
        class="dark:bg-[#272727] bg-[#fff] fixed z-[11]"
        style="height: 100vh; left: 0px; top: 0px"
      >
        <div data-v-7bfda910="">
          <div
            class="dark:bg-[#151515] flex justify-between items-center h-[16vw] px-[5vw] w-[84vw] bg-[#f1f1f1]"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <div
                  class="w-[7vw] h-[7vw] rounded-[50%] mr-[2vw] bg-[#f4f4f1] flex items-center justify-center overflow-hidden"
                >
                  <svg
                    v-if="!img"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    class="text-[#f9dada] w-[7vw] h-[7vw] iconify iconify--gridicons"
                  >
                    <path
                      fill="currentColor"
                      d="M12 4a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 16s8 0 8-2c0-2.4-3.9-5-8-5s-8 2.6-8 5c0 2 8 2 8 2"
                    ></path>
                  </svg>
                  <img v-else :src="img" class="w-[5vw] h-[5vw]" />
                </div>
                <span
                  @click="gologin"
                  class="dark:text-[#f0f0f0] text-[#383838] text-[3.5vw]"
                  >{{ mydata || "立刻登录" }}</span
                >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  class="dark:text-[#f0f0f0] text-[#383838] text-[4vw] iconify iconify--mingcute"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path
                      d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              viewBox="0 0 15 15"
              class="dark:text-[#f0f0f0] text-[#383838] text-[5vw] iconify iconify--teenyicons"
            >
              <path
                fill="none"
                stroke="currentColor"
                d="M.5 5V2.5a2 2 0 0 1 2-2H5m5 0h2.5a2 2 0 0 1 2 2V5m-14 5v2.5a2 2 0 0 0 2 2H5m9.5-4.5v2.5a2 2 0 0 1-2 2H10m-8-7h11"
              ></path>
            </svg>
          </div>
        </div>
        <div data-v-7bfda910="">
          <div
            class="dark:bg-[#151515] bg-[#f1f1f1] h-[100%] scroll-wrapper overflow-hidden"
          >
            <div class="scroll-content h-[410vw]">
              <div
                class="mx-auto w-[76vw] h-[27.66vw] bg-gradient-to-r from-[#3b3b3b] to-[#5f5050] px-[3.96vw] text-[#9e8f8f] rounded-[20px]"
              >
                <div class="h-[10vw] flex justify-between items-center">
                  <h1 class="text-[3.6vw] text-[#ffeeeb]">开通黑胶VIP</h1>
                  <div
                    class="w-[15.78vw] h-[6.56vw] leading-[6vw] text-center rounded-[100px] border-[1px] border-[#9e8f8f] text-[2.5vw] mt-[3vw]"
                  >
                    会员中心
                  </div>
                </div>
                <div class="h-[7vw] border-b-[1px] border-[#494443]">
                  <p class="text-[2.73vw]">点击恢复超21项专属特权</p>
                </div>
                <div
                  class="h-[11vw] leading-[11vw] flex justify-between items-center mr-[4.45vw]"
                >
                  <div class="text-[2.5vw] h-[11vw]">
                    受邀专享，黑胶VIP低至0.27元/天!
                  </div>
                  <div class="scale-50 w-[8vw]">
                    <div
                      class="w-[22vw] h-[22vw] rounded-[10px] bg-[#e54701] text-[#fff] pl-[3vw] text-[8vw] scale-50"
                    >
                      受邀专享
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="dark:bg-[#2c2c2c] rounded-[15px] bg-[#fff] w-[76vw] mx-auto mt-[4vw]"
              >
                <!---->
                <div class="px-[4vw]">
                  <div
                    class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                  >
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar"
                      >
                        <g fill="none" stroke="currentColor" stroke-width="1.5">
                          <path
                            d="M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12Z"
                          ></path>
                          <path
                            stroke-linecap="round"
                            d="m6 8l2.159 1.8c1.837 1.53 2.755 2.295 3.841 2.295c1.086 0 2.005-.765 3.841-2.296L18 8"
                          ></path>
                        </g>
                      </svg>
                      <span
                        class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                        >我的消息</span
                      >
                    </div>
                    <div class="flex items-center">
                      <!---->
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                        style="color: rgb(181, 181, 181)"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path
                            d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657"
                          ></path>
                        </g>
                      </svg>
                      <!---->
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                  >
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 32 32"
                        class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--cib"
                      >
                        <path
                          fill="currentColor"
                          d="M16 1.151c-8.88 0-16 7.182-16 16.156c0 1.328.052 1.833.328 3.104l4.88 3.615l.76 6.021h8.135l.438.302c.5.349.938.5 1.443.5c.469 0 .974-.135 1.365-.417l.521-.385h8.125l.75-6.021l4.927-3.615c.276-1.271.328-1.776.328-3.104c0-8.969-7.12-16.156-16-16.156zm1.328 3.01c1.198 0 2.37.297 3.349.865l-3.286 16.729l4.563-16.078c1.411.479 2.479 1.25 3.344 2.417l.031.047l-6.536 14.151L26.22 9.344l.047.036c1.01.943 1.661 2.089 1.99 3.531l-8.26 10.224l8.583-8.667l.01.026c.339.75.557 1.813.557 2.661c0 .677-.031.948-.219 1.667l-4.74 3.469l-.62 4.948h-5.969l-.688.526c-.266.208-.646.354-.911.354s-.646-.146-.911-.354l-.688-.526H8.427l-.589-4.813l-4.839-3.557a6.634 6.634 0 0 1-.214-1.677c0-.964.214-1.99.568-2.74l.016-.031l8.604 8.734l-8.307-10.328c.333-1.417 1.167-2.786 2.188-3.62l7.391 13.036L6.641 8.134c.74-1.089 1.932-1.943 3.391-2.438L14.6 21.79L11.142 5.087l.073-.042c1.083-.599 2.13-.875 3.276-.875c.26 0 .38.005.703.042l.781 17.401l.615-17.417c.297-.031.411-.036.74-.036z"
                        ></path>
                      </svg>
                      <span
                        class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                        >云贝中心</span
                      >
                    </div>
                    <div class="flex items-center">
                      <span class="text-[color:#a7a7a7] text-[3vw]">签到</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                        style="color: rgb(181, 181, 181)"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path
                            d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657"
                          ></path>
                        </g>
                      </svg>
                      <!---->
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                  >
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--mingcute"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path
                            d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M12 19a1 1 0 0 1 .993.883L13 20v1a1 1 0 0 1-1.993.117L11 21v-1a1 1 0 0 1 1-1m-4.95-2.05a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0m11.314 0l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414M12.617 2a2 2 0 0 1 1.985 1.752l.38 3.04a6 6 0 1 1-5.964 0l.38-3.04A2 2 0 0 1 11.383 2h1.234M12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-8 3a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm17 0a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zm-1.929-6.07a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0m-12.728 0l.707.707A1 1 0 0 1 5.636 7.05l-.707-.707A1 1 0 0 1 6.343 4.93M12.617 4h-1.234l-.25 2h1.734z"
                          ></path>
                        </g>
                      </svg>
                      <span
                        class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                        >创作者中心</span
                      >
                    </div>
                    <div class="flex items-center">
                      <!---->
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                        style="color: rgb(181, 181, 181)"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path
                            d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657"
                          ></path>
                        </g>
                      </svg>
                      <!---->
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="dark:bg-[#2c2c2c] rounded-[15px] bg-[#fff] w-[76vw] mx-auto mt-[4vw]"
              >
                <div
                  class="dark:border-b-[#333] text-[#969696] text-[3vw] px-[4vw] py-[3vw] border-b-[0.35vw] border-b-[#E8e8e8]"
                >
                  音乐服务
                </div>
                <div class="px-[4vw]">
                  <div
                    class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                  >
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 256 256"
                        class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--ph"
                      >
                        <path
                          fill="currentColor"
                          d="m198.91 128l30.3-53a6 6 0 0 0-5.21-9h-60.51l-30.28-53a6 6 0 0 0-10.42 0L92.5 66H32a6 6 0 0 0-5.21 9l30.28 53l-30.28 53a6 6 0 0 0 5.21 9h60.5l30.29 53a6 6 0 0 0 10.42 0l30.28-53H224a6 6 0 0 0 5.21-9Zm14.75-50L192 115.91L170.34 78Zm-28.57 50l-28.56 50H99.46L70.9 128l28.56-50h57.07ZM128 28.09L149.67 66h-43.35ZM42.34 78h43.3L64 115.91Zm0 99.92L64 140.09L85.64 178ZM128 227.91L106.32 190h43.35ZM170.34 178L192 140.09L213.66 178Z"
                        ></path>
                      </svg>
                      <span
                        class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                        >趣测</span
                      >
                    </div>
                    <div class="flex items-center">
                      <span class="text-[color:#a7a7a7] text-[3vw]"
                        >点击查看今日运势</span
                      >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                        style="color: rgb(181, 181, 181)"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path
                            d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657"
                          ></path>
                        </g>
                      </svg>
                      <!---->
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                  >
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 512 512"
                        class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--ion"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-miterlimit="10"
                          stroke-width="32"
                          d="M366.05 146a46.7 46.7 0 0 1-2.42-63.42a3.87 3.87 0 0 0-.22-5.26l-44.13-44.18a3.89 3.89 0 0 0-5.5 0l-70.34 70.34a23.62 23.62 0 0 0-5.71 9.24a23.66 23.66 0 0 1-14.95 15a23.7 23.7 0 0 0-9.25 5.71L33.14 313.78a3.89 3.89 0 0 0 0 5.5l44.13 44.13a3.87 3.87 0 0 0 5.26.22a46.69 46.69 0 0 1 65.84 65.84a3.87 3.87 0 0 0 .22 5.26l44.13 44.13a3.89 3.89 0 0 0 5.5 0l180.4-180.39a23.7 23.7 0 0 0 5.71-9.25a23.66 23.66 0 0 1 14.95-15a23.62 23.62 0 0 0 9.24-5.71l70.34-70.34a3.89 3.89 0 0 0 0-5.5l-44.13-44.13a3.87 3.87 0 0 0-5.26-.22a46.7 46.7 0 0 1-63.42-2.32Z"
                        ></path>
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-miterlimit="10"
                          stroke-width="32"
                          d="m250.5 140.44l-16.51-16.51m60.53 60.53l-11.01-11m55.03 55.03l-11-11.01m60.53 60.53l-16.51-16.51"
                        ></path>
                      </svg>
                      <span
                        class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                        >云村有票</span
                      >
                    </div>
                    <div class="flex items-center">
                      <!---->
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                        style="color: rgb(181, 181, 181)"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path
                            d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657"
                          ></path>
                        </g>
                      </svg>
                      <!---->
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                  >
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--mdi"
                      >
                        <path
                          fill="currentColor"
                          d="M11 18h2v-2h-2zm1-12c-2.2 0-4 1.8-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.8-3 5h2c0-2.2 3-2.5 3-5c0-2.2-1.8-4-4-4m7-1v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"
                        ></path>
                      </svg>
                      <span
                        class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                        >多多西西口袋</span
                      >
                    </div>
                    <div class="flex items-center">
                      <!---->
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                        style="color: rgb(181, 181, 181)"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path
                            d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657"
                          ></path>
                        </g>
                      </svg>
                      <!---->
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                  >
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 1024 1024"
                        class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--ep"
                      >
                        <path
                          fill="currentColor"
                          d="M887.01 264.99c-6-5.99-13.67-8.99-23.01-8.99H704c-1.34-54.68-20.01-100.01-56-136s-81.32-54.66-136-56c-54.68 1.34-100.01 20.01-136 56s-54.66 81.32-56 136H160c-9.35 0-17.02 3-23.01 8.99c-5.99 6-8.99 13.67-8.99 23.01v640c0 9.35 2.99 17.02 8.99 23.01S150.66 960 160 960h704c9.35 0 17.02-2.99 23.01-8.99S896 937.34 896 928V288c0-9.35-2.99-17.02-8.99-23.01M421.5 165.5c24.32-24.34 54.49-36.84 90.5-37.5c35.99.68 66.16 13.18 90.5 37.5s36.84 54.49 37.5 90.5H384c.68-35.99 13.18-66.16 37.5-90.5M832 896H192V320h128v128h64V320h256v128h64V320h128z"
                        ></path>
                      </svg>
                      <span
                        class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                        >商城</span
                      >
                    </div>
                    <div class="flex items-center">
                      <!---->
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                        style="color: rgb(181, 181, 181)"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path
                            d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657"
                          ></path>
                        </g>
                      </svg>
                      <!---->
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                  >
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 14 14"
                        class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--streamline"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <rect
                            width="13"
                            height="13"
                            x=".5"
                            y=".5"
                            rx="3"
                          ></rect>
                          <path d="M2.5 7.02h2L6 4.51l1.5 5.5l2-2.99h2"></path>
                        </g>
                      </svg>
                      <span
                        class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                        >Beat专区</span
                      >
                    </div>
                    <div class="flex items-center">
                      <span class="text-[color:#a7a7a7] text-[3vw]"
                        >顶尖制作邀你创作</span
                      >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                        style="color: rgb(181, 181, 181)"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path
                            d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657"
                          ></path>
                        </g>
                      </svg>
                      <!---->
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                  >
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--tabler"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        >
                          <path
                            d="M19.364 4.636a2 2 0 0 1 0 2.828a7 7 0 0 1-1.414 7.072l-2.122 2.12a4 4 0 0 0-.707 3.536L3.808 8.88a4 4 0 0 0 3.535-.707L9.464 6.05a7 7 0 0 1 7.072-1.414a2 2 0 0 1 2.828 0"
                          ></path>
                          <path
                            d="m7.343 12.414l-.707.707a3 3 0 0 0 4.243 4.243l.707-.707"
                          ></path>
                        </g>
                      </svg>
                      <span
                        class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                        >口袋彩铃</span
                      >
                    </div>
                    <div class="flex items-center">
                      <!---->
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                        style="color: rgb(181, 181, 181)"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path
                            d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657"
                          ></path>
                        </g>
                      </svg>
                      <!---->
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                  >
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 48 48"
                        class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--icon-park-outline"
                      >
                        <g fill="none">
                          <rect
                            width="40"
                            height="28"
                            x="4"
                            y="13"
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="4"
                            rx="14"
                          ></rect>
                          <circle
                            cx="31"
                            cy="22"
                            r="2"
                            fill="currentColor"
                          ></circle>
                          <circle
                            cx="35"
                            cy="27"
                            r="2"
                            fill="currentColor"
                          ></circle>
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="4"
                            d="M12 27h10m-10 0h10m2-20v6m0-6v6m-7 9v10"
                          ></path>
                        </g>
                      </svg>
                      <span
                        class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                        >游戏专区</span
                      >
                    </div>
                    <div class="flex items-center">
                      <span class="text-[color:#a7a7a7] text-[3vw]"
                        >音乐浇灌治愈花园</span
                      >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                        style="color: rgb(181, 181, 181)"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path
                            d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657"
                          ></path>
                        </g>
                      </svg>
                      <!---->
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="dark:bg-[#2c2c2c] rounded-[15px] bg-[#fff] w-[76vw] mx-auto mt-[4vw]"
              >
                <div
                  class="dark:border-b-[#333] text-[#969696] text-[3vw] px-[4vw] py-[3vw] border-b-[0.35vw] border-b-[#E8e8e8]"
                >
                  其他
                </div>
                <div class="px-[4vw]">
                  <div
                    class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                  >
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--ri"
                      >
                        <path
                          fill="currentColor"
                          d="m12 1l9.5 5.5v11L12 23l-9.5-5.5v-11L12 1Zm0 2.311L4.5 7.653v8.694l7.5 4.342l7.5-4.342V7.653L12 3.311ZM12 16a4 4 0 1 1 0-8a4 4 0 0 1 0 8Zm0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"
                        ></path>
                      </svg>
                      <span
                        class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                        >设置</span
                      >
                    </div>
                    <div class="flex items-center">
                      <!---->
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                        style="color: rgb(181, 181, 181)"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path
                            d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657"
                          ></path>
                        </g>
                      </svg>
                      <!---->
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                  >
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--line-md"
                      >
                        <g fill="currentColor" fill-opacity="0">
                          <path
                            d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z"
                          >
                            <animate
                              id="iconifyVue3"
                              fill="freeze"
                              attributeName="fill-opacity"
                              begin="0.7s;iconifyVue3.begin+6s"
                              dur="0.4s"
                              values="0;1"
                            ></animate>
                            <animate
                              fill="freeze"
                              attributeName="fill-opacity"
                              begin="iconifyVue3.begin+2.2s"
                              dur="0.4s"
                              values="1;0"
                            ></animate>
                          </path>
                          <path
                            d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"
                          >
                            <animate
                              fill="freeze"
                              attributeName="fill-opacity"
                              begin="iconifyVue3.begin+3s"
                              dur="0.4s"
                              values="0;1"
                            ></animate>
                            <animate
                              fill="freeze"
                              attributeName="fill-opacity"
                              begin="iconifyVue3.begin+5.2s"
                              dur="0.4s"
                              values="1;0"
                            ></animate>
                          </path>
                          <path
                            d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"
                          >
                            <animate
                              fill="freeze"
                              attributeName="fill-opacity"
                              begin="iconifyVue3.begin+0.4s"
                              dur="0.4s"
                              values="0;1"
                            ></animate>
                            <animate
                              fill="freeze"
                              attributeName="fill-opacity"
                              begin="iconifyVue3.begin+2.8s"
                              dur="0.4s"
                              values="1;0"
                            ></animate>
                          </path>
                          <path
                            d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z"
                          >
                            <animate
                              fill="freeze"
                              attributeName="fill-opacity"
                              begin="iconifyVue3.begin+3.4s"
                              dur="0.4s"
                              values="0;1"
                            ></animate>
                            <animate
                              fill="freeze"
                              attributeName="fill-opacity"
                              begin="iconifyVue3.begin+5.6s"
                              dur="0.4s"
                              values="1;0"
                            ></animate>
                          </path>
                        </g>
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-dasharray="56"
                          stroke-dashoffset="56"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
                        >
                          <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            dur="0.6s"
                            values="56;0"
                          ></animate>
                        </path>
                      </svg>
                      <span
                        class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                        >深色模式</span
                      >
                    </div>
                    <div class="flex items-center">
                      <!---->
                      <!---->
                      <van-switch v-model="myisdark" />
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                  >
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--mdi"
                      >
                        <path
                          fill="currentColor"
                          d="M12 20a7 7 0 0 1-7-7a7 7 0 0 1 7-7a7 7 0 0 1 7 7a7 7 0 0 1-7 7m0-16a9 9 0 0 0-9 9a9 9 0 0 0 9 9a9 9 0 0 0 9-9a9 9 0 0 0-9-9m.5 4H11v6l4.75 2.85l.75-1.23l-4-2.37zM7.88 3.39L6.6 1.86L2 5.71l1.29 1.53zM22 5.72l-4.6-3.86l-1.29 1.53l4.6 3.86z"
                        ></path>
                      </svg>
                      <span
                        class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                        >定时关闭</span
                      >
                    </div>
                    <div class="flex items-center">
                      <!---->
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                        style="color: rgb(181, 181, 181)"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path
                            d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657"
                          ></path>
                        </g>
                      </svg>
                      <!---->
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                  >
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 256 256"
                        class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--ph"
                      >
                        <path
                          fill="currentColor"
                          d="m245.68 64.73l-51.77-28.24A4 4 0 0 0 192 36h-32a4 4 0 0 0-4 4a28 28 0 0 1-56 0a4 4 0 0 0-4-4H64a4 4 0 0 0-1.9.5L10.32 64.73a11.79 11.79 0 0 0-5 15.89l19.28 36.81a12.37 12.37 0 0 0 11 6.57H60v84a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12v-84h24.33a12.37 12.37 0 0 0 11-6.57l19.28-36.81a11.79 11.79 0 0 0-4.93-15.89ZM35.67 116a4.46 4.46 0 0 1-4-2.28L12.44 76.91a3.79 3.79 0 0 1 1.71-5.15L60 46.74V116ZM188 208a4 4 0 0 1-4 4H72a4 4 0 0 1-4-4V44h24.22a36 36 0 0 0 71.56 0H188Zm55.56-131.09l-19.27 36.81a4.46 4.46 0 0 1-4 2.28H196V46.74l45.85 25a3.79 3.79 0 0 1 1.71 5.17Z"
                        ></path>
                      </svg>
                      <span
                        class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                        >个性装扮</span
                      >
                    </div>
                    <div class="flex items-center">
                      <!---->
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                        style="color: rgb(181, 181, 181)"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path
                            d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657"
                          ></path>
                        </g>
                      </svg>
                      <!---->
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                  >
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--iconoir"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        >
                          <path
                            d="M12 12v5m0 4.01l.01-.011M4 13.5V13c0-4.97 3.582-9 8-9s8 4.03 8 9v.5"
                          ></path>
                          <path
                            d="M2 17.439v-1.877a2 2 0 0 1 1.515-1.94L4 13.5l1.254-.314a.6.6 0 0 1 .746.582v5.464a.6.6 0 0 1-.746.582l-1.74-.435A2 2 0 0 1 2 17.439m20 0v-1.877a2 2 0 0 0-1.515-1.94L20 13.5l-1.255-.314a.6.6 0 0 0-.745.582v5.464a.6.6 0 0 0 .745.582l1.74-.435A2 2 0 0 0 22 17.439"
                          ></path>
                        </g>
                      </svg>
                      <span
                        class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                        >边听边存</span
                      >
                    </div>
                    <div class="flex items-center">
                      <span class="text-[color:#a7a7a7] text-[3vw]"
                        >未开启</span
                      >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                        style="color: rgb(181, 181, 181)"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path
                            d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657"
                          ></path>
                        </g>
                      </svg>
                      <!---->
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                  >
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--iconoir"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        >
                          <path
                            d="M12 12v5m0 4.01l.01-.011M4 13.5V13c0-4.97 3.582-9 8-9s8 4.03 8 9v.5"
                          ></path>
                          <path
                            d="M2 17.439v-1.877a2 2 0 0 1 1.515-1.94L4 13.5l1.254-.314a.6.6 0 0 1 .746.582v5.464a.6.6 0 0 1-.746.582l-1.74-.435A2 2 0 0 1 2 17.439m20 0v-1.877a2 2 0 0 0-1.515-1.94L20 13.5l-1.255-.314a.6.6 0 0 0-.745.582v5.464a.6.6 0 0 0 .745.582l1.74-.435A2 2 0 0 0 22 17.439"
                          ></path>
                        </g>
                      </svg>
                      <span
                        class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                        >在线听歌免流量</span
                      >
                    </div>
                    <div class="flex items-center">
                      <!---->
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                        style="color: rgb(181, 181, 181)"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path
                            d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657"
                          ></path>
                        </g>
                      </svg>
                      <!---->
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                  >
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar"
                      >
                        <g fill="none" stroke="currentColor" stroke-width="1.5">
                          <path
                            d="M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12Z"
                          ></path>
                          <path
                            stroke-linecap="round"
                            d="M10 16H6m8 0h-1.5M2 10h20"
                          ></path>
                        </g>
                      </svg>
                      <span
                        class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                        >音乐黑名单</span
                      >
                    </div>
                    <div class="flex items-center">
                      <span class="text-[color:#a7a7a7] text-[3vw]"
                        >未开启</span
                      >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                        style="color: rgb(181, 181, 181)"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path
                            d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657"
                          ></path>
                        </g>
                      </svg>
                      <!---->
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                  >
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 1024 1024"
                        class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--ant-design"
                      >
                        <path
                          fill="currentColor"
                          d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372c0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884zm288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372c0 89-31.3 170.8-83.5 234.8z"
                        ></path>
                      </svg>
                      <span
                        class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                        >青少年模式</span
                      >
                    </div>
                    <div class="flex items-center">
                      <span class="text-[color:#a7a7a7] text-[3vw]"
                        >未开启</span
                      >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                        style="color: rgb(181, 181, 181)"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path
                            d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657"
                          ></path>
                        </g>
                      </svg>
                      <!---->
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                  >
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 1024 1024"
                        class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--ep"
                      >
                        <path
                          fill="currentColor"
                          d="M512 832a320 320 0 1 0 0-640a320 320 0 0 0 0 640m0 64a384 384 0 1 1 0-768a384 384 0 0 1 0 768"
                        ></path>
                        <path
                          fill="currentColor"
                          d="m292.288 824.576l55.424 32l-48 83.136a32 32 0 1 1-55.424-32zm439.424 0l-55.424 32l48 83.136a32 32 0 1 0 55.424-32zM512 512h160a32 32 0 1 1 0 64H480a32 32 0 0 1-32-32V320a32 32 0 0 1 64 0zM90.496 312.256A160 160 0 0 1 312.32 90.496l-46.848 46.848a96 96 0 0 0-128 128L90.56 312.256zm835.264 0A160 160 0 0 0 704 90.496l46.848 46.848a96 96 0 0 1 128 128z"
                        ></path>
                      </svg>
                      <span
                        class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                        >音乐闹钟</span
                      >
                    </div>
                    <div class="flex items-center">
                      <!---->
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                        style="color: rgb(181, 181, 181)"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path
                            d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657"
                          ></path>
                        </g>
                      </svg>
                      <!---->
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="dark:bg-[#2c2c2c] rounded-[15px] bg-[#fff] w-[76vw] mx-auto mt-[4vw]"
              >
                <!---->
                <div class="px-[4vw]">
                  <div
                    class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                  >
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--iconoir"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        >
                          <path
                            d="M4 21.4V2.6a.6.6 0 0 1 .6-.6h11.652a.6.6 0 0 1 .424.176l3.148 3.148A.6.6 0 0 1 20 5.75V21.4a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6M8 10h8m-8 8h8m-8-4h4"
                          ></path>
                          <path d="M16 2v3.4a.6.6 0 0 0 .6.6H20"></path>
                        </g>
                      </svg>
                      <span
                        class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                        >我的订单</span
                      >
                    </div>
                    <div class="flex items-center">
                      <!---->
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                        style="color: rgb(181, 181, 181)"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path
                            d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657"
                          ></path>
                        </g>
                      </svg>
                      <!---->
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                  >
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 512 512"
                        class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--ion"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-miterlimit="10"
                          stroke-width="32"
                          d="M366.05 146a46.7 46.7 0 0 1-2.42-63.42a3.87 3.87 0 0 0-.22-5.26l-44.13-44.18a3.89 3.89 0 0 0-5.5 0l-70.34 70.34a23.62 23.62 0 0 0-5.71 9.24a23.66 23.66 0 0 1-14.95 15a23.7 23.7 0 0 0-9.25 5.71L33.14 313.78a3.89 3.89 0 0 0 0 5.5l44.13 44.13a3.87 3.87 0 0 0 5.26.22a46.69 46.69 0 0 1 65.84 65.84a3.87 3.87 0 0 0 .22 5.26l44.13 44.13a3.89 3.89 0 0 0 5.5 0l180.4-180.39a23.7 23.7 0 0 0 5.71-9.25a23.66 23.66 0 0 1 14.95-15a23.62 23.62 0 0 0 9.24-5.71l70.34-70.34a3.89 3.89 0 0 0 0-5.5l-44.13-44.13a3.87 3.87 0 0 0-5.26-.22a46.7 46.7 0 0 1-63.42-2.32Z"
                        ></path>
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-miterlimit="10"
                          stroke-width="32"
                          d="m250.5 140.44l-16.51-16.51m60.53 60.53l-11.01-11m55.03 55.03l-11-11.01m60.53 60.53l-16.51-16.51"
                        ></path>
                      </svg>
                      <span
                        class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                        >优惠券</span
                      >
                    </div>
                    <div class="flex items-center">
                      <!---->
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                        style="color: rgb(181, 181, 181)"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path
                            d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657"
                          ></path>
                        </g>
                      </svg>
                      <!---->
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                  >
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 1024 1024"
                        class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--ep"
                      >
                        <path
                          fill="currentColor"
                          d="M864 409.6a192 192 0 0 1-37.888 349.44A256.064 256.064 0 0 1 576 960h-96a32 32 0 1 1 0-64h96a192.064 192.064 0 0 0 181.12-128H736a32 32 0 0 1-32-32V416a32 32 0 0 1 32-32h32c10.368 0 20.544.832 30.528 2.432a288 288 0 0 0-573.056 0A193.235 193.235 0 0 1 256 384h32a32 32 0 0 1 32 32v320a32 32 0 0 1-32 32h-32a192 192 0 0 1-96-358.4a352 352 0 0 1 704 0M256 448a128 128 0 1 0 0 256zm640 128a128 128 0 0 0-128-128v256a128 128 0 0 0 128-128"
                        ></path>
                      </svg>
                      <span
                        class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                        >我的客服</span
                      >
                    </div>
                    <div class="flex items-center">
                      <!---->
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                        style="color: rgb(181, 181, 181)"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path
                            d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657"
                          ></path>
                        </g>
                      </svg>
                      <!---->
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                  >
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--ri"
                      >
                        <path
                          fill="currentColor"
                          d="M11 2.05v2.012A8.001 8.001 0 0 0 12 20a8.001 8.001 0 0 0 7.938-7h2.013c-.502 5.053-4.766 9-9.951 9c-5.523 0-10-4.477-10-10c0-5.185 3.947-9.449 9-9.95Zm9 3.364l-8 8L10.586 12l8-8H14V2h8v8h-2V5.414Z"
                        ></path>
                      </svg>
                      <span
                        class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                        >分享网易云音乐</span
                      >
                    </div>
                    <div class="flex items-center">
                      <!---->
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                        style="color: rgb(181, 181, 181)"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path
                            d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657"
                          ></path>
                        </g>
                      </svg>
                      <!---->
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                  >
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 256 256"
                        class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--ph"
                      >
                        <path
                          fill="currentColor"
                          d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83ZM156 41.65L198.34 84H156ZM200 220H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4Z"
                        ></path>
                      </svg>
                      <span
                        class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                        >个人信息收集与使用清单</span
                      >
                    </div>
                    <div class="flex items-center">
                      <!---->
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                        style="color: rgb(181, 181, 181)"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path
                            d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657"
                          ></path>
                        </g>
                      </svg>
                      <!---->
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                  >
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 48 48"
                        class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--icon-park-outline"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          stroke-linejoin="round"
                          stroke-width="4"
                        >
                          <path
                            d="M40 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8ZM24 28a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm16 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8ZM8 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0 32a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"
                          ></path>
                          <path
                            stroke-linecap="round"
                            d="M20 40h8M20 8h8M8 20v8m32-8v8"
                          ></path>
                        </g>
                      </svg>
                      <span
                        class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                        >个人信息第三方共享清单</span
                      >
                    </div>
                    <div class="flex items-center">
                      <!---->
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                        style="color: rgb(181, 181, 181)"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path
                            d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657"
                          ></path>
                        </g>
                      </svg>
                      <!---->
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                  >
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 32 32"
                        class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--icons8"
                      >
                        <path
                          fill="currentColor"
                          d="M16 4c-2.144 0-3.884 1.72-3.97 3.844A9.933 9.933 0 0 0 6 17c0 .17-.008.36 0 .563c-1.185.696-2 1.972-2 3.437c0 2.197 1.803 4 4 4c.575 0 1.13-.122 1.625-.344C11.358 26.112 13.618 27 16 27s4.642-.888 6.375-2.344A3.98 3.98 0 0 0 24 25c2.197 0 4-1.803 4-4c0-1.48-.825-2.777-2.03-3.47c.015-.16.03-.32.03-.53a9.931 9.931 0 0 0-6.03-9.156C19.883 5.72 18.143 4 16 4m0 2c1.116 0 2 .884 2 2s-.884 2-2 2s-2-.884-2-2s.884-2 2-2m-3.53 3.844C13.14 11.118 14.47 12 16 12c1.53 0 2.86-.882 3.53-2.156A7.937 7.937 0 0 1 24 17c-2.197 0-4 1.803-4 4c0 .895.31 1.706.813 2.375A8.08 8.08 0 0 1 16 25a8.077 8.077 0 0 1-4.813-1.625A3.93 3.93 0 0 0 12 21c0-2.197-1.803-4-4-4c0-3.12 1.79-5.856 4.47-7.156zM8 19c1.116 0 2 .884 2 2s-.884 2-2 2s-2-.884-2-2s.884-2 2-2m16 0c1.116 0 2 .884 2 2s-.884 2-2 2s-2-.884-2-2s.884-2 2-2"
                        ></path>
                      </svg>
                      <span
                        class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                        >个人信息与隐私保护</span
                      >
                    </div>
                    <div class="flex items-center">
                      <!---->
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                        style="color: rgb(181, 181, 181)"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path
                            d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657"
                          ></path>
                        </g>
                      </svg>
                      <!---->
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-between h-[12vw] px-[3.6vw]"
                  >
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 48 48"
                        class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--icon-park-outline"
                      >
                        <g fill="none">
                          <path
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="4"
                            d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4A19.938 19.938 0 0 0 9.858 9.858A19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z"
                          ></path>
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M24 37a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"
                            clip-rule="evenodd"
                          ></path>
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="4"
                            d="M24 12v16"
                          ></path>
                        </g>
                      </svg>
                      <span
                        class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                        >关于</span
                      >
                    </div>
                    <div class="flex items-center">
                      <!---->
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
                        style="color: rgb(181, 181, 181)"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path
                            d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657"
                          ></path>
                        </g>
                      </svg>
                      <!---->
                    </div>
                  </div>
                </div>
              </div>
              <div
                @click="close"
                class="dark:bg-[#2c2c2c] h-[12vw] px-[3.6vw] bg-[#fff] w-[76vw] mt-[4vw] rounded-[15px] mx-auto leading-[12vw] text-center text-[3.6vw] text-[#ef4239]"
              >
                关闭云音乐
              </div>
            </div>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import axios from "axios";
import stroe from "@/store/index";
let request = axios.create({
  baseURL: "http://111.229.247.11:3000",
  timeout: 15000, // 毫秒
});

request.interceptors.request.use((config) => {
  // console.log("我的名字拦截后的请求");
  //config是你每一次发送请求的详细配置(请求的地址、请求的路径、请求的参数)
  //在这个位置可以对请求做出修改
  const cookie = stroe.state.auth.data.cookie;
  // console.log(cookie);
  if (cookie) {
    if (config.method === "post") {
      config.data || (config.data = {});
      config.data.cookie = cookie;
    }
    if (config.method === "get") {
      config.params || (config.params = {});
      config.params.cookie = cookie;
    }
  }
  return config;
});
// import { mapState } from "vuex";
export default {
  data() {
    return {
      show: false,
      mydata: null,
      img: null,
      // checked: true,
    };
  },
  computed: {
    // ...mapState(["isDarkModule"]),
    myisdark: {
      // eslint-disable-next-line vue/return-in-computed-property
      get() {
        return this.$store.state.isDarkModule;
      },
      set(val) {
        console.log(val);
        this.$store.commit("updarkmodule", val);
      },
    },
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    close() {
      axios.get("/logout").then((data) => {
        console.log(data);
        this.$store.dispatch("close");
      });
    },
    gologin() {
      // console.log(111);
      this.$router.push("/login").catch((err) => {
        console.log(err);
        return false;
      });
    },
  },
  async created() {
    await request
      .get("http://111.229.247.11:3000/user/account")
      .then((data) => {
        // console.log(data);
        this.mydata = data.data.profile.nickname;
        this.img = data.data.profile.avatarUrl;
      });
  },
};
</script>

<style scoped>
.van-popup {
  overflow: auto;
}
/* div{
    flex-direction: column;
  } */
</style>
