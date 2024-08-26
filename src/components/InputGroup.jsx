export default function InputGroup({ forlabel, labelText, type, ...props }) {
  return (
    <>
      <div {...props}>
        <label htmlFor={forlabel}>{labelText}</label>
        <input type={type} name={forlabel} />
      </div>
    </>
  );
}
