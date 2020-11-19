import { connect } from 'react-redux'
import ParkList from '../components/ParkList'


const mapStateToProps = (state) => {
    return {
        user: state.user,
        parks: state.parks
    }
}


export default connect(mapStateToProps, null)(ParkList)