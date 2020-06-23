import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <div className='header-container'>
                    <div className='header-logo'>

                    </div>
                    <div className='header-user-options'>
                        {!this.props.loggedIn ?
                            <div className='login'>Login</div>
                        :
                            <div className='username'>Hello, Username</div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default Header 