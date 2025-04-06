import payrollgraph from "../../../../../assets/images/app/app-content/payroll-graph.png";
import taskrequestgraph from "../../../../../assets/images/app/app-content/taskrequest-graph.png";

function PayRollTaskRequest() {
  return (
    <div className="payroll-taskrequest">
      <div className="paytask-card payroll-card">
        <div className="paytask-leftsection payroll-left">
          <h3 className="paytask-heading">PayRoll</h3>
          <h4 className="paytask-value">48</h4>
          <p className="men-count">12 Men</p>
          <p className="women-count">12 Women</p>
        </div>
        <div className="paytask-rightection payroll-right">
          <div className="paytask-graph">
            <img src={payrollgraph} alt="Pay Roll Graph" />
          </div>
          <p className="paytax-graphresult">+2% Past month</p>
        </div>
      </div>
      <div className="paytask-card taskrequest-card">
        <div className="paytask-leftsection taskrequest-left">
          <h3 className="paytask-heading">Task Request</h3>
          <h4 className="paytask-value">16</h4>
          <p className="men-count">6 Men</p>
          <p className="women-count">10 Women</p>
        </div>
        <div className="paytask-rightection payroll-right">
          <div className="paytask-graph">
            <img src={taskrequestgraph} alt="Task Request Graph" />
          </div>
          <p className="paytax-graphresult">+2% Past month</p>
        </div>
      </div>
    </div>
  );
}

export default PayRollTaskRequest;
