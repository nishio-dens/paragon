import { connect } from 'react-redux'

import AdminNavbar from '../components/admin_navbar'

const mapStateToProps = state => {
  if (state.adminNavbar) {
    return {
      nowLoading: state.adminNavbar.nowLoading
    }
  } else {
    return {
      nowLoading: false
    }
  }
}

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminNavbar)