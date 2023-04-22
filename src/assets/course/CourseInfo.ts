import { CourseInfoType } from "../../utils/types";
export const CourseInfo: CourseInfoType = [
  {
    categoryID: "hardware",
    categoryDescription:
      "無論是顯示器，平板電腦還是智能手機，都是硬件。 我們社會所有現有技術的皆由硬件支撐。 通過物理和電子知識的各種組合，我們可以創造出從日常生活、科學研究、能量采集到硬件加速等任何方面來幫助人類的設備",
    courses: [
      {
        courseName: "印刷電路板入門",
        courseID: "PCB001",
        description:
          "從零開始的印刷電路板設計入門之旅！手把手教程學習如何設計原理圖及佈板。制造属於您的第一塊電板！",
        categoryID: "hardware",
        image:
          "https://i.imgur.com/g6zJVtg_d.webp?maxwidth=1520&fidelity=grand",
        downloadUrl:
          "https://stemturnede.sharepoint.com/sites/info.public.turned-e/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2Finfo%2Epublic%2Eturned-e%2FShared%20Documents%2FCourse&p=true&ga=1",
        resources: [
          {
            topic: "Lesson01 認識EasyEDA",
            downloadUrl:
              "https://stemturnede.sharepoint.com/:b:/g/EUX6RkqsbTNJh0jcvj3IJLMBF-cIp_6MVa3ZavJYlk-1Ag?e=8fG1I0",
          },
          {
            topic: "Lesson02 電路設計101",
            downloadUrl:
              "https://stemturnede.sharepoint.com/:f:/g/EgDY4pRh1cdCrrL7sO5sxnQBe-aWRT8KO9MFDA-3-x2ETg?e=1eTL8m",
          },
          {
            topic: "Lesson03 認識LED閃爍電路",
            downloadUrl:
              "https://stemturnede.sharepoint.com/:f:/g/EshCxudHBVdDuHaimyeds8ABBu4FmWBXHPiRjYAJg3PrSw?e=N1bcuC",
          },
          {
            topic: "Lesson04 如何選擇電池？",
            downloadUrl:
              "https://stemturnede.sharepoint.com/:f:/g/Evc3Qa8hpd9JsKE_7FFFlAEBYbsUwm9jQ8MGyq--pRxzIw?e=kXD1y0",
          },
          {
            topic: "Lesson05 電子復活蛋",
            downloadUrl:
              "https://stemturnede.sharepoint.com/:f:/g/EszJgLxwUFtNh0xwV7Ns2HkBp49usNgtbc3EqsdzUNanCw?e=VMLFU7",
          },
          {
            topic: "Lesson06 設計無綫LED",
            downloadUrl:
              "https://stemturnede.sharepoint.com/:f:/g/Eng6dkrqdzVJklD6A8--CA0BPX8l5kKkZuNB_MyPEdDExg?e=4kxhHA",
          },
          {
            topic: "Lesson 07 如何製作MP3播放器",
            downloadUrl:
              "https://stemturnede.sharepoint.com/:f:/g/EoVn7l6LrOVAv3EUX3dy9NcBtIY6rwR2VfmoIv0u0z-aRw?e=z0fRZw",
          },
          {
            topic: "Lesson 08 如何燒錄語音芯片",
            downloadUrl:
              "https://stemturnede.sharepoint.com/:f:/g/El2hb725KOJMvCLvhDCiYMEBa9keUEbozXVP_1TuEPQdIQ?e=fCnpIu",
          },
        ],
      },
      {
        courseName: "基礎電子與電路設計",
        courseID: "PCB002",
        description:
          "世上電子元件多不勝數，如何選適合的元件由理解原理及閱讀數據手册開始。透過分析和建立各種電路，成為精明的微電子工程師！",
        categoryID: "hardware",
        image:
          "https://i.imgur.com/bHnry7v_d.webp?maxwidth=1520&fidelity=grand",
        resources: [
          {
            topic: "SMT焊接練習",
            downloadUrl:
              "https://stemturnede.sharepoint.com/:f:/g/EnRHUHQZGMBAgdQyuR8sQm0BE-IjqEVWt5AaXrSVje3dgw?e=3Q8Bni0",
          },
          {
            topic: "脈寬調變與伺服電機",
            downloadUrl:
              "https://stemturnede.sharepoint.com/:f:/g/Eoo-jzOrvcVEuCnweKYAM10BAkErcDF7wpEJ_b-yQCI01g?e=yc1OBQ",
          },
          {
            topic: "PCB作品：個人名片",
            downloadUrl:
              "https://stemturnede.sharepoint.com/:f:/g/EpYEVV0EzS9Fu4r9zwxiQiIBTjfWvC2VyWsjf2agD5Rj3Q?e=Yn6qBL",
          },
          {
            topic: "MP3 播放器",
            downloadUrl:
              "https://stemturnede.sharepoint.com/:f:/g/EtSd0UZPy_tDpmgLMdN8iBQBBUPki_CrC3wanFMl-5ajLQ?e=Q43VE6",
          },
          {
            topic: "NFC 個人名片焊接和設置",
            downloadUrl:
              "https://stemturnede.sharepoint.com/:f:/g/EjHiL4uVIQBEolvhdWWeEeABRfBs_8NiwXwgN5mVWS6_-g?e=sEHNzc",
          },
        ],
      },
      {
        courseName: "工具/儀器/安全護具教學",
        courseID: "PCB003",
        description:
          "工欲善其事，必先利其器，安全第一。為工程師做任何工作時的兩個首要考慮。如何選正確的工具及用安全方式操作，會在這單元一目了然！",
        categoryID: "hardware",
        image:
          "https://i.imgur.com/FXxenv1_d.webp?maxwidth=1520&fidelity=grand",
        resources: [],
      },
      {
        courseName: "FPGA",
        courseID: "FPGA",
        description:
          "工欲善其事，必先利其器，安全第一。為工程師做任何工作時的兩個首要考慮。如何選正確的工具及用安全方式操作，會在這單元一目了然！",
        categoryID: "hardware",
        image:
          "https://i.imgur.com/FXxenv1_d.webp?maxwidth=1520&fidelity=grand",
        resources: [
          {
            topic: "SMT焊接練習",
            downloadUrl:
              "https://stemturnede.sharepoint.com/:f:/g/ErreMwHcNNFBqaUMC_CkwfoBoSdOHUGyO5NgvckfclkyJw?e=fxx8sO",
          },
        ],
      },
    ],
  },
  {
    categoryID: "omron",
    categoryDescription: "雪花燈PCB焊接X機械人建設體驗",
    courses: [
      {
        courseName: "Omron Team Building",
        courseID: "Workshop001",
        description: "雪花燈PCB焊接X機械人建設體驗",
        categoryID: "omron",
        image:
          "https://i.imgur.com/g6zJVtg_d.webp?maxwidth=1520&fidelity=grand",
        downloadUrl:
          "https://stemturnede.sharepoint.com/sites/info.public.turned-e/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2Finfo%2Epublic%2Eturned-e%2FShared%20Documents%2FCourse&p=true&ga=1",
        resources: [
          {
            topic: "雪花燈PCB焊接",
            downloadUrl:
              "https://stemturnede.sharepoint.com/:f:/g/EtfhphvllTBJiRd2jM258-UBxT0eFYcbL6rRkES8rtYkew?e=n2LYLN",
          },
          {
            topic: "機械人建設體驗",
            downloadUrl:
              "https://stemturnede.sharepoint.com/:f:/g/Ehf4Ikh1odNIniONauGLipgBpTJJOMO9pPDX8rfccziOiw?e=kt5A76",
          },
        ],
      },
    ],
  },
  {
    categoryID: "PCB Competition",
    categoryDescription: "Semtron PCB Competition 2023",
    courses: [
      {
        courseName: "Semtron PCB Competition",
        courseID: "SPC2023",
        description: "Semtron PCB Competition 2023",
        categoryID: "PCB Competition",
        image:
          "https://i.imgur.com/g6zJVtg_d.webp?maxwidth=1520&fidelity=grand",
        downloadUrl:
          "https://stemturnede.sharepoint.com/sites/info.public.turned-e/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2Finfo%2Epublic%2Eturned-e%2FShared%20Documents%2FCourse&p=true&ga=1",
        resources: [
          {
            topic: "比賽工作坊",
            downloadUrl:
              "https://stemturnede.sharepoint.com/:f:/g/EkM0NVWQYFBItvjXv6wuSgUBGK6kZtXh5IGdSF4ZaFCJtQ?e=OmevGW",
          },
          {
            topic: "工具教學及設計Tips",
            downloadUrl:
              "https://stemturnede.sharepoint.com/:f:/g/EqU05ASNB2pMqg9BlhT6JV0BC1_T37qLaOd6GBOP9p2wMQ?e=X7jZEU",
          },
        ],
      },
    ],
  },
  {
    categoryID: "Software_Driver",
    categoryDescription: "Software Driver download",
    courses: [
      {
        courseName: "Software and Driver download",
        courseID: "SD001",
        description: "Software Driver download",
        categoryID: "Software_Driver",
        image:
          "https://i.imgur.com/VbRhuUb.jpeg",
        downloadUrl:
          "https://stemturnede.sharepoint.com/sites/info.public.turned-e/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2Finfo%2Epublic%2Eturned-e%2FShared%20Documents%2FCourse&p=true&ga=1",
        resources: [
          {
            topic: "CH340_Driver",
            downloadUrl:
              "https://stemturnede.sharepoint.com/:f:/g/Et31Os9OWVtPtCfXBI7xNLoBDBDwS54WX4Wt-5ygcswKlg?e=lL7kCM",
          },
          {
            topic: "CP2102_Driver",
            downloadUrl:
              "https://stemturnede.sharepoint.com/:f:/g/EjfxawEHArBCse8LybogZuYBnfs-UoHICpjWIeX0JhgZQQ?e=l2oNdW",
          },
        ],
      },
    ],
  },
];
