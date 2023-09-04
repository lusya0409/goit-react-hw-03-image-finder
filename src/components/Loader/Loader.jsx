import { Overlay } from 'components/Modal/Modal.styled';
import { InfinitySpin } from 'react-loader-spinner';
export const Loader = () => {
  return (
    <Overlay>
      <InfinitySpin width="200" color="#4fa94d" />
    </Overlay>
  );
};
