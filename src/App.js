import React from "react";
import { Header } from "./cpmponents/Header";
import { Balance } from "./cpmponents/Balance";
import { IncomeExpenses } from "./cpmponents/IncomeExpenses";
import { TransactionList } from "./cpmponents/TransactionList";
import { AddTransaction } from "./cpmponents/AddTransaction";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
