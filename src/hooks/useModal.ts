import {useState} from 'react';

const useModal = (): [boolean, () => void, () => void] => {
  const [visible, setVisible] = useState<boolean>(false);
  const open = () => {
    setVisible(true);
  };
  const close = () => {
    setVisible(false);
  };
  return [visible, open, close];
};

export default useModal;
