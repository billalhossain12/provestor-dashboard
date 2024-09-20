type TErrorProps = {
  message:string;
}

export default function Error({ message }:TErrorProps) {
  return <p className="text-red-500 text-[14px]">{message}</p>;
}
