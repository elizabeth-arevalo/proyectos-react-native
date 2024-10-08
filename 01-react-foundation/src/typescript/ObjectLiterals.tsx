interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
    isAlive?: boolean;
}

interface Address {
    country: string;
    houseNo: number;
}

export const ObjectLiterals = () => {
    const person: Person = {
        age: 22,
        address: {
            country: "Alemania",
            houseNo: 265,
        },
        firstName: "Alice",
        lastName: "Shuberg",
        isAlive: undefined,
    };
    const {} = person;
    return (
        <>
            <h3>Object Literals</h3>
            <pre>{JSON.stringify(person, null, 2)}</pre>
        </>
    );
};
