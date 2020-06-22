###Living Comfortably in NYC###

---App Summary ---


The app will take user inputs regarding their monthly spend and compare it to the average New York city citizen spend. Using the 'left over' money from their monthly take home pay and assuming that they invested it, the app will estimate their savings at their desired retirement date, calculate whether they have enough to retire with, and recommend which appropriate NYC borough to live in to match their lifestyle spend.


---Installing and Running ---

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

1. Type 'node main.js 1 2 3 4 ' and then press ENTER

   The numbers will correspond to the following required user inputs:

    1. Monthly Income
    2. Monthly Spend
    3. User Age
    4. Current Savings

    For example: node main.js 6000 3000 30 500000

    Once you've inputted all the data and pressed ENTER, the app will answer you by comparing your monthly
    spend to the average NYC citizen, calculate your net worth at your retirement year(Age 65) based on your
    current lifestyle, and recommend the NYC borough you should live in to live comfortably.

* DISCLAIMER: The results are purely anecdotal and should not be understood as fact. Your true results will be based on your consistent long term lifestyle spend, investment strategies, and overall financial literacy and discipline.

Results are based off the assumption that the difference in monthly income and spend is invested into stocks or low cost index funds that track the index of the United States' stock market's 3000+ companies. Since the late 1920s, the US stock market has produced a return on investment(ROI) of ~10%. After including inflation, the developer decided on 8% as a conservative figure for ROI to use in the app's calculation.

Although retirement spending is generally lesser than pre-retirement and most investors tend to continue investing in retirement, the recommendations are based on final numbers at the retirement date and average annual spend based off the user's current monthly spend input.


---Technologies Used ---

* To obtain the most accurate results, users should be detailed in tracking their monthly spend. Apps such as Mint or You Need a Budget (YNAB) can assist.


Resources:

1. https://www.numbeo.com/cost-of-living/city-estimator/in/New-York
    - Based of a single person, living in the city center, eating out once a week, going out once a week,
    moderate alcohol consumption, no smoking, no car, uses subway, no travel
        - NYC(Manhattan): $4,427
        - Brooklyn: $3,950
        - Queens: $3,367
        - Long Island: $3,027
        - Staten Island: $2,907
        - Bronx: $2,366


---What I Learned While Making The App. ---

Even with a basic app like this one, the work makes you appreciate the energy and frustrations that come with
the development. Trial and errors felt like it never ended. During the proposal, I had 'massive' ideas,
but quickly became satisfied with a lot less because of how much work it took to get the 'basics' down. It'll
be interesting to see what I think about this app a few months down the line. Maybe I'll realize that I settled
to easily or maybe I'll think that I really couldn't do much more at this instance because of the requisite 
knowledge level. Although it's about 80% of what I wanted with still obvious kinks to be worked out, I'm
pretty satisfied at this go around and hope to build on from here.
