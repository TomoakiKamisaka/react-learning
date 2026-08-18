import { TextField, Button } from '@mui/material';
import { useState } from 'react';

export default function Login({onLoginSuccess}) {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  async function handleLogin() {
    try {
      const response = await fetch('https://cognito-idp.ap-northeast-1.amazonaws.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-amz-json-1.1',
          'X-Amz-Target': 'AWSCognitoIdentityProviderService.InitiateAuth',
        },
        body: JSON.stringify({
          AuthFlow: 'USER_PASSWORD_AUTH',
          ClientId: '2cueo5pg4m0j6c05ba413vlcaa',
          AuthParameters: {
            USERNAME: emailAddress,
            PASSWORD: password,
          },
        }),
      });
      const data = await response.json();
      // ここで data.AuthenticationResult.IdToken を取り出して
      // setIdToken に渡す処理を書いてみてください
      onLoginSuccess(data.AuthenticationResult.IdToken);
      setError(false);
    } catch (e) {
      // エラー処理
      setError(e);
    }
  }

  return (
    <>
      <TextField value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
      <TextField type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button variant="contained" onClick={() => handleLogin()}>
        ログイン
      </Button>
      {error && <p style={{ color: 'red' }}>ログインに失敗しました</p>}
    </>
  );
}
