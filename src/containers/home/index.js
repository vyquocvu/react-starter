/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
} from '../../modules/counter';

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>
Count:
      {props.count}
    </p>

    <p>
      <Button onClick={props.increment}>Increment</Button>
      <Button onClick={props.incrementAsync} disabled={props.isIncrementing}>
        Increment Async
      </Button>
    </p>

    <p>
      <Button onClick={props.decrement}>Decrement</Button>
      <Button onClick={props.decrementAsync} disabled={props.isDecrementing}>
        Decrement Async
      </Button>
    </p>

    <p>
      <Button onClick={() => props.changePage()}>
        Go to about page via redux
      </Button>
    </p>
  </div>
);

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    increment,
    incrementAsync,
    decrement,
    decrementAsync,
    changePage: () => push('/about-us'),
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
