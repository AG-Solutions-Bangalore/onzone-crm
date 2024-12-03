import React, { useState } from "react";
import Layout from "../../../layout/Layout"
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@material-tailwind/react";
const WorkOrderReport = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
  
    const todayFormatted = yyyy + "-" + mm + "-" + dd;
  
    const [workOrderSearch, setWorkOrderSearch] = useState({
      work_order_from_date: "2024-01-01", // Set a default start date
      work_order_to_date: todayFormatted,
      work_order_factory_no: "",
    });
  
    const navigate = useNavigate();
  
    // Handle input changes
    const onInputChange = (e) => {
      const { name, value } = e.target;
      setWorkOrderSearch({
        ...workOrderSearch,
        [name]: value,
      });
    };
  
    // Handle view report
    const onReportView = async (e) => {
      e.preventDefault();
      
      // Store search parameters in localStorage
      localStorage.setItem("work_order_from_date", workOrderSearch.work_order_from_date);
      localStorage.setItem("work_order_to_date", workOrderSearch.work_order_to_date);
      localStorage.setItem("work_order_factory_no", workOrderSearch.work_order_factory_no);
  
      // Navigate to report view page
      navigate("/view-work-order-report");
    };
  return (
    <Layout>
       <div >
     
        <div className="grid gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <form autoComplete="off" className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Input
                  type="date"
                  label="From Date"
                  name="work_order_from_date"
                  value={workOrderSearch.work_order_from_date}
                  onChange={onInputChange}
                  required
                />
              </div>
              <div>
                <Input
                  type="date"
                  label="To Date"
                  name="work_order_to_date"
                  value={workOrderSearch.work_order_to_date}
                  onChange={onInputChange}
                  required
                />
              </div>
              <div>
                <Input
                  type="text"
                  label="Factory Number"
                  name="work_order_factory_no"
                  value={workOrderSearch.work_order_factory_no}
                  onChange={onInputChange}
                />
              </div>
              <div className="col-span-full mt-4">
                <Button 
                  onClick={onReportView} 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  View Work Order Report
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WorkOrderReport;