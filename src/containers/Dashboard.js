import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'


const mapStateToProps = (state) => {
    return {
        user: state.user,
        reservations: state.reservations,
        parks: state.parks
      
    }
}


export default connect(mapStateToProps, null)(Dashboard)