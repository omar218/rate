import React from 'react';
import {ScrollView} from 'react-native';
import RepositoryList from './src/RepositoryList';
import signInConnexion from './src/signInConnexion'
import RepositoryItem from './src/RepositoryItem';
import {NativeRouter} from 'react-router-native';



const App = () =>{
  return (
     <ScrollView horizontal="true">
       {/* <RepositoryList /> */}
       <Switch>
        <Route path="/">
          <RepositoryList />
        </Route>
        <Route path="/Connexion" component = {signInConnexion} >
          <signInConnexion />
        </Route>
        <Redirect to="/" />
      </Switch>

     </ScrollView>
  )
}

export default App;
