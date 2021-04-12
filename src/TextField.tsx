import React, { useRef, useState } from "react";

interface Person {
    firstName: string;
    lastName: string
}

interface Props {
    text: string;
    ok?: boolean;
    i?: number;
    fn?: (bob: string) => number;
    person: Person,
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}



export const TextField: React.FC<Props> = ({ handleChange }) => {
    const [count, setCount] = useState<number>(0)
    const inputRef = useRef<HTMLInputElement>(null)
    console.log(inputRef.current?.value);

    return (
        <div>
            <input ref={inputRef} onChange={handleChange} value={count} />
            <button onClick={() => setCount(count + 1)}>Add count</button>
        </div>
    )
}
