const puppeteer = require('puppeteer');

(async () => {
            const browser = await puppeteer.launch({
                headless: false
            });
            const page = await browser.newPage();
          
            const _id = "";
            const _pw = "";
          
            await page.goto('https://www.shilladfs.com/estore/kr/ko');

            await page.waitForNavigation();

            const npage = await browser.newPage();
            await npage.goto('https://www.shilladfs.com/estore/kr/ko/login');
          
            await npage.evaluate((id, pw) => {
              document.getElementById('j_username').value = id;
              document.getElementById('j_password').value = pw;
            }, _id, _pw);
          
            await npage.click('.btns_com');
            
            
})();