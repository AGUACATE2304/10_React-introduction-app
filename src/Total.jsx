export const Total = ({ exercise1, exercise2, exercise3 }) => {
  const totalSum = exercise1 + exercise2 + exercise3;
  return <p>Number of exercises {totalSum}</p>;
};
