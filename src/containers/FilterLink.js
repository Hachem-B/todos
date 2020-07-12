import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => ({//return a plain object containing the data that the connected component needs.
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({//dispatching actions to the store.
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(//functions will be called every time when the Redux store state changes.
  mapStateToProps,
  mapDispatchToProps
)(Link);