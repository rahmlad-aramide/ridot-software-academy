import { Hearts } from 'react-loader-spinner';
// eslint-disable-next-line react/prop-types
const Loader = ({ color='#020181' }) => {
  return (
    <div className="flex h-fit justify-center items-center">
      <Hearts
        height="150"
        width="150"
        color={color}
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};
export default Loader;
