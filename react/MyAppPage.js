import React, { Fragment } from 'react'
import { Route } from 'vtex.my-account-commons/Router'
// Your component pages
import MasterDataAcc from './components/MasterDataAcc'

const MyAppPage = () => (
  <Fragment>
    <Route exact path="/master-data-project" component={MasterDataAcc} />
  </Fragment>
)

export default MyAppPage
