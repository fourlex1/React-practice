function child({ count, onIncrease}) {
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={onIncrease}>Add one</button>
        </div>
    );
}
export default child;