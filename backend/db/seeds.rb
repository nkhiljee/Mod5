#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'csv'


User.destroy_all
UserMarket.destroy_all
Market.destroy_all
Property.destroy_all
Inquiry.destroy_all
Calculator.destroy_all

u1 = User.create(name: "Naush Khiljee", email: "nausherwan.khiljee@gmail.com", password: "password", city: "Houston", state: "TX", phone: "8327900301", organization: "RE Analyzer", company_size: "1", is_admin: true)
u2 = User.create(name: "test", email: "test@gmail.com", password: "password", city: "Houston", state: "TX", phone: "0000000000", organization: "unknown", company_size: "1", is_admin: false)

m1 = Market.create(city: "Houston", state: "TX", last_update: "Aug 27 2019")

um1 = UserMarket.create(user_id: u1.id, market_id: m1.id)
um2 = UserMarket.create(user_id: u2.id, market_id: m1.id)


i1 = Inquiry.create(name: "John", email: "john@gmail.com", phone: "7134447054", zipcode: 77079, organization: "ABC", company_size: "10", message: "", contacted: false, resolved: false)

c1 = Calculator.create(address: "123 main st", city: "Houston", state: "TX", zip: 77078, arv: 150000, rehab: 50000, purchase_price:70000)

CSV.foreach(Rails.root.join('lib/property_seed.csv'), headers: true) do |row|
  
    Property.create({
      # Status: row[0],
      # Address: row[1],
      # StreetNumber: row[2],
      # StreetName: row[3],
      # City: row[4],
      # PostalCode: row[5],
      # Lat: row[6],
      # Long: row[7],
      # ListPrice: row[8],
      ClosePrice: row[9],
      # ListDate: row[10],
      CloseDate: row[11],
      # SqFtTotal: row[12],
      # PriceSqFtList: row[13],
      PriceSqFtSold: row[14],
      # LotSize: row[15],
      # YearBuilt: row[16],
      # BedsTotal: row[17],
      # BathsTotal: row[18],
      # Stories: row[19],
      # NewConstruction: row[20],
      # Style: row[21],
      DOM: row[22],
      CDOM: row[23],
      SoldTerms: row[24],
      # HOAMandatory: row[25],
      # TaxAmount: row[26],
      market_id: m1.id
    })
  end

