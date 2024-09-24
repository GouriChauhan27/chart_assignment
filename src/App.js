import React, { useEffect, useReducer } from "react";
import './App.css';
import './style/table.css'
import './style/totalRewardsPara.css'
import transactions from "./mockData";


const calculateRewardPoints = (transactionAmount) => {
  let points = 0;

  // Calculate points for dollars spent over $100
  if (transactionAmount > 100) {
    points += (transactionAmount - 100) * 2;
    points += 50
  }

  // Calculate points for dollars spent over $50
  if (transactionAmount > 50 && transactionAmount < 100) {
    points += (transactionAmount - 50);
  }

  return points;
}

const totalRewardsPoint = () => {
  const monthlyRewardPoints = {};

  // Calculate reward points for each month
  transactions.forEach((transaction) => {
    const points = calculateRewardPoints(transaction.amount);

    if (!monthlyRewardPoints[transaction.month]) {
      monthlyRewardPoints[transaction.month] = 0;
    }

    monthlyRewardPoints[transaction.month] += points;
  });

  // Calculate total reward points
  const totalPoints = Object.values(monthlyRewardPoints).reduce(
    (acc, points) => acc + points,
    0
  )
  return totalPoints
}


const App = () => {
  /*  The below Code will be used when you want to get the data from backend through an api call.
const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchData();     
  }, []);

//useEffect to work as componentDidMount as passing empty [] as a dependency

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api/transactions'); // Replace with API endpoint
      setTransactions(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  */

  return (
    <div>
      <h1 className="App">Reward Points Calculator</h1>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Month</th>
              <th>Transaction Amount</th>
              <th>Reward Points</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td style={{ textAlign: 'center' }}>{transaction.month}</td>
                <td style={{ textAlign: 'center' }}>${transaction.amount}</td>
                <td style={{ textAlign: 'center' }}>{calculateRewardPoints(transaction.amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="paragraph-wrap ">
        <p >Total Reward Points :  {totalRewardsPoint()}</p>
      </div>
    </div >
  );
}


export default App;
