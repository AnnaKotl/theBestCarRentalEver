export default function ModalRentItem({ title, value }) {
  return (
    <li>
      {title}
      {value && <span>{value} </span>}{" "}
    </li>
  );
}