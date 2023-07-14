import React from 'react';
import Textarea from '@/_components/Textarea';
import styles from './comment.module.scss';
import { useDispatch } from 'react-redux';
import { addComment } from '../../basketSlice';

const Comment = () => {
  const dispatch = useDispatch();

  const onChange = (comment) => {
    dispatch(addComment(comment));
  };

  return (
    <Textarea
      wrapperClassName={styles.comment__wrapper}
      placeholder="Есть уточнения?"
      rows="7"
      onChange={onChange}
    />
  );
};

export default Comment;
