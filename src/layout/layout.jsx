import React from 'react'
import PropTypes from 'prop-types'

import {Header, Footer} from '../components/components'


const Layout = ({children}) => (
    <>
     <Header/>
     {children}
     <Footer copyrightLabel='COPYRIGHT © 2020 ALL RIGHTS RESERVED.' />
    </>
)

Layout.propTypes = {
    children: PropTypes.object
}

Layout.defaultProps = {
    children: {}
}

export default Layout;