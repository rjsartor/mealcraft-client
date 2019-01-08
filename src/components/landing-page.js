import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import SearchForm from './search-form';
import RecipesList from './recipes-list';
import {authSuccess} from '../actions/auth';
import '../stylesheets/landing-page.css'
import TopNav from './top-nav';

class LandingPage extends React.Component {
    // If we are logged in redirect straight to the user's dashboard

    componentDidMount() {
        const authToken = localStorage.getItem('token')
        console.log('authToken', authToken)
        console.log('logged in?', this.props.loggedIn)
        console.log('Current User:', this.props.currentUser)
        // this.props.dispatch(authSuccess(this.props.currentUser))
    }

    render() {
        console.log('current user:', this.props.currentUser)
        console.log('logged in:', this.props.loggedIn)

        if (this.props.loggedIn !== null) {
            return <Redirect to="/dashboard" />;
        }

        return (
            <div className="wrapper">
                <TopNav />
                <main className='landing-content'>
                    <header>
                        <h1>Meal<span id='craft'>Craft</span></h1>    
                    </header>
                    <SearchForm loggedIn={this.props.loggedIn}/>
                    <h2>What is MealCraft?</h2>
                    <RecipesList />
                </main>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser,
    currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(LandingPage);