import { connect } from 'react-redux'
import Login from '../components/Login'
import { setUser } from '../redux/actions'
import { bindActionCreators } from 'redux'


const mapStateToProps = (state) => {
    return {
        user: state.user,
        reservations: state.reservations
    }
}

const mapDispatchToProps = (dispatch) => {
   
  
        return bindActionCreators({ setUser }, dispatch) 
    
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)