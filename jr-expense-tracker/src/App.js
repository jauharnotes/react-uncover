import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Transaction from "./components/Transaction";
import SaldoBox from "./components/SaldoBox";
import AddTransaction from "./components/AddTransaction";

let url = "https://jr-expense-trackers-default-rtdb.asia-southeast1.firebasedatabase.app/transaction.json";

const App = () => {
    const [transactions, setTransaction] = useState([]);
    const [submitCount, setSubmiteCount] = useState(0);

    // Use effect untuk mengakses data dari API firebase
    useEffect(() => {
      const myFetch = async () => {
        try {
          let response = await fetch(url);
          if (!response.ok) {
            throw new Error(response.status);
          }
          let responseData = await response.json();

          let initTransactions = [];
          for (const key in responseData) {
            initTransactions.push({
              id: key,
              tanggal: responseData[key].tanggal,
              keterangan: responseData[key].keterangan,
              nominal: responseData[key].nominal,
            })
          }
          // atur ulang transaction agar tanggal terkecil di bagian atas
          initTransactions.sort((a, b) => a.tanggal - b.tanggal);

          setTransaction(initTransactions)
        } catch (error) {
          console.log(`Terjadi gangguan dengan pesan : "${error}"`);
        }
      }
      myFetch();
    }, [submitCount]);
    
    // handler untuk menambah transaction,
    // akan di-triger dari komponen AddTransaction
    const hanleTambahTransaction = async (data) => {
      // kirim data ke server (firebase)
      try {
        let response = await fetch(url, {
          method: "POST",
          body: JSON.stringify(data)
        })
        if (!response.ok) {
          throw new Error(response.status);
        }
        setSubmiteCount(submitCount + 1);
      } catch (error) {
        console.log(`Terjadi gangguan dengan pesan : "${error}"`);
    }
  }

    // handler untuk menghapus data transaction di komponen AddTransaction
    const handleHapusTransaction = async (e) => {
      // Rangkai alamat URL agar berisi id data yang dihapus
      let url = `https://jr-expense-trackers-default-rtdb.asia-southeast1.firebasedatabase.app/transaction/${e.target.}.json`;

      // Kirim delete request ke server (firebase)
      try {
        let response = await fetch(url, {
          method: "DELETE",
        })
        if (!response.ok) {
          throw new Error(response.status);
        }
        setSubmiteCount(submitCount + 1);
      } catch (error) {
        console.log(`Terjadi gangguan dengan pesan : "${error}"`);
      }
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
