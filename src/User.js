import React from 'react';
import { connect } from 'react-redux';
import {getUser,fetchUser} from './store/action';
import './App.css';


class User extends React.Component{
    render(){
        console.log("this.props",this.props);
        return(
            <div>
                <div className="flex-container">
                    <div>
                        <form>
                            <input type="text" id="user" onChange={(event) => this.props.get_User(event.target.value)}/>
                            <input type="button" value="Fetch Details" onClick={() => this.props.fetch_User(this.props.userName)}/>
                        </form>
                    </div>
                </div>
                <div>
                <ul>
                    {this.props.userData.map(data => {
                        return(
                            <li key={data.id}>
                                <b>User</b> {data.name} <b>GIT </b><a href={data.html_url}>git</a> <b>Followers</b> {data.followers} <b>Location</b> {data.location}
                            </li>
                        );
                    })}
                </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        userName: state.userName,
        userData: state.userData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       get_User: (id) => dispatch(getUser(id)),
       fetch_User: (id) => dispatch(fetchUser(id))
    };
 };

export default connect(mapStateToProps,mapDispatchToProps)(User);