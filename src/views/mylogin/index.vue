<!-- eslint-disable vue/no-duplicate-attributes -->
<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div>
    <div class="">
      <div class="pb-[24vw] bg-[#f5f5f5]">
        <div class="w-[100vw] h-[74vw] relative">
          <div
            class="w-[100vw] h-[15vw] px-[4.5vw] flex items-center justify-between fixed top-0 z-[10]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              viewBox="0 0 256 256"
              class="iconify iconify--ph text-[7vw] text-[#fff]"
              @click="$router.go(-1)"
            >
              <path
                fill="currentColor"
                d="M224 128a8 8 0 0 1-8 8H59.31l58.35 58.34a8 8 0 0 1-11.32 11.32l-72-72a8 8 0 0 1 0-11.32l72-72a8 8 0 0 1 11.32 11.32L59.31 120H216a8 8 0 0 1 8 8Z"
              ></path></svg
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              class="iconify iconify--ri -[#e9ebf2] text-[#fff] font-[800] text-[7vw]"
            >
              <path
                fill="currentColor"
                d="M12 3c-.825 0-1.5.675-1.5 1.5S11.175 6 12 6s1.5-.675 1.5-1.5S12.825 3 12 3Zm0 15c-.825 0-1.5.675-1.5 1.5S11.175 21 12 21s1.5-.675 1.5-1.5S12.825 18 12 18Zm0-7.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5s1.5-.675 1.5-1.5s-.675-1.5-1.5-1.5Z"
              ></path>
            </svg>
          </div>
          <img :src="bgimg" alt="" class="w-[100vw] h-[74vw]" />
        </div>
        <div
          class="bg-[#f5f5f5] px-[4vw] pb-[10vw]"
          style="color: black !important"
        >
          <div
            class="mt-[-9vw] rounded-[15px] bg-[#fff] w-[92vw] relative pt-[11vw] text-center pb-[3.8vw]"
          >
            <img
              :src="img"
              alt=""
              class="w-[18vw] h-[18vw] rounded-[50%] absolute top-[-9vw] left-1/2 translate-x-[-50%]"
            />
            <p class="text-[5vw] text-[#253346] font-[800]">
              {{ mydata }}
            </p>
            <div class="wt-[3vw] text-[3vw] text-[#9396A2] mt-[2vw]">
              <span class="px-[2vw]"><span>3</span> 关注</span
              ><span class="px-[2vw]"><span>0</span> 粉丝</span
              ><span class="px-[2vw]"
                >Lv.<span>{{ userdata }}</span></span
              >
            </div>
            <!-- <div class="h-[11vw] flex items-center justify-center">
              <span
                class="bg-[#fff] pl-[1.5vw] pr-[1.9vw] pb-[1vw] pt-[0.8vw] text-[#41495E] text-[2vw] border-[1px] border-[#CCCCCD] rounded-[8px] ml-[1.5vw]"
                >IP:</span
              ><span
                class="bg-[#fff] pl-[1.5vw] pr-[1.9vw] pb-[1vw] pt-[0.8vw] text-[#41495E] text-[2vw] flex items-center border-[1px] border-[#CCCCCD] rounded-[8px] ml-[1.5vw]"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 1024 1024"
                  class="iconify iconify--ant-design text-[3vw] mr-[1vw] text-[#ff7474]"
                >
                  <path
                    fill="currentColor"
                    d="M712.8 548.8c53.6-53.6 83.2-125 83.2-200.8c0-75.9-29.5-147.2-83.2-200.8C659.2 93.6 587.8 64 512 64s-147.2 29.5-200.8 83.2C257.6 200.9 228 272.1 228 348c0 63.8 20.9 124.4 59.4 173.9c7.3 9.4 15.2 18.3 23.7 26.9c8.5 8.5 17.5 16.4 26.8 23.7c39.6 30.8 86.3 50.4 136.1 57V736H360c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h114v140c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V812h114c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H550V629.5c61.5-8.2 118.2-36.1 162.8-80.7zM512 556c-55.6 0-107.7-21.6-147.1-60.9C325.6 455.8 304 403.6 304 348s21.6-107.7 60.9-147.1C404.2 161.5 456.4 140 512 140s107.7 21.6 147.1 60.9C698.4 240.2 720 292.4 720 348s-21.6 107.7-60.9 147.1C619.7 534.4 567.6 556 512 556z"
                  ></path></svg
                >00后 摩羯座</span
              ><span
                class="-[#ECECEC] bg-[#fff] pl-[1.5vw] pr-[1.9vw] pb-[1vw] pt-[0.8vw] text-[#41495E] text-[2vw] border-[1px] border-[#CCCCCD] rounded-[8px] ml-[1.5vw]"
                >村龄 0 年</span
              >
            </div> -->
            <!-- <div class="flex items-center justify-center">
              <span
                class="px-[3vw] py-[1vw] text-[#41495E] text-[2.9vw] font-[800] flex items-center justify-center border-[1px] border-[#CCCCCD] rounded-[200px] ml-[1.5vw]"
                >编辑资料</span
              ><span
                class="w-[7.7vw] h-[7.7vw] text-[#41495E] text-[2.9vw] font-[800] flex items-center justify-center border-[1px] border-[#CCCCCD] rounded-[200px] ml-[1.5vw]"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 1024 1024"
                  class="iconify iconify--ep text-[#41495E] text-[3vw] mt-[0.6vw]"
                >
                  <g transform="rotate(180 512 512)">
                    <path
                      fill="currentColor"
                      d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8l316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z"
                    ></path>
                  </g></svg
              ></span>
            </div> -->
            <div></div>
          </div>
          <div
            class="flex bg-[#fff] mt-[3vw] justify-between flex-wrap p-[4vw]"
          >
            <div class="flex w-[20vw] flex-col justify-between items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <g fill="none" stroke="red" stroke-width="1.5">
                  <path
                    stroke-linecap="round"
                    d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2"
                  />
                  <path
                    stroke-dasharray="4 3"
                    stroke-linecap="round"
                    d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2"
                  />
                  <path
                    d="M15.414 10.941c.781.462.781 1.656 0 2.118l-4.72 2.787C9.934 16.294 9 15.71 9 14.786V9.214c0-.924.934-1.507 1.694-1.059l4.72 2.787Z"
                  />
                </g>
              </svg>
              <p class="text-xs">最近播放</p>
            </div>
            <div class="flex w-[20vw] flex-col justify-between items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 48 48"
              >
                <path
                  fill="none"
                  stroke="red"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m34.299 16.729l-16.258 2.254v-5.752l16.258-2.254v5.752zm0 0v11.108m-16.258-8.854v13.524"
                />
                <circle
                  cx="14.31"
                  cy="32.507"
                  r="3.731"
                  fill="none"
                  stroke="red"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle
                  cx="30.568"
                  cy="27.837"
                  r="3.731"
                  fill="none"
                  stroke="red"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill="none"
                  stroke="red"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M38.5 42.499v-8m-3.297 4.704l3.297 3.296l3.297-3.296"
                />
                <circle
                  cx="38.5"
                  cy="38.499"
                  r="7"
                  fill="none"
                  stroke="red"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill="none"
                  stroke="red"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M33.432 43.326A21.413 21.413 0 0 1 24 45.5C12.126 45.5 2.5 35.874 2.5 24S12.126 2.5 24 2.5S45.5 12.126 45.5 24c0 3.383-.781 6.583-2.173 9.43"
                />
              </svg>
              <p class="text-xs">本地下载</p>
            </div>
            <div class="flex w-[20vw] flex-col justify-between items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                t="1701652960321"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                p-id="5168"
                width="2.5em"
                height="2.5em"
              >
                <path
                  d="M699.733333 793.941333a17.066667 17.066667 0 0 1-17.066666-17.066666 17.066667 17.066667 0 0 1 17.066666-17.066667 170.666667 170.666667 0 0 0 17.066667-341.333333 17.066667 17.066667 0 0 1-15.36-15.701334 189.781333 189.781333 0 0 0-378.88 0 17.066667 17.066667 0 0 1-15.36 15.701334 172.714667 172.714667 0 0 0-102.4 49.493333 170.666667 170.666667 0 0 0 119.466667 291.84 17.066667 17.066667 0 0 1 17.066666 17.066667 17.066667 17.066667 0 0 1-17.066666 17.066666A204.8 204.8 0 0 1 179.541333 443.733333a207.872 207.872 0 0 1 110.250667-57.344 223.914667 223.914667 0 0 1 443.733333 0 206.848 206.848 0 0 1 170.666667 202.069334 204.8 204.8 0 0 1-204.8 204.8z"
                  fill="#d81e06"
                  p-id="5169"
                />
                <path
                  d="M512 861.866667a17.066667 17.066667 0 0 1-17.066667-17.066667V614.4a17.066667 17.066667 0 0 1 34.133334 0v230.4a17.066667 17.066667 0 0 1-17.066667 17.066667z"
                  fill="#d81e06"
                  p-id="5170"
                />
                <path
                  d="M512 861.866667a16.042667 16.042667 0 0 1-11.946667-5.12 16.384 16.384 0 0 1 0-23.893334l76.8-76.8a16.725333 16.725333 0 0 1 23.893334 23.893334l-76.8 76.8a16.042667 16.042667 0 0 1-11.946667 5.12z"
                  fill="#d81e06"
                  p-id="5171"
                />
                <path
                  d="M512 861.866667a16.042667 16.042667 0 0 1-11.946667-5.12l-76.8-76.8a16.725333 16.725333 0 0 1 23.893334-23.893334l76.8 76.8a16.384 16.384 0 0 1 0 23.893334 16.042667 16.042667 0 0 1-11.946667 5.12z"
                  fill="#d81e06"
                  p-id="5172"
                />
              </svg>
              <p class="text-xs">云盘</p>
            </div>
            <div class="flex w-[20vw] flex-col justify-between items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 48 48"
              >
                <defs>
                  <mask id="ipSBuy0">
                    <g fill="none" stroke-width="4">
                      <path
                        fill="#fff"
                        fill-rule="evenodd"
                        stroke="#fff"
                        stroke-linejoin="round"
                        d="M6 15h36l-2 27H8L6 15Z"
                        clip-rule="evenodd"
                      />
                      <path
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16 19V6h16v13"
                      />
                      <path
                        stroke="#000"
                        stroke-linecap="round"
                        d="M16 34h16"
                      />
                    </g>
                  </mask>
                </defs>
                <path fill="red" d="M0 0h48v48H0z" mask="url(#ipSBuy0)" />
              </svg>
              <p class="text-xs">已购</p>
            </div>
            <div class="flex w-[20vw] flex-col justify-between items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                t="1701657153489"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                p-id="12034"
                width="30"
                height="30"
              >
                <path
                  d="M992 825.536a32 32 0 0 1-32-32c0-100.032-74.048-233.536-180.288-265.216a1038.08 1038.08 0 0 0-24.32-6.08 32.064 32.064 0 0 1-10.624-57.6c35.328-24 56.384-63.936 56.384-106.88 0-69.76-56.128-126.208-127.808-128.512a32 32 0 0 1 1.088-64h1.088c106.368 3.456 189.696 88 189.696 192.448 0 43.776-14.656 85.44-40.768 118.912 120.704 52.544 199.552 200.32 199.552 316.928a32 32 0 0 1-32 32z"
                  p-id="12035"
                  fill="#d81e06"
                />
                <path
                  d="M892.672 894.592l-14.784-0.192a32 32 0 0 1 0.704-64h0.704c11.392 0.256 15.552 0.128 21.248 0.128l19.52-0.128c14.72 0.256 22.976-3.264 29.824-9.92a36.992 36.992 0 0 0 10.176-26.88 32 32 0 0 1 64 0c0 28.16-10.432 53.952-29.312 72.512-19.072 18.752-44.288 28.48-75.328 28.288l-17.92 0.128-8.832 0.064zM236.16 960c-60.544 0-107.904-0.064-127.488-0.192C0 958.976 0 885.696 0 854.4c0-160.64 94.72-309.632 232.128-375.36-43.264-43.264-67.2-104.128-67.2-174.336C164.992 171.968 272.064 64 403.712 64s238.656 107.968 238.656 240.704c0 69.824-24.896 130.816-69.888 174.592 138.816 66.56 236.608 218.112 235.136 375.424-0.576 65.792-41.216 105.152-108.736 105.152L236.16 960zM403.712 128c-96.32 0-174.72 79.232-174.72 176.704 0 70.656 29.76 125.888 83.904 155.52a32 32 0 0 1-6.528 58.816C165.952 559.424 64 700.48 64 854.4c0 31.552 0 41.152 45.184 41.408 19.584 0.128 66.688 0.192 126.976 0.192l462.592-0.192c32.96 0 44.608-10.944 44.864-41.664 1.408-150.4-104.256-294.4-245.824-335.04a32.128 32.128 0 0 1-6.528-58.88c55.36-30.336 87.104-86.976 87.104-155.52C578.368 207.232 499.968 128 403.712 128z"
                  p-id="12036"
                  fill="#d81e06"
                />
              </svg>
              <p class="text-xs">我的好友</p>
            </div>
            <div class="flex w-[20vw] flex-col justify-between items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                t="1701657424244"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                p-id="13141"
                width="30"
                height="30"
              >
                <path
                  d="M720.398507 959.573333c73.045333 31.317333 136.96-15.317333 129.706666-94.293333l-20.650666-226.218667 174.634666-199.722666c38.144-43.648 19.2-102.229333-37.418666-115.114667l-258.474667-58.794667-135.68-228.010666c-29.738667-49.877333-91.306667-49.92-121.045333 0L315.74784 265.429333 57.273173 324.224C0.953173 337.066667-18.33216 395.648 19.854507 439.338667l174.634666 199.722666-24.021333 264.405334c-5.248 57.770667 44.544 94.037333 97.877333 71.125333l243.626667-104.533333 208.426667 89.472z"
                  fill="#d81e06"
                  p-id="13142"
                />
              </svg>
              <p class="text-xs">本地下载</p>
            </div>
            <div class="flex w-[20vw] flex-col justify-between items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                t="1701657553119"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                p-id="17616"
                width="60"
                height="40"
              >
                <path
                  d="M311.99 291.25c7.14-7.14 7.14-18.7 0-25.84-7.13-7.14-18.7-7.14-25.84 0C220.29 331.29 184.02 418.85 184.02 512s36.27 180.71 102.13 246.59c7.14 7.14 18.7 7.14 25.84 0a18.2 18.2 0 0 0 5.35-12.92c0-4.67-1.78-9.36-5.35-12.92-121.71-121.72-121.71-319.78 0-441.5z"
                  fill="#d81e06"
                  p-id="17617"
                />
                <path
                  d="M316.98 512c0-57.63 22.44-111.81 63.19-152.57a18.2 18.2 0 0 0 5.35-12.92c0-4.67-1.78-9.36-5.35-12.92-7.14-7.14-18.7-7.14-25.84 0-47.65 47.67-73.9 111.02-73.9 178.41s26.24 130.75 73.9 178.41c7.14 7.14 18.7 7.14 25.84 0s7.14-18.7 0-25.84c-40.75-40.76-63.19-94.94-63.19-152.57z"
                  fill="#d81e06"
                  p-id="17618"
                />
                <path
                  d="M444.82 398.24c-7.14-7.14-18.7-7.14-25.84 0-62.73 62.73-62.73 164.8 0 227.53 7.14 7.14 18.7 7.14 25.84 0a18.2 18.2 0 0 0 5.35-12.92c0-4.67-1.78-9.36-5.35-12.92-48.48-48.48-48.48-127.37 0-175.84 7.13-7.15 7.13-18.72 0-25.85zM512.04 467.66h-0.08c-24.49 0-44.34 19.85-44.34 44.34 0 24.49 19.85 44.34 44.34 44.34h0.08c24.49 0 44.34-19.85 44.34-44.34 0-24.49-19.85-44.34-44.34-44.34zM737.84 265.41c-7.14-7.14-18.71-7.14-25.84 0-7.14 7.14-7.14 18.7 0 25.84 121.72 121.73 121.72 319.78 0 441.49a18.218 18.218 0 0 0-5.35 12.92c0 4.68 1.78 9.36 5.35 12.92 7.14 7.14 18.7 7.14 25.84 0C803.71 692.71 839.98 605.15 839.98 512s-36.27-180.71-102.14-246.59z"
                  fill="#d81e06"
                  p-id="17619"
                />
                <path
                  d="M669.66 333.59c-7.14-7.14-18.7-7.14-25.84 0a18.218 18.218 0 0 0-5.35 12.92c0 4.68 1.78 9.36 5.35 12.92 40.76 40.76 63.2 94.94 63.2 152.57s-22.44 111.81-63.2 152.57c-7.14 7.14-7.14 18.7 0 25.84s18.7 7.14 25.84 0c47.66-47.66 73.9-111.01 73.9-178.41s-26.25-130.75-73.9-178.41z"
                  fill="#d81e06"
                  p-id="17620"
                />
                <path
                  d="M605.02 398.24c-7.14-7.14-18.7-7.14-25.84 0s-7.14 18.7 0 25.84c48.48 48.47 48.48 127.36 0 175.84a18.218 18.218 0 0 0-5.35 12.92c0 4.68 1.78 9.36 5.35 12.92 7.14 7.14 18.7 7.14 25.84 0 62.73-62.72 62.73-164.8 0-227.52z"
                  fill="#d81e06"
                  p-id="17621"
                />
              </svg>
              <p class="text-xs">我的播客</p>
            </div>
            <div class="flex w-[20vw] flex-col justify-between items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                t="1701658233470"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                p-id="25482"
                width="60"
                height="40"
              >
                <path
                  d="M412.060023 389.203502c-11.627805 0-22.582276 4.512771-30.797362 12.73502-8.229412 8.236575-12.787209 19.175697-12.787208 30.833177 0 11.974705-9.717296 21.720654-21.704281 21.720654-12.002334 0-21.721677-9.744925-21.721678-21.720654 0-23.257657 9.050102-45.107247 25.50074-61.551745 16.415845-16.430171 38.265436-25.472087 61.508766-25.472087 12.003358 0 21.720654 9.717296 21.720654 21.720654 0.001023 11.988008-9.71525 21.73498-21.719631 21.734981z m315.151073-71.720319c-30.791222-30.817828-71.737714-47.772954-115.277259-47.772954-36.661918 0-71.464492 12.016661-99.948163 34.189615-28.467298-22.172954-63.276012-34.189615-99.924628-34.189615-43.547732 0-84.487061 16.954103-115.306935 47.772954-30.783036 30.780989-47.744302 71.733621-47.744302 115.288516 0 43.541592 16.961266 84.480921 47.744302 115.286469l199.871767 199.877907a21.808658 21.808658 0 0 0 15.359796 6.352673 21.710421 21.710421 0 0 0 15.374121-6.352673l199.851301-199.877907c30.805548-30.805548 47.765791-71.744877 47.765792-115.286469 0-43.554895-16.961266-84.507527-47.765792-115.288516z"
                  fill="#d81e06"
                  p-id="25483"
                />
                <path
                  d="M954.90548 367.382564H807.693968c6.943119 20.814006 10.707855 42.792533 10.707855 65.389135 0 55.17042-21.474038 107.019195-60.473182 146.005037l-95.239941 95.24608h138.176759c36.166639 0 65.59175-29.426134 65.59175-65.592772 0-7.777112-1.422393-15.222673-3.916185-22.122813 36.064308-0.143263 65.368669-29.496742 65.368669-65.59175 0-7.804741-1.437742-15.222673-3.917208-22.150441h30.912995c36.173802 0 65.590726-29.409761 65.590727-65.59175 0.007163-36.151289-29.417948-65.590726-65.590727-65.590726zM69.08838 367.382564h147.218675c-6.944142 20.814006-10.724228 42.792533-10.724227 65.389135 0 55.17042 21.497574 107.019195 60.489555 146.005037l95.24608 95.24608H223.141704c-36.174825 0-65.612216-29.426134-65.612216-65.592772 0-7.777112 1.442859-15.222673 3.931535-22.122813-36.059192-0.143263-65.361506-29.496742-65.361507-65.59175 0-7.804741 1.41523-15.222673 3.917209-22.150441H69.08838c-36.166639 0-65.584586-29.409761-65.584587-65.59175 0-36.151289 29.417948-65.590726 65.584587-65.590726z"
                  fill="#d81e06"
                  p-id="25484"
                />
              </svg>
              <p class="text-xs">乐迷团</p>
            </div>
          </div>
          <div
            class="w-[92vw] mt-[4vw] rounded-md h-[25vw] items-center justify-between flex pl-[3vw] pr-[3vw] bg-[#fff]"
          >
            <div class="flex items-center">
              <div class="w-[15vw] h-[15vw] relative">
                <img
                  class="w-[15vw] rounded-lg h-[15vw]"
                  src="http://p1.music.126.net/HyctpLaMbmcaZ8fAsnldNw==/109951169098605422.jpg?param=50y50&quality=100"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  t="1701677441797"
                  class="icon absolute top-[4vw] left-[4vw]"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  p-id="28708"
                  width="25"
                  height="25"
                >
                  <path
                    d="M512 901.746939c-13.583673 0-26.122449-4.179592-37.093878-13.061225-8.881633-7.314286-225.697959-175.020408-312.424489-311.379592C133.746939 532.37551 94.040816 471.24898 94.040816 384.522449c0-144.718367 108.146939-262.269388 240.326531-262.269388 67.395918 0 131.657143 30.82449 177.632653 84.636735 45.453061-54.334694 109.191837-84.636735 177.110204-84.636735 132.702041 0 240.326531 117.55102 240.326531 262.269388 0 85.159184-37.093878 143.673469-67.395919 191.216327l-1.044898 1.567346c-86.726531 136.359184-303.542857 304.587755-312.424489 311.379592-10.44898 8.359184-22.987755 13.061224-36.571429 13.061225z"
                    fill="#ffffff"
                    p-id="28709"
                  />
                </svg>
              </div>
              <div class="m-[2vw]">
                <p>我喜欢的音乐</p>
                <p class="text-xs">{{ likelis }}首已下载一首</p>
              </div>
            </div>
            <div class="border-1 h-[8vw] flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                t="1701662028142"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                p-id="27536"
                width="28"
                height="28"
              >
                <path
                  d="M529.2032 618.9056c-0.9216 0-1.8944-0.0512-2.8672-0.1536a30.69952 30.69952 0 0 1-24.5248-16.64L425.1648 451.7888l-24.7296 48.8448a30.67904 30.67904 0 0 1-27.392 16.8448h-268.288c-16.9472 0-30.72-13.7728-30.72-30.72s13.7728-30.72 30.72-30.72h249.3952l43.52-85.9136A30.75584 30.75584 0 0 1 425.0112 353.28h0.0512c11.5712 0 22.1184 6.4512 27.392 16.7424l82.0736 160.9728 49.1008-63.6928a30.80704 30.80704 0 0 1 24.32-11.9808h316.3648c16.9472 0 30.72 13.7728 30.72 30.72s-13.7728 30.72-30.72 30.72h-301.2608l-69.5296 90.1632a30.73024 30.73024 0 0 1-24.32 11.9808z"
                  fill="#E92385"
                  p-id="27537"
                />
                <path
                  d="M514.5088 917.9136c-41.216 0-79.9232-16.384-109.0048-46.08l-266.0864-271.872C32.256 490.496 32.256 312.3712 139.4176 202.9056 191.5392 149.6576 260.864 120.32 334.6432 120.32c66.7648 0 129.8432 23.9616 179.8656 67.9424 50.0224-43.9808 113.1008-67.9424 179.8656-67.9424 73.7792 0 143.1552 29.3376 195.2768 82.5856 107.1616 109.4656 107.1616 287.5904 0 397.056l-266.0864 271.872c-29.1328 29.696-67.84 46.08-109.056 46.08zM334.6432 181.76c-57.1392 0-110.8992 22.784-151.3472 64.1024-83.968 85.76-83.968 225.3312 0 311.1424l266.0864 271.872c17.408 17.8176 40.5504 27.5968 65.0752 27.5968 24.576 0 47.6672-9.7792 65.0752-27.5968l266.0864-271.872c83.968-85.76 83.968-225.3312 0-311.1424-40.448-41.3184-94.208-64.1024-151.3472-64.1024s-110.8992 22.784-151.3472 64.1024l-6.5536 6.7072a30.75072 30.75072 0 0 1-21.9648 9.216c-8.2432 0-16.1792-3.328-21.9648-9.216l-6.5536-6.7072C445.5424 204.544 391.7824 181.76 334.6432 181.76z"
                  fill="#283033"
                  p-id="27538"
                />
              </svg>
              <span class="text-sm">心动模式</span>
            </div>
          </div>
          <div>
            <nav
              class="flex justify-evenly h-[15vw] items-center font-semibold relative w-[80vw] mx-auto"
            >
              <div class="text-[#2a3146] text-[3.3vw]">主页</div>
              <div class="text-[#9095a1] text-[3.3vw]">动态</div>
              <div class="text-[#9095a1] text-[3.3vw]">播客</div>
              <div
                class="absolute bg-[#eb474e] w-[3.3vw] h-[1vw] rounded-[20vw] bottom-[2vw] left-[16.4vw]"
              ></div>
            </nav>
            <div>
              <div
                class="w-[92vw] h-[43vw] rounded-[15px] bg-[#fff] mb-[3.7vw]"
              >
                <h1 class="-[#EAEAEA] leading-[12vw] text-[4vw] pl-[4vw]">
                  音乐品味
                </h1>
                <div class="flex justify-evenly">
                  <div
                    class="w-[27vw] h-[28vw] rounded-[15px] bg-gradient-to-b from-[#ffdfd3] to-[#FEFEFB] border-[1px] border-[#F6F4F0] relative"
                  >
                    <div
                      class="text-[2.6vw] text-[#837C87] h-[7.4vw] leading-[7.4vw] pl-[1.7vw]"
                    >
                      我的喜欢
                    </div>
                    <p class="text-[3.5vw] text-[#5A565D] pl-[1.7vw]">
                      238首
                      <!-- {{ userdata.data.data.nextLoginCount || "" }}首 -->
                    </p>
                    <div
                      class="-[#7D7D7D] absolute bottom-[2.5vw] left-[1.7vw] text-[#B1B1AE] text-[2.4vw] flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 256 256"
                        class="iconify iconify--ph mr-[0.8vw] text-[2.6vw]"
                        style="color: rgb(169, 170, 178)"
                      >
                        <path
                          fill="currentColor"
                          d="M240 94c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0C119.79 220.66 16 164 16 94a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 40.88 157.35 32 178 32a62.07 62.07 0 0 1 62 62Z"
                        ></path></svg
                      >喜欢的音乐
                    </div>
                  </div>
                  <div
                    class="w-[27vw] h-[28vw] rounded-[15px] bg-gradient-to-b from-[#f9ebcf] to-[#FEFEFB] border-[1px] border-[#F6F4F0] relative"
                  >
                    <div
                      class="text-[2.6vw] text-[#837C87] h-[7.4vw] leading-[7.4vw] pl-[1.7vw]"
                    >
                      累计听歌
                    </div>
                    <p class="text-[3.5vw] text-[#5A565D] pl-[1.7vw]">
                      69首
                      <!-- {{ userdata.data.data.nextPlayCount || "" }}首 -->
                    </p>
                    <div
                      class="-[#7D7D7D] absolute bottom-[2.5vw] left-[1.7vw] text-[#B1B1AE] text-[2.4vw] flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="iconify iconify--ri mr-[0.8vw] text-[2.6vw]"
                        style="color: rgb(169, 170, 178)"
                      >
                        <path
                          fill="currentColor"
                          d="M2 9h2v12H2V9Zm6-6h2v18H8V3Zm6 9h2v9h-2v-9Zm6-6h2v15h-2V6Z"
                        ></path></svg
                      >喜欢的音乐
                    </div>
                  </div>
                  <div
                    class="w-[27vw] h-[28vw] rounded-[15px] bg-gradient-to-b from-[#dbeff9] to-[#FEFEFB] border-[1px] border-[#F6F4F0] relative pr-[1.9vw]"
                  >
                    <div
                      class="text-[2.6vw] text-[#837C87] h-[7.4vw] leading-[7.4vw] pl-[1.7vw]"
                    >
                      本周关键词
                    </div>
                    <p class="text-[3.5vw] text-[#5A565D] pl-[1.7vw]">
                      属于你的音乐档案
                    </p>
                    <div
                      class="-[#7D7D7D] absolute bottom-[2.5vw] left-[1.7vw] text-[#B1B1AE] text-[2.4vw] flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="0.75em"
                        height="1em"
                        viewBox="0 0 384 512"
                        class="iconify iconify--fa-solid mr-[0.8vw] text-[2.6vw]"
                        style="color: rgb(169, 170, 178)"
                      >
                        <path
                          fill="currentColor"
                          d="M360 64c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24c0 90.965 51.016 167.734 120.842 192C75.016 280.266 24 357.035 24 448c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24c0-90.965-51.016-167.734-120.842-192C308.984 231.734 360 154.965 360 64z"
                        ></path></svg
                      >黑胶时光机
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="w-[100%] bg-[#fff] rounded-[15px] pt-[5vw] mb-[3.7vw]"
              >
                <p
                  class="-[#ECECEC] text-[#2a3146] font-semibold text-[4vw] mb-[4.4vw] mx-[4vw]"
                >
                  创建的歌单<span
                    class="-[#A1A1A1] text-[#9599a3] text-[2.7vw] ml-[1.6vw] font-[200]"
                    >(0个)</span
                  >
                </p>
                <ul class="px-[4vw] pb-[4vw]">
                  <li class="flex items-center">
                    <div
                      class="w-[15vw] rounded-md h-[15vw] flex justify-center items-center bg-[#f3f3f3]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2.5em"
                        height="2.5em"
                        viewBox="0 0 36 36"
                      >
                        <path
                          fill="currentColor"
                          d="M28 4H14.87L8 10.86V15h2v-1.39h7.61V6H28v24H8a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm-12 8h-6v-.32L15.7 6h.3Z"
                          class="clr-i-outline clr-i-outline-path-1"
                        />
                        <path
                          fill="currentColor"
                          d="M11.94 26.28a1 1 0 1 0 1.41 1.41L19 22l-5.68-5.68a1 1 0 0 0-1.41 1.41L15.2 21H3a1 1 0 1 0 0 2h12.23Z"
                          class="clr-i-outline clr-i-outline-path-2"
                        />
                        <path fill="none" d="M0 0h36v36H0z" />
                      </svg>
                    </div>
                    <p class="ml-[2vw] text-xs">一键导入外部音乐</p>
                  </li>
                </ul>
                <div></div>
              </div>
              <div
                class="w-[100%] bg-[#fff] rounded-[15px] pt-[5vw] mb-[3.7vw]"
              >
                <p
                  class="-[#ECECEC] text-[#2a3146] font-semibold text-[4vw] mb-[4.4vw] mx-[4vw]"
                >
                  收藏的歌单<span
                    class="-[#A1A1A1] text-[#9599a3] text-[2.7vw] ml-[1.6vw] font-[200]"
                    >({{ collectList.length + createList.length }}个)</span
                  >
                </p>

                <ul class="px-[4vw] pb-[4vw]">
                  <li
                    class="flex items-center"
                    v-for="(item, index) in createList"
                    :key="index"
                  >
                    <img
                      class="w-[15vw] h-[15vw] rounded-md"
                      :src="item.coverImgUrl"
                    />
                    <div class="ml-[2vw]">
                      <h4 class="text-sm">{{ item.name }}</h4>
                      <p class="text-xs">
                        {{ item.trackCount }}首,by {{ item.creator.nickname }}
                      </p>
                    </div>
                  </li>
                  <li
                    class="flex items-center"
                    v-for="(item, index) in collectList"
                    :key="index + 'a'"
                  >
                    <img
                      class="w-[15vw] h-[15vw] rounded-lg"
                      :src="item.coverImgUrl"
                    />
                    <div class="ml-[2vw]">
                      <h4 class="text-sm">{{ item.name }}</h4>
                      <p class="text-xs">
                        {{ item.trackCount }}首,by {{ item.creator.nickname }}
                      </p>
                    </div>
                  </li>
                </ul>
                <div></div>
              </div>
              <div></div>
              <div class="w-[92vw] h-[50vw] bg-[#fff] rounded-[15px]">
                <nav
                  class="h-[15vw] flex items-center justify-between mx-[3.8vw]"
                >
                  <div class="text-[4vw] text-[#333]">基本信息</div>
                  <div
                    class="text-[2.6vw] border-[1px] border-[#E7E7E7] rounded-[200px] px-[2.7vw] py-[1.5vw] text-[#333]"
                  >
                    领取村名证
                  </div>
                </nav>
                <div
                  class="h-[25vw] text-[3vw] text-[#666] flex flex-wrap mx-[3.8vw]"
                >
                  <div class="w-[100%]">
                    村龄：<span class="">2年 (2021年07月注册)</span>
                  </div>
                  <div class="w-[100%]">
                    地区：<span class="">湖北 武汉</span>
                  </div>
                </div>
                <div
                  class="border-t-[1px] border-[#EAEAEA] text-[3vw] text-[#999] flex items-center justify-center h-[9vw]"
                >
                  查看全部<svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    width="0.46em"
                    height="1em"
                    viewBox="0 0 208 456"
                    class="iconify iconify--ps ml-[1vw] text-[2.5vw] font-[800]"
                  >
                    <path
                      fill="currentColor"
                      d="M9 388q8 4 15 4q11 0 17-6l162-186L41 14Q26-1 11 12Q-4 29 9 42l137 156L9 354q-13 19 0 34z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!---->
      <div
        class="bg-[#fff] fixed z-[3] van-hairline--top-bottom van-tabbar van-tabbar--fixed"
      >
        <div class="van-tabbar-item">
          <div class="van-tabbar-item__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              class="iconify iconify--ri"
            >
              <path
                fill="currentColor"
                d="M12.001 22c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10Zm-1.086-10.432c.24-.84 1.075-1.541 1.99-1.648c.187.694.388 1.373.545 2.063c.053.23.037.495-.018.727c-.213.892-1.248 1.242-1.978.685c-.53-.405-.742-1.12-.539-1.827Zm3.817-.197c-.125-.465-.256-.927-.393-1.42c.5.13.907.36 1.255.697c1.257 1.222 1.385 3.3.294 4.732c-1.135 1.49-3.155 2.134-5.028 1.605c-2.302-.65-3.808-2.952-3.441-5.316c.274-1.768 1.27-3.004 2.9-3.733c.407-.182.58-.56.42-.93c-.157-.364-.54-.504-.944-.343c-2.721 1.088-4.32 4.134-3.67 6.987c.713 3.118 3.495 5.163 6.675 4.859c1.732-.166 3.164-.948 4.216-2.347c1.506-2.002 1.297-4.783-.463-6.499c-.666-.65-1.471-1.018-2.39-1.153c-.083-.013-.217-.052-.232-.106c-.087-.313-.18-.632-.206-.954c-.029-.357.29-.64.65-.645c.253-.003.434.13.603.3c.303.3.704.322.988.062c.29-.264.296-.678.018-1.008c-.566-.672-1.586-.891-2.43-.523c-.847.37-1.321 1.187-1.2 2.093c.038.28.11.557.167.842l-.26.072a3.863 3.863 0 0 0-2.098 1.414c-.921 1.22-.936 2.828-.041 3.947c1.274 1.594 3.747 1.284 4.523-.568c.284-.677.275-1.368.087-2.065Z"
              ></path></svg
            ><!---->
          </div>
          <div class="van-tabbar-item__text">首页</div>
        </div>
        <div class="van-tabbar-item">
          <div class="van-tabbar-item__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              viewBox="0 0 512 512"
              class="iconify iconify--ion"
            >
              <path
                fill="currentColor"
                d="M160 32h192v448H160zm224 160h112v288H384zM16 128h112v352H16z"
              ></path></svg
            ><!---->
          </div>
          <div class="van-tabbar-item__text">排行榜</div>
        </div>
        <div class="van-tabbar-item van-tabbar-item--active">
          <div class="van-tabbar-item__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              class="iconify iconify--mingcute"
            >
              <g fill="none">
                <path
                  d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092"
                ></path>
                <path
                  fill="currentColor"
                  d="M21 5.18V17a4 4 0 1 1-2-3.465V9.181L9 10.847V18c0 .06-.005.117-.015.174A3.5 3.5 0 1 1 7 15.337v-8.49a2 2 0 0 1 1.671-1.973l10-1.666A2 2 0 0 1 21 5.18M5.5 17a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M17 15a2 2 0 1 0 0 4a2 2 0 0 0 0-4m2-9.82L9 6.847V8.82l10-1.667z"
                ></path>
              </g></svg
            ><!---->
          </div>
          <div class="van-tabbar-item__text">我的</div>
        </div>
        <div class="van-tabbar-item">
          <div class="van-tabbar-item__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              class="iconify iconify--iconoir"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="1.5"
              >
                <path
                  stroke-linecap="round"
                  d="M12 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
                ></path>
                <path
                  d="M22 17.28a2.28 2.28 0 0 1-.662 1.606c-.976.984-1.923 2.01-2.936 2.958a.597.597 0 0 1-.823-.017l-2.918-2.94a2.281 2.281 0 0 1 0-3.214a2.277 2.277 0 0 1 3.233 0l.106.107l.106-.107A2.277 2.277 0 0 1 22 17.28Z"
                ></path>
                <path
                  stroke-linecap="round"
                  d="M5 20v-1a7 7 0 0 1 10-6.326"
                ></path>
              </g></svg
            ><!---->
          </div>
          <div class="van-tabbar-item__text">关注</div>
        </div>
        <div class="van-tabbar-item">
          <div class="van-tabbar-item__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              viewBox="0 0 256 256"
              class="iconify iconify--ph"
            >
              <path
                fill="currentColor"
                d="M231.79 187.33a80 80 0 0 0-62.21-114.74a80 80 0 1 0-145.37 66.74l-7.66 26.82A14 14 0 0 0 30 184a13.65 13.65 0 0 0 3.84-.54l26.82-7.66a78.86 78.86 0 0 0 25.77 7.63a80 80 0 0 0 108.89 40.37l26.82 7.66a14 14 0 0 0 17.3-17.3ZM65.36 160.21a8 8 0 0 0-6-.68l-26.41 7.55l7.55-26.41a8 8 0 0 0-.68-6a64 64 0 0 1 111.86-62.24A80.12 80.12 0 0 0 80 152a79.31 79.31 0 0 0 1.31 14.3a63.34 63.34 0 0 1-15.95-6.09Zm150.17 28.46l7.55 26.41l-26.41-7.55a8 8 0 0 0-6 .68a63.95 63.95 0 1 1 25.57-25.57a8 8 0 0 0-.71 6.03ZM144 140a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm56 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z"
              ></path></svg
            ><!---->
          </div>
          <div class="van-tabbar-item__text">社区</div>
        </div>
      </div>
    </div>
    <div
      data-v-5c239f42=""
      data-v-e4fc58ca=""
      class="box bg-white w-[100vw] flex items-center fixed bottom-0 left-0"
    >
      <div
        data-v-5c239f42=""
        @click="gaiplay"
        class="flex-1 flex flex-col items-center"
      >
        <svg
          data-v-5c239f42=""
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <g data-v-5c239f42="" fill="none">
            <path
              data-v-5c239f42=""
              d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092"
            ></path>
            <path
              data-v-5c239f42=""
              fill="currentColor"
              d="M10.975 3.002a1 1 0 0 1-.754 1.196a8 8 0 1 0 8.446 3.379a1 1 0 1 1 1.666-1.107A9.958 9.958 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12c0-4.76 3.325-8.742 7.779-9.752a1 1 0 0 1 1.196.754M13 3.014a1.01 1.01 0 0 1 1.214-.99l.115.031l2.987.996a1 1 0 0 1-.52 1.928l-.112-.03L15 4.387V12a3 3 0 1 1-2.19-2.89l.19.06V3.015Z"
            ></path>
          </g>
        </svg>
        <p data-v-5c239f42="">首页</p>
      </div>
      <div data-v-5c239f42="" class="flex-1 flex flex-col items-center">
        <svg
          data-v-5c239f42=""
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <path
            data-v-5c239f42=""
            fill="currentColor"
            d="M2 21V9h5.5v12zm7.25 0V3h5.5v18zm7.25 0V11H22v10z"
          ></path>
        </svg>
        <p data-v-5c239f42="">排行榜</p>
      </div>
      <div data-v-5c239f42="" class="flex-1 flex flex-col items-center">
        <svg
          data-v-5c239f42=""
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 32 32"
          class="text-[red] text-[3.5vw]"
        >
          <path
            data-v-5c239f42=""
            fill="currentColor"
            d="M25 4H10a2.002 2.002 0 0 0-2 2v14.556A3.955 3.955 0 0 0 6 20a4 4 0 1 0 4 4V12h15v8.556A3.955 3.955 0 0 0 23 20a4 4 0 1 0 4 4V6a2.002 2.002 0 0 0-2-2M6 26a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2m17 0a2 2 0 1 1 2-2a2.003 2.003 0 0 1-2 2M10 6h15v4H10Z"
          ></path>
        </svg>
        <p data-v-5c239f42="" class="text-[red] text-[3.5vw]">我的</p>
      </div>
      <div data-v-5c239f42="" class="flex-1 flex flex-col items-center">
        <svg
          data-v-5c239f42=""
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <g data-v-5c239f42="" fill="none" fill-rule="evenodd">
            <path
              data-v-5c239f42=""
              d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01l-.184-.092"
            ></path>
            <path
              data-v-5c239f42=""
              fill="currentColor"
              d="M11 2a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 11c-2.395 0-4.575.694-6.178 1.672c-.8.488-1.484 1.064-1.978 1.69C2.358 16.976 2 17.713 2 18.5c0 .845.411 1.511 1.003 1.986c.56.45 1.299.748 2.084.956C6.665 21.859 8.771 22 11 22c.23 0 .46-.002.685-.005a1 1 0 0 0 .89-1.428A5.973 5.973 0 0 1 12 18c0-1.252.383-2.412 1.037-3.373a1 1 0 0 0-.72-1.557c-.43-.046-.87-.07-1.317-.07m10.708 3.068a1 1 0 0 0-1.414-1.414l-3.182 3.182l-1.414-1.414a1 1 0 0 0-1.414 1.414l2.05 2.05a1.1 1.1 0 0 0 1.556 0l3.818-3.818"
            ></path>
          </g>
        </svg>
        <p data-v-5c239f42="" class="text-[3.5vw]">关注</p>
      </div>
      <div data-v-5c239f42="" class="flex-1 flex flex-col items-center">
        <svg
          data-v-5c239f42=""
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 576 512"
        >
          <path
            data-v-5c239f42=""
            fill="currentColor"
            d="M385.2 167.6c6.4 0 12.6.3 18.8 1.1C387.4 90.3 303.3 32 207.7 32C100.5 32 13 104.8 13 197.4c0 53.4 29.3 97.5 77.9 131.6l-19.3 58.6l68-34.1c24.4 4.8 43.8 9.7 68.2 9.7c6.2 0 12.1-.3 18.3-.8c-4-12.9-6.2-26.6-6.2-40.8c-.1-84.9 72.9-154 165.3-154zm-104.5-52.9c14.5 0 24.2 9.7 24.2 24.4c0 14.5-9.7 24.2-24.2 24.2c-14.8 0-29.3-9.7-29.3-24.2c.1-14.7 14.6-24.4 29.3-24.4m-136.4 48.6c-14.5 0-29.3-9.7-29.3-24.2c0-14.8 14.8-24.4 29.3-24.4c14.8 0 24.4 9.7 24.4 24.4c0 14.6-9.6 24.2-24.4 24.2M563 319.4c0-77.9-77.9-141.3-165.4-141.3c-92.7 0-165.4 63.4-165.4 141.3S305 460.7 397.6 460.7c19.3 0 38.9-5.1 58.6-9.9l53.4 29.3l-14.8-48.6C534 402.1 563 363.2 563 319.4m-219.1-24.5c-9.7 0-19.3-9.7-19.3-19.6c0-9.7 9.7-19.3 19.3-19.3c14.8 0 24.4 9.7 24.4 19.3c0 10-9.7 19.6-24.4 19.6m107.1 0c-9.7 0-19.3-9.7-19.3-19.6c0-9.7 9.7-19.3 19.3-19.3c14.5 0 24.4 9.7 24.4 19.3c.1 10-9.9 19.6-24.4 19.6"
          ></path>
        </svg>
        <p data-v-5c239f42="" class="text-[3.5vw]">社区</p>
      </div>
    </div>
  </div>
