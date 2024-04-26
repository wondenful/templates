window.onload = function () {
  // mouse scroll
  var a = document.getElementById("step-container");
  var scroll_width = 100; //滚动一下的距离
  if (document.addEventListener) {
    document.addEventListener("DOMMouseScroll", mousewheel_event, false); // FF
  }
  a.onmousewheel = mousewheel_event; // IE/Opera/Chrome
  function mousewheel_event(e) {
    var e = e || window.event,
      v;
    e.wheelDelta ? (v = e.wheelDelta) : (v = e.detail);
    if (v > 3 || -v > 3) v = -v;
    v > 0 ? (a.scrollLeft += scroll_width) : (a.scrollLeft -= scroll_width);

    e.preventDefault(); //阻止浏览器的默认滚动
  }
  review(Good_review[1], 1);
  review(Bad_review[1], 2);
  // initChart();
  // initBubble();
  // bubbleAnimation();
};

const dataTxt = [
  [
    "社会主义工业化",
    "计划经济体制",
    "乡村振兴",
    "“一带一路”",
    "基本消除贫困",
    "国防力量",
    "对外贸易",
    "三线建设",
    "发展农业",
    "“一带一路”",
    "供给侧结构性改革",
    "制造强国",
    "现代产业体系",
    "乡村振兴",
    "社会主义先进文化",
    "新型城镇化战略",
  ],
  ["社会主义工业化", "计划经济体制", "社会主义改造", "现代化武器", "基本建设"],
  [
    "八字方针",
    "国民经济技术改造",
    "国防力量",
    "建设社会主义",
    "改变工业布局",
    "国防科技",
  ],
  ["国防建设", "三线建设", "发展农业", "建设社会主义", "改变工业布局"],
  ["农业机械化", "发展新技术", "三线建设", "狠抓战备", "经济协作区"],
  ["农业机械化", "国民经济比例", "生产建设发展", "调整", "改革"],
  ["社会发展", "家庭联产承包责任制", "农业改革", "对外开放", "财政经济"],
  ["全面经济改革", "所有制结构", "经济运行新体制", "财政经济", "经济体制改革"],
  ["经济体制改革", "对外贸易", "对外开放总体格局", "翻两番", "上海浦东"],
  [
    "现代化建设",
    "现代企业制度建设",
    "社会主义市场经济体制",
    "小康",
    "基本消除贫困",
  ],
  ["可持续发展", "西部大开发", "城镇化", "产业结构优化", "小康"],
  ["科学发展观", "“六个必须”", "人才强国", "社会主义新农村", "环境友好型社会"],
  ["现代农业", "区域协调发展", "科技创新", "教育改革", "改善民生"],
  ["“一带一路”", "供给侧结构性改革", "制造强国", "四个全面", "高质量发展"],
  [
    "现代产业体系",
    "乡村振兴",
    "社会主义先进文化",
    "新型城镇化战略",
    "深化改革开放",
    "高质量发展",
    "创新驱动",
  ],
];

const newData = [
  { value: 10, name: "乐观" },
  { value: 20, name: "赞赏" },
  { value: 15, name: "感激" },
  { value: 25, name: "中立" },
  { value: 5, name: "疑惑" },
  { value: 30, name: "焦虑" },
  { value: 12, name: "愤怒" },
  { value: 18, name: "恐惧" },
];

const dataLink = [
  "https://www.baidu.com/",
  "https://github.com/RNCHEN/2022-cdc/blob/main/README.md",
  "https://github.com/RNCHEN/2022-cdc/blob/main/README.md",
  "https://www.baidu.com/",
  "https://www.baidu.com/",
  "https://www.baidu.com/",
  "https://www.baidu.com/",
  "https://www.baidu.com/",
  "https://www.baidu.com/",
  "https://www.baidu.com/",
  "https://www.baidu.com/",
  "https://www.baidu.com/",
  "https://github.com/RNCHEN/2022-cdc/blob/main/README.md",
  "https://github.com/RNCHEN/2022-cdc/blob/main/README.md",
  "https://github.com/RNCHEN/2022-cdc/blob/main/README.md",
  "https://github.com/RNCHEN/2022-cdc/blob/main/README.md",
];

