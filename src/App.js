import React from "react";
import { Header } from "./cpmponents/Header";
import { Balance } from "./cpmponents/Balance";
import { IncomeExpenses } from "./cpmponents/IncomeExpenses";
import { TransactionList } from "./cpmponents/TransactionList";
import { AddTransaction } from "./cpmponents/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
