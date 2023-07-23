

import {
  AuthAction,
  useUser,
  withUser, //High Order Component -> funcion que devuelve un componente
  withUserTokenSSR, //High Order Function -> funcion que devuelve una funcion
} from 'next-firebase-auth'
import firebase from 'firebase'

const Demo = () => {
  const user = useUser()
  return (
    <div>
      <p>Your email is {user.email ? user.email : 'unknown'}.</p>
      <button onClick={()=> firebase.auth().signOut()}>Logout</button>
    </div>
  )
}

// Note that this is a higher-order function.
export const getServerSideProps = withUserTokenSSR({
    whenUnauthed: AuthAction.REDIRECT_TO_LOGIN
})(()=> {
    return {
        props: {}
    }
}

)

export default withUser( {
    whenUnauthedAfterInit:AuthAction.REDIRECT_TO_LOGIN
})(Demo)
