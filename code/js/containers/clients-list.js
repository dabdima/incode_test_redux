import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';

class ClientsList extends Component {

    showList () {
        return this.props.clients.map ((client) => {
            return (
                <li className="client-block" onClick={() => this.props.select (client)} key={client.id}>
                    <div className="client-block-avatar">
                        <img src={client.general.avatar} width="128px" height="128px" alt=""/>
                    </div>
                    <div className="client-block-inf">
                        <h3>{client.general.firstName} {client.general.lastName}</h3>
                        <p>{client.job.title}</p>
                    </div>
                </li>
            );
        });
    }

    render () {
        return (
            <ol>
                {this.showList ()}
            </ol>
        );
    }
}

function mapStateToProps (state) {
    return {
        clients: state.clients
    };
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({select: select}, dispatch)
}

export default connect(mapStateToProps,
matchDispatchToProps)(ClientsList);
