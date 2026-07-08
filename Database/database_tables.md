Authentication Module
│
├── users
├── buyer_profiles
├── seller_profiles
├── addresses
└── otp_verification

Marketplace Module
│
├── categories
├── sub_categories
├── brands
├── products
├── product_images
├── product_variants
├── inventory
└── product_tags

Shopping Module
│
├── cart
├── cart_items
├── wishlist
└── recently_viewed

Order Module
│
├── orders
├── order_items
├── shipping
├── returns
└── refunds

Payment Module
│
├── payments
├── transactions
└── invoices

Review Module
│
├── reviews
├── review_images
└── review_likes

Seller Module
│
├── stores
├── seller_followers
├── coupons
└── seller_analytics

Admin Module
│
├── reports
├── complaints
├── notifications
└── activity_logs

AI Module
│
├── ai_recommendations
├── chatbot_history
├── search_history
├── ai_price_prediction
└── ai_sales_forecast



##Table Relationships##
User
├── Buyer Profile (1:1)
├── Seller Profile (1:1)
├── Address (1:N)
├── Orders (1:N)
├── Wishlist (1:N)
├── Cart (1:1)
├── Reviews (1:N)
└── Notifications (1:N)

Category
├── Sub Category (1:N)
└── Products (1:N)

Brand
└── Products (1:N)

Seller
├── Store (1:1)
├── Products (1:N)
├── Coupons (1:N)
└── Orders (1:N)

Product
├── Images (1:N)
├── Variants (1:N)
├── Inventory (1:1)
├── Reviews (1:N)
└── Order Items (1:N)

Order
├── Order Items (1:N)
└── Payment (1:1)

Buyer
├── Cart (1:1)
├── Wishlist (1:N)
├── Orders (1:N)
├── Reviews (1:N)
├── Search History (1:N)
└── AI Recommendations (1:N)