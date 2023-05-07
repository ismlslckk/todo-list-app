import { InnerWrapper, Wrapper } from '@/components/atoms';

const Form = () =>
/*   const [form, setForm] = useState({
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
  }; */

  // eslint-disable-next-line implicit-arrow-linebreak
  (
    <Wrapper>
      <InnerWrapper>
        login page . .
      </InnerWrapper>
    </Wrapper>
  );
export default Form;
