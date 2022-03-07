import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Transaction from "./components/Transaction";
import SaldoBox from "./components/SaldoBox";
import AddTransaction from "./components/AddTransaction";

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
    
    // handler untuk menambah transaction,
    // akan di-triger dari komponen AddTransaction
    const hanleTambahTransaction = (data) => {
      let newTransactions = [
        ...transactions, data
      ];

      // atur ulang urutan transaction agar tanggal terkecil di bagi atas
      newTransactions.sort((a, b) => a.tanggal - b.tanggal);

      setTransaction(newTransactions);
    }

    // handler untuk menghapus data transaction di komponen AddTransaction
    const handleHapusTransaction = (e) => {
      // cari index transaction yang akan dihapus berdasarkan id
      const result = transactions.findIndex(
        transaction => (transaction.id === e.target.id)
      );
      // copy transaction karena fungsi splice akan mengubah array asal (mutate)
      const newTransactions = transactions;
      newTransactions.splice(result, 1);
      setTransaction([...newTransactions]);
    }
    
  return (
    <>
      <Header />
      <SaldoBox transactions={transactions}/>
      <Transaction transactions={transactions} onHapusTransaction={handleHapusTransaction}/>
      <AddTransaction onTambahTransaction={hanleTambahTransaction}/>
      <Footer />
    </>
  );
};

export default App;
