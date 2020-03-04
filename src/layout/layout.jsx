import React from 'react'
import {Header, Footer} from '../components/components'


const Layout = ({children}) => (
    <>
     <Header/>
     {children}
     <Footer copyrightLabel='COPYRIGHT © 2020 ALL RIGHTS RESERVED.' />
    </>
)

export default Layout;