const data = [
  [
    "0",
    "2,875",
    "2,628",
    "247",
    "33 %",
    "30 %",
    "30 %",
    "7 %",
    "78",
    "11,111",
    "9,999",
    "2,222",
    "1,642",
    "5,444",
    "200",
  ],
  [
    "1",
    "3,083",
    "2,902",
    "181",
    "33 %",
    "22 %",
    "15 %",
    "30 %",
    "77",
    "10,001",
    "9,123",
    "2,111",
    "1,746",
    "6,627",
    "200",
  ],
  [
    "2",
    "2,891",
    "2,781",
    "110",
    "20 %",
    "20 %",
    "20 %",
    "40 %",
    "74",
    "9,121",
    "8,333",
    "2,421",
    "1,999",
    "6,311",
    "512",
  ],
  [
    "3",
    "3,201",
    "2,683",
    "518",
    "33 %",
    "22 %",
    "15 %",
    "30 %",
    "78",
    "9,022",
    "8,143",
    "2,666",
    "1,123",
    "5,627",
    "252",
  ],
  [
    "4",
    "3,272",
    "2,876",
    "396",
    "30 %",
    "20 %",
    "20 %",
    "30 %",
    "74",
    "8,111",
    "7,999",
    "2,222",
    "1,888",
    "4,521",
    "512",
  ],
  [
    "5",
    "3,421",
    "3,093",
    "328",
    "11 %",
    "22 %",
    "10 %",
    "57 %",
    "72",
    "7,111",
    "6,999",
    "2,421",
    "1,746",
    "4,627",
    "772",
  ],
  [
    "6",
    "2,870",
    "2,927",
    "107",
    "30 %",
    "20 %",
    "10 %",
    "40 %",
    "76",
    "6,999",
    "5,999",
    "2,666",
    "1,999",
    "5,252",
    "200",
  ],
  [
    "7",
    "2,893",
    "34",
    "2,763",
    "33 %",
    "30 %",
    "30 %",
    "7 %",
    "78",
    "6,624",
    "5,999",
    "2,521",
    "1,888",
    "5,421",
    "200",
  ],
  [
    "8",
    "3,318",
    "2,992",
    "326",
    "20 %",
    "20 %",
    "20 %",
    "40 %",
    "79",
    "6,321",
    "5,759",
    "2,521",
    "1,242",
    "5,624",
    "627",
  ],
  [
    "9",
    "3,064",
    "2,926",
    "138",
    "33 %",
    "22 %",
    "15 %",
    "30 %",
    "82",
    "6,111",
    "5,999",
    "2,222",
    "1,888",
    "4,521",
    "200",
  ],
  [
    "10",
    "3,167",
    "2,783",
    "384",
    "30 %",
    "20 %",
    "20 %",
    "30 %",
    "73",
    "6,007",
    "5,899",
    "2,666",
    "1,999",
    "5,252",
    "772",
  ],
  [
    "11",
    "3,250",
    "2,906",
    "344",
    "11 %",
    "22 %",
    "10 %",
    "57 %",
    "75",
    "5,811",
    "4,989",
    "2,521",
    "1,242",
    "5,624",
    "252",
  ],
  [
    "12",
    "3,141",
    "2,131",
    "1,010",
    "30 %",
    "20 %",
    "10 %",
    "40 %",
    "72",
    "5,541",
    "4,990",
    "2,222",
    "1,746",
    "6,624",
    "521",
  ],
  [
    "13",
    "3,180",
    "1,195",
    "1,985",
    "27 %",
    "20 %",
    "20 %",
    "33 %",
    "79",
    "5,321",
    "4,990",
    "2,666",
    "1,123",
    "5,742",
    "772",
  ],
  [
    "14",
    "3,136",
    "1,240",
    "1,896",
    "33 %",
    "30 %",
    "30 %",
    "7 %",
    "71",
    "5,111",
    "4,939",
    "2,521",
    "1,888",
    "5,444",
    "200",
  ],
];

