import { InnerWrapper, Wrapper } from '@/components/atoms';
import styles from './header.module.scss';
import { AddTodoInput } from '@/components';

const Headerv2 = () => (
  <Wrapper>
    <InnerWrapper>
      <div className={styles.header}>
        <div>
          <div className={styles.todoHeaderText}>
            <p>T O D O</p>
          </div>
          <div>
            <AddTodoInput />
          </div>
        </div>

      </div>
    </InnerWrapper>
  </Wrapper>
);

export default Headerv2;
