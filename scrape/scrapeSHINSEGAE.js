const puppeteer = require('puppeteer');

(async () => {
            const browser = await puppeteer.launch({
                headless: true
            });
            const page = await browser.newPage();
          
            const _id = "n2201121";
            const _pw = "qkrwlgh11@!";
          
            await page.goto('https://www.ssgdfm.com/shop/login/loginPopupForm?redirectUrl=http%3A//www.ssgdfm.com/shop/main');
            await page.evaluate((id, pw) => {
              document.getElementById('login-id').value = id;
              document.getElementById('login-password').value = pw;
            }, _id, _pw);
            await page.click('div.btnLogin > input');
            
            const npage = await browser.newPage();
            await npage.goto('http://www.ssgdfm.com/shop/main');
            let data = {};
            let info = await npage.$('li.link-menu-area');
            
            data = await npage.evaluate((data) => {
                return data.textContent;
            }, info);
            if (data == '로그아웃'){
                console.log('login success');
            }
            else {
                console.log('login error');
            }

            await npage.waitFor(1000);
            await browser.close();
})();