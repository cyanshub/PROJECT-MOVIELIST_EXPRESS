// 使用 import 方法導入 json 檔案
import data_json from "./data.json" assert{type:"json"};
const movies = data_json.movies;


// 選取要進行DOM操作的html標記
const dataPanel = document.querySelector("#data-panel-movielist");
const dataPanelShow = document.querySelector("#data-panel-movielist-show");
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input")