const previous_btn = document.querySelector("#previous-btn");
const next_btn = document.querySelector("#next-btn");
const step_circle = document.querySelectorAll(".step-circle");
const step_line = document.querySelectorAll(".step-line");

// pie 数据生成
function pieRandomData(data) {
  const newData = [];
  data.forEach((item) => {
    const randomValue = Math.floor(Math.random() * 100);
    newData.push({ value: randomValue, name: item.name });
  });
  return newData;
}

function generateData(initialOrders, initialAmount) {
  var data = {
    day30: {
      orders: formatNumber(Math.round(initialOrders)),
      amount: formatNumber(Math.round(initialAmount)),
    },
    day7: {
      orders: formatNumber(Math.round(initialOrders * 0.027)),
      amount: formatNumber(Math.round(initialAmount * 0.093)),
    },
    day3: {
      orders: formatNumber(Math.round(initialOrders * 0.0001788)),
      amount: formatNumber(Math.round(initialAmount * 0.0387)),
    },
    day1: {
      orders: formatNumber(Math.round(initialOrders * 0.0000887)),
      amount: formatNumber(Math.round(initialAmount * 0.00834)),
    },
  };
  return data;
}

// 格式化数字（辅助函数）
function formatNumber(number) {
  return number.toLocaleString("en-US");
}

//生成数组（长度，范围）
function generateRandomData(length, min, max) {
  var data = [];
  for (var i = 0; i < length; i++) {
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    data.push(randomNumber);
  }
  return data;
}

// 随机生成整数
function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function exCharts(e) {
  // goodFetchData();
  // badFetchData();
  // 使用 ECharts API 获取实例
  // var myChart = echarts.getInstanceByDom($(".pie").get(0));

  // 饼图
  const data1 = pieRandomData(newData);
  var myEchart = pieEchart;
  myEchart.setOption({
    series: [
      {
        data: data1,
      },
    ],
  });

  // 轮播数字
  datalinks = generateData(
    generateRandomInteger(100000, 500000),
    generateRandomInteger(10000, 50000)
  );
  document.getElementById("day30").click();

  // 柱状图
  const data2 = generateRandomData(7, 100, 2000); // 生成 7 个介于 100 到 2000 之间的随机数
  myEchart = barEchart;
  myEchart.setOption({
    series: [
      {
        data: data2,
      },
    ],
  });

  // 折线图
  const data3 = {
    month: [generateRandomData(7, 0, 100), generateRandomData(7, 0, 100)],
    week: [generateRandomData(7, 0, 100), generateRandomData(7, 0, 100)],
    day: [generateRandomData(7, 0, 100), generateRandomData(7, 0, 100)],
    hour: [generateRandomData(6, 0, 100), generateRandomData(6, 0, 100)],
  };
  linedata = data3;
  document.getElementById("month").click();

  // 日历热力图
  const data4 = getVirtualData(2024);
  myEchart = riEchart;
  myEchart.setOption({
    series: [
      {
        data: data4,
      },
    ],
  });

  // 评论
  review(Good_review[e], 1);
  review(Bad_review[e], 2);
}

