import React, {Component} from 'react';
import Button from '../../UI/Button/Button';

/*
처음에 orderSummary는 functional component였음.
Life Cycle Hooks에 추가하기 위하여 이를 class component로 변경.  
*/
class OrderSummary extends Component {
    // This could be a functional component, doesn't have to be a class
    componentWillUpdate(){
        // console.log('[OrderSummary] WillUpdate');
    }
    
    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
             return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>:{this.props.ingredients[igKey]}
                </li>
             );
        });

        return(
            <div>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>TOTAL PRICE : </strong>{this.props.totalPrice.toFixed(2)}</p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </div>
        );
    }
}

export default OrderSummary;