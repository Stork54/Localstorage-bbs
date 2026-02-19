// ===== storage.js =====

// 更新畫面上的 Local Storage 列表
function renderStorage(){
  const container = document.getElementById("storage-list");
  container.innerHTML = ""; // 清空列表

  if(localStorage.length === 0){
    container.innerHTML = "<p>目前沒有任何資料</p>";
    return;
  }

  for(let i = 0; i < localStorage.length; i++){
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);

    // 建立每一筆的元素
    let item = document.createElement("div");
    item.style.display = "flex";
    item.style.justifyContent = "space-between";
    item.style.alignItems = "center";
    item.style.marginBottom = "8px";
    item.style.background = "#111";
    item.style.padding = "8px 12px";
    item.style.border = "1px solid #00ff00";
    item.style.borderRadius = "6px";

    let text = document.createElement("span");
    text.textContent = `${key} = ${value}`;
    item.appendChild(text);

    let btn = document.createElement("button");
    btn.textContent = "❌";
    btn.style.padding = "4px 8px";
    btn.style.fontSize = "14px";
    btn.onclick = () => {
      localStorage.removeItem(key);
      renderStorage(); // 刪掉後更新列表
    };
    item.appendChild(btn);

    container.appendChild(item);
  }
}

// 新增或更新 key
function setKey(){
  let key = prompt("輸入 key 名稱");
  if(!key) return;
  let value = prompt("輸入對應的 value");
  if(value !== null){
    localStorage.setItem(key, value);
    renderStorage();
  }
}

// 清空全部 Local Storage
function clearAll(){
  if(confirm("確定要清空全部 Local Storage 嗎？")){
    localStorage.clear();
    renderStorage();
  }
}

// 初始渲染
document.addEventListener("DOMContentLoaded", renderStorage);