//凸显图表
function getID(e) {
  // console.log("step_circle=", step_circle[e]);
  //  we add class to the current and remove other class
  // pay attention to the first and the last
  // console.log("id=", e);
  // add exemplify calss to this item
  let circle = step_circle[e];
  circle.classList.add("step-circle-active-more", "step-circle-active");
  // console.log("main ememplify finished");
  // add a smaller exemplify class to the near by class
  //judge if node is the first two or the last two
  if (e == 0 || e == 10) {
    let circle2 = step_circle[e + 1];
    circle2.classList.add("step-circle-active-more-1");
    circle2 = step_circle[e + 2];
    circle2.classList.add("step-circle-active-more-2");
  } else {
    //
    let circle2 = step_circle[e - 1];
    if (circle2) {
      circle2.classList.add("step-circle-active-more-1");
    }
    circle2 = step_circle[e + 1];
    if (circle2) {
      circle2.classList.add("step-circle-active-more-1");
    }
    circle2 = step_circle[e + 2];
    if (circle2) {
      circle2.classList.add("step-circle-active-more+2");
    }
    circle2 = step_circle[e - 2];
    if (circle2) {
      circle2.classList.add("step-circle-active-more-2");
    }
  }
}
// remove all effective
function removeEffect(e) {
  for (let index = 0; index < step_circle.length; index++) {
    let circleCancel = step_circle[index];
    circleCancel.classList.remove(
      "step-circle-active",
      "step-circle-active-more",
      "step-circle-active-more-1",
      "step-circle-active-more-2"
    );
  }
}

function showTxt(e) {
  var title = document.getElementById("title");
  if (title) {
    title.innerHTML = titleData[e]; // modify the title
    var fontSize = 2 - titleData[e].length * 0.04; // 根据文本长度计算字体大小
    title.style.fontSize = fontSize + "rem"; // 设置字体大小
    for (let i = 1; i <= 8; i++) {
      document.getElementById("data" + i).innerHTML = data[e][i - 1];
    }
    for (let i = 9; i <= 9; i++) {
      document.getElementById("data9").innerHTML = `
    ${data[e][i - 1]}<small> %</small>
`;
    }
    for (let i = 10; i <= 15; i++) {
      document.getElementById("data" + i).innerHTML = data[e][i - 1];
    }
  }
  // if(e==0){
  //     window.location.href="t2.html"
  // }
}

// var dom = document.getElementById("echarts_adata");
// var myChart = echarts.init(dom);

// function initChart() {
//   var app = {};
//   var option;
//   var ROOT_PATH =
//     "https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples";

//   $.get(
//     ROOT_PATH + "/data/asset/data/life-expectancy-table.json",
//     function (_rawData) {
//       run(_rawData);
//       myChart.setOption(option);
//     }
//   );
//   function run(_rawData) {
//     // var countries = ['Australia', 'Canada', 'China', 'Cuba', 'Finland', 'France', 'Germany', 'Iceland', 'India', 'Japan', 'North Korea', 'South Korea', 'New Zealand', 'Norway', 'Poland', 'Russia', 'Turkey', 'United Kingdom', 'United States'];
//     const countries = [
//       "China",
//       "North Korea",
//       "India",

//       // 'South Korea'
//     ];
//     const datasetWithFilters = [];
//     const seriesList = [];
//     echarts.util.each(countries, function (country) {
//       var datasetId = "dataset_" + country;
//       datasetWithFilters.push({
//         id: datasetId,
//         fromDatasetId: "dataset_raw",
//         transform: {
//           type: "filter",
//           config: {
//             and: [
//               { dimension: "Year", gte: 1950 },
//               { dimension: "Country", "=": country },
//             ],
//           },
//         },
//       });
//       seriesList.push({
//         type: "line",
//         datasetId: datasetId,
//         showSymbol: false,
//         name: country,
//         lineStyle: {
//           width: 4,
//         },
//         endLabel: {
//           show: true,
//           formatter: function (params) {
//             return params.value[3] + ": " + params.value[0];
//           },
//         },
//         labelLayout: {
//           moveOverlap: "shiftY",
//         },
//         emphasis: {
//           focus: "series",
//         },
//         encode: {
//           x: "Year",

