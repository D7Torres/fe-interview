import { connect } from 'react-redux';
// @ts-ignore
import AllBills from './AllBills.tsx';
import billThunks from '../../domains/bills/thunks';

const { fetchBills } = billThunks;

const mapStateToProps = (state) => {
  const { bills } = state.bills;

  return {
    bills,
  };
};
const mapDispatchToProps = { fetchBills };

export default connect(mapStateToProps, mapDispatchToProps)(AllBills);
