const { GlobalKeyboardListener } = require('node-global-key-listener');
const robot = require('robotjs');

const listener = new GlobalKeyboardListener();
let clicking = false;

function click() {
  if (clicking) {
    robot.mouseClick('left');
    setTimeout(click, 1); // 1 миллисекунда между кликами
  }
}

listener.addListener((e) => {
  // Если нажата клавиша 'Enter' (в данном случае используется vKey 13 для 'Enter')
  if (e.vKey === 13 && e.state === 'DOWN' && !clicking) {
    clicking = true;
    click();
  }

  // Если нажата клавиша 'Escape' (в данном случае используется vKey 27 для 'Escape')
  if (e.vKey === 27 && e.state === 'DOWN') {
    clicking = false;
  }
});

console.log('Глобальное отслеживание клавиш и кликер запущены. Нажмите "Enter" для начала кликов и "Escape" для выхода.');
