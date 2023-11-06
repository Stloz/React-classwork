import React, { useState } from "react";
import "./App.css";

const FIELD_NAME = {
  NAME: "name",
  EMAIL: "email",
  PASSWORD: "password",
};

const initialValues = (values) => ({
  [FIELD_NAME.NAME]: "",
  [FIELD_NAME.EMAIL]: "",
  [FIELD_NAME.PASSWORD]: "",
  ...values,
});

function App() {
  const [value, setValue] = useState(() => initialValues({ color: "red" }));

  const [userList, setUserList] = useState([]);
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  // виносим конст вверх

  //   const [value, setValue] = useState({
  //     [FIELD_NAME.NAME]: "",
  //     [FIELD_NAME.EMAIL]: "",
  //     [FIELD_NAME.PASSWORD]: "",
  //   });
  // виносим конст вверх

  //   const [submittedData, setSubmittedData] = useState(null);
  //   const [isSubmitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserList([...userList, value]);

    setValue(initialValues());
    //  setSubmitted(true);
  };

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     const formData = {
  //       name: name,
  //       email: email,
  //       password: password,
  //     };

  //     setSubmittedData(formData);

  //     setName("");
  //     setEmail("");
  //     setPassword("");
  //   };

  return (
    <div div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Name"
              name={FIELD_NAME.NAME}
              value={value[FIELD_NAME.NAME]}
              onChange={handleChange}
              //   value={name}
              //   onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
              name={FIELD_NAME.EMAIL}
              value={value[FIELD_NAME.EMAIL]}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              //   value={password}
              //   onChange={(e) => setPassword(e.target.value)}
              name={FIELD_NAME.PASSWORD}
              value={value[FIELD_NAME.PASSWORD]}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Send</button>
        </form>

        {userList.length > 0 && (
          <ul>
            {userList.map((user, index) => (
              <React.Fragment key={user[FIELD_NAME.NAME]}>
                {/* <li>{user[FIELD_NAME.NAME]}</li> */}
                <User {...user} show={index === 0} />
              </React.Fragment>
            ))}
          </ul>
        )}

        {/* {isSubmitted && (
          <div>
            <h2>Дані відправлені з форми:</h2>
            <p>Імʼя {value[FIELD_NAME.NAME]}</p>
            <p>Email{value[FIELD_NAME.EMAIL]}</p>
            <p>Пароль{value[FIELD_NAME.PASSWORD]}</p>
          </div>
			  )} */}

        {/* {submittedData && (
          <div>
            <h2>Дані, відправлені з форми:</h2>
            <p>Імʼя {submittedData.name}</p>
            <p>Email{submittedData.email}</p>
            <p>Пароль{submittedData.password}</p>
          </div>
        )} */}
      </header>
    </div>
  );
}

function User({ name, email, password, show: initialShow }) {
  const [show, setShow] = useState(initialShow);

  const toggleDetails = () => {
    setShow(!show);
  };

  const isShow = initialShow && show;

  return (
    <React.Fragment>
      <div onClick={toggleDetails}>{name}</div>
      {isShow && (
        <ul>
          <li>Email: {email}</li>
          <li>Password: {password}</li>
        </ul>
      )}
    </React.Fragment>
  );
}

/* Приклад 1 зміна назви та колору
import { useState } from "react";
import "./App.css";

const getInitialColor = (length) => {
  if (length > 3) return 1;
  return 0;
};

function App() {
  const list = [
    { id: 1, name: "Київ" },
    { id: 2, name: "Львів" },
    { id: 3, name: "Одеса" },
    { id: 4, name: "Харків" },
  ];

  const color = ["red", "blue", "green"];

  const [index, setIndex] = useState(0);

  const [colorIndex, setColorIndex] = useState(() =>
    getInitialColor(list.length)
  );

  const handleClick = () => {
    setIndex((prevIndex) =>
      prevIndex === list.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleClickColor = () => {
    setColorIndex((precolorIndex) => precolorIndex + 1);
    setColorIndex((precolorIndex) => precolorIndex + 1);

    setTimeout(() => {
      setColorIndex((precolorIndex) => precolorIndex + 1);
    }, 3000);

    console.log("update", colorIndex);
  };

  console.log("render", index, colorIndex);

  return (
    <div className="App">
      <header className="App-header">
        <button className="btn" onClick={handleClick}>
          Наступне місто
        </button>

        <button className="btn" onClick={handleClickColor}>
          Наступний колір
        </button>

        <h1 style={{ color: color[colorIndex] }}>
          Поточне місто: {list[index].name}
        </h1>
      </header>
    </div>
  );
}
*/
export default App;
