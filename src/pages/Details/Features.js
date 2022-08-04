/* eslint-disable react/prop-types */
export default function Features(props) {
  return (
    <div>
      <>
        <h6 className="font-weight-bold text-red">Đặc diểm nổi bật</h6>
        <br />
        <div dangerouslySetInnerHTML={{ __html: props.features }}></div>
      </>
    </div>
  );
}
