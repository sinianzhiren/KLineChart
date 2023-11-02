const n=JSON.parse(`{"index.css":".button-container {\\n  display: flex;\\n  flex-wrap: wrap;\\n  align-items: center;\\n  gap: 8px;\\n  margin-top: 10px;\\n  padding: 10px 22px;\\n}\\n\\n.button-container button {\\n  padding: 2px 6px;\\n  background-color: #1677FF;\\n  border-radius: 4px;\\n  font-size: 12px;\\n  color: #fff;\\n  outline: none;\\n  border: none;\\n}","index.html":"<div id=\\"container\\">\\n  <div id=\\"k-line-chart\\" style=\\"height:430px\\">\\n</div>","index.js":"import { init } from 'klinecharts'\\nimport './index.css'\\n\\nfunction genData (timestamp = new Date().getTime(), length = 800) {\\n  let basePrice = 5000\\n  timestamp = Math.floor(timestamp / 1000 / 60) * 60 * 1000 - length * 60 * 1000\\n  const dataList = []\\n  for (let i = 0; i < length; i++) {\\n    const prices = []\\n    for (let j = 0; j < 4; j++) {\\n      prices.push(basePrice + Math.random() * 60 - 30)\\n    }\\n    prices.sort()\\n    const open = +(prices[Math.round(Math.random() * 3)].toFixed(2))\\n    const high = +(prices[3].toFixed(2))\\n    const low = +(prices[0].toFixed(2))\\n    const close = +(prices[Math.round(Math.random() * 3)].toFixed(2))\\n    const volume = Math.round(Math.random() * 100) + 10\\n    const turnover = (open + high + low + close) / 4 * volume\\n    dataList.push({ timestamp, open, high,low, close, volume, turnover })\\n\\n    basePrice = close\\n    timestamp += 60 * 1000\\n  }\\n  return dataList\\n}\\n\\nconst chart = init('k-line-chart')\\nchart.applyNewData(genData())\\n\\nfunction setTimezone (timezone) {\\n  chart.setTimezone(timezone)\\n}\\n\\n// 以下仅仅是为了协助代码演示，在实际项目中根据情况进行调整。\\n// The following is only for the purpose of assisting in code demonstration, and adjustments will be made according to the actual situation in the project.\\nconst container = document.getElementById('container')\\nconst buttonContainer = document.createElement('div')\\nbuttonContainer.className = 'button-container'\\nconst items = [\\n  { key: 'Asia/Shanghai', text: '上海-Shanghai' },\\n  { key: 'Europe/Berlin', text: '柏林-Berlin' },\\n  { key: 'America/Chicago', text: '芝加哥-Chicago' }\\n]\\nitems.forEach(({ key, text }) => {\\n  const button = document.createElement('button')\\n  button.innerText = text\\n  button.addEventListener('click', () => { setTimezone(key) })\\n  buttonContainer.appendChild(button)\\n})\\ncontainer.appendChild(buttonContainer)"}`);export{n as d};