</template>
<script>
//import { defineComponent } from '@vue/composition-api'

import axios from "axios";
import stroe from "@/store/index";
let request = axios.create({
  baseURL: "http://localhost:3000",
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

export default {
  data() {
    return {
      mydata: null,
      userdata: {},
      img: "",
      id: "",
      likelis: [],
      createList: [],
      collectList: [],
      bgimg: [],
      leval: "",
    };
  },
  async created() {
    await request
      .get(`http://111.229.247.11:3000/user/account`)
      .then((data) => {
        // console.log(data);
        this.mydata = data.data.profile.nickname;
        this.img = data.data.profile.avatarUrl;
        this.id = data.data.profile.userId;
        this.bgimg = data.data.profile.backgroundUrl;
        // this.leval = data.userdata.data.data.level
      });
    await request.get("http://111.229.247.11:3000/user/level").then((data) => {
      // console.log(data);
      this.userdata = data.data.level;
    });
    await request
      .get("http://111.229.247.11:3000/likelist", { id: this.id })
      .then((data) => {
        // console.log(data);
        this.likelis = data.data.ids.length;
      });
    await request
      .post("http://111.229.247.11:3000/user/playlist", {
        uid: this.id,
      })
      .then((res) => {
        this.createList = res.data.playlist.slice(1, 2);
        this.collectList = res.data.playlist.slice(2, 6);
        // console.log(this.createList, this.collectList);
      });
  },
  methods: {
    gaiplay() {
      // console.log(111);
      this.$router.push("/home");
    },
  },
  mounted() {
    // eslint-disable-next-line no-undef
    console.log(this.mixin_player);
  },
};
</script>
