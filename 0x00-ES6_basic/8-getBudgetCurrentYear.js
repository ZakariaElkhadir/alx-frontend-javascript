function getCurrentYear() {
    const date = {
        year: new Date().getFullYear(),
    }
    return date.year;
  }
  
  export default function getBudgetForCurrentYear(income, gdp, capita) {
    const budget = {};
  
    budget[`income-${getCurrentYear()}`] = income;
    budget[`gdp-${getCurrentYear()}`] = gdp;
    budget[`capita-${getCurrentYear()}`] = capita;
  
    return budget;
  }