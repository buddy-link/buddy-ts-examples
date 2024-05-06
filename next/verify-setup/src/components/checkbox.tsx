export default function Checkbox({
	item,
}: {
	item: { type: string; exists?: boolean; address?: string; code?: string };
}) {
	return (
		<div className="custom-checkbox">
			<input type="checkbox" id="profileAccount" checked={item.exists} />
			<label htmlFor="profileAccount">{item.type}</label>
		</div>
	);
}
