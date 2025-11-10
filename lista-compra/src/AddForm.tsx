import { useState } from 'react'

export function AddForm({ onAdd }: { onAdd: (name: string) => void }) {
    const [value, setValue] = useState("");

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                if (value.trim()) {
                    onAdd(value);
                    setValue("");
                }
            }}
            className="mb-4 flex gap-2"
            >
            <input
                className="border rounded px-2 py-1"
                placeholder="Afegeix un producte"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button className="text-black px-4 py-1 rounded" type="submit">
                Afegir
            </button>
        </form>
    );
}