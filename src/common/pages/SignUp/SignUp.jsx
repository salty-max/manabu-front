import React from 'react';
import { Form } from 'react-final-form';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import personIcon from '@iconify/icons-ion/person';
import mailIcon from '@iconify/icons-ion/mail';
import lockClosed from '@iconify/icons-ion/lock-closed';
import checkmarkIcon from '@iconify/icons-ion/checkmark';
import personAdd from '@iconify/icons-ion/person-add';

import useAuth from 'common/contexts/auth';
import useAlert from 'common/contexts/alerts';
import FormInput from 'common/components/FormInput/FormInput';

const SignUp = () => {
  const { t } = useTranslation();
  const { register } = useAuth();
  const { setAlert } = useAlert();

  const onSubmit = async ({
    name, email, password, passwordConfirm,
  }) => {
    if (password !== passwordConfirm) {
      setAlert(t('auth.noPasswordsMatch'), 'danger');
    } else {
      await register({ name, email, password });
    }
  };

  return (
    <section className="section full-page form-page">
      <Form
        onSubmit={onSubmit}
        initialValues={{
          name: '', email: '', password: '', passwordConfirm: '',
        }}
        render={({ handleSubmit, submitting, pristine }) => (
          <>
            <form onSubmit={handleSubmit}>
              <FormInput
                name="name"
                placeholder={t('auth.name')}
                icon={personIcon}
                required
              />
              <FormInput
                type="email"
                name="email"
                placeholder={t('auth.email')}
                icon={mailIcon}
                required
              />
              <FormInput
                type="password"
                name="password"
                placeholder={t('auth.password')}
                icon={lockClosed}
                required
              />
              <FormInput
                type="password"
                name="passwordConfirm"
                placeholder={t('auth.confirmPassword')}
                icon={checkmarkIcon}
                required
              />
              <FormInput
                type="submit"
                placeholder={t('auth.register')}
                icon={personAdd}
                disabled={submitting || pristine}
              />
            </form>
            <p className="mt-1">
              <span className="mr">{t('auth.alreadySignedUp')}</span>
              <Link to="/login" className="lead">{t('auth.loginLink')}</Link>
            </p>
          </>
        )}
      />
    </section>
  );
};

export default SignUp;
