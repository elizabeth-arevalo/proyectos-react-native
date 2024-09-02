export const BasicTypes = () => {
    const name: string = "Alice";
    const age: number = 20;
    const isActive: boolean = true;
    const powers: string[] = ["React", "JS"];
    powers.push("Next");

    return (
        <>
            <h3>Tipos Básicos</h3>
            {name} {age} {isActive}
            <br />
            {powers.join(", ")}
        </>
    );
};
