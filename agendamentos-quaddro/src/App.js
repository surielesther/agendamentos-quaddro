import "./App.css";
import { useState } from "react";
import Modal from "react-modal";
import Form from "./components/Form";
import Aside from "./components/Aside";
import EditModal from "./components/Modal";

Modal.setAppElement("#root");

function App() {
  const [arrayToFilter, setArrayToFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [meuObjeto, setMeuObjeto] = useState(0);
  const [count, setCount] = useState(0);
  const [Teste, setTeste] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    id: 0,
  });

  const titleFilter = (agendamento) =>
    agendamento.title.toLowerCase().includes(search.toLowerCase());

  const agendamentosFilter = arrayToFilter.filter(titleFilter);

  return (
    <div>
      <header className="App-header"></header>
      <body className="App">
        <Form
          arrayToFilter={arrayToFilter}
          setArrayToFilter={setArrayToFilter}
          count={count}
          setCount={setCount}
        ></Form>
        <Aside
          arrayToFilter={arrayToFilter}
          setArrayToFilter={setArrayToFilter}
          setSearch={setSearch}
          setModalIsOpen={setModalIsOpen}
          setMeuObjeto={setMeuObjeto}
          setTeste={setTeste}
          agendamentosFilter={agendamentosFilter}
        ></Aside>
        <EditModal
          arrayToFilter={arrayToFilter}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          meuObjeto={meuObjeto}
          Teste={Teste}
          setTeste={setTeste}
          count={count}
        ></EditModal>
      </body>
    </div>
  );
}

export default App;