//           y: "Income",
//           label: ["Country", "Income"],
//           itemName: "Year",
//           tooltip: ["Income"],
//         },
//       });
//     });
//     option = {
//       animationDuration: 10000,
//       dataset: [
//         {
//           id: "dataset_raw",
//           source: _rawData,
//         },
//         ...datasetWithFilters,
//       ],
//       title: {
//         text: "GDP",
//         textStyle: {
//           color: "#ffffff",
//         },
//       },
//       tooltip: {
//         order: "valueDesc",
//         trigger: "axis",
//       },
//       xAxis: {
//         type: "category",
//         nameLocation: "middle",
//         axisLabel: {
//           fontWeight: "bold",
//           fontStyle: "normal",
//           color: "#ffffff",
//           fontSize: 12,
//         },
//       },
//       yAxis: {
//         name: "",
//         axisLabel: {
//           fontWeight: "bold",
//           fontStyle: "normal",
//           color: "#ffffff",
//           fontSize: 12,
//         },
//       },
//       grid: {
//         right: 140,
//       },
//       series: seriesList,
//     };
//   }
// }

// function exCharts(e) {
//   // myChart.setOption(option);
//   echarts.dispose(myChart);
//   var dom = document.getElementById("echarts_adata");
//   var myChartafter = echarts.init(dom);
//   var data = [
//     [337, 351, 372, 420, 436],
//     [534, 588, 597, 500, 472],
//     [507, 597, 704],
//     [767, 728, 708, 797, 926],

//     [998, 1136, 1385, 1441, 1634],
//     [1539, 1749, 1495, 1782, 1911],
//     [1958, 2050, 2306, 2599, 3094],

//     [3007, 2729, 3123, 3477, 3608],
//     [3833, 4269, 4447, 5643, 7345],
//     [8637, 9616, 10290, 10939, 12113],

//     [13393, 14705, 16602, 19553, 22859],
//     [27521, 35503, 45943, 51017, 60871],
//     [75515, 85322, 95704, 104756, 110615],

//     [112332, 123104, 138948, 142799, 147227],
//   ];
//   var date = [
//     ["1953", "1954", "1955", "1956", "1957"],
//     ["1958", "1959", "1960", "1961", "1962"],
//     ["1963", "1964", "1965"],
//     ["1966", "1967", "1968", "1969", "1970"],

//     ["1971", "1972", "1973", "1974", "1975"],
//     ["1976", "1977", "1978", "1979", "1980"],
//     ["1981", "1982", "1983", "1984", "1985"],

//     ["1986", "1987", "1988", "1989", "1990"],
//     ["1991", "1992", "1993", "1994", "1995"],
//     ["1996", "1997", "1998", "1999", "2000"],

//     ["2001", "2002", "2003", "2004", "2005"],
//     ["2006", "2007", "2008", "2009", "2010"],
//     ["2011", "2012", "2013", "2014", "2015"],

//     ["2016", "2017", "2018", "2019", "2020"],
//   ];

//   if (e == 0) {
//     //introduction of 5 year plan

//     if (myChartafter_0) {
//       echarts.dispose(myChartafter_0);
//     }
//     if (myChartafter) {
//       echarts.dispose(myChartafter);
//     }
//     var dom = document.getElementById("echarts_adata");
//     var myChartafter = echarts.init(dom);
//     options = {
//       color: ["#b2c584", "#ff5f2e"],
//       // #114d8f
//       title: {
//         // text: '发展成果'
//       },
//       legend: {},
//       radar: [
//         {
//           indicator: [
//             { text: "新冠疫苗接种计数" },
//             { text: "高铁总里程数" },
//             { text: "移动互联网用户" },
//             { text: "GDP" },
//             { text: "专利申请数" },
//             { text: "汽车制造" },
//           ],
//           center: ["50%", "50%"],
//           radius: 130,
//           startAngle: 90,
//           splitNumber: 4,
//           shape: "circle",
//           axisName: {
//             formatter: "{value}",
//             color: "#ddfbfa",
//             fontSize: 18,
//           },
//           splitArea: {
//             areaStyle: {
//               color: ["#fac474", "#f99e43", "#fac474", "#f99e43"],
//               shadowColor: "rgba(0, 0, 0, 0.2)",
//               shadowBlur: 10,
//             },
//           },
//           axisLine: {
//             lineStyle: {
//               color: "#fff",
//             },
//           },
//           splitLine: {
//             lineStyle: {
//               color: "#fff",
//             },
//           },
//         },
//       ],
//       series: [
//         {
//           type: "radar",
//           emphasis: {
//             lineStyle: {
//               width: 4,
//             },
//           },

