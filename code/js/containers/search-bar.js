import React, {Component} from 'react';
import {connect} from 'react-redux';
import {filterClients} from '../actions/index';
import {bindActionCreators} from 'redux';

class SearchBar extends Component {
    render () {
        return (
            <div className="ui icon input search-input">
                <input type="text"  placeholder="Search..." onChange={(e) => this.props.filterClients (e, this.props.clients)} />
                <i className="circular search link icon"></i>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        clients: state.clients
    };
}



// this.handleSearch




//matchDispatchToProps - ф-ция, необходимая для приведения ф-ции filterClients(кот. описана в папке actions) к св-ву (props)
function matchDispatchToProps (dispatch) {
    //и потом эта ф-ция возвращает св-во:
    return bindActionCreators({filterClients: filterClients}, dispatch)
}

// connect - ф-ция, нужна для работы mapStateToProps , matchDispatchToProps
export default connect(mapStateToProps,
matchDispatchToProps)(SearchBar);
