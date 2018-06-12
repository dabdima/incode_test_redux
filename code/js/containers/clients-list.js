import React, {Component} from 'react';
import {bindActionCreators} from 'redux'; //помогает создавать действия (см. ниже описание про matchDispatchToProps)
import {connect} from 'react-redux'; // ф-ция, нужна для работы mapStateToProps
import {select} from '../actions/index'; // импорт ф-ции select, кот. описана в папке actions

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

// mapStateToProps - берет состояное(state) из массива clients-list.js и вставляет его в компонент ClientsList в качестве св-в (props)
function mapStateToProps (state) {
    return {
        clients: state.clients
    };
}

//matchDispatchToProps - ф-ция, необходимая для приведения ф-ции select(кот. описана в папке actions) к св-ву (props)
function matchDispatchToProps (dispatch) {
    //и потом эта ф-ция возвращает св-во:
    return bindActionCreators({select: select}, dispatch)
}

// connect - ф-ция, нужна для работы mapStateToProps , matchDispatchToProps
export default connect(mapStateToProps,
matchDispatchToProps)(ClientsList);
