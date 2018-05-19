import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component {
    render () {
        if (!this.props.client) {
            return (<p>Выберите клиента.</p>);
        }
        return (
            <div>
                <h2>{this.props.client.general.firstName}</h2>
                <img src={this.props.client.general.avatar} /><br />
                <p>{this.props.client.contact.email}</p>
                <p>company: {this.props.client.job.company}, tittle: {this.props.client.job.tittle}</p>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        client: state.active
    };
}

export default connect(mapStateToProps)(Details);