//           data: [
//             {
//               value: [2, 2, 2, 2, 2, 2],
//               name: "开始计划之前",
//             },
//             {
//               value: [7, 7, 7, 5, 7, 7],
//               name: "之后",
//               areaStyle: {
//                 color: "#fac474",
//               },
//             },
//           ],
//         },
//       ],
//     };
//     console.log("options=", options);
//     myChartafter.setOption(options);
//   } else if (e == 14) {
//     // 145
//     echarts.dispose(myChartafter);
//     if (myChartafter_0) {
//       echarts.dispose(myChartafter_0);
//     }
//     var dom = document.getElementById("echarts_adata");
//     var myChartafter_0 = echarts.init(dom);

//     options = {
//       legend: {
//         top: "bottom",
//       },
//       tooltip: {
//         trigger: "item",
//         formatter: "{a} <br/>{b} : {c} ({d}%)",
//       },
//       toolbox: {
//         show: false,
//         feature: {
//           mark: { show: true },
//           dataView: { show: true, readOnly: false },
//           restore: { show: true },
//           saveAsImage: { show: true },
//         },
//       },
//       series: [
//         {
//           name: "十四五的主要指标",
//           type: "pie",
//           radius: [50, 200],
//           center: ["50%", "50%"],
//           roseType: "area",
//           itemStyle: {
//             borderRadius: 8,
//           },
//           label: {
//             show: true,
//             fontFamily: "Arial",
//             fontSize: 17,
//           },
//           data: [
//             { value: 7, name: "民生福祉" },
//             { value: 5, name: "绿色生态" },
//             { value: 3, name: "经济发展" },
//             { value: 3, name: "创新驱动" },
//             { value: 2, name: "安全保障" },
//           ],
//         },
//       ],
//     };
//     console.log("options=", options);
//     myChartafter_0.setOption(options);
//   } else {
//     echarts.dispose(myChartafter);
//     if (myChartafter_0) {
//       echarts.dispose(myChartafter_0);
//     }
//     var dom = document.getElementById("echarts_adata");
//     var myChartafter_0 = echarts.init(dom);
//     options = {
//       legend: {
//         lineStyle: {
//           width: 5.5,
//           color: "black",
//         },
//       },
//       tooltip: {
//         trigger: "axis",
//       },
//       xAxis: {
//         type: "category",
//         data: date[e - 1],
//         axisLabel: {
//           fontWeight: "bold",
//           fontStyle: "normal",
//           color: "#fffffff",
//           fontSize: 18,
//         },
//       },
//       yAxis: {
//         type: "value",
//         name: "GDP(美元)",
//         nameTextStyle: {
//           fontWeight: "bold",
//           color: "#ffffff",
//         },
//         axisLabel: {
//           fontWeight: "bold",
//           fontStyle: "normal",
//           color: "#ffffff",
//         },
//       },
//       series: [
//         {
//           data: data[e - 1],
//           type: "line",
//           showSymbol: true,
//           smooth: true,
//           symbolSize: 9,

//           itemStyle: {
//             color: "#ff5f2e",
//           },
//           lineStyle: {
//             width: 4,
//           },
//           encode: {
//             x: "Year",
//             y: "Income",
//             itemName: "Year",
//             tooltip: ["Income"],
//           },
//         },
//       ],
//     };
//     console.log("options=", options);
//     myChartafter_0.setOption(options);
//   }

//   // 使用刚指定的配置项和数据显示图表。
// }

