import { useState } from 'react';
import classNames from 'classnames';
import { InnerWrapper, Wrapper } from '@/components/atoms';
import styles from './login.module.scss';

const Form = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e:any) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm((state) => ({
      ...state,
      [e.target.name]: value,
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <div className={classNames(styles.wrapper, styles.fadeInDown)}>
          <div id="formContent">
            <h2 className={styles.active}> Sign In </h2>

            <form onSubmit={handleSubmit}>
              <input type="text" value={form.username} onChange={handleChange} id="login" name="username" className={classNames(styles.fadeIn, styles.second)} placeholder="username" />
              <input type="password" value={form.password} onChange={handleChange} id="password" name="password" className={classNames(styles.fadeIn, styles.third)} placeholder="password" />
              <input type="submit" className={classNames(styles.fadeIn, styles.fourth)} value="Log In" />
            </form>
          </div>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Form;
