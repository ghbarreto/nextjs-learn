import classes from './DisplayValues.module.css';

const DisplayValues = ({ values, ...props }) => {
  return (
    <div>
      <div className={classes.vl}>
        <div dangerouslySetInnerHTML={{ __html: props.children }}></div>
      </div>
    </div>
  );
};

export default DisplayValues;
