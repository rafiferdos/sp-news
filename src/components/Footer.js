import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <>
                {/* simple footer with copyright text only */}
                <footer className="footer-bg py-3">
                    <div className="container">
                        <p className="text-center">All Rights Reserved</p>
                        <p className="text-center">Copyright &copy; 2021</p>
                    </div>
                </footer>
            </>
        )
    }
}
