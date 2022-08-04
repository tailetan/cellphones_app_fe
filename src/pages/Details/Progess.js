import ProgressBar from 'react-bootstrap/ProgressBar';

function WithLabelExample(props) {
  // eslint-disable-next-line react/prop-types
  return <ProgressBar now={props.now} variant="danger" />;
}

export default WithLabelExample;
