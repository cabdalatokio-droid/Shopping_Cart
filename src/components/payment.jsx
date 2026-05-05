import { useState } from "react";

const Payment = () => {
  const initialPayment = {
    evc: false,
    zaad: false,
    sahal: false,
  };

  const [payment, setPaymentMethod] = useState(initialPayment);

  return (
    <div className="payment-container">
      <h2>Pay With</h2>

      <div className="payments-cards">
        <div
          className={`payment-card ${payment.zaad ? "selected" : ""}`}
          onClick={() =>
            setPaymentMethod({ ...initialPayment, zaad: true })
          }
        >
          Zaad Service
        </div>

        <div
          className={`payment-card ${payment.sahal ? "selected" : ""}`}
          onClick={() =>
            setPaymentMethod({ ...initialPayment, sahal: true })
          }
        >
          Sahal Service
        </div>

        <div
          className={`payment-card ${payment.evc ? "selected" : ""}`}
          onClick={() =>
            setPaymentMethod({ ...initialPayment, evc: true })
          }
        >
          EVC Plus Service
        </div>
      </div>

      <form>
        <input
          type="text"
          className="form-control"
          placeholder="252...."
        />
        <button type="submit" className="btn-proceed">
          Proceed
        </button>
      </form>
    </div>
  );
};

export default Payment;