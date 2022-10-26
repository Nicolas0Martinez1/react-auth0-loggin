import  {useAuth0} from '@auth0/auth0-react';

const LoginButton = () => {

  const { loginWithRedirect } = useAuth0(); 

  return (
    <div className="Login-Button">
      <button onClick={()=> loginWithRedirect()}>login</button>
    </div>
  );
}

export default LoginButton;
