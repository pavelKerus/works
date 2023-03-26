import React from 'react';
import { Routes,Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { MovieItem } from './pages/MovieItem';
import { NotFound } from './pages/NotFound';
import { LayoutForm } from './components/LayoutForm';
import { Favorites } from './pages/Favorites';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { SignInAfterResetPassword } from './pages/SignInAfterResetPassword';
import { ResetPasswordStepOne } from './pages/ResetPasswordStepOne';
import { ResetPasswordStepTwo } from './pages/ResetPasswordStepTwo';
import { ResetPasswordStepThree } from './pages/ResetPasswordStepThree';
import { Settings } from './pages/Settings';
import { RegistrationConfirmation } from './pages/RegistrationConfirmation';
import { RequireAuth } from './hoc/RequireAuth';

// movieItem/:id

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movieItem/:id" element={<MovieItem />} />
        <Route path="*" element={<NotFound />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="settings" element={
        <RequireAuth>
          <Settings />
        </RequireAuth>
        } />
      </Route>
      <Route path="/form" element={<LayoutForm />}>
        <Route index element={<SignIn/>} />
        <Route path="signUp" element={<SignUp/>} />
        <Route path="signInAfterReset" element={<SignInAfterResetPassword/>} />
        <Route path="signInResetOne" element={<ResetPasswordStepOne/>} />
        <Route path="signInResetTwo" element={<ResetPasswordStepTwo/>} />
        <Route path="signInResetThree" element={<ResetPasswordStepThree/>} />
        <Route path="registrationConfirmation" element={<RegistrationConfirmation/>} />
      </Route>
    </Routes>
  );
}

export default App;
