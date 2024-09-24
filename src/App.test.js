import { render, screen } from '@testing-library/react';
import App from './App';
import { calculatePoints } from "../../utils/points";

test('renders learn react link', () => {
  render(<App />);
});

describe("Points Program", () => {
  // A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent over $50 in each transaction
  // (e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).

  test("Checking calcuations", () => {
    expect(calculatePoints(120)).toBe(90);
    expect(calculatePoints(80)).toBe(300);
    expect(calculatePoints(150)).toBe(150);
  });
});