import classes from './DisplayValues.module.css';

const DisplayValues = ({ values, ...props }) => {
  return (
    <div>
      <div className={classes.vl}>{props.children}</div>
    </div>
  );
};

export default DisplayValues;
