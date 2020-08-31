const puppeteer = require('puppeteer');

(async () => {
            const browser = await puppeteer.launch({
                headless: true
            });
            const page = await browser.newPage();
          
            const _id = "";
            const _pw = "";
          
            await page.goto('https://kor.lps.lottedfs.com/kr/member/login?_ga=2.204047571.2121755295.1598499801-630016701.1598499801');
          
            await page.evaluate((id, pw) => {
              document.getElementById('loginLpId').value = id;
              document.getElementById('password').value = pw;
            }, _id, _pw);
          
            await page.click('.btnL');
            await page.waitForNavigation();

            const target = page._target._targetInfo.url

            if (target === 'https://kor.lottedfs.com/kr'){
                console.log('login success')
            }
            else {
                console.log('login error')
            }
            await browser.close();
})();