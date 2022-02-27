import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Transaction from "./components/Transaction";

const initTransactions = [
    {
        "id": "619941539079",
        "tanggal": new Date("01 Nov 2022 9:30").getTime(),
        "keterangan": "Gaji bulanan",
        "nominal": 2500000,
    },
    {
        "id": "749179155708",
        "tanggal": new Date("01 Nov 2022 10:00").getTime(),
        "keterangan": "Uang Lembur",
        "nominal": 750000,
    },
    {
        "id": "568004092688",
        "tanggal": new Date("01 Nov 2022 10:30").getTime(),
        "keterangan": "Beli sepatu",
        "nominal": -150000,
    },
];

const App = () => {
    const [transactions, setTransaction] = useState(initTransactions);
    console.log(transactions);
  return (
    <>
      <Header />
      <Transaction transactions={transactions}/>
      <Footer />
    </>
  );
};

export default App;
