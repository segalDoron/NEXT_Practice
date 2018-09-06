import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { incrementCount, decrementCount, resetCount, timeOut } from '../store'
import Head from 'next/head';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    add = () => {
        this.props.timeOut()
        setTimeout(() => {
            this.props.incrementCount().then(() => {
                this.props.timeOut()
            })
        }, 3000);
    }
    sub = () => {
        this.props.decrementCount()
    }
    reset = () => {
        this.props.resetCount()
    }

    render() {
        const { count, loading } = this.props
        return (
            <div>
                <Head>
                    <link rel="stylesheet" href="/static/base.css" />
                </Head>
                {loading && <div id="overlay"></div>}
                <h1>AddCount: <span>{count}</span></h1>
                <button onClick={this.add}>Add To Count</button>
                <button onClick={this.sub}>sub To Count</button>
                <button onClick={this.reset}>reset</button>
                <div className='laoderContainer'>
                    {loading && <div className='loader'></div>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ count, loading }) => ({ count, loading })

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCount: bindActionCreators(incrementCount, dispatch),
        decrementCount: bindActionCreators(decrementCount, dispatch),
        resetCount: bindActionCreators(resetCount, dispatch),
        timeOut: bindActionCreators(timeOut, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)