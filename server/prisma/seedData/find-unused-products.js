// find-unused-products.js
const fs = require("fs");

// Read products and sales data
const products = JSON.parse(fs.readFileSync("products.json", "utf-8"));
const expenses = JSON.parse(fs.readFileSync("expenses.json", "utf-8"));
// Get all product IDs from products.json
const productIds = new Set(products.map((p) => p.productId));
// Get all productIds used in expenses.json
const expensesProductIds = new Set(expenses.map((e) => e.productId));

// Find product IDs not used in expenses
const unusedProductIds = [...productIds].filter((id) => !expensesProductIds.has(id));

console.log("Product IDs not in expenses.json:", unusedProductIds);
