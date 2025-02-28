declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module 'isomorphic-style-loader';
declare module 'isomorphic-style-loader/withStyles';
declare module 'isomorphic-style-loader/StyleContext';
