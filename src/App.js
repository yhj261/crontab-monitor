import "./styles.css";
function App() {
    return (
        <div className="App">
            <form className="new-item-form">
                <div className="form-row">
                    <label>New Job</label>
                    <input type="text" id="item" />
                </div>
                <button className="btn">Add</button>
            </form>
            <h1 className="header">Job List</h1>
            <ul className="list">
                <li>
                    <label>Item 1</label>
                    <button className="btn btn-danger">Delete</button>
                </li>
            </ul>
        </div>
    );
}

export default App;
