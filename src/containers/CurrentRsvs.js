import { connect } from 'react-redux'
import CurrentRsvs from '../components/CurrentRsvs'


const mapStateToProps = (state) => {
    return {
        user: state.user,
        reservations: state.reservations
    }
}


export default connect(mapStateToProps, null)(CurrentRsvs)