// function initBubble() {
//   //创建一个元素，放所有的小圆
//   var circleBox = document.createElement("div");
//   circleBox.style.cssText = `
//     display:flex;
//     width:500px;
//     position:relative;
//     flex-wrap: wrap;`;
//   //获取随机数   from 参数表示从哪个数开始  to参数表示到哪个数结束 from<= num <= to
//   function randomNum(from, to) {
//     from = Number(from);
//     to = Number(to);
//     var Range = to - from;
//     var num = from + Math.round(Math.random() * Range); //四舍五入
//     return num;
//   }

//   for (var i = 0; i < 13; i++) {
//     //创建小圆
//     var circle = document.createElement("div");
//     // console.log('dataTxt', dataTxt[0][i])
//     circle.innerHTML = dataTxt[0][i];
//     // 下面的4个变量 代表小圆随机位置  和 随机持续时间和延迟
//     var bottom = randomNum(10, 1000);
//     var left = randomNum(0, 200);
//     var duration = randomNum(20, 30) / 1;
//     var delay = randomNum(1, 10);
//     // console.log('left', left);
//     circle.style.cssText += `

//         flex-direction: column;
//         position:absolute;
//         animation-fill-mode: forwards;
//         animation-iteration-count:infinite;
//         flex-wrap:  wrap;
//         left:${left}px;
//         background-color: aqua
//         cursor:default;
//         display:flex;
//         width: 80px;
//         height: 80px;
//         background: rgba(255, 255, 255, 0.3);
//         border-radius: 50%;
//         text-align: center;
//         justify-content: center;
//             `;
//     if (i % 2) {
//       circle.style.cssText += `  animation:move2 ${duration}s linear ${delay}s infinite;`;
//     } else {
//       circle.style.cssText += `  animation:move1 ${duration}s linear ${delay}s infinite;`;
//     }
//     circle.className += " dot";
//     // console.log('CIRCLE', i, circle)
//     //把每个小圆 都加入这个div
//     circleBox.appendChild(circle);
//   }
//   divList = circleBox.querySelectorAll(".dot");
//   for (let index = 0; index < divList.length; index++) {
//     divList[index].onclick = () => {
//       // window.location.href = dataLink[index]
//     };
//   }
//   var fire = document.querySelector(".fire");
//   //把有40个随机小圆的 div 加入DOM树
//   fire.appendChild(circleBox);
// }

// function exBubble(e) {
//   var fire = document.querySelector(".fire");
//   // console.log("fire=", fire.children[0]);
//   fire.children[0].remove();
//   // console.log("in fire =", fire);
//   var circleBox = document.createElement("div");
//   circleBox.style.cssText = `
//     display:flex;
//     width:500px;
//     position:relative;
//     flex-wrap: wrap;
//     `;
//   //获取随机数   from 参数表示从哪个数开始  to参数表示到哪个数结束 from<= num <= to
//   function randomNum(from, to) {
//     from = Number(from);
//     to = Number(to);
//     var Range = to - from;
//     var num = from + Math.round(Math.random() * Range); //四舍五入
//     return num;
//   }
//   for (var i = 0; i < 5; i++) {
//     //创建泡泡
//     var circle = document.createElement("div");
//     circle.innerHTML = dataTxt[e][i];
//     // 下面的4个变量 代表小圆随机位置  和 随机持续时间和延迟
//     var bottom = randomNum(10, 1000);
//     var left = randomNum(0, 1000);
//     var duration = randomNum(10, 20) / 1;
//     var delay = randomNum(0, 50) / 10;

