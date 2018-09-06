
import React from 'react'
import { connect } from 'react-redux'
import { Link } from '../routes'
import _ from 'lodash'
import ActionButton from '../common/ActionButton'
import Customers from '../common/Customers'
import Orders from '../common/Orders'

const Index = ({ loading, userName, profile, customers, orders, title, actions }) => {
    return (
        <div>
            <div>
                userName={userName}<br /> profile={profile ? 'none' : profile}<br /> loading={loading}
            </div>
            <h3>{title}</h3>
            {!loading && (
                <div style={{ marginBottom: 10 }}>
                    <span>User Name: </span>
                    <input value={userName} onChange={e => actions.changeUserName(e.target.value)} />
                </div>
            )}
            <ActionButton
                loading={loading}
                login={actions.login}
                logout={actions.logout}
            />
            {<Customers customers={customers} />}
            {<Orders orders={orders} />}

            <ul>
                <li> <Link route='search' params={{ slug: 'this is a search page' }}><a>Search</a></Link></li>
                <li><Link route='menu' params={{ slug: 'this is a menu page' }}><a>Menu</a></Link></li>
            </ul>
        </div>
    )
}

export default connect(
    state => ({
        userName: state.userName,
        customers: _.get(state, 'customers.data'),
        orders: _.get(state, 'orders.data'),
        profile: _.get(state, 'profile.data'),
        loading: (
            _.get(state, 'profile.loading') ||
            _.get(state, 'customers.loading') ||
            _.get(state, 'orders.loading')
        )
    })
)(Index)


// class Index extends React.Component {
//     static getInitialProps({ }) {
//         return {}
//     }

//     render() {
//         return (
//             <div>
//                 <h1>HOME PAGE</h1>
//                 <ul>
//                     <li> <Link route='search' params={{ slug: 'this is a search page' }}><a>Search</a></Link></li>
//                     <li><Link route='menu' params={{ slug: 'this is a menu page' }}><a>Menu</a></Link></li>
//                 </ul>

//             </div>
//         )
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//     }
// }

// export default connect(null, mapDispatchToProps)(Index)
