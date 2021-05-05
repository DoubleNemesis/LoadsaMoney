import React from "react";
import DataFetcherManager from "./DataFetcherManager";
import Header from "./Header";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <DataFetcherManager />
      <Footer />
    </div>
  );
}
