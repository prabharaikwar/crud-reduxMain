// container are connecting components and redux here

import { connect } from 'react-redux'
import { getUserData } from '../services/actions/action'
import Home from "../componens/Home";

const mapStateToProps = state => ({

})


// to send data to store
const mapDispatchToProps = dispatch => ({
    allUserData: allUsers => dispatch(getUserData(allUsers))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

// export default Home;