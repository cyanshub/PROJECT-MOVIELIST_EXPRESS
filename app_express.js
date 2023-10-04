// 設定連接埠
const port = 3000;

// 載入express框架
const express = require("express");
const app = express();

// 載入樣板引擎
const exphbs = require("express-handlebars");

// 在express框架中使用各種方法進行設定
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.use(express.static("public"));


// 載入外部檔案: data.json
const data_json = require("./public/data.json");
const movies = data_json.movies;


// 使用.get方法設定首頁讀取路徑與渲染頁面
// 首頁
app.get("/", (req,res)=>{
  console.log("載入電影資料的第一部:",movies[0]);
  res.render("index", {movies:movies})
})




// 啟動並監聽伺服器
app.listen(port,()=>{
  console.log(`Express is running on http:localhost:${port}`);
})









