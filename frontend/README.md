
### SUMMARY
    RE Analyzer is a Real Estate Analysis tool designed to aid Realtors, Brokerages, Investors, and Investment Firms.  The tool allows the customer to derisk their investments through data driven trend base analysis for a given geographic area. The tool comprises of geographic, time based, and financial information. The information is represented through the use of data tables, charting, and animated time series maps. 

    RE Analyzer provides value to its customers by enabling them to save time analyzing their data, save resources by making informed decisions that will derisk their investments, and the ability to streamline efforts therefor focusing more on growing their business.


### HOW TO SETUP
 -- set up backend:
    1. Navigate to Mod5/backend
    2. Run command "bundle install" (this will install gems)
    3. Run command "rails db:migrate" (this will migrate data)
    4. Run command "rails db:seed" (this will seed data from seed file and CSV)
    3. Run command "rails s" (this will setup server on port: 3000)

 -- set up frontend:
    1. Navigate to Mod5/frontend
    2. Run command "npm install" (this will install node packages and libraries)
    3. Run command "npm audit fix" (this will fix any vulnerabilities presented during installation)
    4. Run command "npm start" (this will start the frontend server)
    5. Type in "y" to select another server since port: 3000 is already in use from teh abckend


### HOW TO USE
 -- before purchase
    User can view the sales funnel on the home page and interact with different pricing options.  In order to purchase a plan a user must signup and login.  Once a user is logged in they are allowed property calculator functionality. Property calculator allows the user to enter property locational information, rehab estimate, and after repair value. The calculator will then calculate the estimated purchase price for the property the user is inquiring about and will print out a PDF of the property report. The user once logged in can also purchase a pricing plan to enable further functionality. Pricing is offered in monthly and yearly subscription rates. Once the user selected an option they are presented with shopping cart functionality and prompted to input billing and credit card info.  After that process is finished the user is allowed dashboard and time maps capabilities.

 -- after purchase
    Paying customers are enabled to view user dashboard and time maps. User dashboard contains statistical information derived from property data. Data is represented in tables and charts.  Inforamtion displayed represents sales volume, price/sqft, price, DOM, and CDOM.  Time maps present a new instantaneous display of information representing price/sqft, price, and CDOM. Customers can also select a subset of data to berepresented for charting and statistical information. Future functionality will include Price and DOM predictions using a Machine Learning. 
    

### LINK TO DEMO
https://youtu.be/Gh_xy7yPlJs