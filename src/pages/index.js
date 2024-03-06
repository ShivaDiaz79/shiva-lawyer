import React from "react";
import Navbar from "../../components/Navbar";
import Layout from "../../components/Layout";
import AutocompleteForm from "./solicitudes/AutocompleteForm";
import SharedEventsChart from "../../components/SharedEventsChart";
import ChartsContainer from "../../components/ChartsContainer";
import BarChart from "../../components/BarChart";
import ChartApp from "../../components/ChartApp";
import Circulercentage from "../../components/Circulecentaje";


const Index = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-blue-200">
     <AutocompleteForm/>
      </div>
    
    <ChartApp/>
    <Circulercentage/>
      </Layout>
  );
};

export default Index;
