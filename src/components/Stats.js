export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some itps into your packing list 🚀</em>
      </p>
    );

  const packedItems = items.filter((item) => item.packed);
  const packedItemspercent = Math.trunc(
    (packedItems.length / items.length) * 100
  );

  return (
    <footer className="stats">
      <em>
        {packedItemspercent === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${items.length} items on your list, and you already packed
        ${packedItems.length} (${packedItemspercent}%)`}
      </em>
    </footer>
  );
}
