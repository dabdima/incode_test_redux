import React, {Component} from 'react';
import {connect} from 'react-redux';

// class Details extends Component {
//     render () {
//         if (!this.props.client) {
//             return (<p>Выберите клиента.</p>);
//         }
//         return (
//             <div>
//                 <h2>{this.props.client.general.firstName}</h2>
//                 <img src={this.props.client.general.avatar} /><br />
//                 <p>{this.props.client.contact.email}</p>
//                 <p>company: {this.props.client.job.company}, tittle: {this.props.client.job.tittle}</p>
//             </div>
//         );
//     }
// }
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
                        <div className="header">{this.props.client.general.firstName} {this.props.client.general.lastName}</div>
                        <div className="header meta">{this.props.client.job.title} - {this.props.client.job.company}</div>
                        <div className="description">
                            <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
                            <p>Many people also have their own barometers for what makes a cute dog.</p>
                        </div>
                    </div>
                </div>
            </div>

            ); } } function mapStateToProps (state) {
                return {client: state.active};
            }

            export default connect(mapStateToProps)(Details);
