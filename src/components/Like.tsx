import { useState } from "react";
import { FcLike } from "react-icons/fc";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [trans, setTrans] = useState(true);

  const toggle = () => {
    setTrans(!trans);
    onClick();
  };

  if (trans) return <FcLike color="#ff6b81" size={20} onClick={toggle} />;
  return <FcLike color="#0000FF" size={500} onClick={toggle}  />;
};

export default Like;
