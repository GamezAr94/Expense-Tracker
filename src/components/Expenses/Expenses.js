import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
      return (
        <Card className="expenses">
          <h2>Let's get started!</h2>
          < ExpenseItem item={props.items[0]} />
          < ExpenseItem item={props.items[1]} />
          < ExpenseItem item={props.items[2]} />
          < ExpenseItem item={props.items[3]} />
        </Card>
      );
}

export default Expenses;