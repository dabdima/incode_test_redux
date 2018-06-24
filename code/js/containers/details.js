import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component {
    render() {
        if (!this.props.client) {
            return (<p>Choose a client</p>);
        }
        return (<div className="ui items">
            <div className="item">
                <a className="ui client-block-avatar image">
                    <img src={this.props.client.general.avatar} /></a>
                    <div className="content">
                        <h3>{this.props.client.general.firstName} {this.props.client.general.lastName}</h3>
                        <h2>{this.props.client.job.title} - {this.props.client.job.company}</h2>
                        <div className="description">
                            <br />
                            <p>Emal: {this.props.client.contact.email}</p>
                            <p>Phone: {this.props.client.contact.phone}</p>
                            <p>Address: {this.props.client.address.street}, {this.props.client.address.city},
                            {this.props.client.address.zipCode}, {this.props.client.address.country}</p>
                        </div>
                    </div>
                </div>
            </div>

            ); } } function mapStateToProps (state) {
                return {client: state.active};
            }

            export default connect(mapStateToProps)(Details);
