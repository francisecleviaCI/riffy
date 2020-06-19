###Living Comfortably in NYC###

---App Summary (does NOT have to have its own heading, if you just want to have it follow your main heading). This should be user-facing; no technical terms or discussion of logic, just what your app does!---


The app will take as many user inputs regarding their monthly spend and compare it to the average New York city citizen spend. Using the 'left over' money from their monthly take home pay and assuming they invested it, the app will estimate their savings at their desired retirement date and calculate whether they have enough to retire with.


---Installing and Running - how can we set up and use your app? Tell them how to download (using GitHub's "Clone or Download" button) and how to run it using node. Include a link to an article about installing node, for those who don't have it.---

Download Application:
1. Go to: https://github.com/francisecleviaCI/riffy
2. To download, click on the green button on the right side of the page labeled 'Clone or Download'
3. Click on 'Download Zip'
4. Once download is complete, double click on the .Zip file to 'unzip' and drag folder to desired destination.
5. Install Node.js

Download Node.js: https://nodejs.org/en/download/
How to Install Node.js on Mac: https://www.webucator.com/how-to/how-install-nodejs-on-mac.cfm

How to run app:
1. Once Node.js is installed, open up Terminal or similar program, 
2. Type in the app's folder addresss and press Enter.


---How To Use This App - what arguments should the user pass to it? Bonus points for screenshots of your app in action in the terminal!---

Once you've completed step 2 of 'How to run app", you are ready to play!

1. Type 'node main.js 1 2 3 4 5' and then press ENTER

   The numbers will correspond to the following required user inputs:

    1. Monthly Income
    2. Monthly Spend
    3. User Age
    4. Current Savings
    5. Desired Retirement Year

    For example: node main.js 6000 3000 30 500000 2055

    Once you've inputted all the data and pressed ENTER, the app will answer you by comparing your monthly
    spend to the average NYC citizen, calculate your net worth at your desired retirement year based on your
    current lifestyle, and recommend the NYC borough you should live in to live comfortably.

* DISCLAIMER: The results are purely anecdotal and should not be understood as fact. Your true results will be based on your consistent long term lifestyle spend, investment strategies, and overall financial literacy and discipline.

Results are based off the assumption that the difference in monthly income and spend is invested into low cost index funds that track the index of the United States' stock markets' 3000+ companies. Since the late 1920s, the US stock market has produced a return on investment(ROI) of ~10%. After including inflation, the developer decided on 8% as a conservative figure for ROI to use in the app's calculation.

Although retirement spending is generally lesser than pre-retirement and most investors tend to continue investing in retirement, the recommendations are based on final numbers at the desired retirement date and average annual spend based off the user's monthly spend input.


---Technologies Used ---

* To obtain the most accurate results, users should be detailed in tracking their monthly spend. Apps such as Mint or You Need a Budget (YNAB) can assist.


---What I Learned While Making The App. (Self-explanatory?)---