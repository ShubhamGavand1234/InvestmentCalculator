export default function InputGroup({
  forlabel,
  labelText,
  onValueChange,
  newValue,
  ...props
}) {
  return (
    <>
      <p>
        <label htmlFor={forlabel}>{labelText}</label>
        <input
          type="number"
          onChange={(e) => onValueChange(forlabel, e.target.value)}
          name={forlabel}
          value={newValue}
          required
        />
      </p>
    </>
  );
}
