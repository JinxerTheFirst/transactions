import React, { useState, useEffect, useMemo } from "react";
import { useTable, useFilters } from "react-table";
import TransactionChart from "../TransactionChart/TransactionChart"; // Ensure you have imported your chart component

const CustomerTable = () => {
  const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [filterInput, setFilterInput] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/JinxerTheFirst/transaction_data/customers"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched customers:", data);
        setCustomers(data);
      })
      .catch((error) => console.error("Error fetching customers:", error));

    fetch(
      "https://my-json-server.typicode.com/JinxerTheFirst/transaction_data/transactions"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched transactions:", data);
        setTransactions(data);
      })
      .catch((error) => console.error("Error fetching transactions:", error));
  }, []);

  const data = useMemo(() => {
    return customers
      .filter((customer) =>
        customer.name.toLowerCase().includes(filterInput.toLowerCase())
      )
      .map((customer) => {
        const customerTransactions = transactions.filter(
          (t) => t.customer_id === customer.id
        );
        return {
          ...customer,
          transactions: customerTransactions,
          totalTransactions: customerTransactions.length,
        };
      });
  }, [customers, transactions, filterInput]);

  const columns = useMemo(
    () => [
      {
        Header: "Customer Name",
        accessor: "name",
      },
      {
        Header: "Total Transactions",
        accessor: "totalTransactions",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
  } = useTable({ columns, data }, useFilters);

  const handleFilterChange = (e) => {
    const value = e.target.value || "";
    setFilter("name", value);
    setFilterInput(value);
  };

  const handleCustomerSelect = (customer) => {
    setSelectedCustomer(customer);
  };

  const selectedCustomerTransactions = selectedCustomer
    ? transactions.filter((t) => t.customer_id === selectedCustomer.id)
    : [];

  return (
    <>
      <div className="">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Customer Transactions
          </h1>
          <input
            value={filterInput}
            onChange={handleFilterChange}
            placeholder={"Search by customer name"}
            className="mb-4 p-2 border w-1/2 rounded text-center"
          />
          <table {...getTableProps()} className="mx-auto w-10/12 ">
            <thead>
              {headerGroups.map((headerGroup, id) => (
                <tr
                  key={id}
                  {...headerGroup.getHeaderGroupProps()}
                  className="w-full bg-gray-200 flex justify-between"
                >
                  {headerGroup.headers.map((column) => (
                    <th
                      key={column.id}
                      {...column.getHeaderProps()}
                      className="p-2 border-b "
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    key={row.id}
                    {...row.getRowProps()}
                    onClick={() => handleCustomerSelect(row.original)}
                    className="hover:bg-gray-100 cursor-pointer flex justify-between"
                  >
                    {row.cells.map((cell) => (
                      <td
                        key={cell.column.id}
                        {...cell.getCellProps()}
                        className="p-2 border-b"
                      >
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex justify-center  p-14">
            <div className=" ">
              {selectedCustomer ? (
                <TransactionChart transactions={selectedCustomerTransactions} />
              ) : (
                <div className="">
                  <p className="mt-10">
                    Select a customer to see their transaction chart.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerTable;
