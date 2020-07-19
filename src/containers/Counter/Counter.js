import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreaters from '../../Store/action';

class Counter extends Component {
    state = {
        counter: 0
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Result</button>
                <ul>
                    {this.props.storedResults.map(storedResult =>(
                    <li key={storedResult.id} onClick={() => this.props.onDeleteResult(storedResult.id)}>{storedResult.value}</li>

                    ))}
                    
                </ul>
            </div>
        );
    }
}

const mapSTateToProps = state =>{
    return{
        ctr: state.ctr.counter,
        storedResults: state.res.result
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onIncrementCounter: () => dispatch(actionCreaters.increment()),
        onDecrementCounter: () => dispatch(actionCreaters.decrement),
        onAddCounter: () => dispatch(actionCreaters.add(10)),
        onSubtractCounter: () => dispatch(actionCreaters.substract(8)),
        onStoreResult: (result) => dispatch(actionCreaters.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreaters.deleteResult(id))
    }
}


export default connect(mapSTateToProps, mapDispatchToProps)(Counter);