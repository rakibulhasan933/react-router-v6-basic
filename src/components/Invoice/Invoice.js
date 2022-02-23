import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteInvoice, getInvoice } from '../../data';

const Invoice = () => {
    let params = useParams();
    let navigate = useNavigate();
    let invoice = getInvoice(parseInt(params.invoiceId, 10));
    console.log(navigate);
    return (
        <main style={{ padding: "1rem" }}>
            <h2>Total Due: {invoice.amount}</h2>
            <p>
                {invoice.name}: {invoice.number}
            </p>
            <p>Due Date: {invoice.due}</p>
            <p>
                <button
                    onClick={() => {
                        deleteInvoice(invoice.number);
                        navigate("/invoices");
                    }}
                >
                    Delete
                </button>
            </p>
        </main>
    );
};

export default Invoice;