//     // console.log("i", i);
//     circle.id = i;
//     circle.style.cssText += `
//         flex-direction: column;
//         position:absolute;
//         animation-fill-mode: forwards;
//         animation-iteration-count:infinite;
//         flex-wrap:  wrap;
//         left:${left}px;
//         background-color: aqua
//         cursor:default;
//         display:flex;
//         width: 80px;
//         height: 80px;
//         background: rgba(255, 255, 255, 0.3);
//         border-radius: 50%;
//         text-align: center;
//         justify-content: center;
//             `;
//     if (i % 2) {
//       circle.style.cssText += `  animation:move2 ${duration}s linear 0s infinite;`;
//     } else {
//       circle.style.cssText += `  animation:move1 ${duration}s linear ${delay}s infinite;`;
//     }
//     circle.className += " dot";
//     // console.log("CIRCLE", i, circle);
//     //把每个小圆 都加入这个div
//     circleBox.appendChild(circle);
//   }
//   // 添加事件
//   divList = circleBox.querySelectorAll(".dot");
//   // console.log("divlist", divList);
//   for (let index = 0; index < divList.length; index++) {
//     divList[index].onclick = () => {
//       // window.location.href = dataLink[index]
//     };
//   }
//   var fire = document.querySelector(".fire");
//   //把有40个随机小圆的 div 加入DOM树
//   fire.appendChild(circleBox);
// }

// function bubbleAnimation() {
//   function randomNum(from, to) {
//     from = Number(from);
//     to = Number(to);
//     var Range = to - from;
//     var num = from + Math.round(Math.random() * Range); //四舍五入
//     return num;
//   }

//   var node = document.querySelector(".fire");
//   // console.log("we choose the\n", node.children[0].children[0]);
//   // console.log("LEFT = \n", node.children[0].children[0].style.left);

//   setInterval(function () {
//     once = node.children[0].children[0].style.left;
//     once = parseInt(once);
//     // console.log("onceB", once);
//     n = randomNum(-5, 5);
//     n = n + once;
//     // console.log("n", n);
//     node.children[0].children[0].style.setProperty("left", n + "px");
//     // console.log("onceA", node.children[0].children[0].style.left);
//   }, 500);
// }

function Star() {
  localStorage.setItem("flag", flag);
  window.location.href = "star.html";
}

function exBubble(e) {
  // 存储数据到 localStorage
  localStorage.setItem("e", e);
  localStorage.setItem("flag", flag);
  if (e == 0) {
    window.location.href = "index_first.html";
  } else {
    // 跳转到目标页面
    window.location.href = "index_start.html";
  }
}

var flag;

document.addEventListener("DOMContentLoaded", function () {
  var e = localStorage.getItem("e");
  if (!e) {
    e = 0;
  }
  console.log("e", e);
  flag = localStorage.getItem("flag");
  if (e != 0) {
    showTxt(e);
    exCharts(e);
  }
  flag--;
  changeBg();
  // 清除 localStorage 中的数据，确保下次不再执行
  localStorage.removeItem("e");
});

function changeBg() {
  flag++;
  localStorage.setItem("flag", flag);
  var mainColor = document.getElementById("hero").style;
  var mainColor2 = document.getElementById("particles-js").style;
  // var navColor = document.getElementById("navbar");
  var txt = document.getElementById("txt-toggle");
  if (flag == 0) {
    var mainColor = document.getElementById("hero").style;
    var mainColor2 = document.getElementById("particles-js").style;
    mainColor.backgroundImage = "none"; // 移除背景图片
    mainColor2.backgroundImage = "none";
    mainColor.background = "linear-gradient(0deg, #3186c2 0%, #6545f3 100%)"; // 设置背景渐变样式
    mainColor2.background = "linear-gradient(0deg, #3186c2 0%, #6545f3 100%)";
    txt.innerHTML = "天蓝";
  } else if (flag % 2) {
    mainColor.background = "#101129";
    mainColor2.background = "#101129";
    txt.innerHTML = "深蓝";
  } else {
    mainColor.backgroundImage = "url(./images/bg.png)";
    mainColor2.backgroundImage = "url(./images/bg.png)";
    // mainColor.background =
    // "linear-gradient(0deg, #ffffff 0%, #1b2838 100%)";
    txt.innerHTML = "星空";
  }
}
function returnBg() {
  flag = -1;
  changeBg();
}
