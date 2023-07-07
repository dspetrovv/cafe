import React, { useState } from "react";
import Textarea from "@/_components/Textarea";
import styles from './comment.module.scss';

const Comment = () => {
  const [comment, setComment] = useState();
  const onChange = (text) => {
    setComment(text);
  };

  return (
    <Textarea wrapperClassName={styles.comment__wrapper} placeholder="Есть уточнения?" rows="7" onChange={onChange} />
  );
};

export default Comment;
