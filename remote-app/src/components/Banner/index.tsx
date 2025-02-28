import React, { FC, PropsWithChildren } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';

import styles from './Banner.module.scss';

type Props = {
  title: string;
  description: string;
  buttonText: string;
};

const Banner: FC<PropsWithChildren<Props>> = ({
  title = 'Enter the title for Banner',
  description = "Enter a phrase for an additional description here. If you don't need a description, you can hide it. Turn off the description from the attribute on the right.",
  buttonText = 'Button Label',
}) => {
  return (
    <div className={styles.banner}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <button className={styles.button}>{buttonText}</button>
    </div>
  );
};

export default withStyles(styles)(Banner);
