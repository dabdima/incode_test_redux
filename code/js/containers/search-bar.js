import React, {Component} from 'react';
import {connect} from 'react-redux';
import {filterClients} from '../actions/index';
import {bindActionCreators} from 'redux';

class SearchBar extends Component {
    render () {
        return (<input type="text" className="search-input" placeholder="Search..." onChange={(e) => this.props.filterClients (e, this.props.clients)} />);
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
