const webview = document.querySelector('#wv');

webview.addEventListener('did-start-loading', () => {
  console.log('正在加载...');
});

webview.addEventListener('did-stop-loading', () => {
  console.log('加载完毕.');
  console.log(webview);

  webview.insertCSS(`
        #su {
            background:red !important;
        }
    `);
});
